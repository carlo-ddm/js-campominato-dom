// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

console.log('test');

const main = document.querySelector('main');
const play = document.getElementById('play').addEventListener('click', start);
const bombNumber = 16;

// FUZIONE 1
function start() {
  console.log('Start!');
  main.innerHTML = '';
  bombs.length = 0;
  const level = document.getElementById('level').value;
  const gridLevels = [100, 81, 49];
  const numberSquare = gridLevels[level];
  console.log('Numero delle celle', numberSquare);
  let totxwin = numberSquare - bombNumber;
  let counter = 0; //CREO counter
  generatoreGioco(numberSquare, totxwin, counter); //PASSO counter
  totNumberRandom (bombNumber, numberSquare);
  console.log('------>',bombs);
  console.log(totNumberRandom(bombNumber, numberSquare));
  console.log('Tot - bombs',totxwin);
  console.log(numberSquare);
  // console.log(bombs.length);
  
}


// FUNZIONE 2
function generatoreGioco(numberSquare, totxwin, counter) { //USO counter
  const grid = document.createElement('div');
  grid.className = 'cdd-grid cdd-border';

  for (let i = 1; i <= numberSquare; i++) {
    const cella = document.createElement('div');
    cella.className = 'cdd-square d-flex justify-content-center align-items-center cdd-border';
    cella.classList.add('cdd-square' + numberSquare);
    cella.innerHTML = i;
    grid.append(cella);



    cella.addEventListener('click', function(){
      const valore = parseInt(this.innerText);
      console.log('innerText',valore);
      let grid2;
      grid2 = document.createElement('div');
      grid2.classList.add('cdd-grid2');
      if (bombs.includes(valore)){
        this.classList.add('bomb');
        const tutteLeCelle = document.querySelectorAll('.cdd-square');
        console.log(tutteLeCelle);
        for(let i = 0; i< tutteLeCelle.length; i++){
          const cellaHtml = parseInt(tutteLeCelle[i].innerText)
          if(bombs.includes(cellaHtml)){
            tutteLeCelle[i].classList.add('bomb');

            console.log("funziona cazzo ", tutteLeCelle[i])
          }
        }
        console.log(grid2);
        grid.append(grid2);
        grid2.innerHTML = `Hai perso! Il tuo punteggio è: ${counter}`;

        // Quando l'utente avrà cliccato tutte le celle che non sono una bomba (totxwin = 0) allora inserisco il grid con innerHTML ('Hai vinto')

      } else {
        this.classList.add('clicked');
        counter++;
        console.log('QUESTO è IL COUNTER: ',counter);
        totxwin-- //mettento la sottrazione in questo modo (cioè al valore che si intende sottrarre) si sottrae -1
        console.log(totxwin);
        console.log(this);
        // Quando l'utente avrà cliccato tutte le celle che non sono una bomba (totxwin = 0) allora inserisco il grid con innerHTML ('Hai perso')
        grid2.innerHTML = 'Hai Vinto';
      }
    })
    
  }

  main.append(grid);
}

// FUNZIONE 3
function numberRandom(numberSquare) {
  const estrazione = Math.ceil(Math.random() * numberSquare);
  return estrazione;
}

// console.log(numberRandom(10));

// FUNZIONE 4
const bombs = [];
function totNumberRandom (bombNumber, numberSquare) {
  let bomba;
  for (let i = 0; i < bombNumber; i++) {
    let flag = false;
    
    while(!flag){ 
      bomba = numberRandom(numberSquare);
      console.log("bomba numero", bomba);
      console.log("indice", i);
    
      if(!bombs.includes(bomba)){
        bombs.push(bomba);
        flag = true;
      }
    }
  }
  
  return bomba; // return si scrive solo unicamente al'interno della funzione NO in cicli e in if
}

// console.log(totNumberRandom(bombNumber, numberSquare), bombs);

// in ECMA il cod è sempre a cascata tranne per la creazione di una funzione