import { Component, OnInit, Input } from '@angular/core';

// models
import { Store } from '../../model/store';
@Component({
  selector: 'store-card-component',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
  @Input() store: Store;

  constructor() { }

  ngOnInit() {
  }

}
