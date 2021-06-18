/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6



//Creo un'array che contiene 3 oggetti
var bike = [
    {
        nome:'BikeA2',
        peso: 20,
    },
    {
        nome:'BikeA7',
        peso: 60,
    },
    {
        nome:'BikeA5',
        peso: 35,
    }
]
        
var first_weigth;
var final_weigth = 100;

for(var x = 0; x < bike.length; x++){
    
    var weigth = bike[x].peso 
    if(weigth < final_weigth){  
        first_weigth = bike[x]; 
        final_weigth = weigth  
    }
}


console.log(first_weigth)


*/



const bike = [
    {
        nome:'BikeA2',
        peso: 20,
    },
    {
        nome:'BikeA7',
        peso: 60,
    },
    {
        nome:'BikeA5',
        peso: 35,
    }
]


let first_weigth;
let final_weigth = 100;

for(let x = 0; x < bike.length; x++){
    
    const weigth = bike[x].peso 
    if(weigth < final_weigth){  
        first_weigth = bike[x]; 
        final_weigth = weigth  
    }
}