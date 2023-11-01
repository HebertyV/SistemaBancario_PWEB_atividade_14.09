let pessoa = new Pessoa("Fulano", 30, new Date(1993, 5, 14));
let pessoaFisica = new PessoaFisica("Ciclano", 40, new Date(1983, 3, 25), "123.456.789-00");
let pessoaJuridica = new PessoaJuridica("Empresa XYZ", 15, new Date(2008, 10, 5), "12.345.678/0001-90");

console.log(pessoa);
console.log(pessoaFisica);
console.log(pessoaJuridica);

let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
