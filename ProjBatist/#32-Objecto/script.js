let pessoa = {
    nome: "Charly",
    idade: 22,
    desporto:"Futebol",
    masculino: true,
    jogar: function(a,b){
        //console.log("Retorno da funcao")
        return a+b
    }
};

console.log(pessoa);
// console.log(pessoa.length)
console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa.jogar(2,8));

console.log(pessoa.masculino);