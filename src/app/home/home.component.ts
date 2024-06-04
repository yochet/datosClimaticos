import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor( private router: Router) {
    
  }

  irAColumbia() {
    this.router.navigate(['/columbia']);
  }

  irAKansas() {
    this.router.navigate(['/kansas']);
  }

}