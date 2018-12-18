import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {
	
	heroe:Heroe = {
		nombre:"",
		bio:"",
		casa:"Marvel"
	}
	
	nuevo:boolean = false;
	id:string;
	
	constructor(private _heroeService:HeroesService, private router:Router, private route:ActivatedRoute) { 
	
	this.route.params
		.subscribe( parametros => {
			this.id = parametros['id']
			if(this.id !== "nuevo"){
				this._heroeService.getHeroe(this.id)
				.subscribe(heroe => this.heroe = heroe);
			}
		});
		
	}

	guardar(){
		
		if(this.id == "nuevo"){
			this._heroeService.nuevoHeroe(this.heroe).subscribe(data =>{
				this.router.navigate(['/heroes']);
				this._heroeService.alertGuardado();
			})
		}else{
			this._heroeService.actualizarHeroe(this.heroe, this.id).subscribe(data =>{
				this.router.navigate(['/heroes']);
				this._heroeService.alertActualizado();
			})
		}
	}
	
	agregarNuevo(forma:NgForm){
		this.router.navigate(['/heroe','nuevo']);
		forma.reset({
			casa: "Marvel"	
		})
	}

}
