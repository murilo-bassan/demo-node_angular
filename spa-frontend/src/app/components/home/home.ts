import { Component, inject } from '@angular/core';
import { Navigate } from '../../services/navigate';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  navigate = inject(Navigate);

  goOther(){
    this.navigate.acessaOther();
  }

}
