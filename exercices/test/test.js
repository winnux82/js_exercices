// Autre exercice
console.log("=================Check adults===========");
const ages = [13, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

const result = ages.filter(checkAdult);
console.log(result);