// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varietà: "zucchina 1",
        peso: 55,
        lunghezza: 12
    },
    {
        varietà: "zucchina 2",
        peso: 80,
        lunghezza: 13
    },
    {
        varietà: "zucchina 3",
        peso: 92,
        lunghezza: 22
    },
    {
        varietà: "zucchina 4",
        peso: 101,
        lunghezza: 9
    },
    {
        varietà: "zucchina 5",
        peso: 68,
        lunghezza: 28
    },
    {
        varietà: "zucchina 6",
        peso: 150, 
        lunghezza: 33
    },
    {
        varietà: "zucchina 7",
        peso: 200,
        lunghezza: 11
    },
    {
        varietà: "zucchina 8",
        peso: 122,
        lunghezza: 25
    },
    {
        varietà: "zucchina 9",
        peso: 80,
        lunghezza: 18
    },
    {
        varietà: "zucchina 10",
        peso: 140,
        lunghezza: 12
    }

];
console.log(zucchine[0].peso)
let sum = 0;


for(i = 0; i < zucchine.length; i++){
    console.log(zucchine[i].peso);
    sum += zucchine[i].peso;
}

console.log(sum)