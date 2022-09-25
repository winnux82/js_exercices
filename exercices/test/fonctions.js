//déclarer une fonction

function calcul(nb1, nb2) { return nb1 * nb2 };

console.log(calcul(2, 3));

//2ième façon
const calcul2 = function(nb1, nb2) { return nb1 * nb2 }

//arrow function

const calcul3 = (n1, n2) => n1 * n2;

console.log(calcul3(18, 13));

//Les dates
const d3 = new Date();
const de = new Date('2019-01-01');
//console.log(d);

//Exercice : en fonction de la date donner l'année scolaire
//01 / 09 au 31 / 08

const today = new Date('2014-09-01');

function getAcademyYear(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (month > 8) {
        const nextYear = year + 1;
        return `${year.toString().slice(-2)}-${nextYear.toString().slice(-2)}`
    } else {
        const previousYear = year - 1;
        return `${previousYear.toString().slice(-2)}-${year.toString().slice(-2)}`
    }
}

console.log(getAcademyYear(today));

//Exercice demandé Réaliser une fonction dans laquelle vous pouvez passer 0 à X paramètres et elle doit vous retourner les nombres triés multipliés par 2

nombres = [2, 54, 8];

//-----------------------------------------
for (let i = 0; i < nombres.length; i++) {
    nombres[i] = nombres[i] * 2;
}
nombres.sort(function(a, b) { return a - b; });
console.log(nombres);

//-----------------------------------------

nombres = [2, 54, 8];

var nombres2 = [];
nombres.forEach(element => {
    element = element * 2;
    nombres2.push(element);
});
nombres2 = nombres2.sort(function(a, b) { return a - b; });
console.log(nombres2);