import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { PersonajeService } from './service/personaje/personaje.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  palabra: String = "";

  edad: Number = 0;

  mayor: Boolean = false;

  datosAdicionales: any;

  datos: any;

  amigos: Array <any> = [];

  personajes: any = {};
  constructor(private service: PersonajeService){}

  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe(personajes => {
      this.personajes = personajes.results
      console.log(personajes.results)
    })
  
    this.palabra =  "Hola mundo";
    this.edad = 50;
    this.mayor = this.edad > 18;
    this.datosAdicionales = {edad:20, sueldo:25000, nombre: "Juan", mayor: true};
    this.amigos = [{nombre: "Carlos", edad: 35}, {nombre: "Andrea", edad:25}, {nombre: "Sebastian", edad: 30}];
  }
}
