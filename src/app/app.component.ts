import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tasteBook';

  constructor(
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let alerted = false;
    setInterval(() => {
      const currentRoute = this.router.url;
      const isAuthRoute = currentRoute.startsWith("/auth")

      if (!isAuthRoute) {
        const hasToken = this.cookie.check("token");

        if (!hasToken && !alerted) {
          alerted = true;
          Swal.fire({
            icon: "warning",
            title: "Sesion Expirada",
            text: "Tu sesion ha expirado. Por favor, vuelve a iniciar sesion",
            confirmButtonText: "OK"
          }).then(() => {
            this.router.navigate(["/auth"])
          })
        }
      }
    }, 5000)  
  }
}
