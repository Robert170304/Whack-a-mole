const grid = document.querySelector('.grid')
const squares = document.querySelectorAll('.square')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')
const startBtn = document.querySelector('.startGame')
const resetBtn = document.querySelector('.resetGame')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.sidebar-toggle')
const level = document.querySelector('#level')
//const instructions = document.querySelector('.body-footer')


let randomSquare;
let result = 0
let currentTime ;
let timeId;
let timeLeftText;
//let hitposition


/*instructions.addEventListener('click', function() {
    if (!instructions.classList.contains('show-instructions')){
        instructions.classList.add('show-instructions')
        sidebar.classList.remove('show-sidebar')
    } else {
        instructions.classList.remove('show-instructions')
    }
})*/


//togle btn for slidebar
toggle.addEventListener('click', function() {
    if (!sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.add('show-sidebar')
        //instructions.classList.remove('show-instructions')
        //instructions.style.display =  'none'
    } else {
        sidebar.classList.remove('show-sidebar')
        //instructions.style.display =  'block'
       // instructions.style.transition = 'all 0.7 ease-in-out'
    }
})


//close btn for close the slidebar
closeBtn.addEventListener('click', function() {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    }
});

// change bcgcolor of grid 
let colorButton = document.getElementById("customize");
colorButton.oninput = function() {
    grid.style.backgroundColor = colorButton.value
}

//startbtn for start the game
startBtn.addEventListener('click', startGame)
function startGame() {
    //calling the moveMole function to move mole
    if (level.value === '1') {
        moveMoleEasy()
        currentTime = 30;
        console.log(currentTime)
        timeLeftText = setInterval(countdown, 1000)
         console.log('Easy Level')
    } else if (level.value === '2') {
        moveMoleNormal()
        currentTime = 30;
        console.log(currentTime)
        timeLeftText = setInterval(countdown, 1000)
         console.log('Medium Level')
    } else if (level.value === '3') {
        moveMoleHard()
        currentTime = 60;
        console.log(currentTime)
        timeLeftText = setInterval(countdown, 1000)
        console.log('Hard Level')
    }

};


// if mole catched increase a score
squares.forEach(square => {
    square.addEventListener('mousedown', function() {
       //console.log(square)
        if (square == randomSquare) {
              // console.log('same ')
            result++;
            score.textContent = result
            randomSquare = null
           startBtn.removeEventListener('click', startGame)
        }
      
    })
});

// counting time of 60 sec
function countdown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(timeId)
        clearInterval(timeLeftText)
        alert('TIME UP, BUDDY!  \n Your score is ' + result)
    }
};


function randomSqareFunc() {
    squares.forEach(square => {
     square.classList.remove('mole')
     startBtn.removeEventListener('click', startGame)
     // if game is started remove slidebar
        if (sidebar.classList.contains('show-sidebar')) {
            sidebar.classList.remove('show-sidebar')
        }
       /* if (instructions.classList.contains('show-instructions')) {
            instructions.classList.remove('show-instructions')
        }*/
    })
    //choosing random square
    randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    //hitposition = randomSquare.id
    //console.log(hitposition)
}
//moving the mole mediun
function moveMoleNormal() {
    timeId = setInterval(randomSqareFunc, 600)
 }
//moving the mole easy
 function moveMoleEasy() {
    timeId = setInterval(randomSqareFunc, 1000)
 }
//moving the mole hard
 function moveMoleHard() {
    timeId = setInterval(randomSqareFunc, 450)
 }

 // refreshing or reset the game
resetBtn.addEventListener('click', function() {
    location.reload()
   })
