import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router"
import { AuthService } from '@modules/auth/services/auth.service';
import { SearchService } from '@shared/services/search.service';

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

  constructor(private router: Router, public auth: AuthService, private _searchService: SearchService) {}

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
        name: "Logout",
        router: ["/", "login"],
      }
    ]
    
  }

  onSearch(value: string): void {
    this._searchService.updateSearchTerm(value);
    console.log("Navbar ", value)
  }
  

  logout(): void {
    this.auth.logout();
    this.router.navigate(["/auth/login"])
  }

}
