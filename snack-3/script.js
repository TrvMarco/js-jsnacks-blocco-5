const cars = [
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'metano'
    },
    {
        marca: 'volkswagen',
        modello: 'polo',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl'
    },
    {
        marca: 'audi',
        modello: 'a3',
        alimentazione: 'diesel'
    },
    {
        marca: 'mercedes',
        modello: 'classe a',
        alimentazione: 'benzina'
    },
    {
        marca: 'volkswagen',
        modello: 'golf',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'gpl'
    },
    {
        marca: 'volkswagen',
        modello: 'id 3',
        alimentazione: 'elettrico'
    },
    {
        marca: 'suzuki',
        modello: 'swift',
        alimentazione: 'elettrico'
    },
    {
        marca: 'kia',
        modello: 'sportage',
        alimentazione: 'gpl'
    },
];

const arrayBenzina = [];
const arrayDiesel = [];
const arrayOtherAlim = [];

cars.forEach((elm)=>{
    console.log(elm.alimentazione)
    if(elm.alimentazione == 'benzina'){
        arrayBenzina.push(elm);
    }else if (elm.alimentazione == 'diesel'){
        arrayDiesel.push(elm);
    }else{
        arrayOtherAlim.push(elm);
    }

})

console.log(arrayBenzina);
console.log(arrayDiesel);
console.log(arrayOtherAlim);