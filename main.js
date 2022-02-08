function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArray(arr) {
  const randomIndex = getRandomInt(0, arr.length);
  return arr[randomIndex];
}

const jsConfetti = new JSConfetti();

const CONFETTI_ARGS = [
  {
    emojis: ['🕹️', '👾', '🖥️', '🎮'],
    emojiSize: 75,
    confettiNumber: getRandomInt(50, 100),
  },
  {
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    emojiSize: 75,
    confettiNumber: getRandomInt(50, 100),
  },
  {
    confettiNumber: getRandomInt(100, 500),
    confettiRadius: 8,
  },
];

function makeItRain() {
  jsConfetti.addConfetti(getRandomArray(CONFETTI_ARGS));
}

const timeoutId = setTimeout(() => {
  makeItRain();
}, 1000);

const fuImg = document.getElementById('fuimg');

fuImg.addEventListener('click', () => {
  makeItRain();
});
