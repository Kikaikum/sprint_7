import { Component, Input, OnInit } from '@angular/core';
import { CalculoTotalService } from '../calculo-total.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {
  @Input() tipo:string="";
  valor=1;
  constructor(private servicio:CalculoTotalService) { }
  
  
  actualizar(values:string){
    this.valor=parseInt(values)
    if (this.tipo=='pagina'){
      this.servicio.paginas=this.valor;
    }
    else{
      this.servicio.idiomas=this.valor;
    }    
    this.servicio.calculo();      
  }
  sumar(){
    this.valor=this.valor+1;
    if (this.tipo=='pagina'){
      this.servicio.paginas=this.valor;
    }
    else{
      this.servicio.idiomas=this.valor;
    }    
    this.servicio.calculo();         
  }
  restar(){
    if(this.valor>1){
      this.valor=this.valor-1;
      if (this.tipo=='pagina'){
        this.servicio.paginas=this.valor;
      }
      else{
        this.servicio.idiomas=this.valor;
      }    
      this.servicio.calculo();
         
    }       
  }

  ngOnInit(): void {
  }

}
