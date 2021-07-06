import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {map} from 'rxjs/operators';
import {StateService} from '../../../services/state.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent {

  countries$ = this.httpService.getAllCountries()
    .pipe(
      map(res => res.response)
    );

  constructor(
    private readonly httpService: HttpService,
    private readonly stateService: StateService) { }

  updateCountry(evt: string): void {
    console.log(evt);
    this.stateService.updateSelectedCountry(evt);
  }

}
