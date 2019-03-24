var path = document.querySelector('path');

var textAnimation = anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 2000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  autoplay: true
});

restartButton = document.querySelector('.restart-button');
playButton = document.querySelector('.play-button');
pauseButton = document.querySelector('.pause-button');

restartButton.addEventListener('click', () => {
  textAnimation.restart();
});
playButton.addEventListener('click', () => {
  textAnimation.play();
});
pauseButton.addEventListener('click', () => {
  textAnimation.pause();
});
