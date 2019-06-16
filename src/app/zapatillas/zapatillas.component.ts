import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

 @Component({
 	selector: 'zapatillas',
 	templateUrl: './zapatillas.component.html'
 })

 export class ZapatillasComponent implements OnInit{
 	public titulo: string = "Componente de zapatilla";
 	public zapatillas: Array<Zapatilla>;

 	constructor(){
 		this.zapatillas = [
 			new Zapatilla('Reebook Clasi', 'Reebook',10, 'Blanco', true),
 			new Zapatilla('Nike ryzen', 'Nike',50, 'Negro', true),
 			new Zapatilla('Adidas', 'Adi',100, 'gris', false)
 		];
 	}

 	ngOnInit(){
 		console.log(this.zapatillas);
 	}
 }