import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-converte-moeda',
  templateUrl: './converte-moeda.component.html',
  styleUrls: ['./converte-moeda.component.css']
})
export class ConverteMoedaComponent implements OnInit {

  @Output() aoConverter = new EventEmitter<any>();

  valor:number | undefined;

  converter(){
    const valorEmitir = {valor: this.valor};
    this.aoConverter.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0
  }



  ngOnInit() {
  }

}
