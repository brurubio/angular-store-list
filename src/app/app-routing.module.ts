import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreFormComponent } from './components/store-form/store-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store/:id', component: StoreFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
