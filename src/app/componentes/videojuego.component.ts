import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component ({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
	public titulo: string;
	public listado: string;

	constructor (){
		this.titulo = "Lista de video juego";
		this.listado = "Listado de los juegos mas populares";
	}

	// Se Carga cuando em componente ya fue cargado
	ngOnInit(){
		console.log("OnInit ejecutado");
	}

	// Se ejecuta cuando hay cambios en la pagina
	ngDoCheck(){
		console.log("Docheck ejecutado");
	}

	// Se ejecuta cuando se elimina algo
	ngOnDestroy(){
		console.log("Ejecutado");
	}
	cambiarTitulo(){
		this.titulo = "Nuevo titulo del componente";
	}
}