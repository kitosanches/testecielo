import { ProdutoModel } from './../produto/produto.model';
export class CategoriaModel {
    id: number;
	nome: string;
	produtos: ProdutoModel[];
}