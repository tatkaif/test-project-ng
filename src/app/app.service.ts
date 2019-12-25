import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrencyRate } from './currency-rate.interface';
import { currencyUrl } from './app.constants';

@Injectable()
export class AppService {

  public test = '';

  constructor(private http: HttpClient) { }

  getCurrencyRate(): Observable<ICurrencyRate[]> {
    return this.http.get<ICurrencyRate[]>(currencyUrl);
  }
}
