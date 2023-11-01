class clienteEspecial extends cliente{

    private dependentes: Array<string>;
    constructor (nome: string, cpf:string, conta: Conta, dependente:Array<string>){
        super(nome, cpf, conta);
        this.dependentes = new Array<string>();
        this.dependentes = dependente;
    }
}