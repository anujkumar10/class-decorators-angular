import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';
import { UnsubscribeAndDisableBackground } from '../decorators';

@Component({
  selector: 'app-demo-popup',
  templateUrl: './demo-popup.component.html',
  styleUrls: ['./demo-popup.component.css']
})
@UnsubscribeAndDisableBackground
export class DemoPopupComponent implements OnInit, OnDestroy {
  @Output() closePopup = new EventEmitter();
  subscriptions: Array<Subscription> = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    // below purpose is served by decorator
    // this._data.disableBackground.next(true);

    this.subscriptions.push(this._data.testSubscripton1.subscribe((data) => {
      console.log('data', data);
    }));
    this.subscriptions.push(this._data.testSubscripton2.subscribe((data) => {
      console.log('data', data);
    }));
  }

  hidePopup() {
    this.closePopup.emit();
  }
  ngOnDestroy() {
    // below purpose is served by decorator
    // this.subscriptions.forEach(subscribe => { subscribe.unsubscribe(); });
  }
}
