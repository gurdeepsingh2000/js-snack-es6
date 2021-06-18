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
    const {nome, punti_fatti , falli_subiti} = teams[x];
    ArrayTeams[x] = {nome, punti_fatti, falli_subiti};
}


console.log(teams);
console.log(ArrayTeams);

let team_fouls;
let team_last_foul = 0;

for(let z = 0; z < teams.length; z++){
   let fouls = teams[z].falli_subiti;
   if(fouls > team_last_foul){
    team_fouls = teams[z];
    team_last_foul = fouls;
   }
   console.log(team_fouls)
}

var tableHTML = document.querySelector('.table-container');

for (var x = 0; x < teams.length; x++) {
    const { nome, punti_fatti, falli_subiti  } = teams[x];

    tableHTML.innerHTML += `
    <ul>
        <li>${nome}</li>
        <li>${punti_fatti}</li>
        <li>${falli_subiti}</li>
    </ul>
    `

    if(teams[x] === team_fouls){
        document.getElementsByTagName("ul")[x + 1].style.backgroundColor = "yellow"
    }
}
