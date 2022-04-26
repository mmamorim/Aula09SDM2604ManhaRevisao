
let pessoas = [
    {
        nome: "ANA",
        idade: 23,
        hobbies: [
            "correr", "bike", "cinema"
        ]
    },
    {
        nome: "BIA",
        idade: 23,
        hobbies: [
            "correr", "bike", "cinema"
        ]
    },
    {
        nome: "JOÃO",
        idade: 23,
        hobbies: [
            "correr", "bike", "cinema"
        ]
    }
]

let pessoas2 = {
    ana: {
        nome: "ANA",
        idade: 23,
        hobbies: [ "bike", "cinema" ]
    },
    bia: {
        nome: "BIA",
        idade: 23,
        hobbies: [
            "correr", "bike", "cinema"
        ]
    },
    joao: {
        nome: "JOÃO",
        idade: 23,
        hobbies: [
            "correr", "bike", "cinema"
        ]
    }
}

let hobbies = {
    bike: {
        descr: "Andar de Bike",
        categoria: "Sports" 
    },
    cinema: {
        descr: "Assistir filmes",
        categoria: "Artes" 
    },
}



console.log("pessoas", pessoas);
console.log("pessoa", pessoas[2]);

console.log("pessoas2", pessoas2);
console.log("pessoas2.bia", pessoas2["bia"].hobbies);

let h = pessoas2.ana.hobbies[0]
console.log("hobie", h);

console.log("1o hobie da ana", hobbies[h]);