import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup-page',
  standalone: false,
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  formSignUp: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private _auth: AuthService, private cookie: CookieService, private router: Router) {}

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
    this._auth.signup(email, password).subscribe({
      next: (res) => {
        this.cookie.set("token", res.idToken, 4, "/");
        console.log("SignUp exitoso!");
        this.router.navigate(["/auth/login"]);
      },
      error: () => {
        this.errorSession = true;
        console.log("Credenciales incorrectas")
      }
    })
    console.log("SignUp", { email, password })
  }
}
