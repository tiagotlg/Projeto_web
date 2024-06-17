import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListaDescontos } from '../../../../../api/src/lib/descontos';
import { DescontoService } from '../../../../../api/src/lib/descontos/desconto.service';
import { ObterListaDescontoMenorRequest } from '../../../../../api/src/lib/descontos/models/requests/obter-lista-descontos-request copy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  inscricao: Subscription;

  steam: ListaDescontos[];
  gog: ListaDescontos[];
  origin: ListaDescontos[];
  uplay: ListaDescontos[];
  epicGames: ListaDescontos[];
  blizzard: ListaDescontos[];

  constructor(private service: DescontoService) {

  }

  ngOnInit(): void {
    const requestSteam = new ObterListaDescontoMenorRequest(1)
    this.inscricao = this.service.obterListaDescontosMenor(requestSteam)
      .subscribe((res: ListaDescontos[]) => this.steam = res);

    const requestGog = new ObterListaDescontoMenorRequest(7)
    this.inscricao = this.service.obterListaDescontosMenor(requestGog)
      .subscribe((res: ListaDescontos[]) => this.gog = res);

    const requestOrigin = new ObterListaDescontoMenorRequest(8)
    this.inscricao = this.service.obterListaDescontosMenor(requestOrigin)
      .subscribe((res: ListaDescontos[]) => this.origin = res);

    const requestUplay = new ObterListaDescontoMenorRequest(13)
    this.inscricao = this.service.obterListaDescontosMenor(requestUplay)
      .subscribe((res: ListaDescontos[]) => this.uplay = res);

    const requestEpicGames = new ObterListaDescontoMenorRequest(25)
    this.inscricao = this.service.obterListaDescontosMenor(requestEpicGames)
      .subscribe((res: ListaDescontos[]) => this.epicGames = res);

    const requestBlizzard = new ObterListaDescontoMenorRequest(31)
    this.inscricao = this.service.obterListaDescontosMenor(requestBlizzard)
      .subscribe((res: ListaDescontos[]) => this.blizzard = res);
  }
}