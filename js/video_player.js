const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video-player__player');
const progress = videoPlayer.querySelector('.progress__filled');
const playBtn = videoPlayer.querySelector('.controls__play-btn');
const stopBtn = videoPlayer.querySelector('.controls__stop-btn');
const volumeBtn = videoPlayer.querySelector('.controls__volume-btn');
const volumeSlider = videoPlayer.querySelector('.controls__volume-slider');
const mainPlayBtn = videoPlayer.querySelector('.video-player__button');

function togglePlay() {
  playBtn.classList.toggle('controls__play-btn--pause');
  mainPlayBtn.classList.toggle('video-player__button--none');
  if (video.paused) {
    video.play();
    mainPlayBtn.classList.add('video-player__button--play');
  } else {
    video.pause();
    mainPlayBtn.classList.add('video-player__button--pause');
  }
  setTimeout(() => {
    mainPlayBtn.classList.remove('video-player__button--play');
    mainPlayBtn.classList.remove('video-player__button--pause');
    //mainPlayBtn.classList.add('video-player__button--none');
  }, 750);
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

function stopVideo() {}
function progressUpdate() {
  console.log(video.duration);
  console.log(video.currentTime);

  let duration = video.duration;
  let current = video.currentTime;

  progress.value = (100 * current) / duration;
}

function rewindVideo(params) {}

function control(e) {
  const event = e.target;
  switch (event) {
    case volumeBtn:
      volumeOffOn();
      return;
    case mainPlayBtn:
    case playBtn:
    case video:
      togglePlay();
      return;
    case progress:
      progress;
      return;

    default:
      break;
  }
}

volumeSlider.addEventListener('input', volume);
videoPlayer.addEventListener('click', control);
video.addEventListener('timeupdate', progressUpdate);
