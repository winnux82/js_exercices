//Exercice : en fonction de la date donner l'année scolaire
//01 / 09 au 31 / 08

const today = new Date('2014-04-01');

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