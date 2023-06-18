import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessoresService } from '../professores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.css']
})
export class ProfessoresFormComponent {

  submitted : boolean = false;
  formGroupClient : FormGroup;
  isEditing : boolean = false;

  constructor (private formBuilder : FormBuilder, private professoresService: ProfessoresService, private route: ActivatedRoute, private router: Router){

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
    this.getProfessorById(id);
  }

  getProfessorById(id: number) {
    this.professoresService.getProfessor(id).subscribe({
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
          this.professoresService.update(this.formGroupClient.value).subscribe({
            next: () => {
              this.router.navigate(['professores']);
          }
        })
      }

      else {
        this.professoresService.save(this.formGroupClient.value).subscribe({
          next: () => {
            this.router.navigate(['professores']);
          }
        })
      }
    }
  }

  cancel(){
    this.router.navigate(['professores']);
  }

  get name() : any {
    return this.formGroupClient.get("name");
  }

  get email() : any {
    return this.formGroupClient.get("email");
  }

}
