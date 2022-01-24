/* 
Napojnica je 15 % za vrijednosti između 50 i 300. Ako je drugačiji value onda je 20% napojnica

1.) lsita racuni koja ima 10 vrijednosti od 1 do 400

2.)napravi prazne liste za napojnice i totale (racun + napojnica)

3.)Zadatak je izracunati inapojince ovisno o velicini racuna
*/


/* const racuni = [25, 76, 98, 244, 766, 223, 356, 22, 77, 84];
let napojnice = new Array();
let totali = new Array();

for (let i = 0; i < racuni.length; i++)
{
    if(racuni[i] >=300 || racuni[i] <=50 ){
        napojnice.push((racuni[i] * 0.15));
        totali.push(racuni[i] + napojnice[i]);
    }
    else{
        napojnice.push((racuni[i] * 0.2));
        totali.push(racuni[i] + napojnice[i]);
    }
}

console.table(napojnice);

function napojniceProsjek(napojniceArray){
    let sum = 0;
    let napojnicaAverage;
    for(let i = 0; i < napojnice.length; i++){
        sum += napojnice[i];
    }

    return napojnicaAverage = sum/napojnice.length;
}

console.log(`prosjek napojnica: ${napojniceProsjek(napojnice)}`); */

//Zadatak 2
/* firma radi na pametnom termometru. Izračunaj apmlitudu vrijednosti temperatura
iz liste temperatura u danu. Dešava se da se ponekad dogodi sensor error u mjerenju.
Taj error isto se zapiše u listu u obliku stringa 'error' a inače su vrijednosti
brojevi
const temperatura = [3,2,-5,-6,-1,'error',4,10,22];

Što je amplituda:
odgovor: razlika između najviše i najniže temperature

kako doći do min i max vrijednosti, kako se postaviti prema erroru i što napraviti 
u tom slučaju

naći min i max vrijednosti amplitude
napravi funkciju oduzimanje i zbrajanje max/min amplitudu i return amplitudu

-guglas kako naci max value u arrayu 
*/

const temperatura = [3,2,-5,-6,-1,'error',4,10,22];
const lista2 = ["error",10,"error",12,15,25];

temperatura.sort();

const calcAmplitude = function (temps){
    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i<temps.length; i++) {
        if(typeof temps[i] !== 'number') continue; //sljedeća iteracija slijedi ako se ispuni uvjet
        if (temps[i] > max) max = temps[i];
        if (temps[i] <min) min = temps[i];
    }
    console.log(`min: ${min}, max: ${max}`);
}

calcAmplitude([3,12,4]);
calcAmplitude(temperatura);
const spojenaLista = temperatura.concat(lista2);
calcAmplitude(spojenaLista);
spojenaLista.sort();
console.log(spojenaLista);

//error catching:

const measureKelvin = function() {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: prompt("Degrees C"),
    };
}

//B.) Find 
console.table(measurement);

//A identify
console.log(measurement.value);
console.warn(measurement.value);
console.error(measurement.value);

const kelvin = measurement.value + 273;