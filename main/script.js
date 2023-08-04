let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let won = document.getElementById('win');
let loose = document.getElementById('lose');

let text1 = '<div class="alert alert-success" role="alert" style="display: inline-block;">' +
            '<strong>Congrats!!! You Won!!!</strong>' +
            '</div>';

let text2 = '<div class="alert alert-warning" role="alert" style="background-color: lightyellow; color: red;display: inline-block;">' +
            '<strong>Better Luck Next Time !!!<br>' +
            'You Lose</strong>' +
            '</div>';

let startButton = document.getElementById('startButton');

let values = ['😇', '🥶', '🤯', '🥳', '😓', '🤠', '🤩', '😵‍💫', '🤑'];

let interval;
let animationSpeed = 300;
let acceleration = 10;
let animationStarted = false;

function getRandomValue() {
  return values[Math.floor(Math.random() * values.length)];
}

function startAnimation() {
  if (animationStarted) return;

  animationStarted = true;
  let speed = animationSpeed;

  // Reset animation properties
  value1.style.animation = 'none';
  value2.style.animation = 'none';
  value3.style.animation = 'none';

  function calculate() {
    let count = 0;

    if (['😓', '😵‍💫', '🤯', '🥶'].includes(value1.innerText)) {
      count++;
    }
    if (['😓', '😵‍💫', '🤯', '🥶'].includes(value2.innerText)) {
      count++;
    }
    if (['😓', '😵‍💫', '🤯', '🥶'].includes(value3.innerText)) {
      count++;
    }

    if (count <= 1) {
      console.log("winner");
      let add = document.createElement('div');
      add.innerHTML = text1;
      won.appendChild(add);
    } else {
      console.log("loser");
      let add = document.createElement('div');
      add.innerHTML = text2;
      won.appendChild(add);
    }
  }

  setTimeout(() => {
    value1.style.animation = 'slotspin infinite linear';
    value2.style.animation = 'slotspin infinite linear';
    value3.style.animation = 'slotspin infinite linear';

    interval = setInterval(() => {
      value1.innerText = getRandomValue();
      value2.innerText = getRandomValue();
      value3.innerText = getRandomValue();
      speed -= acceleration;

      if (speed <= 0) {
        clearInterval(interval);
        animationStarted = false;
        calculate();
      }
    }, speed);
  }, 0);
}

startButton.addEventListener('click', startAnimation);
