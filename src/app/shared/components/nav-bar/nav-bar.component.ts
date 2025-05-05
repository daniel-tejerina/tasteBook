import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  navbarMenu: {
    mainMenu: Array<any>, 
    authOptions: Array<any>
  } = { mainMenu: [], authOptions: [] }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navbarMenu.mainMenu = [
      {
        name: "Home",
        router: ["/"]
      },
      {
        name: "Ingredientes",
        router: ["/", "ingredients"]
      },
      {
        name: "Favoritos",
        router: ["/", "favorites"]
      },
    ]

    this.navbarMenu.authOptions = [
      {
        name: "Login",
        router: ["/", "login"]
      },
      {
        name: "Logout",
        router: ["/", "login"]
      }
    ]
    
  }

}
