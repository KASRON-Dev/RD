import { Component, OnInit } from '@angular/core';
import { FinancialsService } from 'src/services/financials/financials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'RD';
  year = '2020';

  tbData: any[];
  tbDataTotal = {
    DR_OPBAL: 0,
    CR_OPBAL: 0,
    DR_BAL: 0,
    CR_BAL: 0,
    DR_NETBAL: 0,
    CR_NETBAL: 0,
  };

  constructor(private tbservice: FinancialsService) { }

  ngOnInit() { 
    this.getTBData();
  }

  getTBData(){
    var i: number;
    this.tbservice.getTrialBalance(this.year).subscribe((res: any) => {
      this.tbData = res.recordset;
      for(i=0; i < this.tbData.length; i++) {
        this.tbDataTotal.DR_OPBAL += this.tbData[i].DR_OPBAL;
        this.tbDataTotal.CR_OPBAL += this.tbData[i].CR_OPBAL;
        this.tbDataTotal.DR_BAL += this.tbData[i].DR_BAL;
        this.tbDataTotal.CR_BAL += this.tbData[i].CR_BAL;
        this.tbDataTotal.DR_NETBAL += this.tbData[i].DR_NETBAL;
        this.tbDataTotal.CR_NETBAL += this.tbData[i].CR_NETBAL;
      };
      console.log(this.tbData);
    }, (err: any) => {
      console.log(err);
    })
  }
}
