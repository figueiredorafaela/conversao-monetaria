import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class MoedaService {

  urlApi = "https://api.exchangerate.host/"


  constructor(private httpClient: HttpClient) { }


  public getSymbols(): Observable<any> {
    return this.httpClient.get<any>(this.urlApi + '/symbols');
  }

  public converterMoeda(moedaOriginal: string, moedaDestino: string, valor: number) {
    const url = `${this.urlApi}/convert?from=${moedaOriginal}&to=${moedaDestino}&amount=${valor}&places=2`
    return this.httpClient.get(this.urlApi);
  }


}
