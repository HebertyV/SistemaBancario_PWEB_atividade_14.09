class clienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private _clientes: clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta =
            <HTMLInputElement>document.querySelector("#conta");
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this._clientes = new clientes();
    }
    inserir(evento:Event){
        evento.preventDefault();
        let novaConta = new Conta(this.inputConta.value);
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);
        this._clientes.inserir(novoCliente);
        this.inserirCliente(novoCliente);

    }

    listar(){
        this._clientes.listar().forEach(
            (            cliente): void =>{ this.inserirCliente(cliente);
            }
        );

    }
    inserirCliente(cliente: NewType): void{
        const elementoCLI = document.createElement('CLI');
        elementoCLI.innerHTML = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.innerHTML = 'Apagar';
        botaoApagar.addEventListener('click', () => {
            this._clientes.remover(cliente);
            this.listar();
        }
        );
        elementoCLI.appendChild(botaoApagar);
        document.querySelector('#clientes').appendChild(elementoCLI);
    }

}
   