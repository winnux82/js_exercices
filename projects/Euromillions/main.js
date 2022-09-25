/* Spéciale dédicace à mon père Ghislain Vandermeulen né le 12/10/1954 et décédé le 16/02/2014
Et à ma mère Anita Van Buren née le 02/07/1953 et décédée le 04/12/2021
# Pour l'EuroMillions du 15 Juillet 2022
*/
console.log("EuroMillions & Lotto");
console.log("--------------------");


//EuroMillions
const ListNum = [];
const ListNumComplemtaires = [];

function compareNumbers(a, b) {
    return a - b;
}

while (ListNum.length < 5) {
    numero = Math.round(Math.random() * 50);
    if (!(numero in ListNum)) {
        ListNum.push(numero);
    }
}
while (ListNumComplemtaires.length < 2) {
    numero = Math.round(Math.random() * 12);
    if (!(numero in ListNumComplemtaires)) {
        ListNumComplemtaires.push(numero);
    }
}

ListNum.sort(compareNumbers);
ListNumComplemtaires.sort(compareNumbers);
console.log('Liste des Numéros pour l\'Euro Millions : [' + ListNum + "]  [" + ListNumComplemtaires + "]");

//Lotto 
//reset
delete ListNum;

while (ListNum.length < 6) {
    numero = Math.round(Math.random() * 45)
    if (!(numero in ListNum)) {
        ListNum.push(numero);
    }
}
ListNum.sort(compareNumbers);
console.log("Liste des Numéros pour le lotto : [" + ListNum + "]");