import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'professores', component: ProfessoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
