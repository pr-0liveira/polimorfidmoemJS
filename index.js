import { Pessoa } from "./pessoa.js";
import { Funcionario } from "./pessoa.js";
import { Conta } from "./conta.js";

const cliente1 = new Pessoa("Zico", "11122233344", "1984/09/07");
const cliente2 = new Pessoa("Diego", "99988877766", "1990/04/10");
const funcio1 = new Funcionario("Archimedes","11222333255","1970/05/05",  "1900.00");
const funcio2 = new Funcionario("Jarbas","6666666669","1924", "900.0" )

console.log("Quantidade Contas do Banco = " + Conta.qtdContas);

const conta1 = new Conta(cliente1);
const conta2 = new Conta(cliente2);

console.log("\nQuantidade Contas do Banco = " + Conta.qtdContas);
console.log("\n\n" + conta1);
console.log("\n" + conta2);
console.log("\n" + funcio1);
console.log("\n" + funcio2);

conta2.depositar(500.00);

let valorTransf = 250.00;

conta2.transferir(valorTransf, conta1);
console.log("\n\n" + conta1.toString());
console.log("\n" + conta2.toString());