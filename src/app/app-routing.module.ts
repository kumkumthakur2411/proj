import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {path: '', component: CountryListComponent},
  
  {path:':country', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
