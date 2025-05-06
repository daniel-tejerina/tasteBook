import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  ngOnInit(): void {
    this.formLogin = new FormGroup({
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

  sendLogin(): void {
    if (this.formLogin.invalid) return;

    const { email, password } = this.formLogin.value;
    console.log("Login", { email, password })
  }

}
