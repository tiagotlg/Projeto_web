import { DescontoJogoResumo } from "./objects/descontoJogoResumo";

export class Jogos {
    jogoID: string;
    steamAppID: string;
    maisBarato: string;
    maisBaratoID: string;
    externo: string;
    nomeInterno: string;
    thumb: string;
    lojas: DescontoJogoResumo[];
}