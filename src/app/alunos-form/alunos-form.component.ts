import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  submitted : boolean = false;
  formGroupClient : FormGroup;
  isEditing : boolean = false;

  constructor (private formBuilder : FormBuilder, private alunosService: AlunosService, private route: ActivatedRoute, private router: Router){

    this.formGroupClient = formBuilder.group({
      id : [''],
      name : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      course : ['',[Validators.required]],
      telefone : ['',[Validators.required]],
      date : ['',[Validators.required]]
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAlunosById(id);
  }
  getAlunosById(id: number) {
    this.alunosService.getAluno(id).subscribe({
      next: data =>{
        this.formGroupClient.setValue(data);
        this.isEditing = true;
      }
    });
  }

  save(){
      this.submitted = true;
      if(this.formGroupClient.valid){
        if(this.isEditing){
          this.alunosService.update(this.formGroupClient.value).subscribe({
            next: () => {
              this.router.navigate(['alunos']);
          }
        })
      }

      else {
        this.alunosService.save(this.formGroupClient.value).subscribe({
          next: () => {
            this.router.navigate(['alunos']);
          }
        })
      }
    }
  }

  cancel(){
    this.router.navigate(['alunos']);
  }

  get name() : any {
    return this.formGroupClient.get("name");
  }

  get email() : any {
    return this.formGroupClient.get("email");
  }

  get course() : any {
    return this.formGroupClient.get("course");
  }

  get telefone() : any {
    return this.formGroupClient.get("telefone");
  }

  get date() : any {
    return this.formGroupClient.get("date");
  }

}