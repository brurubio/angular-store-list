import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getAll() {
    let items = [];
    for (let [key, value] of Object.entries(localStorage)) {
      if (key.includes('product_')) {
        items.push(JSON.parse(value));
      }
    }

    return items;
  }

  saveItem (item) {
    let key = 'product_' + item.id;
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem (id) {
    let key = 'product_' + id;
    return JSON.parse(localStorage.getItem(key));
  }
}
