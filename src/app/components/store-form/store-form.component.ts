import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// models
import { Store } from 'src/app/model/store';
// services
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss']
})
export class StoreFormComponent implements OnInit {

  private id: string = '';
  public store: Store;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private apiService: ApiService
  ) { }

  getItem () {
    this.store = this.storageService.getItem(this.id);
  }

  updateData () {
    this.apiService.updateStore(this.store)
      .subscribe(response => {
        this.storageService.saveItem(response);
        this.router.navigate(['']);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.id = params.get('id');
    });

    this.getItem();
  }

}
