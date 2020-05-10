import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  disableBackground = new BehaviorSubject(false);
  testSubscripton1 = new BehaviorSubject(false);
  testSubscripton2 = new BehaviorSubject('true');

}
