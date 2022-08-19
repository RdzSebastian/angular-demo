import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  title = 'angular-demo';

  palabra: String = "";

  edad: Number = 0;

  mayor: Boolean = false;

  datosAdicionales: any;

  datos: any;

  amigos: Array <any> = [];

  constructor(){}

  ngOnInit(): void {

    this.palabra =  "Hola mundo";
    this.edad = 50;
    this.mayor = this.edad > 18;
    this.datosAdicionales = {edad:20, sueldo:25000, nombre: "Juan", mayor: true};
    this.amigos = [{nombre: "Carlos", edad: 35}, {nombre: "Andrea", edad:25}, {nombre: "Sebastian", edad: 30}];
  }

}
