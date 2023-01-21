import { ArrayFiltroPipe } from './pipes/array-filtro.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMoedaComponent } from './lista-moeda/lista-moeda.component';
import { ConverteMoedaComponent } from './converte-moeda/converte-moeda.component';


@NgModule({
  declarations: [
    AppComponent,
      ListaMoedaComponent,
      ConverteMoedaComponent,
      ArrayFiltroPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
