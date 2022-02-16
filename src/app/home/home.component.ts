import { Component, OnInit } from '@angular/core';
import { CalculoTotalService } from '../calculo-total.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  
  
  constructor(public servicio:CalculoTotalService) { }

  verificar(event:any){        
    switch(event.name){
      case "tres":            
        this.servicio.tres=event.checked;                
      break;
      case "dos":
        this.servicio.dos=event.checked;
      break;
      case "uno":
        this.servicio.uno=event.checked;  
      break;
      default:
        console.log("error");
    }
    this.servicio.calculo();         
  }
  
  ngOnInit(): void {  
  }

}
