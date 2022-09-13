import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../../service/pais/pais.service';
import { EstadoService } from 'src/app/service/estado/estado.service';
import { PersonaService } from '../../service/persona/persona.service';
import { ReactiveFormsModule } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-springboot',
  templateUrl: './springboot.component.html',
  styleUrls: ['./springboot.component.css']
})
export class SpringbootComponent implements OnInit {

  personaForm!: FormGroup;
  paises: any;
  estados: any;
  pais: any;
  estado: any;
  personas: any;



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
      id: [''],
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

    this.personaForm.get("pais")?.valueChanges.subscribe(value => {
      this.estadoService.getAllEstadosByPais(value.id).subscribe(
        resp => {
          this.estados = resp;

          if (this.estado != '') {
            const estadoPersonaId = this.estados.find((estado: { id: any; }) => estado.id === this.estado.id)
            this.estado = estadoPersonaId
          }

        },
        error => (console.error(error))

      )
    })

    this.personaService.getAllPersonas().subscribe(
      resp => {
        this.personas = resp;
      },
      error => (console.error(error))
    )
  }

  guardar(): void {
    console.log("ok")
    this.personaService.savePersona(this.personaForm.value).subscribe(
      resp => {
        this.personaForm.reset();
        this.personas = this.personas.filter((persona: { id: any; }) => resp.id != persona.id)
        this.personas.push(resp)
      },
      error => (console.error(error))

    )
  }

  eliminar(persona: any) {
    this.personaService.deletePersona(persona.id).subscribe(
      resp => {
        if (resp) {
          this.personas.pop(persona)
        }
      },
      error => (console.error(error))

    )
  }

  editar(persona: any) {
    this.personaForm.setValue({
      id: persona.id,
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad,
      pais: persona.pais,
      estado: persona.estado,
    })

    const paisPersonaId = this.paises.find((pais: { id: any; }) => pais.id === persona.pais.id)
    this.pais = paisPersonaId



  }

}
