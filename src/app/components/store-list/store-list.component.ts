import { Component, OnInit } from '@angular/core';
// models
import { Store } from '../../model/store';
// services
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'store-list-component',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  public storaged: Array<Store>;

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private eventService: EventService
  ) { }

  saveToLocal (data) {
    data.forEach(store => {
      this.storageService.saveItem(store);
    });
  }

  loadStores () {
    this.apiService.getData()
    .subscribe(response => {
      let data = response;
      this.saveToLocal(data);
      this.getStorage();
    }, err => {
      console.log(err);
    });
  }

  getStorage () {
    this.storaged = this.storageService.getAll();
  }

  refreshData () {
    this.loadStores();
  }

  ngOnInit(): void {
    this.getStorage();
    if (!this.storaged) {
      this.loadStores();
    }

    this.eventService.refreshEvent.subscribe(
      (value: boolean) => {
         this.refreshData();
      }
  );
  }

}
