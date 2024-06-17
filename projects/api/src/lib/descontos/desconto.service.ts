import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desconto, ListaDescontos } from './models';
import { map, Observable } from 'rxjs';
import { ObterListaDescontoRequest } from './models/requests/obter-lista-descontos-request';
import { ObterDescontoRequest } from './models/requests/obter-desconto-request';
import { ObterListaDescontoMenorRequest } from './models/requests/obter-lista-descontos-request copy';

@Injectable({
  providedIn: 'root'
})
export class DescontoService {

  constructor(private http: HttpClient) { }

  url(): string {
    return `https://localhost:40000/api/v1/Desconto`
  }

  obterListaDescontos(request: ObterListaDescontoRequest): Observable<ListaDescontos[]> {
    return this.http.post<ListaDescontos[]>(`${this.url()}/BuscaPorDescontos`, request)
      .pipe(map(o => o));
  }

  obterListaDescontosMenor(request: ObterListaDescontoMenorRequest): Observable<ListaDescontos[]> {
    return this.http.get<ListaDescontos[]>(`${this.url()}/BuscaPorDescontosMenor/${request.lojaId}`)
      .pipe(map(o => o));
  }

  obterDesconto(request: ObterDescontoRequest): Observable<Desconto> {
    return this.http.get<Desconto>(`${this.url()}/BuscaDescontoPorId/${request.id}`)
      .pipe(map(o => o));
  }
}