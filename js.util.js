"use strict"


function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`)//הזרקה של משתנה
  elCell.innerHTML = value //chery
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
