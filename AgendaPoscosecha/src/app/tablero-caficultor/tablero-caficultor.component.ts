import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tablero-caficultor',
  templateUrl: './tablero-caficultor.component.html',
  styleUrls: ['./tablero-caficultor.component.css']
})
export class TableroCaficultorComponent implements OnInit {

  infoUsuario!: string

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.infoUsuario = 'se puede traer alguna informacion del usuario desde un servicio para mostrar en el vavbar'
    console.log('entro')
  }

}
