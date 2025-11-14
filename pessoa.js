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
        return "Nome: " + this.#nome +
            "\nCPF:" + this.#cpf +
            "\nData de Nascimento: " + this.#dataNascimento;
    }
}

export class Funcionario extends Pessoa {
    static #quantidadeFunc = 0;
    #matricula;
    #salario;

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

    toString() {
        return ("Matricula:" + this.#matricula +
            "\nNome: " + super.nome +
            "\nCPF: " + super.cpf +
            "\nNascimento: " + super.dataNascimento +
            "\nSalário: " + this.#salario);
    }
}
