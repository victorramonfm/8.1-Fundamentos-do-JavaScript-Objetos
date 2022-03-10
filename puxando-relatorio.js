const cliente = {
    nome: "André",
    idade: 36,
    cpf: "25648975132",
    email: "andre@email.com",
    fones: ["5587912345678", "5547956848965"],
    dependentes: [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014",
        }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor;
    }
}

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `${info} -> ${cliente[info]} \n`
    }
}

console.log(relatorio);
