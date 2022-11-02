let countEl = document.getElementById("count-el")
let count = 0

function onePoint() {
    count += 1
    countEl.textContent = count
}

function twoPoint() {
    count += 2
    countEl.textContent = count
}

function threePoint() {
    count += 3
    countEl.textContent = count
}

let countDos = document.getElementById("count-dos")
let countGuest = 0

function guestOne() {
    countGuest += 1
    countDos.textContent = countGuest
}

function guestTwo() {
    countGuest += 2
    countDos.textContent = countGuest
}

function guestThree() {
    countGuest += 3
    countDos.textContent = countGuest
}