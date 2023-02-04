import { Conversao } from '../interfaces/IConversao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConversaoService {

  private listaConversoes: any[];
  private url = 'http://localhost:3000/conversoes/'

  constructor(private httpClient: HttpClient) {
    this.listaConversoes = [];
  }

  get conversoes() {
    return this.listaConversoes;
  }

  adicionar(conversao: Conversao) {
    this.apurar(conversao);

    return this.httpClient.post<Conversao>(this.url, conversao);
  }

  todas() {
    return this.httpClient.get<Conversao[]>(this.url)
  }


  private apurar(conversao: any) {
    conversao.data = new Date();
  }
}
