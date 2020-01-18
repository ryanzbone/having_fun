import {
  quiz,
  work,
  play,
  moveWindow,
  appIcon,
} from './windows.js';

var workWindow = work();
var playWindow = play();
var movementInterval = 2000;
var quizWindow = quiz();

window.onload = () =>
{

  // Intro Stuff

  quizWindow.open();

  document.getElementById('submit-quiz').addEventListener('click', function(event) {
    event.preventDefault();
    quizWindow.close();
    desktop();
  });
}

function desktop() {
  appIcon('work', workWindow, 20, 20).open({ noFocus: true });
  appIcon('play', playWindow, 140, 20).open({ noFocus: true });
  setInterval(function() {
    playWindow.sendToFront();
  }, 100);
  playWindow.on('open', function() {
    window.setInterval(function() {
      var timeUntilMove = Math.random() * movementInterval;
      window.setTimeout(function() {
        moveWindow(playWindow, workWindow, 10);
      }, timeUntilMove);;

    }, movementInterval);
  });
}
