"use strict"

"use strict"

var gBoard


const gLevel = {
    SIZE: 4,
    MINES: 2
}
var gGame = {
    isOn: false,
    revealedCount: 0,
    markedCount: 0,
    secsPassed: 0,
}

function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}
function createCell() {
    var cellObject = {
        minesAroundCount: 0,
        isRevealed: false,
        isMine: false,
        isMarked: false,
    }
    return cellObject
}
function setDifficulty(size) {
    gLevel.SIZE = size
    onInit()

}

function buildBoard() {
    var board = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = createCell()
        }

    }
    if (gLevel.SIZE > 2) {
        board[1][2].isMine = true
        board[2][2].isMine = true
    }
    return board

}
function renderBoard(board) {
    const elBoard = document.querySelector('.board')
    var strHtml = ''
    for (var i = 0; i < board.length; i++) {
        strHtml += `\n<tr>`

        for (var j = 0; j < board[i].length; j++) {
            const cell = board[i][j]
            var Name = `cell`
            if (cell.isMine) Name += ` mine`

            const cellContent = cell.isMine ? `💣` : countNeighbors(board, i, j)
            strHtml += `\n\t<td 
                data-i="${i}" data-j="${j}"
                onclick="onCellClicked(this,${i}, ${j})"
                class="${Name}">${cellContent}</td>`
        }

        strHtml += `\n</tr>`
    }
    elBoard.innerHTML = strHtml
    console.table(board)
}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j; j < board.length; j++) {
            board[i][j].minesAroundCount = countNeighbors(board,i,j)

        }
    }
}

function onCellClicked(elCell, i, j) {
    var cell = gBoardboard[i][j]
    if(cell.isRevealed)return
    cell.isRevealed = true

    if(cell.isMine){
        elCell.innerHTML ="💣"
        console.log(`game over`)
        return
        
    }
    var minesCount = countNeighbors(gBoard,i,j)
    elCell.innerHTML = minesCount || ''
}



function onCellMarked(elCell, i, j) {

}

function checkGameOver() {

}
function expandReveal(board, elCell, i, j) {

}

//will use later for cancel left click on table
// const myTable = document.getElementById('myTable');

//     // Add an event listener for the 'click' event
//     myTable.addEventListener('click', function(event) {
//       // Prevent the default action (e.g., navigating to a link)
//       event.preventDefault();
//       // Optionally, you can also stop the event from bubbling up to other elements
//       event.stopPropagation();
//       // You can also return false
//       return false;
//     });