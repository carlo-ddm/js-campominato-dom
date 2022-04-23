console.log('test');

const main = document.querySelector('main');
const play = document.getElementById('play').addEventListener('click', start);

// FUZIONE 1
function start() {
  console.log('Start!');
  main.innerHTML = '';
  const level = document.getElementById('level').value;
  const gridLevels = [100, 81, 49];
  const numberSquare = gridLevels[level];
  console.log('Numero delle celle', numberSquare);

  generatoreGioco(numberSquare);

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

function numberRandom(numberSquare) {
  const estrazione = Math.ceil(Math.random() * numberSquare);
  return estrazione;
}

// console.log(numberRandom(10));


const bombs = [1];
function totNumberRandom (bombNumber, numberSquare) {
  let bomba;
  for (let i = 0; i < bombNumber; i++) {
    const flag = false;
    
    while(!flag){ 
      bomba = numberRandom(numberSquare);
      console.log("bomba numero",bomba);
      console.log(i,"indice");
    
      if(!bombs.includes(bomba)){
        bombs.push(bomba);
        flag = true;
      }
    }
  }
  
  return bomba; // return si scrive solo unicamente al'interno della funzione NO in cicli e in if
}

console.log(totNumberRandom(20,30), bombs);

// in ECMA il cod è sempre a cascata tranne per la creazione di una funzione
