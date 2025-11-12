export class Pessoa {
    #nome;
    #cpf;
    #dataNascimento;

    constructor(nome, cpf, dataNascimento) {
        this.#nome = nome.toUpperCase();
        this.#cpf = cpf;
        if (dataNascimento == undefined) {
            this.#dataNascimento = "01/01/2007";
    }else {
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
            this.#nome = novoNome.toUpperCase();
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
        return "Nome: " +this.#nome +
        "\nCPF: " + this.#cpf +
        "\nData de Nascimento: " + this.#dataNascimento;
    }
}


import { Pessoa } from "./pessoa.js/";
export class Funcionario extends Pessoa{
#matricula;
#salario;
constructor (matricula, nome, cpf , dtNasc, salario=0.0){
super(nome, cpf, dtNasc);
this.#matricula = matricula;
this.#salario = salario;
}
toString() {
return ("Matricula:" + this.#matricula +
"\nNome: " + super.nome +
"\nCPF: " + super.cpf +
"\nNascimento: " + super.dtNascimento +
"Salário: " + this.#salario);
}
}
