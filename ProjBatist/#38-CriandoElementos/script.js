//criando o elemento
//criando o elemento
var criarElemento = document.createElement('span');

console.log(criarElemento);

//criando o texto

var criarTexto = document.createTextNode('Eu sou o rei deste beco!');
criarElemento.appendChild(criarTexto);

console.log(criarTexto);

//INSERINDO O TEXTO NO ELEMENTO CRIADO

var body = document.querySelector('body');
console.log(body);

body.appendChild(criarElemento);

//contaiiner

var container = document.querySelector('#container');
console.log(container);


var el = document.createElement('span');

el.appendChild(document.createTextNode('texto do span'));
console.log(el);

container.appendChild(el);

