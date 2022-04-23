console.log('test');

const main = document.querySelector('main');
const play = document.getElementById('play').addEventListener('click', start);

// FUZIONE 1
function start() {
  console.log('Cominciamo!');
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

  main.append(grid)
}

