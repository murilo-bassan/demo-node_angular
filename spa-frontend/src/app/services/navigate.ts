import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Navigate {
  constructor(private router: Router){}

  acessaOther(): void {
    this.router.navigate(['/other']);
  }

  acessaHome(): void {
    this.router.navigate(['/']); 
  }
}
