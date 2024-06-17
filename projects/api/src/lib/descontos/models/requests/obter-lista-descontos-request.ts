export class ObterListaDescontoRequest{
    constructor(
        public lojaId?: string,
        public precoMaximo?: string,
        public precoMinimo?: string,
        public rating?: number
    ) { }
}