import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() name: string;
  @Input() path: string;

  constructor(private location: Location) { }

  getTitle () {
    return this.name ? this.name : 'Store List';
  }

  isPathHome () {
    return this.path === 'home'
  }

  goBack () {
    this.location.back();
  }

  refreshData () {

  }

  ngOnInit(): void {
  }

}
