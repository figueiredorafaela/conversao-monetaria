import { Conversao } from '../interfaces/conversao.model';
import { ConversaoService } from './../services/conversao.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  @Input() conversoes :any[] = [];

  filtro: string = '';
  paginaAtual = 1;
  key: string = 'nome';
  reverse: boolean = false;

  constructor(private service: ConversaoService) { }

  ngOnInit() {
    this.service.todas().subscribe((x) => (this.conversoes = x));
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  deletar() {
    this.conversoes.length = 0;
  }

}
