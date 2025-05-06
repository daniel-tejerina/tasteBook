import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  standalone: false,
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  formSignUp: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }

  sendSignup(): void {
    if (this.formSignUp.invalid) return;

    const { email, password } = this.formSignUp.value;
    console.log("SignUp", { email, password })
  }
}
