import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountriesResult } from '../models/countries-result';
import {StatisticsResult} from '../models/statistics-result';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = environment.covidApiBaseUrl;

  constructor(private readonly http: HttpClient) { }

  getAllCountries(): Observable<CountriesResult> {
    return this.http.get<CountriesResult>(this.baseUrl + 'countries', { headers: this.getHeaders() });
  }

  getCountriesSearch(term: string): Observable<CountriesResult> {
    const headers = this.getHeaders();
    const params = new HttpParams()
      .set('search', term);

    return this.http.get<CountriesResult>(this.baseUrl + 'countries', { headers, params });
  }

  getStatistics(country: string): Observable<StatisticsResult> {
    const headers = this.getHeaders();
    const params = new HttpParams()
      .set('country', country);

    return this.http.get<StatisticsResult>(this.baseUrl + 'statistics', { headers, params });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-key': '1d202ec52emsh5b31cd2474ad95cp1dcd06jsn13b32bbfc376'
    });
  }
}
