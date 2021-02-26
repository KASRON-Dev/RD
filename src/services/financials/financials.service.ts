import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinancialsService {
  private url = 'https://api.yateemac.net/api/reports';
  constructor(private http: HttpClient) { }

  getTrialBalance(year: string){
    return this.http.get(this.url + '/financials/trialBalance/' + year)
  }

}
