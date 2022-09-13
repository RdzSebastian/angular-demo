import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../../service/pais/pais.service';
import { EstadoService } from 'src/app/service/estado/estado.service';
import { PersonaService } from '../../service/persona/persona.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-springboot',
  templateUrl: './springboot.component.html',
  styleUrls: ['./springboot.component.css']
})
export class SpringbootComponent implements OnInit {

  personaForm!: FormGroup;
  paises: any;
  estados: any;


  constructor(
    public fb: FormBuilder,
    public paisService: PaisService,
    public estadoService: EstadoService,
    public personaService: PersonaService) {

  }

  ngOnInit(): void {
    // Todos los elementos de este formulario que son los mismos
    // que los que estan en el proyecto de springboot
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
    })

    this.paisService.getAllPais().subscribe(
      resp => {
        this.paises = resp;
      },
      error => (console.error(error))

    )
  }

  guardar(): void {

  }

  getAllEstadosByPais(event: any) {
    this.estadoService.getAllEstadosByPais(event.target.value).subscribe(
      resp => {
        this.estados = resp;
      },
      error => (console.error(error))

    )
  }

}
