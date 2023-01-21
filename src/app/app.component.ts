import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MoedaService } from './services/moeda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  distritos: Array<{id: number, nome:string}> = [];
  filtro: string = '';

  constructor(private moedaService: MoedaService) {}
  ngOnInit(): void {
    this.moedaService.listar().subscribe(
      retornoApi => this.distritos = retornoApi
    )
  }
}
