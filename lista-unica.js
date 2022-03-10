const clientes = [
    {
        nome: "André",
        cpf: "25648975132",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014",
        }
        ]
    },
    {
        nome: "juliana",
        cpf: "25648975132",
        email: "andre@email.com",
        fones: ["5587912345678", "5547956848965"],
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }
        ],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes);
