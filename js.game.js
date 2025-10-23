"use strict"

"use strict"

var gBoard
var gGame
var gLevel
var gLife = 3


function createLevel(size, mines) {
    gLevel = {
        SIZE: size,
        MINES: mines
    }
    return gLevel
}
function creategame() {
    var gGame = {
        isOn: false,
        revealedCount: 0,
        markedCount: 0,
        secsPassed: 0,
    }
    return gGame
}

function onInit() {
    if (!gLevel) {
        createLevel(4, 2)

    }

    gGame = creategame()
    gBoard = buildBoard(gLevel.SIZE)
    placeMines(gBoard, gLevel.MINES)
    setMinesNegsCount(gBoard)
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
function setDifficulty(size, mines) {
    gLevel = createLevel(size, mines)
    onInit()

}

function buildBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = createCell()
        }


    }

    return board

}
function placeMines(board, minesCount) {
    var cells = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        for (var j = 0; j < gLevel.SIZE; j++) {
            cells.push({ i, j })
        }
    }
    var placed = 0

    while (placed < minesCount) {
        var idx = getRandomIntInclusive(0, cells.length - 1)
        var cell = cells[idx]
        if (!board[cell.i][cell.j].isMine) {
            board[cell.i][cell.j].isMine = true
            placed++
        }
    }
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
            const cellContent = ``
            strHtml += `\n\t<td 
                data-i="${i}" data-j="${j}"
                onclick="onCellClicked(this,${i}, ${j})"
                oncontextmenu="onCellMarked(this,${i},${j}); return false"
                class="${Name}">${cellContent}</td>`
        }

        strHtml += `\n</tr>`
    }
    elBoard.innerHTML = strHtml
    console.table(board)
}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            board[i][j].minesAroundCount = countNeighbors(board, i, j)

        }
    }
}

function onCellClicked(elCell, i, j) {
    var cell = gBoard[i][j]
    if (cell.isRevealed) return
    cell.isRevealed = true
    elCell.classList.add("revealed")


    var minesCount = countNeighbors(gBoard, i, j)
    elCell.innerHTML = minesCount || ''

    if (cell.isMine) {
        elCell.innerHTML = "💣"
        // console.log(`game over`)
        alert("Game over!")
        return

    }
}


document.addEventListener('contextmenu', event => event.preventDefault())
function onCellMarked(elCell, i, j) {
    var cell = gBoard[i][j]
    if (cell.isRevealed) return
    cell.isMarked = !cell.isMarked
    elCell.innerHTML = cell.isMarked ? `🏴` : ""
}

function checkGameOver() {
    // gGame.isOn = false

    
}
function expandReveal(board, elCell, i, j) {

}
