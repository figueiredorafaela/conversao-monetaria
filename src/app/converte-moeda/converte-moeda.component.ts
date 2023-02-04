import { Conversao } from '../interfaces/IConversao';
import { MoedaService } from './../services/moeda.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converte-moeda',
  templateUrl: './converte-moeda.component.html',
  styleUrls: ['./converte-moeda.component.css']
})

export class ConverteMoedaComponent implements OnInit {

  moedas: any[] = [];

  conversao: Conversao[] = []
  form = FormGroup;

  valorEntrada: any;
  data!: any;
  moedaOriginal!: any;
  moedaDestino!: any;
  valorSaida: any;
  taxa: any;

  constructor(private moedaService: MoedaService) {
    this.form = new FormGroup({
      moedaOriginal: new FormControl(''),
      moedaDestino: new FormControl(''),
      valorEntrada: new FormControl('')
    });
  }

  converter() {
    this.moedaService.converterMoeda(this.moedaOriginal, this.moedaDestino, this.valorEntrada).subscribe((x) => {
      this.valorSaida = x['result'];
      this.taxa = x['info']['rate'];

    })
    this.limparCampos();
  }

  limparCampos() {
    this.valorEntrada = 0
  }

  guardar() {
    const conversao = {
      data: this.data,
      valorEntrada: this.valorEntrada,
      moedaOriginal: this.moedaOriginal,
      valorSaida: this.valorSaida,
      moedaDestino: this.moedaDestino,
      taxa: this.taxa,
    };

    this.conversao.push(conversao);
    localStorage.setItem('conversao', JSON.stringify(this.conversao));
  }


  ngOnInit() {
    this.moedaService.getSymbols().subscribe((x) => {
      const object = Object.keys(x.symbols).map(function (moeda) {
        let final = x.symbols[moeda];
        return final;
      });
      this.moedas = object;
    });
  }


}
