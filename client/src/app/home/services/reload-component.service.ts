import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadComponentService {

  constructor(private router: Router) { }

  reloadComponent(delay: number = 1300) {
    let currentUrl = this.router.url;
    console.log("UrlActual =>", currentUrl);

    setTimeout(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      console.log("Recargando Pagina...");
    }, delay);
  }

}
