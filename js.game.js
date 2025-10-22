"use strict"

"use strict"

var gBoard

var Cell = {
    minesAroundCount: 4,
    isRevealed: false,
    isMine: false,
    isMarked: false,
}

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
    return {
        minesAroundCount: 0,
        isRevealed: false,
        isMine: false,
        isMarked: false,
    }
}

function buildBoard() {
    var board = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = createCell()
        }
        Cell[1][2] = !ismine
        Cell[2][2] = !ismine
    }
    return board

}
function renderBoard(board) {
    const elBoard = document.querySelector('.board')
    var strHtml = ''
    for (var i = 0; i < gBoard.length; i++) {
        strHtml += `\n<tr>`

        for (var j = 0; j < gBoard[i].length; j++) {
            const strClassName = gBoard[i][j]
            strHtml += `\n\t<td 
                data-i="${i}" data-j="${j}"
                onclick="onCellClicked(${i}, ${j}, this)"
                class="${strClassName}">${gBoard[i][j]}</td>`
        }
        strHtml += `\n</tr>`
    }
    elBoard.innerHTML = strHtml
    console.table(board)
}

function setMinesNegsCount(board) {

}


function onCellClicked(elCell, i, j) {

}

function onCellMarked(elCell, i, j) {

}

function checkGameOver() {

}
function expandReveal(board, elCell, i, j) {

}
