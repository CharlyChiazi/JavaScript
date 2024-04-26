var el = document.createElement('h3');

el.classList= 'testeClasse';

var texto = document.createTextNode("texto do h3");
el.appendChild(texto);

console.log(el);

var body = document.querySelector('body');
body.appendChild(el);

//SELECIONA RO ELEMENTO UE EU QUERO TROCAR;
var haga2 = document.querySelector('.haga2');
console.log(haga2);

//SELECIONAR O PAI DO EL

var pai = haga2.parentNode;

//TROCAR OS ELEMENTOS;

pai.replaceChild(el, haga2);