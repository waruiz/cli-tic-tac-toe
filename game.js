const readline = require('readline');
const process = require('process');
const util = require('util');

// process.stdin.on('data', function (text) {
//   console.log('PRINTING: ', util.inspect(text));
// });

// process.stdin.addListener('data', function (d) {
//   console.log('PRINTING: ', d.toString());
// })

let board = [
  ['0-0', '0-1', '0-3'],
  ['1-0', '1-1', '1-2'],
  ['2-0', '2-1', '2-2'],
];

let player = 'O';

// process.stdin.addListener('data', function (data) {
//   console.log(`Current board: `, board);
//   console.log(`Player ${player} turn. Enter board coordinates: `)
//   let coordinates = data.toString().split('-');
//   coordinates = coordinates.map(char => char.split('\n')[0]);
//   console.log('YOUR COORDS ARE ', coordinates);
//   let play = board[coordinates[0]][coordinates[1]];
//   console.log('YOU PLAYED: ', play);
//   let player = 'O' ? 'X' : 'O';
// })

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


let promptPlayer = function (player) {
  rl.question(
    `Current board:\n\n${board}\n\nPlayer ${player} turn. 
    Enter board coordinates:\n\n`, function (coords) {
      console.log(`You entered coordinates: `, coords);
  });
};

let logic = function (coords, player) {
  let coordinates = data.toString().split('-');
  coordinates = coordinates.map(char => char.split('\n')[0]);
  let position = board[coordinates[0]][coordinates[1]];

  if (position !== 'X' || position !== 'O') {
    placePiece(player);

    player = 'O' ? 'X' : 'O';
  } else {
    console.log(`Sorry player ${player}, this position is taken.\n
    Please try a different board position.`)
    promptPlayer(player);
  }
};

let stringifyBoard = function () {
  let tempBoard = board.map(row => row.join(' | '));
  tempBoard = tempBoard.join('\n');
  return tempBoard;
};

// game();
