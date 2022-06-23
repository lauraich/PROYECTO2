import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recogidas',
  templateUrl: './recogidas.component.html',
  styleUrls: ['./recogidas.component.css']
})
export class RecogidasComponent implements OnInit {

  mostrarDialogoRec!: boolean;
  recolectas = ['recolecta 1', 'recolecta 2', 'recolecta 3']

  constructor() { }

  ngOnInit(): void {
    this.mostrarDialogoRec = false;
  }

  agregarRecolecta(recolecta: number | undefined) {
    if (recolecta) {
      this.recolectas.push(recolecta.toString())
    }
    this.mostrarDialogoRec = false;
  }
}
