const sketchpad = document.querySelector('.sketchpad')
const btnChange = document.querySelector('.btn-change')

let numberOfSquares = 16


document.addEventListener('DOMContentLoaded', createGrid(numberOfSquares))
sketchpad.addEventListener('mouseenter', changeColor)



function createGrid(n) {
for (let k = 0; k<n; k++) {
    for (let i=0; i<=n; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        square.style.cssText = `flex: 0 1 ${100/numberOfSquares}%`
        sketchpad.appendChild(square)
        }
    }

}

function changeColor() {
    const square = document.querySelectorAll('.square')
    
    square.forEach((e) => e.addEventListener('mouseover', (e) => {
            e.target.classList.add('item-hover')
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

btnChange.addEventListener('click', changeSize)
