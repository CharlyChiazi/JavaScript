var elem = document.createElement('div');

elem.classList = 'divCriada';

elem.appendChild(document.createTextNode('texto da dive'));
console.log(elem);

var container = document.querySelector('#container');

container.appendChild(elem);

//INSERT BEFORE

var elem2 = document.createElement('div');

elem2.classList = 'divAntes';

var elem3 = document.querySelector("#container .divCriada");

console.log(elem3);

container.insertBefore(elem2, elem3);

