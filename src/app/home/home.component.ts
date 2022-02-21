import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculoTotalService } from '../calculo-total.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {  
  
 
  presupuesto= new FormGroup({    
    nombre:new FormControl('',[Validators.required, Validators.minLength(2)]),
    cliente: new FormControl('', [Validators.required, Validators.minLength(2)])
  });
  
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
