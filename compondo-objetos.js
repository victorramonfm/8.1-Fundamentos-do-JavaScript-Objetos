const cliente = {
    nome: "André", // String
    idade: 36, //Número
    cpf: "25648975132", 
    email: "andre@email.com",
    fones: ["5587912345678", "5547956848965"] //Array
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);