import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class MoedaService {

  API_URL = "https://api.exchangerate.host/"


  constructor(private httpClient: HttpClient) { }


  public getSymbols(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + '/symbols');
  }

  public converterMoeda(moedaOriginal: string, moedaDestino: string, valor: number) {
    const url = `${this.API_URL}/convert?from=${moedaOriginal}&to=${moedaDestino}&amount=${valor}&places=2`
    var resultado = this.httpClient.get(url);
    return resultado;
  }


}
