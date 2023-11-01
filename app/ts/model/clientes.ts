class clientes {
    private clientes: Array<cliente>
    constructor() {
        this.clientes = new Array<cliente>();
    }
    inserir(cliente: cliente): void {
        this.clientes.push(cliente);
    }
    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
        
    }
    pesquisar(cpf: string): cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }
    listar(): Array<cliente> {
        return this.clientes;
    }
}