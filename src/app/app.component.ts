import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import { ISubscription } from 'rxjs/Subscription';
import { DataService } from './data.service';
import { DemoPopupComponent } from './demo-popup/demo-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('disableBackground') disableBackground: ElementRef;
  title = 'class-decorators-angular';
  disableBack = false;
  showPopup = false;
  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.disableBackground.subscribe((showHideBackground) => {
      this.disableBack = showHideBackground;
      this.showPopup = showHideBackground;
    });
  }

  enableDisableBack() {
    this._data.disableBackground.next(!this.disableBack);
  }

  hidePopup() {
    this.showPopup = false;
    this.disableBack = false;
  }
}
