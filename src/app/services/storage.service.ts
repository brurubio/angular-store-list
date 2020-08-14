import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getAll() {
    let items = [];
    for (let [key, value] of Object.entries(localStorage)) {
      items.push(JSON.parse(value));
    }

    return items;
  }

  saveItem (item) {
    let key = item.id;
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem (id) {
    return JSON.parse(localStorage.getItem(id));
  }
}
