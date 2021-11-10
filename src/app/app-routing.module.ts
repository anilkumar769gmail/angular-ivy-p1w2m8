import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes =[
  {path: "flights", component: FlightsComponent},
  {path: "admin", component: AdminComponent}

];

@NgModule({
  imports:[RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
