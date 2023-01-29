import { ConverteMoedaComponent } from './converte-moeda/converte-moeda.component';
import { HistoricoComponent } from './historico/historico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMoedaComponent } from './lista-moeda/lista-moeda.component';

const routes: Routes = [
  { path: '', redirectTo: 'converte-moeda', pathMatch: 'full' },
  { path: 'historico', component: HistoricoComponent },
  { path: 'lista-moeda', component: ListaMoedaComponent },
  { path: 'converte-moeda', component: ConverteMoedaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
