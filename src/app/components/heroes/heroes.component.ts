import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent {

	heroes:any;
	loading:boolean = true;

	constructor(private _heroesService:HeroesService) { 
		this._heroesService.getHeroes().subscribe(data =>{
			setTimeout(() =>{
				this.loading = false;	
				this.heroes = data;
			})
		});
		
	}
	
	borrarHeroe(key$:string){
		this._heroesService.borrarHeroe(key$).subscribe(response =>{
			console.log(response);
			if(response){
				console.error(response)
			}else{
				delete this.heroes[key$];
				this._heroesService.alertBorrado();
			}
		});
	}

}
