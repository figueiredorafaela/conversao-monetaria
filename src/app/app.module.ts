import { ArrayFiltroPipe } from './pipes/array-filtro.pipe';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMoedaComponent } from './lista-moeda/lista-moeda.component';
import { ConverteMoedaComponent } from './converte-moeda/converte-moeda.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HistoricoComponent } from './historico/historico.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt, 'pt')
@NgModule({
  declarations: [
    AppComponent,
      ListaMoedaComponent,
      ConverteMoedaComponent,
      ArrayFiltroPipe,
      MenuComponent,
      HistoricoComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
