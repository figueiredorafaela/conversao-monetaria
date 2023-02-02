import { ISimbolos } from '../interfaces/ISimbolos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MoedaService {

  urlApi = "https://api.exchangerate.host"

  constructor(private httpClient: HttpClient) { }

  public getSymbols(): Observable<ISimbolos> {
    return this.httpClient.get<ISimbolos>(this.urlApi + '/symbols');
  }

  public converterMoeda(moedaOriginal: string, moedaDestino: string, valor: number) {
    const url = `${this.urlApi}/convert?from=${moedaOriginal}&to=${moedaDestino}&amount=${valor}`
    return this.httpClient.get(this.urlApi);
  }
}
