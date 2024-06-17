import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListaDescontos } from 'projects/api/src/lib/descontos';
import { DescontoService } from 'projects/api/src/lib/descontos/desconto.service';
import { ObterListaDescontoRequest } from 'projects/api/src/lib/descontos/models/requests/obter-lista-descontos-request';
import { Subscription } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {
  formulario: FormGroup;
  inscricao: Subscription;
  entidades: ListaDescontos[];

  steam: boolean = true;
  gog: boolean = true;
  origin: boolean = true;
  uplay: boolean = true;
  epic: boolean = true;
  blizzard: boolean = true;

  mostrarSelecaoLojas: boolean = false;
  lojasDisponiveis: { label: string, value: string }[] = [
    { label: 'Steam', value: '1' },
    { label: 'GOG', value: '7' },
    { label: 'Origin', value: '8' },
    { label: 'Uplay', value: '13' },
    { label: 'Epic Games Store', value: '25' },
    { label: 'Blizzard Shop', value: '31' },
  ];
  lojasSelecionadas: string[] = [];

  steamRating: number = 95;
  label: string = '95% +';
  rangeValues: number[] = [0, 50];

  constructor(private service: DescontoService,
    private fb: FormBuilder
  ) { }

  first: number = 0;

  rows: number = 25;

  onPageChange(event: any) {
    console.log(event);
    this.first = event.page;
    this.rows = event.rows;

    const requestJogos = new ObterListaDescontoRequest(0, 0, 0, 0, event.page, event.rows)
    // console.log('request:', requestJogos)
    this.inscricao = this.service.obterListaDescontos(requestJogos)
      .subscribe((res: ListaDescontos[]) => this.entidades = res);
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      preco: [0],
      porcentagem: [0],
      lojas: [this.lojasSelecionadas]
    });

    this.updateLabel();
  }

  updateLabel() {
    if (this.steamRating === 45) {
      this.label = 'qualquer';
    } else {
      const percentage = (this.steamRating);
      this.label = `${percentage}% +`;
    }
  }

  lojas(): void {
    this.mostrarSelecaoLojas = true;
  }

  onLojasChange(event: any): void {
    this.lojasSelecionadas = event.value;
    this.formulario.get('lojas')?.setValue(this.lojasSelecionadas);
  }

  fecharDialog(): void {
    this.mostrarSelecaoLojas = false;
  }

  onSubmit(): void {
    const requestJogos = new ObterListaDescontoRequest(0, 0, 0, 0, this.first, this.rows)
    this.inscricao = this.service.obterListaDescontos(requestJogos)
      .subscribe((res: ListaDescontos[]) => {
        this.entidades = res
      });
  }
}