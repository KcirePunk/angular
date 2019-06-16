import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';


// Congigurar el componente definir etiqueta llamando al html y el css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'Bienvenido Erick';
  	
  	public mostrar_videojuego: boolean = true;

  	constructor(){
  		this.title = configuracion.titulo;
  		this.title = configuracion.descripcion;
  	}

  	ocultarVideojuegos(estado){
  		this.mostrar_videojuego = estado;
  	}
}
