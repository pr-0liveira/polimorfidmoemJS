export class conta {
    #qtdContas = 0;
    #id;
    #saldo;
    #titular;

    constructor(qtdContas, id, saldo, titular) {
        this.#qtdContas = qtdContas;
        this.#id = id;
        this.#saldo = saldo;
        this.#titular = titular;
    }
}



