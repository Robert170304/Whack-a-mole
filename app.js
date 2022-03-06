const grid = document.querySelector('.grid')
const squares = document.querySelectorAll('.square')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')
const startBtn = document.querySelector('.startGame')
const resetBtn = document.querySelector('.resetGame')


let randomSquare;
let result = 0
let currentTime = 60
let timeId;
let timeLeftText;
//let hitposition;



startBtn.addEventListener('click', startGame)
function startGame() {
    function randomSqareFunc() {
    squares.forEach(square => {
     square.classList.remove('mole')
    
})
 randomSquare = squares[Math.floor(Math.random() * 9)]
randomSquare.classList.add('mole')
 //hitposition = randomSquare.id
 //console.log(hitposition)
}


squares.forEach(square => {
    square.addEventListener('mousedown', function() {
       //console.log(square)
        if (square == randomSquare) {
              // console.log('same ')
            result++;
            score.textContent = result
            randomSquare = null
        }
        startBtn.removeEventListener('click', startGame)
    })
})

function moveMole() {
   timeId = setInterval(randomSqareFunc, 700)
}
moveMole()

function countdown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timeId)
        clearInterval(timeLeftText)
        alert('TIME UP, BUDDY!  \n Your score is ' + result)
        startBtn.removeEventListener('click', startGame)
    }
}
 timeLeftText = setInterval(countdown, 1000)
}
    
resetBtn.addEventListener('click', function() {
 location.reload()
})