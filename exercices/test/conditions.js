//Les conditions

const isMan = true;

if (isMan) {
    console.log("Bonjour Monsieur")
} else {
    console.log("Bonjour Madame")
}
//En plus court
console.log(isMan ? "Bonjour Monsieur" : "Bonjour Madame")


//Exercice
// ctrl + / pour tout commenter
let nom = 'Samuel'
if (true) {
    nom += ' Lassoie'
}
console.log(nom)

//Autre exercice
let nb = 16;

if ((nb % 2) == 0) {
    console.log("Nombre divisible par 2");
}
if ((nb % 4) == 0) {
    console.log("Nombre divisible par 4")
}
if ((nb % 3) == 0) {
    console.log("Nombre divisible par 3")
}

// Autre solution
console.log("Autre solution : ");
tableau = [2, 4, 3];

for (i = 0; i <= tableau.length; i++) {
    if ((nb % tableau[i]) == 0)
        console.log("Nombre " + nb + " divisible par " + tableau[i]);
}

// Autre solution de Samuel

const totalNumber = [2, 4, 8, 13];
const nbDivisible = [];

totalNumber.forEach((v) => {
    if (nb % v == 0) { nbDivisible.push(v) }
})

if (nbDivisible.length > 0) {
    console.log('votre nombre est divisible par' + nbDivisible.join(' et '))
}