import { Component, OnInit } from '@angular/core';
import { FarmService } from '../services/farm.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ICompanyFarms } from '../shared/ICompanyFarms';


@Component({
  selector: 'app-company-admin-farms',
  templateUrl: './company-admin-farms.component.html',
  styleUrls: ['./company-admin-farms.component.scss']
})
export class CompanyAdminFarmsComponent implements OnInit {

  public companyFarmsData:ICompanyFarms;
  public errMess:string;

  public dtOptions: DataTables.Settings = {};

  constructor(private farmService : FarmService,
    private location:Location, private route:ActivatedRoute) { }

  ngOnInit() {
    // let id = this.route.snapshot.params['id'];
    // this.farmService.getFarmsForCompanyAdmin(id)
    // .subscribe(
    //   data => this.companyFarmsData = data,
    //   errorMes => this.errMess = <any>errorMes
    // );

    this.dtOptions = {
      'initComplete': function() {
        $('#example_filter').detach().appendTo('#new-search-area');
        $('#example_length').detach().appendTo('#new-pagination');
        $('.dataTables_filter input').attr('placeholder', 'Search');
        $('.dataTables_filter label').css({'font-size': '0px'});

        $('#example_filter').find('input').css({
          'width': '100%',
          'height': '38px',
          'border' : '1px solid #e4e5e7',
          'border-radius' : '10px',
          'color': '#484848',
          'font-size' : '22px',
          'background-image': 'url("/assets/images/Search3.png")',
          'background-repeat': 'no-repeat',
          'padding-left': '32px'
        });

        $('#example_length').find('select').css({'font-size': '16px', 'height' : '26px'});
      }
    };
  }

  goBack(): void {
    this.location.back();
  }

}
