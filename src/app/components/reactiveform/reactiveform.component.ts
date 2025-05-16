import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent {
  // name = new FormControl('ARG')
  // email = new FormControl('arg@hcl.com')
  // password = new FormControl('123456')

  // displayvalue(){
  //   console.log(this.name.value)
  //   console.log(this.email.value)
  //   console.log(this.password.value)
  // }

  // setValues(){
  //   this.name.setValue('HCL')
  //   this.email.setValue('arg3@hcl.in')
  //   this.password.setValue('123456789')
  // }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  onSubmit(){
    console.log('onSubmit called : ', this.profileForm.value)
  }
  setValue(){
    this.profileForm.setValue({
      name: 'HCL Avitas',
      email: 'email.in',
      password: '123456789',
    })
  }

  get name(){
    return this.profileForm.get('name');
  }
  get email(){
    return this.profileForm.get('email');
  }
  get password(){
    return this.profileForm.get('password');
  }
}
