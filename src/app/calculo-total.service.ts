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
    let product:string[]=[];
    if(this.uno){
      product.push("uno")
    }
    if(this.dos){
      product.push("dos")
    } 
    if(this.tres){
      product.push("tres")
    }
    listas.productos=product;
           
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

    let kike=this.listaPresupuestos
    this.listaPresupuestos.sort(function(a, b){
      if(a.nombre < b.nombre) { return -1; }
      if(a.nombre > b.nombre) { return 1; }
      return 0;
  })
  
  }



  constructor() { }
  
}
