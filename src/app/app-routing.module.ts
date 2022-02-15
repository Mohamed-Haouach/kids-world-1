import { NgModule } from '@angular/core';
import {HomeComponent} from '../app/components/home/home.component'; 
import {ChallengesComponent} from '../app/components/challenges/challenges.component';
import {ContactUsComponent} from '../app/components/contact-us/contact-us.component'
import {StatisticComponent} from '../app/components/statistic/statistic.component'
import {ColorsComponent} from '../app/components/colors/colors.component'
import { RouterModule, Routes } from '@angular/router';
import {AnimalComponent} from '../app/components/animal/animal.component'
import {AdminComponent} from '../app/components/admin/admin.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'challenges', component:ChallengesComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'statistic', component:StatisticComponent},
  {path: 'colors', component:ColorsComponent},
  {path: 'animal', component:AnimalComponent},
  {path: 'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
