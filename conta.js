import { Pessoa } from "./pessoa.js";

export class Conta {
    static #qtdContas = 0;
    #id;
    #saldo;
    #titular;

    constructor(cliente, saldo = 0.0) {
        this.titular = cliente;
        this.#saldo = saldo < 0 ? 0.0 : saldo;
        Conta.#qtdContas++;
        this.#id = "" + new Date().getFullYear() + Conta.#qtdContas;
    }
    get id() {
        return this.#id;
    }
    static get qtdContas() {
        return Conta.#qtdContas;
    }
    get saldo() {
        return this.#saldo;
    }
    get titular() {
        return this.#titular;
    }
    set titular(cliente) {
        if (cliente != undefined && cliente instanceof Pessoa) {
            this.#titular = cliente;
            return cliente;
        } else {
            return null;
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor) {
        if (valor > 0.00) {
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    transferir(valor, contaDestino) {
        if (contaDestino instanceof Conta && this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

    toString() {
        return ("Nº Conta = " + this.#id +
            "\nTitular = " + this.#titular.toString() +
            "\nSaldo= " + this.#saldo.toFixed(2));
    }
}