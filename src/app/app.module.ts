import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

import { APP_ROUTING } from './app.routes';

// Servicios

import { HeroesService } from './services/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';

// SweetAlert 2 

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
