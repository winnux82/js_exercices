//Tableau suite

console.log("=================Tableau suite===========");

const brands = [
    'toyota',
    'peugeot',
    'volkswagen',
    'audi',
    'kia',
    'lada',
]

// Travaillons avec les call back
// Cherchons les éléments qui commencent par t

brands.forEach(function(brand) {
    if (brand[0] === 't') {
        console.log(brand);
    }

});

// avec la méthode Filter
console.log("=================Méthode Filter===========");
const brandsFiltered = brands.filter(function(brand) {
    return brand[0] === 't';
});
console.log(brandsFiltered);


// retourner le tableau avec toutes les lettres en majuscules.
console.log("=================Tout en Majuscule===========");

for (let i = 0; i < brands.length; i++) {
    brands[i] = brands[i].toUpperCase();
}
console.log(brands);

//une fonction qui permet de retourner un tableau avec les valeurs en majuscules
//la callback c'est brands.map(function(brand))

const majuscules = brands.map(x => x.toUpperCase());
console.log(majuscules);

//fonction MAP !
console.log(brands.map(function(brand) {
    return brand.toUpperCase();
}));

//fonction trier !
console.log("=============Trier============")
console.log(brands.sort());


// Autre exercice
console.log("=================Check adults===========");
const ages = [13, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

const result = ages.filter(checkAdult);
console.log(result);

console.log("=================Check adults 2==========");

const chiffres = [13, 5, 54];

function checkChiffres(chiffre) {
    return chiffre > 10;
}
const verif = chiffres.filter(checkChiffres);
console.log(verif);