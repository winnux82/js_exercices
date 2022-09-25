//pour déclarer un objet
//initialiser un objet vide
const o1 = {};
const o2 = new Object();

console.log(o1, o2);
console.log(o1 == o2);

// initialiser avec des objets à l'intérieur

const obj1 = { nom: 'Bob', prenom: 'Marley' };

// rajouter une constante dans ton objet

obj1.genre = 'masculin';
console.log(obj1);

//n'afficher que le genre
console.log(obj1.genre);
//Autre façon
console.log(obj1['genre'])

//faire disparaitre le nom
//delete obj1.nom;
console.log(obj1);

//itérer sur un objet
/*
Object.entries(obj1).forEach()(function(t) {
        console.log(t[0], t[1]);
    })
    */
//ou
for (const t in obj1) {
    console.log(t, obj1[t]);
}