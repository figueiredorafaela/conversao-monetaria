import { IConversao } from '../interfaces/IConversao';
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

  adicionar(conversao: IConversao) {
    this.apurar(conversao);

    return this.httpClient.post<IConversao>(this.url, conversao);
  }

  todas() {
    return this.httpClient.get<IConversao[]>(this.url)
  }


  private apurar(conversao: any) {
    conversao.data = new Date();
  }
}
