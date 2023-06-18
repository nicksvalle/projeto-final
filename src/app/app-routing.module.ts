import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'professoresDetails/:id', component : ProfessoresFormComponent},
  {path: 'createProfessores', component : ProfessoresFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
