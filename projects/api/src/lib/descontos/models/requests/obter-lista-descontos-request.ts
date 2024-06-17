export class ObterListaDescontoRequest{
    constructor(
        public lojaId?: number,
        public precoMaximo?: number,
        public precoMinimo?: number,
        public rating?: number,
        public pageNumber?: number,
        public pageSize?: number
    ) { }
}