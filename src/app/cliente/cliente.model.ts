export class ClienteModel {
    id: number;
	nome: string;
    email: string;
    cpfOuCnpj: string;
    tipo: number;
    enderecos: EnderecoModel[];
}

export class EnderecoModel {
	id: number;
	logradouro: string;
	numero: string;
	complemento: string;
	bairro: string;
	cep: string;
}