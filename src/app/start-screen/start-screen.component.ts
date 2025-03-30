import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-start-screen',
  standalone: true,
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
  imports: [], 
})
export class StartScreenComponent {
  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['game']);
  }
}
