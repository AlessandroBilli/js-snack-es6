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

const squadreNomiFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log("Squadre con nomi e falli subiti:");
console.log(squadreNomiFalli);
