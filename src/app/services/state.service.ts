import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {StatisticsResult} from '../models/statistics-result';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private selectedCountry = new BehaviorSubject<string>('');
  private statisticsResult = new BehaviorSubject<StatisticsResult | null>(null);

  constructor() { }

  getSelectedCountry(): Observable<string> {
    return this.selectedCountry;
  }

  updateSelectedCountry(newCountry: string): void {
    this.selectedCountry.next(newCountry);
  }

  getStatisticsResult(): Observable<StatisticsResult | null> {
    return this.statisticsResult;
  }

  updateStatisticsResult(newStats: StatisticsResult): void {
    this.statisticsResult.next(newStats);
  }
}
