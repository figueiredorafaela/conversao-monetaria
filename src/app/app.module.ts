import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMoedaComponent } from './lista-moeda/lista-moeda.component';
import { ConverteMoedaComponent } from './converte-moeda/converte-moeda.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { HistoricoComponent } from './historico/historico.component';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



registerLocaleData(localePt, 'pt')
@NgModule({
  declarations: [
    AppComponent,
    ListaMoedaComponent,
    ConverteMoedaComponent,
    MenuComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
