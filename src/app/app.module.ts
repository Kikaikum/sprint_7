import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoTotalService } from './calculo-total.service';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { PaginasComponent } from './paginas/paginas.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaComponent } from './lista/lista.component';



const appRoutes:Routes=[

  {path:'home',component:HomeComponent},
  {path:'',component:BienvenidaComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    PaginasComponent,
    BienvenidaComponent,
    ListaComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CalculoTotalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
