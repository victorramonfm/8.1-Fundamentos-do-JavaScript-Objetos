const cliente = {
    nome: "Victor",
    idade: 27,
    cpf: "25648975132",
    email: "victor@email.com" 
}

const chaves = ["nome", "idade", "cpf", "email"];

//console.log(cliente[chaves[0]]);

chaves.forEach(elemento => console.log(cliente[elemento]));


