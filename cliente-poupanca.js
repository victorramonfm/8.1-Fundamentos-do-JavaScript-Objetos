function Cliente(nome, cpf, email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju", "68994545321", "ju@email.com", 100, 200)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30);

console.log(ju.saldoPoup);
console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(andre instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)