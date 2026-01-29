//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const player1Input = document.getElementById("player-1");
const player2Input = document.getElementById("player-2");

const form = document.getElementById("player-form");
const game = document.getElementById("game");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";
let board = Array(9).fill("");

const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

submitBtn.addEventListener("click", () => {
  player1 = player1Input.value.trim();
  player2 = player2Input.value.trim();

  if (!player1 || !player2) return;

  form.style.display = "none";
  game.style.display = "block";

  currentPlayer = player1;
  message.innerText = `${currentPlayer}, you're up`;
});

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "" || checkWinner()) return;

    cell.innerText = currentSymbol;
    board[index] = currentSymbol;

    if (checkWinner()) {
      message.innerText = `${currentPlayer}, congratulations you won!`;
      return;
    }

    togglePlayer();
  });
});

function togglePlayer() {
  if (currentSymbol === "X") {
    currentSymbol = "O";
    currentPlayer = player2;
  } else {
    currentSymbol = "X";
    currentPlayer = player1;
  }
  message.innerText = `${currentPlayer}, you're up`;
}

function checkWinner() {
  return winningCombos.some(combo => {
    return combo.every(index => board[index] === currentSymbol);
  });
}
