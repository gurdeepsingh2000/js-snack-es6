/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/



const teams = [{
    nome: 'Roma',
    punti_fatti: 0,
    falli_subiti: 0
},

{
    nome: 'Juventus',
    punti_fatti: 0,
    falli_subiti: 0
},

{
    nome: 'Inter',
    punti_fatti: 0,
    falli_subiti: 0
}
]

const numberRandom =  (min, max) => Math.floor(Math.random() * (max - min + 1) + min)


const ArrayTeams = [];

for(let x = 0; x < teams.length; x++){
    teams[x].punti_fatti = numberRandom(1,20);
    teams[x].falli_subiti = numberRandom(1,20);
    const {nome, falli_subiti} = teams[x];
    ArrayTeams[x] = {nome, falli_subiti};
}
console.log(teams);
console.log(ArrayTeams);


