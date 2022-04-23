let cells = document.querySelectorAll(".cell");
arrCells = Array.from(cells);

let currentPlayer = "X";

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const checkForWinner = () => {
  winningCombinations.forEach(function (combination) {
    let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
    if (check) {
      // alert(currentPlayer + "has won")
      highlighCells(combination)
    }
  })
}

function highlighCells(combination) {
  combination.forEach(function (idx) {
    cells[idx].classList.add("highlight")
  })
}
arrCells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    //alert("clickando")
    if (cell.innerText.trim() != "") return
    cell.innerText = currentPlayer;
    checkForWinner()
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  })
})

