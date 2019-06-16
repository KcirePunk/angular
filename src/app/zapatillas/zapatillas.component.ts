import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

 @Component({
 	selector: 'zapatillas',
 	templateUrl: './zapatillas.component.html'
 })

 export class ZapatillasComponent implements OnInit{
 	public titulo: string = "Componente de zapatilla";
 	public zapatillas: Array<Zapatilla>;
 	public mark: String[];
 	public color: string;
 	public miMarca: string;

 	constructor(){
 		this.color = "rojo";
 		this.mark = new Array();
 		this.zapatillas = [
 			new Zapatilla('Reebook Clasi', 'Reebook',10, 'Blanco', true),
 			new Zapatilla('Nike ryzen', 'Nike',50, 'Negro', true),
 			new Zapatilla('Adidas', 'Adi',100, 'gris', false)
 		];
 	}

 	ngOnInit(){
 		// console.log(this.zapatillas);

 		this.marcas();
 	}

 	marcas(){
 		this.zapatillas.forEach((value, index) => {
 			if (this.mark.indexOf(value.marca) < 0) {
 				this.mark.push(value.marca);
 			}
 		
 		});

 		console.log(this.mark);
 	}

 	getMarca(){
 		alert(this.miMarca);
 	}

 	addMarca(){
 		this.mark.push(this.miMarca);

 		this.miMarca = '';
 	}

 	borrarMarca(index) {
 		this.mark.splice(index,1);
 	}

 	onBlur(){
 		console.log("Has salido del input");
 	}

 	mostrarPalabra(){
 		alert(this.miMarca);
 	}
 }