class Conta {

    constructor(numero, saldo=0, dataAniversario) {
        this.saldo = saldo;
        this.numero = numero;
        this.dataAniversario = dataAniversario;
    }

    debitar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    creditar(valor){
        this.saldo += valor;
    }

    transferir(destino, valor){
        this.debitar(valor);
        destino.creditar(valor);
    }

}
