import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private _auth: AuthService, private cookie: CookieService, private router: Router) {}

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
    this._auth.sendCredentials(email, password).subscribe({
      next: (res) => {
        // console.log("response", res);
        // console.log("toke", res.idToken);
        this.cookie.set("token", res.idToken, 4, "/");
        console.log("Login exitoso!");
        this.router.navigate(["/"]);
      },
      error: () => {
        this.errorSession = true;
        Swal.fire({
          icon: "error",
          title: "Credenciales incorrectas",
          text: "Revisa tu email y contraseña, e intenta nuevamente."
        })
        console.log("Credenciales incorrectas")
      }
    })
    console.log("Login", { email, password });
  }

}
