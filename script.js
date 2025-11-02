let timerDisplay = document.getElementById('timer');
let characterImg = document.getElementById('character');
let alertSound = document.getElementById('alert-sound');

let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let toggleModeBtn = document.getElementById('toggle-mode');

let isFocusMode = true;
let timer;
let secondsLeft = 25 * 60;

function updateDisplay() {
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  timer = setInterval(() => {
    if (secondsLeft > 0) {
      secondsLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      alertSound.play();
      toggleMode();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  pauseTimer();
  secondsLeft = isFocusMode ? 25 * 60 : 5 * 60;
  updateDisplay();
}

function toggleMode() {
  isFocusMode = !isFocusMode;
  resetTimer();

  if (isFocusMode) {
    document.body.style.background = 'var(--bg-focus)';
    characterImg.src = 'assets/blue.png';
    toggleModeBtn.innerText = 'Switch to Break Mode';
    h1.innerText = 'Your Pomodoro session Starts Now!';
  } else {
    document.body.style.background = 'var(--bg-break)';
    characterImg.src = 'assets/green.png';
    toggleModeBtn.innerText = 'Switch to Focus Mode';
    h1.innerText = 'Take a short break!';
  }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
toggleModeBtn.addEventListener('click', toggleMode);

updateDisplay();
