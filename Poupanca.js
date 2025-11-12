import { Conta } from "./conta";

export class Poupanca extends Conta {
    #rendimento;

    constructor(cliente, saldo = 0.0, rendimento = 0.0){
        super(cliente, saldo);
        this.#rendimento = rendimento;
    }
    get rendimento(){
        this.#rendimento;
    }

    set rendimento(valor) {
        if (valor < 0.0) {
            this.#rendimento = 0.0;
        } else {
            this.#rendimento = valor;
        }
    }

    viraMes(){
        var rendeu = super.saldo * (this.#rendimento/100);
        super.depositar(rendeu);
        return rendeu;
    }
}