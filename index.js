import { Conta } from "./conta.js";
import { Pessoa } from "./pessoa.js";


const cliente1 = new Pessoa("Zico", "11122233344", "1984/09/07");
const cliente2 = new Pessoa("Diego", "99988877766", "1990/04/10");

console.log("Quantidade Contas do Banco = " + Conta.qtdContas);

const conta1 = new Conta(cliente1, 1000.00);
const conta2 = new Conta(cliente2);

console.log("\nQuantidade Contas do Banco = " + Conta.qtdContas);
console.log("\n\n" + conta1);
console.log("\n" + conta2);

conta2.depositar(500.00);

let valorTransf = 250.00;


conta1.transferir(valorTransf, conta2);
console.log("\n\n" + conta1.toString());
console.log("\n" + conta2.toString());