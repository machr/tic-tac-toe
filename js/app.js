var $gameboard = $('.gameboard');
var player1 = {
  name: "Johnny",
  pick: [] // Push coordinate into array for check
};

var player2 = {
  name: "Johnny",
  pick: [] // Push coordinate into array for check
};

var turnCounter = 0;
function getPick(event){
  var coordinate = $(event.target).data( "coordinate" );
  $square = $(event.target);
  if (turnCounter % 2 !== 0) {
    player1.pick.push(coordinate);
    $square.addClass( 'blue' );
  } else {
    player2.pick.push(coordinate);
    $square.addClass( 'green' );
  }
  turnCounter++;
  console.log(turnCounter);

}

// Event listener
$($gameboard).on('click', 'div', getPick);
