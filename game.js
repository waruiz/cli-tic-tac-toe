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

// rl.question(
//   `Current board:\n\n${board}\n\nPlayer ${player} turn. 
//   Enter board coordinates:\n\n`, function (coords) {
//     console.log(`You entered coordinates: `, coords);
//   });

let game = function () {
  let tempBoard = board.map(row => row.join(' | '));
  tempBoard = tempBoard.join('\n');
  console.log(tempBoard);
};

game();
