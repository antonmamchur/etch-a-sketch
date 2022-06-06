const sketchpad = document.querySelector('.sketchpad')
const btnChangeSize = document.querySelector('.btn-change-size')
const btnChangeColor = document.querySelector('.btn-change-color')
const inputChangeColor = document.querySelector('.color')

let numberOfSquares = 16
let colorPick = '#000000'
let isDrawing = false
document.addEventListener('DOMContentLoaded', createGrid(numberOfSquares))



function createGrid(n) {
for (let k = 0; k<n; k++) {
    for (let i=0; i<=n; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        square.style.flex = `0 1 ${100/numberOfSquares}%`
        sketchpad.appendChild(square)
        }
    }

}


const changeColorbtn = (e) => {
    colorPick = inputChangeColor.value
}


function changeColor() {
    isDrawing = true
    const square = document.querySelectorAll('.square')

    square.forEach((e) => e.addEventListener('mousemove', function start(e) {
        if (isDrawing === true) {
        e.target.style.background = `${colorPick}`
        }
    }))

}


const changeSize = (e) => {
    if (e) {
    let size = prompt('Number of squares')
    sketchpad.querySelectorAll('.square').forEach((e) => e.remove())
    numberOfSquares = size
    createGrid(numberOfSquares)

    }

}


inputChangeColor.addEventListener('input', changeColorbtn)
btnChangeSize.addEventListener('click', changeSize)
sketchpad.addEventListener('mousedown', changeColor)
sketchpad.addEventListener('mouseup', () => isDrawing = false)

