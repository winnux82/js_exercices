//ancienne version
var prenom = 'bob';
//nouvelle version
let prenom2 = 'bobette';
const prenom3 = 'billy';
console.log(prenom);
console.log(prenom2);
console.log(prenom2);
console.log(prenom3);
/*
Npm i -g nodemon
Pour lancer automatiquement 
nodemon variables.js
*/

//constantes

const prenoms = [];
prenoms.push('Roger', 'Maurice');
//prenoms = ['Rogereee', 'Maurice'];

console.log(prenoms);

//pq ne plus utiliser var, var a une portée de fonction, let une portée d'accolade.

var numero = 1;
if (true) {
    var numero = 10;
    if (true) {
        var numero = 18;
    }
}
console.log(numero);

// avec let
let numero2 = 1;
if (true) {
    let numero2 = 10;
    if (true) {
        let numero2 = 18;
    }
}
console.log(numero2);

var n1 = 10;
let n2 = 10;

function calculate() {
    return n1 + n2;
}
console.log(calculate())