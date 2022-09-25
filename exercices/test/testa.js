function dateScolaire(a, b) {
    const mois = [];
    mois.push('janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre');
    a = a - 1;

    if (a > 6) {
        const x = (b - 2000) + "-" + (b - 1999);
        console.log(mois[a], x);
    } else {
        x = (b - 2001) + "-" + (b - 2000);
        console.log(mois[a], x);
    }

}

console.log(dateScolaire(4, 2015));