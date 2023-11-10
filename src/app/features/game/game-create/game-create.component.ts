import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrl: './game-create.component.scss'
})
export class GameCreateComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/game/zzzz'])
    }, 1000)
  }
}
