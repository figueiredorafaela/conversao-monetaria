import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversaoService {

  private listaConversoes: any[];

  constructor() {
    this.listaConversoes = [];
  }

  get conversoes() {
    return this.listaConversoes;
  }

  adicionar(conversao: any) {
    this.apurar(conversao);
    this.listaConversoes.push(conversao);
  }

  private apurar(conversao: any) {
    conversao.data = new Date();
  }
}
