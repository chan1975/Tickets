import { Component } from '@angular/core';


@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTickets';
  public hola : string = "hola mundo desde Angular :)";
  public prueba : string = "Otro texto de prueba";
  public name : string = "Nombre Generico 1";
  public edad : number = 29;
}
