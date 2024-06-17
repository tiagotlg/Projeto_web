import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObterJogosRequest } from './models/requests/obter-jogos-request';
import { Jogo, Jogos } from './models';
import { map, Observable } from 'rxjs';
import { ObterJogoRequest } from './models/requests/obter-jogo-request';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  url(): string {
    return `https://localhost:40000/api/v1/Jogo`
  }

  obterJogos(request: ObterJogosRequest): Observable<Jogos[]> {
    return this.http.get<Jogos[]>(`${this.url()}/BuscaPorNome/${request.nome}`)
      .pipe(map(o => o));
  }

  obterJogo(request: ObterJogoRequest): Observable<Jogo> {
    return this.http.get<Jogo>(`${this.url()}/BuscaPorId/${request.id}`)
      .pipe(map(o => o));
  }
}
