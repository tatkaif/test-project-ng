import { Component, OnInit } from '@angular/core';
import { ICurrencyRate } from '../../models/currency-rate.interface';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss']
})
export class CurrencyRateComponent implements OnInit {
  currencyRateList: ICurrencyRate[] = [];
  isDataLoading = false;
  displayedColumns = ['ccy', 'buy', 'sale'];
  currentDate = new Date(Date.now());
  currentText = "Курс валют";

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
