export interface ICurrencyRate {
    ccy: 'USD' | 'BTC' | 'RUR' | 'EUR';
    base_ccy: 'USD' | 'UAH';
    buy: string;
    sale: string;
}
