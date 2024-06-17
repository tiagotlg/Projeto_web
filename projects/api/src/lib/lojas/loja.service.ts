import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loja } from './models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(private http: HttpClient) { }

  url(): string {
    return `https://localhost:40000/api/v1/Loja/BuscarLoja`
  }

  obterLoja(): Observable<Loja> {
    return this.http.get<Loja>(`${this.url()}`)
      .pipe(map(o => o));
  }
}
