import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrencyRate } from '../models/currency-rate.interface';
import { currencyUrl } from '../app.constants';

const dtapiUrl = 'http://dtapi.if.ua';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getCurrencyRate(): Observable<ICurrencyRate[]> {
    return this.http.get<ICurrencyRate[]>(currencyUrl);
  }

    
}
