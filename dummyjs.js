//Basic setup
// Determine Winner
// Basic AI and winner Notification
// Minimax algorithm

let origBoard //keeps track if x or 0 or nothing
const player = 'X'
const ai = 'O'
//array of full of array
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const cells = document.querySelectorAll('.cell')
startGame()
debugger
function startGame() {
  document.querySelector('.endgame').style.display = 'none'
  origBoard = Array.from(Array(9).keys())
  console.log(origBoard)
}

alert('hellomac')
