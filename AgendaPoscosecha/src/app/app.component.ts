import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  rol!: string;

  constructor(private readonly router: Router, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.rol = 'caficultor'
    console.log('desde app')
    //Se pide los permisos del rol por parte del servicio y se mueve al correspondiente modulo
    const route = this.router.routerState.snapshot.url;
    if (route == '/') {
      this.router.navigate([this.rol])
    }
  }
}
