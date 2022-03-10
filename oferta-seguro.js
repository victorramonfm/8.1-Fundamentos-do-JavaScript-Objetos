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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)

    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente));
oferecerSeguro(cliente);