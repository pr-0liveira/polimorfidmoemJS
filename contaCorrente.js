import Conta from "conta.js";
import { Conta } from "./pessoa.js";

export class ContaCorrente extends Conta {
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;

    constructor(titular, saldo = 0, tarifa = 0, limiteCredito = 0, juros = 0, saldoDevedor = 0) {
        super(saldo, titular);
        this.#tarifa = tarifa;
        this.#limiteCredito = limiteCredito;
        this.#juros = juros;
        this.#saldoDevedor = saldoDevedor;
    }

    get tarifa() {
        return this.#tarifa;
    }

    set tarifa(valor) {
        if (valor < 0) {
            this.#tarifa = 0
        } else {
            this.#tarifa = valor
        }
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    set limiteCredito(valor) {
        if (valor > 200) {
            this.#limiteCredito = valor
        } else {
            this.#limiteCredito = 200
        }
    }


    get juros() {
        return this.#juros;
    }

    set juros(valor) {
        if (valor <= 0) {
            this.#juros = 0
        } else {
            this.#juros = valor
        }
    }
    get saldoDevedor() {
        return this.#saldoDevedor;
    }

    set saldoDevedor(valor) {
        if (valor < 0) {
            this.#saldoDevedor = 0
        } else {
            this.#saldoDevedor = valor
        }
    }


    get saldo() {
        return super.saldo + this.#limiteCredito;
    }

    limiteDisponivel() {
        return super.saldo + this.#limiteCredito;
    }

    sacar(valor) {
        if (valor < super.saldo + this.#limiteCredito) {
            if (valor <= super.saldo) {
                return super.sacar(valor);
            } else {
                let valordeLimite = valor - super.saldo;
                super.sacar(super.saldo);
                this.#limiteCredito -= valordeLimite;
                return true;
            }
        }
        return false;
    }

    viraMes() {
        if (this.#saldoDevedor > 0) {
            this.#saldoDevedor *= this.#juros;
        } else if (super.saldo > 0) {
            super.saldo -= this.#tarifa;
        }
    }

    depositar(valor){
        if(valor > 0){
            if (this.#saldoDevedor > 0){
                this.#saldoDevedor -= valor;
            }else{
                super.saldo += valor;
            }
        }else{
            return false
        }
    }
}
