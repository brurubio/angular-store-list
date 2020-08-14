import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../model/store';
import { Router } from '@angular/router';
@Component({
  selector: 'store-card-component',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
  @Input() store: Store;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
