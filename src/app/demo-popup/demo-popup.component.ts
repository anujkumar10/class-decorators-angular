import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo-popup',
  templateUrl: './demo-popup.component.html',
  styleUrls: ['./demo-popup.component.css']
})
export class DemoPopupComponent implements OnInit {
  @Output() closePopup = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  hidePopup() {
    this.closePopup.emit();
  }
}
