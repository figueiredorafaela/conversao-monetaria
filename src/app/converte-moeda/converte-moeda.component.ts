import { Conversao } from '../interfaces/conversao.model';
import { ConversaoService } from './../services/conversao.service';
import { HttpClient } from '@angular/common/http';
import { AnimateTimings } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converte-moeda',
  templateUrl: './converte-moeda.component.html',
  styleUrls: ['./converte-moeda.component.css']
})

export class ConverteMoedaComponent implements OnInit {

  @Output() aoConverter = new EventEmitter<any>();

  valorEntrada: number = 0;
  moedaOriginal: any;
  moedaDestino: any;
  valorSaida: number = 0;
  taxa: number = 0;

  converter() {
    const valorEmitir = { valorEntrada: this.valorEntrada, valorSaida: this.valorSaida, moedaDestino: this.moedaDestino, moedaOriginal: this.moedaOriginal, taxa: this.taxa };
    this.aoConverter.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos() {
    this.valorEntrada = 0
  }



  ngOnInit() {
  }


}
