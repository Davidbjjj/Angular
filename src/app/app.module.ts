import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardeComponent } from './carde/carde.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscaComponent } from './busca/busca.component';
import { PrincipaisComponent } from './principais/principais.component';
import { ElementocarroselComponent } from './elementocarrosel/elementocarrosel.component';
import { CarroselComponent } from './carrosel/carrosel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroselComponent,
    CardeComponent,
    NavbarComponent,
    BuscaComponent,
    PrincipaisComponent,
    ElementocarroselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
