import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-recogida',
  templateUrl: './agregar-recogida.component.html',
  styleUrls: ['./agregar-recogida.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgregarRecogidaComponent implements OnInit {

  @Input() mostrar!: boolean;
  @Output() agregarPoscosecha: EventEmitter<number | undefined> = new EventEmitter();
  cantidadCafe!: FormControl

  constructor() { }

  ngOnInit(): void {
    this.cantidadCafe = new FormControl(undefined, [Validators.required, Validators.max(100000)]);
  }

  darError() {
    if (this.cantidadCafe.hasError('required')) {
      return 'Debes llenar el campo';
    }
    return this.cantidadCafe.hasError('max') ? 'La cantidad de cafe no puede ser mayor a 100.000 Kilos' : '';
  }

  crearPoscosecha() {
    if (this.cantidadCafe.valid) {
      /// se llama al servicio, se guarda la info y se devuelve los datos que se muestran en la lista de poscosechas
      this.agregarPoscosecha.emit(this.cantidadCafe.value)
      this.cantidadCafe = new FormControl(undefined, [Validators.required, Validators.max(100000)]);
    }
  }

  salirModal() {
    this.agregarPoscosecha.emit()
    this.cantidadCafe = new FormControl(undefined, [Validators.required, Validators.max(100000)]);
  }
}
