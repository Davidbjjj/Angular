import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardeComponent } from './carde/carde.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscaComponent } from './busca/busca.component';
import { PrincipaisComponent } from './principais/principais.component';
import { CarroselModule } from './carrosel/carrosel.module';

@NgModule({
  declarations: [
    AppComponent,
    CardeComponent,
    NavbarComponent,
    BuscaComponent,
    PrincipaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarroselModule /*importando outro módulo que exporta os compoentens que appmodule usa*/
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
