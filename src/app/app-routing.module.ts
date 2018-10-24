import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full'},
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
