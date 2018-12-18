import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

const APP_ROUTES: Routes = [
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'heroe/:id', component: HeroeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'heroes'}
]; 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
