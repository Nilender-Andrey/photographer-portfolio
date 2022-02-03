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
  let duration = video.duration;
  let current = video.currentTime;

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

volumeSlider.addEventListener('input', volume);
videoPlayer.addEventListener('click', control);
video.addEventListener('timeupdate', progressUpdate);
progressInput.addEventListener('input', rewindVideo);
