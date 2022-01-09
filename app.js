const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelectorAll('#time-left')
const score = document.querySelectorAll('#score')

let result = 0
let hitPosition
let currenTime = 60
let timerId = null

function randomSquare(){
    square.forEach(square => {
        square.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach(square => {
    square.addEventListener('mousedown', ()=> {
        if (square.id === hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
}) 

function moveMole () {
    
    timerId = setInterval(randomSquare, 500)
}
moveMole()

function countDown() {
    currenTime--
    timeleft.textContent = currenTime

    if (currenTime === 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('game over, your score is' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)