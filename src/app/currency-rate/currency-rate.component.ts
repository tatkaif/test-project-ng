import { Component, OnInit } from '@angular/core';
import { ICurrencyRate } from '../currency-rate.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss']
})
export class CurrencyRateComponent implements OnInit {
  currencyRateList: ICurrencyRate[] = [];
  isDataLoading: boolean = false;
  displayedColumns = ['ccy', 'buy', 'sale'];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.isDataLoading = true;
    this.appService.getCurrencyRate()
      .subscribe((data: ICurrencyRate[]) => {
        this.currencyRateList = data;
        this.isDataLoading = false;
      });
  }

}
