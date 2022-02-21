import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculoTotalService {

  listaprecios:number[]=[];
  uno=false;
  dos=false;
  tres=false;
  paginas=0;
  idiomas=0;
  total=0;
  product:Array<{producto:string}>=[]
  listaPresupuestos: Array<{nombre: string, cliente: string, precio:number, data:string, productos:Array<{producto:string}>}> = []
  
  calculo(){
    this.total=0;    
    if(this.uno){
      this.total+=500;
      if(this.paginas<1 || this.idiomas<1){
        this.paginas=1;
        this.idiomas=1;
      }  
    }
    else{
      this.paginas=0;
      this.idiomas=0;
    }
    if(this.dos){
      this.total+=300;
    }
    if(this.tres){
      this.total+=200;
    }
    this.total=this.total+(this.paginas*this.idiomas*30);
  }
  
  agregar(valor:any){    
    let fecha = Date.now();    
    let hoy = new Date(fecha);
    
    let listas=valor;
    listas.precio=this.total;
    listas.data=hoy;
    if(this.uno){
      this.product.push({producto:"uno"})
    }
    if(this.dos){
      this.product.push({producto:"dos"})
    } 
    if(this.tres){
      this.product.push({producto:"tres"})
    }
    listas.productos=this.product;
           
    if(this.listaPresupuestos.length<1){
      this.listaPresupuestos.push(listas);      
    }
    else{      
      let validar=false;
      this.listaPresupuestos.map((obj,i) => {
        if (obj.nombre === listas.nombre && obj.cliente===listas.cliente) {
          this.listaPresupuestos[i].precio=listas.precio;
          validar=true;
        }                  
      });
      if(!validar){
        this.listaPresupuestos.push(listas);
      }
    }
    console.log(this.listaPresupuestos);          
  }

  reiniciar(){
    this.listaPresupuestos.splice(0,this.listaPresupuestos.length)

  }

  orderAZ(){

    this.listaPresupuestos.sort()
    
  }



  constructor() { }
  
}
