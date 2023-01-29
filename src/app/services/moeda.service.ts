import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Token {
  id: number;
  simbolo: string;
  descricao: string;
}

const url =
    'https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome';

@Injectable({providedIn: 'root'})
export class MoedaService {
    constructor(private httpClient: HttpClient) { }

    listar(): Observable<{ id: number, nome: string }[]> {
        return this.httpClient
            .get<any[]>(url)
            .pipe(
                map(dadosDaApi => {
                    return dadosDaApi.map(a => {
                        return {
                            id: a.id,
                            nome: a.nome
                        };
                    });
                })
            );
    }
}
