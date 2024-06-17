import { Component } from '@angular/core';
import { Jogos, Jogo } from 'projects/api/src/lib/jogos';
import { JogoService } from 'projects/api/src/lib/jogos/jogo.service';
import { ObterJogoRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogo-request';
import { ObterJogosRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogos-request';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  inscricao: Subscription;
  entidades: Jogos[];
  jogo: Jogo;
  maisBarato: boolean = false;
  aberto: boolean

  constructor(
    private service: JogoService,
  ) { }

  clicado(entidade) {
    this.aberto = !this.aberto

    if (this.aberto) this.buscarPrecos(entidade)
  }

  pesquisarJogo(event: any): void {
    const requestJogos = new ObterJogosRequest(event.target.value)
    this.inscricao = this.service.obterJogos(requestJogos)
      .subscribe((res: Jogos[]) => {
        this.entidades = res
      });
  }

  buscarPrecos(jogo) {
    const requestprecos = new ObterJogoRequest(jogo.jogoID)
    this.inscricao = this.service.obterJogo(requestprecos)
      .subscribe((res: Jogo) => {
        this.jogo = res
      });
  }
}
