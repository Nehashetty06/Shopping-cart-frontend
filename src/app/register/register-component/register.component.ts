import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // registerForm;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  registerForm = this.fb.group({
    fName: [''],
    lName: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  onSubmit(): void {
    console.log(this.registerForm.value);
  }
}
