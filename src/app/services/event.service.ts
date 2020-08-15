import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  refreshEvent = new EventEmitter<boolean>();

  constructor() { }

  dispatchRefreshDataEvent () {
    this.refreshEvent.emit(true);
  }
}
