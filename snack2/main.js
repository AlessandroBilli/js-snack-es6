'use strict'

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squadre = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 }
];

squadre.forEach(squadra => {
    squadra.puntiFatti = generaNumeroCasuale(0, 60);
    squadra.falliSubiti = generaNumeroCasuale(0, 30);
});

const squadreNomiFalliPunti = squadre.map(({ nome, falliSubiti, puntiFatti }) => ({ nome, falliSubiti, puntiFatti }));

console.log("Statistiche squadre:");
console.log(squadreNomiFalliPunti);
