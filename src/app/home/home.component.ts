import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total=0;
  uno=false;
  dos=false;
  tres=false;  
  
  sumar(event:any){
    this.total=0;    
    switch(event.name){
      case "tres":
        this.tres=event.checked;
        break;
      case "dos":
        this.dos=event.checked;
        break;
      case "uno":
        this.uno=event.checked;
        break;
      default:
        console.log("error");
    }
    if(this.uno){
      this.total+=500;
    }
    if(this.dos){
      this.total+=300;
    }
    if(this.tres){
      this.total+=200;
    }    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
