import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesResult } from 'src/app/models/countries-result';
import { HttpService } from 'src/app/services/http.service';
import { FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, startWith, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {

  subscribed = true;

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private readonly httpService: HttpService) { }

  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(
        takeWhile(() => this.subscribed),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(res => {
        this.filteredOptions = this.httpService.getCountriesSearch(res)
          .pipe(
            map((x) => x.response)
          );
      });
  }

  ngOnDestroy(): void {
    this.subscribed = false;
  }

  getResults(): void {
    console.log(this.myControl.value);
  }
}
