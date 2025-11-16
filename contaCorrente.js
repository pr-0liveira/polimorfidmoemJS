import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;

    constructor(titular, saldo = 0, tarifa = 0, limiteCredito = 0, juros = 0, saldoDevedor = 0) {
        super(titular, saldo);
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
        return super.saldo - this.#saldoDevedor;
    }

    limiteDisponivel() {
        return (super.saldo + this.#limiteCredito - this.#saldoDevedor);
    }

    sacar(valor) {
        if (valor <= 0 && valor < super.saldo + this.#limiteCredito) {
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
        let valorCobrado = this.#tarifa;
        if (this.#saldoDevedor > 0) {
            valorCobrado += this.#saldoDevedor * this.#juros/100;
        }
        if(!super.sacar(valorCobrado)){
            valorCobrado -= super.saldo;
            this.#saldoDevedor += valorCobrado;
            super.sacar(super.saldo);
        }
    }

    depositar(valor){
        if(valor > 0){
            if (this.#saldoDevedor > 0){
                this.#saldoDevedor -= valor;
            }else{
               super.depositar(valor); 
            }
        }else{
            return false
        }
    }
}
