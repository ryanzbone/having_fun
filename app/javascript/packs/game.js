import {
  work,
  play,
  moveWindow,
  resizeWindow,
  appIcon,
} from './windows.js';

import {
  quiz,
  runQuiz,
} from './intro.js'

var workWindow = work();
var playWindow = play();
var quizWindow = quiz();
var movementInterval = 2000;

window.onload = () =>
{
  quizWindow.open()
  var score = runQuiz();

  document.getElementById('submit-quiz').addEventListener('click', function(event) {
    event.preventDefault();
    quizWindow.close();
    desktop();
  });
}

function desktop() {
  appIcon('work', workWindow, 20, 20, null).open({ noFocus: true });
  appIcon('play', playWindow, 140, 20, null).open({ noFocus: true });
  appIcon('text', null, 260, 20, 'text.png').open({ noFocus: true });
  appIcon('trash', null, 380, 20, 'IMG.png').open({ noFocus: true });
  appIcon('chat', null, 500, 20, 'chat.png').open({ noFocus: true });
  setInterval(function() {
    playWindow.sendToFront();
  }, 100);
  playWindow.on('open', function() {
    window.setInterval(function() {
      var timeUntilMove = Math.random() * movementInterval;
      window.setTimeout(function() {
        moveWindow(playWindow, workWindow, 10);
        //resizeWindow(playWindow, 10);
      }, timeUntilMove);;

    }, movementInterval);
  });
}
