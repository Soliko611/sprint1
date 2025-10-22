"use strict"


function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`)//הזרקה של משתנה
  elCell.innerHTML = value //chery
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function countNeighbors(board, celli, cellj) { //minesAroundCount
     var count = 0
    for (var i = celli - 1; i <= celli + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (var j = cellj - 1; j <= cellj + 1; j++) {
            if (j < 0 || j >= board[i].length) continue
            if (i === celli && j === cellj) continue
            if (board[i][j].isMine) count++
        }
    }
    return count
}