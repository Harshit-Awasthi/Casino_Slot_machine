/*let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');

let values = ['😇', '🥶', '🤯', '🥳', '😓', '🤠', '🤩', '😵‍💫', '🤑'];

function getRandomValue() {
  return values[Math.floor(Math.random() * values.length)];
  
}

setInterval(() => {
  value1.innerText = getRandomValue();
  value2.innerText = getRandomValue();
  value3.innerText = getRandomValue();
}, 300);

*/

let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
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
      }
    }, speed);
  }, 0);
}

startButton.addEventListener('click', startAnimation);











