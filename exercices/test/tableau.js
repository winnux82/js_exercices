// Les tableaux
console.log("Les tableaux");
//3 façons de faire pour déclarer un tableau
const t1 = [];
const t2 = Array();
const t3 = new Array();

//Ajouter des informations dans un tableau
t1.push('Hello ');
t1.push('World ');
t1.push('coucou', 'beuh')


t1[3] = 'yo';
t1['test'] = 'salut';
//On rajoute à la fin
t1[t1.length] = 'YO';
//On rajoute au début
t1.unshift('Premier');
//On enlève un élément à la fin
t1.pop()
    //On enlève le premier élément


//changer une valeur
t1[2] = 'Worldddd';

//Supprimer une valeur
delete t1[0];
//On démarre à 1 et on supprime 1 élément
//t2 = ['Maison', 'voiture', 'vélo', 'bus', 'moto'];
t2.splice(1, 2);

//Afficher le tableau
console.log(t2);

//Pour vider le tableau
t1.length = 0;
console.log

// Afficher que Roger
const user = [
    ['Maurice', 'Roger'],
    ['Bob', 'Rober']
]

console.log(user[0][1]);

//savoir si c'est un tableau
typeof(t3);
Array.isArray(t3);