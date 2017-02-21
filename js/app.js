
function createBoard() {
  var gameboard = document.querySelector('.gameboard');
  for (var k = 1; k <= 9; k++) {
    var square = document.createElement('div');
    square.innerHTML = k;
    square.classList.add('square');
    gameboard.appendChild(square);
  }
}

createBoard();
