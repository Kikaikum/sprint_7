import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculoTotalService } from '../calculo-total.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {  
  
  paginas= new FormGroup({
    pagina:new FormControl(1),
    idioma: new FormControl(1)
  });    
  
  ngOnInit(): void {    
  }

}
