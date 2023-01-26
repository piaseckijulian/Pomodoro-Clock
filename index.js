const timerDiv = document.getElementById('timer');
const statusDiv = document.getElementById('status');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let minutes = 25;
let breakTime = false;

let startCountdown
let start = false;

timerDiv.innerText = `${minutes}:0${seconds}`;

const countdown = () => {
  seconds = Number(seconds);
  minutes = Number(minutes);
  if (minutes === 0 && seconds === 0 && breakTime === false) {
    breakTime = true;

    minutes = 5;
    seconds = 0;

    statusDiv.innerText = 'Break!';
    seconds = Number(seconds);
    minutes = Number(minutes);
  } else if (minutes === 0 && seconds === 0 && breakTime === true) {
    breakTime = false;

    minutes = 25;
    seconds = 0;

    statusDiv.innerText = 'Session!';
  } else {
    seconds = Number(seconds);
    minutes = Number(minutes);

    if (seconds === 0) {
      seconds = 59;
      minutes -= 1;
    } else {
      seconds -= 1;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    timerDiv.innerText = `${minutes}:${seconds}`;
  }
};
startBtn.onclick = () => {
  if (start === false) {
    start = true;
    startCountdown = setInterval(countdown, 1000);
  }
};
pauseBtn.onclick = () => {
  start = false;
  clearInterval(startCountdown);
};
resetBtn.onclick = () => {
  clearInterval(startCountdown);
  seconds = 0;
  minutes = 25;
  timerDiv.innerText = `${minutes}:0${seconds}`;
};
