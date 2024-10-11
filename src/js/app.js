import goblinImg from '../images/goblin.png';

export default class GoblinGame {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.goblinImgElement = undefined;
  }

  gameInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const gameBoard = document.querySelector('#game_container');
      this.createGameBoard(gameBoard);
      setInterval(this.moveGoblin, 800);
    });
  }

  createGameBoard(board) {
    for (let i = 0; i < this.boardSize; i += 1) {
      const row = document.createElement('tr');
      for (let j = 0; j < this.boardSize; j += 1) {
        const cell = document.createElement('td');
        cell.classList.add('cell_move');
        row.appendChild(cell);
      }
      board.appendChild(row);
    }
    return board;
  }

  moveGoblin() {
    const cells = document.querySelectorAll('.cell_move');
    const randomIndex = Math.floor(Math.random() * cells.length);
    const randomCell = cells[randomIndex];
    if (this.goblinImgElement) {
      this.goblinImgElement.remove();
    }
    const img = document.createElement('img');
    img.src = goblinImg;
    randomCell.appendChild(img);
    this.goblinImgElement = img;
  }
}

// export const boardSize = 4;
// let goblinImgElement = null;

// export function initGame() {
//   const gameBoard = document.querySelector('#game_container');
//   createGameBoard(gameBoard);
// }

// function createGameBoard(board) {
//   for (let i = 0; i < boardSize; i += 1) {
//     const row = document.createElement('tr');
//     for (let j = 0; j < boardSize; j += 1) {
//       const cell = document.createElement('td');
//       cell.classList.add('cell_move');
//       row.appendChild(cell);
//     }
//     board.appendChild(row);
//   }
//   return board;
// }

// function moveGoblin() {
//   const cells = document.querySelectorAll('.cell_move');
//   const randomIndex = Math.floor(Math.random() * cells.length);
//   const randomCell = cells[randomIndex];

//   if (goblinImgElement) {
//     goblinImgElement.remove();
//   }
//   const img = document.createElement('img');
//   img.src = goblinImg;
//   randomCell.appendChild(img);
//   goblinImgElement = img;
// }

// initGame()
// setInterval(moveGoblin, 800);
