const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video-player__player');
const progressInput = videoPlayer.querySelector('.progress__input');
const playBtn = videoPlayer.querySelector('.controls__play-btn');
const stopBtn = videoPlayer.querySelector('.controls__stop-btn');
const volumeBtn = videoPlayer.querySelector('.controls__volume-btn');
const volumeSlider = videoPlayer.querySelector('.controls__volume-slider');
const mainPlayBtn = videoPlayer.querySelector('.video-player__button');
let root = document.documentElement;

function togglePlay() {
  playBtn.classList.toggle('controls__play-btn--pause');
  mainPlayBtn.classList.toggle('video-player__button--none'); //! remove

  const method = video.paused ? 'play' : 'pause';
  mainPlayBtn.classList.add(`video-player__button--${method}`);

  video[method]();

  setTimeout(() => {
    mainPlayBtn.classList.remove('video-player__button--play');
    mainPlayBtn.classList.remove('video-player__button--pause');
    //!mainPlayBtn.classList.add('video-player__button--none');
  }, 750);
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
  mainPlayBtn.classList.remove('video-player__button--none');
  playBtn.classList.remove('controls__play-btn--pause');
}

function volumeOffOn() {
  if (volumeSlider.value > 0) {
    localStorage.volume = volumeSlider.value;
    volumeSlider.value = 0;
  } else {
    volumeSlider.value = localStorage.getItem('volume');
  }
  volume();
}

function volume() {
  video.volume = volumeSlider.value;
  root.style.setProperty(
    '--progress-bg-volume',
    volumeSlider.value * 100 + '%',
  );
  volumeBtn.classList.remove(volumeBtn.classList[2]);
  if (video.volume === 0) {
    volumeBtn.classList.add('controls__volume-btn--off');
  } else if (video.volume < 0.3) {
    volumeBtn.classList.add('controls__volume-btn--quiet');
  } else if (video.volume > 0.7) {
    volumeBtn.classList.add('controls__volume-btn--loud');
  } else {
    volumeBtn.classList.add('controls__volume-btn--medium');
  }
}

function progressUpdate() {
  const duration = video.duration;
  const current = video.currentTime;

  progressInput.value = (100 * current) / duration;

  root.style.setProperty('--progress-bg-size', progressInput.value + '%');
}

function rewindVideo(event) {
  const position = event.target.value;

  const method = video.paused ? 'pause' : 'play';

  video.pause();
  video.currentTime = (video.duration / 100) * position;

  video[method]();
}

function control(e) {
  const event = e.target;
  switch (event) {
    case volumeBtn:
      volumeOffOn();
      return;
    case mainPlayBtn:
    case playBtn:
      //!  case video:
      togglePlay();
      return;
    case stopBtn:
      stopVideo(e);
      return;
  }
}

/* timer */

const timer = document.querySelector('.timer');
const passed = timer.querySelector('.passed');
const total = timer.querySelector('.total');

function parseTime(value = 0) {
  const hours = Math.trunc(value / 3600);
  const min = Math.trunc((value % 3600) / 60);
  const sec = Math.round(value - hours * 3600 - min * 60);

  return { hours, min, sec };
}

function setValue(value) {
  if (value) return value < 10 ? `0${value}` : `${value}`;
  else return '00';
}

function totalTime() {
  if (total.innerText != '00 : 00 : 00') return;
  console.log('totalTime');
  const duration = video.duration;
  const { hours, min, sec } = parseTime(duration);
  total.innerText = `${setValue(hours)} : ${setValue(min)} : ${setValue(sec)}`;
}
function passedTime() {
  const current = video.currentTime;
  const { hours, min, sec } = parseTime(current);
  passed.innerText = `${setValue(hours)} : ${setValue(min)} : ${setValue(sec)}`;
}

function timeupdate() {
  progressUpdate();
  passedTime();
  totalTime();
}

totalTime();

volumeSlider.addEventListener('input', volume);
videoPlayer.addEventListener('click', control);
video.addEventListener('timeupdate', timeupdate);
progressInput.addEventListener('input', rewindVideo);
video.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  event.stopPropagation();
});
