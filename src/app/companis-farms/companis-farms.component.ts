import { Component, OnInit } from '@angular/core';
import { FarmService } from '../services/farm.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ICompanyFarms } from '../shared/ICompanyFarms';

@Component({
  selector: 'app-companis-farms',
  templateUrl: './companis-farms.component.html',
  styleUrls: ['./companis-farms.component.scss']
})
export class CompanisFarmsComponent implements OnInit {

  public companyFarmsData:ICompanyFarms;
  public errMess:string;
  public dtTable: any = null;

  public dtOptions: DataTables.Settings = {};

  constructor(private farmService : FarmService,
    private location:Location, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.farmService.getCompanyFarms(id)
    .subscribe(
      data => this.companyFarmsData = data,
      errorMes => this.errMess = <any>errorMes
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

  goBack(): void {
    this.location.back();
  }

}
