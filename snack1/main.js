'use strict'

const bici = [
    {
        Nome: 'Fulmine Giallo',
        Peso: '9 kg',
        
    },
    {
        Nome: 'Scheggia Rossa',
        Peso:'11 kg',
        
    },
    {
        Nome: 'Onda Blu',
        Peso:'8 kg',
       
    },
    {
        Nome: 'Freccia Argento',
        Peso:'10 kg',
    
    },
 
];



  
  let biciLeggera = bici[0]; 
  
  for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.Peso) {
      biciLeggera = bici[i];
    }
  }
  
  const { Nome, Peso } = biciLeggera;
  
  console.log(`La bici più leggera è "${Nome}" con un peso di ${Peso} kg.`);
  


  const listaBici = document.createElement('ul');


bici.forEach(bici => {
    const listItem = document.createElement('li');
    listItem.textContent = `${bici.Nome} - Peso: ${bici.Peso}`;
    listaBici.appendChild(listItem);
});


document.body.appendChild(listaBici);

const risultato = document.createElement('h3');
risultato.textContent = `La bici più leggera è "${Nome}" con un peso di ${Peso} kg.`;
document.body.appendChild(risultato);