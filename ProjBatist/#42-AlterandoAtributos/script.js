var atribut = document.querySelector('#atribut');

atribut.setAttribute("class", "novaClass");

console.log(atribut);


var btn = document.querySelector('#btn');
btn.setAttribute("disabled","disabled");
console.log(btn);

//REMOVER ATRIBUTO COM 
var lista = document.querySelector('.lista');
lista.removeAttribute("id");

console.log(lista);