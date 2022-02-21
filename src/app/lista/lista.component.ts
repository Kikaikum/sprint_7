import { Component, OnInit } from '@angular/core';
import { CalculoTotalService } from '../calculo-total.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public servicio:CalculoTotalService) { }
  lista=this.servicio.listaPresupuestos;
  ngOnInit(): void {
  }

}
