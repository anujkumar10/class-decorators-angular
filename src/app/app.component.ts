import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Class Decorators Angular 9';
  disableBack = false;
  showPopup = false;
  subscriptions: Array<Subscription> = [];
  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.disableBackground.subscribe((showHideBackground) => {
      this.disableBack = showHideBackground;
    });
  }

  displayPopup() {
    this.showPopup = true;
  }

  hidePopup() {
    this.showPopup = false;
    this.disableBack = false;
  }
}
