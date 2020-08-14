import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
import { Store } from '../../model/store';

@Component({
  selector: 'store-list-component',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  public storaged: Array<Store>;

  constructor(
    private apiService: ApiService,
    private storageService: StorageService
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
      this.storaged = this.storageService.getAll();
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    this.loadStores();
  }

}
