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

  constructor(private service: ConversaoService) { }

  ngOnInit() {
    this.service.todas().subscribe((x) => (this.conversoes = x));
  }


}
