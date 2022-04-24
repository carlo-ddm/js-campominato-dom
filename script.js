console.log('test');

const main = document.querySelector('main');
const play = document.getElementById('play').addEventListener('click', start);
const bombNumber = 16;

// FUZIONE 1
function start() {
  console.log('Start!');
  main.innerHTML = '';
  const level = document.getElementById('level').value;
  const gridLevels = [100, 81, 49];
  const numberSquare = gridLevels[level];
  console.log('Numero delle celle', numberSquare);

  generatoreGioco(numberSquare);
  totNumberRandom (bombNumber, numberSquare);
  console.log(totNumberRandom(bombNumber, numberSquare));
  
  
}


// FUNZIONE 2
function generatoreGioco(numberSquare) {
  const grid = document.createElement('div');
  grid.className = 'cdd-grid cdd-border';

  for (let i = 1; i <= numberSquare; i++) {
    const cella = document.createElement('div');
    cella.className = 'cdd-square d-flex justify-content-center align-items-center cdd-border';
    cella.classList.add('cdd-square' + numberSquare);
    cella.innerHTML = i;
    grid.append(cella);

    cella.addEventListener('click', function(){
      this.classList.add('clicked');
      console.log(this);
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
      console.log("bomba numero",bomba);
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