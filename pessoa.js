export class Pessoa {
    #nome;
    #cpf;
    #dataNascimento;

    constructor(nome, cpf, dataNascimento) {
        this.#nome = nome.toUpperCase();
        this.#cpf = cpf;
        if (dataNascimento == undefined) {
            this.#dataNascimento = "01/01/2007";
        } else {
            this.#dataNascimento = dataNascimento;
        }
    }
    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        if (novoNome.length < 2) {
            console.log("Nome deve ter pelo menos 3 caracteres.");
        } else {
<<<<<<< HEAD
            this.#nome = novoNome.toUpperCase();
=======
            return this.#nome = novoNome.toUpperCase();
>>>>>>> vitor
        }
    }

    get cpf() {
        return this.#cpf;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    set dataNascimento(novaData) {
        if (novaData === undefined || novaData.length < 10) {
            this.#dataNascimento = "01/01/2007";
        } else {
            this.#dataNascimento = novaData;
        }
    }

    toString() {
        return "Nome: " + this.#nome +
<<<<<<< HEAD
            "\nCPF: " + this.#cpf +
=======
            "\nCPF:" + this.#cpf +
>>>>>>> vitor
            "\nData de Nascimento: " + this.#dataNascimento;
    }
}

export class Funcionario extends Pessoa {
    static #quantidadeFunc = 0;
    #matricula;
    #salario;

<<<<<<< HEAD
import { Pessoa } from "./pessoa.js/";
export class Funcionario extends Pessoa {
    #matricula;
    #salario;
    constructor(matricula, nome, cpf, dtNasc, salario = 0.0) {
        super(nome, cpf, dtNasc);
        this.#matricula = matricula;
        this.#salario = salario;
    }
=======
    constructor(nome, cpf, dtNasc, matricula, salario = 0.0) {
        super(nome, cpf, dtNasc);
        Funcionario.#quantidadeFunc++;
        this.#matricula = "" + new Date().getFullYear()+ "Func" + Funcionario.quantidadeFunc;
        this.#salario = salario;
    }

    static get quantidadeFunc() {
        return Funcionario.#quantidadeFunc;
    }

    set salario(salario) {
        if (salario > 0.0) {
            this.#salario = salario;
        }

        return salario;
    }

    get matricula() {
        return this.#matricula;
    }

>>>>>>> vitor
    toString() {
        return ("Matricula:" + this.#matricula +
            "\nNome: " + super.nome +
            "\nCPF: " + super.cpf +
<<<<<<< HEAD
            "\nNascimento: " + super.dtNascimento +
            "Salário: " + this.#salario);
    }
}
=======
            "\nNascimento: " + super.dataNascimento +
            "\nSalário: " + this.#salario);
    }
}
>>>>>>> vitor
