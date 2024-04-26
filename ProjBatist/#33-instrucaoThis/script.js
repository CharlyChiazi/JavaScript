console.log(this);

teste = 5;

console.log(teste);
console.log(this.teste);

let pessoa = {
    nome:" Charly ",
    idade:22,
    funcao: function(){
        console.log("ola mundo!");
    },
    sayNome: function(){
        console.log("my name is" + this.nome);
        // console.log("my name is" + nome);
    },
    birthday: function(){
        //console.log(idade);
        this.idade += 1;
    }
};



pessoa.sayNome();

function someThing(){
    let testando = 100;
    console.log(testando);
}

someThing();

var isto = this.testando;
console.log(someThing());

// console.log(someThing());

// pessoa.birthday();
