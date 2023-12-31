class cliente {
    private _nome:string;
    private _cpf:string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }
    
    set nome(nome):string {
        this._nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf): string {
        this._cpf;
    }

    get conta(): Conta {
        return this._conta;
    }
    set conta(conta): Conta{
        this._conta;
    }
    toString ():string{
        return `Nome:${this._nome} - CPF:${this._cpf} - Conta:${this._conta.numero}`;

    }

}