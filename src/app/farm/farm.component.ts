import { Component, OnInit, Inject } from '@angular/core';
import { IFarms } from '../shared/IFarms';
import { FarmService } from '../services/farm.service';
import { interfaceFarm } from '../shared/interfaceFarm';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  public errMess: string;
  public data: IFarms;
  public dtTable: any = null;

  public dtOptions: DataTables.Settings = {};

  constructor(private farmService: FarmService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.farmService.getFarms()
      .subscribe(
      farms => this.data = farms,
      errmess => this.errMess = <any>errmess);

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
}
