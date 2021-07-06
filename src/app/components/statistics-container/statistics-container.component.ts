import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrls: ['./statistics-container.component.scss']
})
export class StatisticsContainerComponent implements OnInit {

  windowInnerHeight: number | undefined;
  verticalPadding = 16;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.windowInnerHeight = event.target.innerHeight - this.verticalPadding;
  }

  ngOnInit(): void {
    this.windowInnerHeight = window.innerHeight - this.verticalPadding;
  }

}
