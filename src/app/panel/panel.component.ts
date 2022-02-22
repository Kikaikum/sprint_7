import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {  

  constructor(public modal:NgbModal){}

  paginas= new FormGroup({
    pagina:new FormControl(1),
    idioma: new FormControl(1)
  });    
  
  
  ngOnInit(): void {    
  }

}
