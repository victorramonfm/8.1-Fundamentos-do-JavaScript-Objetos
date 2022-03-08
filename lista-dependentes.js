const cliente = {
    nome: "André", // String
    idade: 36, //Número
    cpf: "25648975132",
    email: "andre@email.com",
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }],
    fones: ["5587912345678", "5547956848965"] //Array
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014",
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome);

