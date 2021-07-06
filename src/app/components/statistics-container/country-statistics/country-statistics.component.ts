import {Component, OnInit} from '@angular/core';
import {StateService} from '../../../services/state.service';
import {HttpService} from '../../../services/http.service';
import {Observable} from 'rxjs';
import {StatisticsResult} from '../../../models/statistics-result';

@Component({
  selector: 'app-country-statistics',
  templateUrl: './country-statistics.component.html',
  styleUrls: ['./country-statistics.component.scss']
})
export class CountryStatisticsComponent implements OnInit {

  statistics$ = this.stateService.getStatisticsResult();

  constructor(
    private readonly stateService: StateService,
    private readonly httpService: HttpService) { }

  ngOnInit(): void {
    this.stateService.getSelectedCountry()
      .subscribe(country => {
        if (country) {
          this.httpService.getStatistics(country)
            .subscribe((res: StatisticsResult) => {
              this.stateService.updateStatisticsResult(res);
            });
        }
      });
  }
}
