function Cliente(nome, cpf, email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const andre = new Cliente("André", "64895231578", "andre@email.com", 100)
const victor = new Cliente("Victor", "48799631254", "victor@email.com", 80)

console.log(andre);
console.log(victor);