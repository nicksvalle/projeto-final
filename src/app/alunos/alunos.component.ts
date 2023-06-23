import { Component } from '@angular/core';
import { Alunos } from '../alunos';
import { AlunosService } from '../alunos.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  alunos : Alunos[] = [];
  isEditing : boolean = false;



  constructor (private alunosService: AlunosService,  private formBuilder : FormBuilder, private router: Router){

  }

  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos() {
    this.alunosService.getAlunos().subscribe(
      {
          next : data => this.alunos = data
      }
    );
  }


 create(){
  this.router.navigate(['createAlunos'])
 }

  edit(alunos : Alunos){
    this.router.navigate(['alunosDetails', alunos.id])
  }

  delete(alunos : Alunos){
    this.alunosService.delete(alunos).subscribe({
      next: () => this.loadAlunos()
    })
  }





}
