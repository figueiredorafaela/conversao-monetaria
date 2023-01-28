import { AnimateTimings } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-converte-moeda',
  templateUrl: './converte-moeda.component.html',
  styleUrls: ['./converte-moeda.component.css']
})
export class ConverteMoedaComponent implements OnInit {

  @Output() aoConverter = new EventEmitter<any>();

  valorInicio: number = 0;
  moedaOriginal: any;
  moedaDestino: any;
  valorSaida: number = 0;

  converter(){
    const valorEmitir = {valorInicio: this.valorInicio, valorSaida: this.valorSaida, moedaDestino :this.moedaDestino, moedaOriginal: this.moedaOriginal};
    this.aoConverter.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos(){
    this.valorInicio = 0
  }



  ngOnInit() {
  }

}
