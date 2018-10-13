import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full'},
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
