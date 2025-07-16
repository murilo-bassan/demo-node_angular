import { Component, inject } from '@angular/core';
import { Navigate } from '../../services/navigate';

@Component({
  selector: 'app-other',
  imports: [],
  templateUrl: './other.html',
  styleUrl: './other.css'
})
export class Other {
  private navigate = inject(Navigate)

  goHome(){
    this.navigate.acessaHome();
  }
  
}
