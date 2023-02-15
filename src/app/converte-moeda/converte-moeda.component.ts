import { IMoedas } from './../interfaces/IMoedas';
import { IConversao } from '../interfaces/IConversao';
import { MoedaService } from './../services/moeda.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converte-moeda',
  templateUrl: './converte-moeda.component.html',
  styleUrls: ['./converte-moeda.component.css']
})


export class ConverteMoedaComponent implements OnInit {

  moedas: IMoedas[];
  conversao: IConversao[];

  form: FormGroup;

  valorEntrada: number;
  moedaOriginal: string;
  moedaDestino: string;
  valorSaida: number;
  valorDolar: number;
  taxa;
  data;

  constructor(private moedaService: MoedaService) {
    this.form = new FormGroup({
      moedaOriginal: new FormControl(''),
      moedaDestino: new FormControl(''),
      valorEntrada: new FormControl('')
    });
  }

  ngOnInit() {
    this.getItem()
    this.moedaService.getSymbols().subscribe((x) => {
      const object = Object.keys(x.symbols).map(function (moeda) {
        let final = x.symbols[moeda];
        return final;
      });
      this.moedas = object;
    });
  }

  guardar() {
    var conversao = {
      data: this.data,
      valorEntrada: this.valorEntrada,
      moedaOriginal: this.moedaOriginal,
      valorSaida: this.valorSaida,
      moedaDestino: this.moedaDestino,
      taxa: this.taxa,
      valorDolar: this.valorDolar
    };

    this.getItem();
    this.conversao.push(conversao);
    localStorage.setItem('conversao', JSON.stringify(this.conversao));
  }

  converter() {
    this.moedaService.converterMoeda(this.moedaOriginal, this.moedaDestino, this.valorEntrada).subscribe((x) => {
      this.data = new Date();
      this.valorSaida = x['result'];
      this.taxa = Object.values(x['info']);

      this.checar();
      this.guardar();
    });
  }

  getItem() {
    this.conversao = JSON.parse(localStorage.getItem('conversao')!) || [];
  }


  checar() {
    this.moedaService.converterMoeda(this.moedaDestino, 'USD', this.valorSaida).subscribe((x) => {
        this.valorDolar = x['result'];
        this.guardar();
    });
  }

}
