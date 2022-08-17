import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

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

  adicionalesDatros: any;

  datos: any;

  amigos: Array <any> = [];

}
