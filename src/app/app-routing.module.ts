import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumbiaComponent } from './columbia/columbia.component';
import { KansasComponent } from './kansas/kansas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'columbia', component: ColumbiaComponent },
  { path: 'kansas', component: KansasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
