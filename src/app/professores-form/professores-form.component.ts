import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessoresService } from '../professores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Professores } from '../professores';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.css']
})
export class ProfessoresFormComponent {

  @Input()
  professor: Professores = {} as Professores;

  @Output()
  saveEvent = new EventEmitter<Professores>();

  submitted : boolean = false;
  formGroupClient : FormGroup;
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

  ngOnChanges(changes : SimpleChanges): void {
    this.formGroupClient.setValue(this.professor);
  }


  save(){
      this.submitted = true;
      if(this.formGroupClient.valid){
        this.saveEvent.emit(this.formGroupClient.value);
        this.formGroupClient.reset;
        this.submitted = false;
      }
    }
  
  clean(){
    this.formGroupClient.reset();
    this.submitted = false;
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
