import { ConversaoService } from './../services/conversao.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  conversoes: any[] = [];

  constructor(private service: ConversaoService) { }

  ngOnInit() {
    this.conversoes = this.service.conversoes;
  }

}
