import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
	
	heroesURL:string = "https://heroesapp-4a104.firebaseio.com/heroes.json";
	heroeURL:string = "https://heroesapp-4a104.firebaseio.com/heroes/";
	
	constructor(private http:Http ) { }
	
	nuevoHeroe(heroe:Heroe){
		let body = JSON.stringify(heroe);
		let headers = new Headers({
			'Content-Type': 'application/json' 
		});
		return this.http.post(this.heroesURL, body, { headers:headers }).pipe(map( res =>{
			// console.log(res.json());
			return res.json();
		}));
	}
	
	actualizarHeroe(heroe:Heroe, key$:string){
		let body = JSON.stringify(heroe);
		let headers = new Headers({
			'Content-Type': 'application/json' 
		});
		
		let url = `${this.heroeURL}/${ key$ }.json`
		return this.http.put(url, body, { headers:headers }).pipe(map( res =>{
			// console.log(res.json());
			return res.json();
		}));
	}
	
	getHeroe(key$:string){
		let url = `${ this.heroeURL }/${ key$ }.json`;
		return this.http.get(url).pipe(map( res => res.json() ));
	}
	
	getHeroes(){
		return this.http.get(this.heroesURL).pipe(map( res => res.json() ));
	}
	
	borrarHeroe(key$:string){
		let url = `${ this.heroeURL }/${ key$ }.json`;
		return this.http.delete(url).pipe(map( res => res.json() ));
	}

	alertGuardado(){
		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000
		});
		return toast({
			type: 'success',
			title: 'Héroe Guardado'
		});
	}

	alertActualizado(){
		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000
		});
		return toast({
			type: 'success',
			title: 'Héroe Actualizado'
		});
	}

	alertBorrado(){
		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000
		});
		return toast({
			type: 'success',
			title: 'Héroe Eliminado'
		});
	}
}
