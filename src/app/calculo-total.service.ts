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
  




  constructor() { }
  
}
