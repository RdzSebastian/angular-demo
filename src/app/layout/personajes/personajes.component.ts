import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { PersonajeService } from '../../service/personaje/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any = {};

  constructor(private service: PersonajeService) { }

  ngOnInit(): void {
      this.service.getAllPersonajes().subscribe(personajes => {
      this.personajes = personajes.results
      console.log(personajes.results)
    })
  }

}
