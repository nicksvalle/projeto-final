import { Component, OnInit } from '@angular/core';
import { Professores } from '../professores';
import { ProfessoresService } from '../professores.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professores[] = [];
  professor : Professores = {} as Professores;
  isEditing: boolean = false;

  constructor(private professoresService: ProfessoresService, private formBuilder : FormBuilder, private router: Router){

  }
  ngOnInit(): void {
    this.loadProfessores();
  }

  loadProfessores() {
    this.professoresService.getProfessores().subscribe(
      {
        next: data => this.professores = data
      }
    );
  }

  OnSaveEvent(professores: Professores){
    if(this.isEditing)
    {
      this.professoresService.update(professores).subscribe(
        {
          next: () => {
            this.loadProfessores();
            this.isEditing = false;
          }
        }
      )
    }
    else{
      this.professoresService.save(professores).subscribe(
        {
          next: data => {
            this.professores.push(data);
          }
        }
        );
    }
 }
   
    edit(professores : Professores){
      this.professor = professores;
      this.isEditing = true;
    }

   delete(professores: Professores){
    this.professoresService.delete(professores).subscribe(
      {
      next: () => this.loadProfessores()
      }
    );
   }


}
