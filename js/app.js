//create row of three
// function createRow(){
//   var row = [];
//   for(var i = 1; i <= 3 ; i++){
//     row.push(i);
//   }
//   return (row);
// }


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
