//Premier tableau

const names = [
    'Bob', 'Maurice', 'David', 'Roger',
];

//Terminal nodemon boucles.js pour afficher le tableau
//TabNine::pour l'autocompletion comme extension

console.log("===============Afficher=================")
console.log(names);

//Boucle for
console.log("===============Boucle for=================")
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Loop While
console.log("===============Loop While=================")
let u = 0;
while (u < names.length) {
    console.log(names[u++]);
}

//Loop Do While
console.log("================Loop Do While================")
let i = 0;
do {
    console.log(names[i]);
    i++;
}
while (i < names.length);

//Loop Foreach
console.log("===============Loop Foreach=================")
console.log("===============Loop Foreach 1er façon=================")
names.forEach(myFunction);

function myFunction(name) {
    console.log(name);
}
console.log("===============Loop Foreach 2eme façon=================")
names.forEach((index, name) => {
    console.log(index, name);
});
console.log("===============Loop Foreach 3eme façon=================")
names.forEach(console.log)

console.log("===============Table de multiplication de 5=================")
for (let i = 0; i <= 10; i++) {
    console.log(i + "x5 " + i * 5);
}
//template litéral
console.log("===============Template littéral=================")
for (let i = 0; i <= 10; i++) {
    console.log(`${i} *5 = ${i * 5}`)
}

const test = `
hello
comment 
tu 
vas
`;
console.log(test)

//Callback est une fonction de rappel