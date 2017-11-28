import { Component, OnInit, Inject } from '@angular/core';
import { ICompanyObj } from '../shared/ICompanyObj';
import { interfaceFarm } from '../shared/interfaceFarm';
import { CompaniesService } from '../services/companies.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateFarmComponent } from '../create-farm/create-farm.component';
import { CreateCompanyComponent } from '../create-company/create-company.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public errMess: string;
  public companyData: ICompanyObj;
  public dialogResult: string = "";
  public dtOptions: DataTables.Settings = {};
  public dtTable: any = null;
  
  constructor(private companiesService: CompaniesService,
    @Inject('BaseURL') private BaseURL, public dialog: MatDialog) { }

  ngOnInit() {
    this.companiesService.getCompanies()
      .subscribe(
      companies => this.companyData = companies,
      error => this.errMess = error
      );


    this.dtOptions = {
      columnDefs: [{
        "targets": [-2, -1],  //od predzadnje do zadnje kolone
        "orderable": false
      }],
      "order": [],
      "dom": '<"#new-search-area"f>t<"#new-pagination"lpi>',
      'initComplete': function () {
        this.dtTable = $('#example').DataTable();

        $('.dataTables_filter input').attr('placeholder', 'Search');

      }
    };

  }

  public openEditForm():void{
    let dialogRef = this.dialog.open(CreateCompanyComponent,{
    });

  dialogRef.afterClosed().subscribe(result => {
    this.companiesService.getCompanies()
    .subscribe(
    companies => this.companyData = companies,
    error => this.errMess = error
    );
  });
 }

}
