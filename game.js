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

let gameContinues = true;

let checkWinner = function (player) {
  // Check rows
  if ((board[0][0] === player) && (board[0][1] === player) && (board[0][2] === player)) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }
  if ( (board[1][0] === player) && (board[1][1] === player) && (board[1][2] === player) ) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }
  if ( (board[2][0] === player) && (board[2][1] === player) && (board[2][2] === player) ) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }

  // Check columns
  if ( (board[0][0] === player) && (board[1][0] === player) && (board[2][0] === player) ) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }
  if ( (board[0][1] === player) && (board[1][1] === player) && (board[2][1] === player) ) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }
  if ( (board[0][2] === player) && (board[1][2] === player) && (board[2][2] === player) ) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }

  // Check diagonals
  if ( (board[0][0] === player) && (board[1][1] === player) && (board[2][2] === player) ) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }
  if ( (board[2][0] === player) && (board[1][1] === player) && (board[0][2] === player) ) {
    console.log(`Player ${player} is winner!`);
    gameContinues = false;
  }
};


let promptPlayer = function (player) {
  rl.question(
    `Current board:\n\n${stringifyBoard()}\n\nPlayer ${player} turn. 
    Enter board coordinates:\n\n`, function (coords) {
      logic(coords, player);
  });
};

let logic = function (coords, player) {
  let coordinates = coords.toString().split('-');
  coordinates = coordinates.map(char => char.split('\n')[0]);
  let position = board[coordinates[0]][coordinates[1]];

  if (position !== 'X' || position !== 'O') {
    board[coordinates[0]][coordinates[1]] = player;

    checkWinner(player);

    player = 'O' ? 'X' : 'O';
    checkWinner(player);
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


