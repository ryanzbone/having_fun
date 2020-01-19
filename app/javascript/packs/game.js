import {
  work,
  play,
  moveWindow,
  resizeWindow,
  appIcon,
} from './windows.js';

import {
  titleScreen,
  quiz,
  runQuiz,
} from './intro.js'

var workWindow = work();
var playWindow = play();
var quizWindow = quiz();
var titleScreenWindow = titleScreen();
var movementInterval = 4000;
var resizeInterval = 2000;

window.onload = () =>
{
  titleScreenWindow.open();
  document.getElementById('start-game').addEventListener('click', function(event) {
    event.preventDefault();
    titleScreenWindow.close();
    var audio = document.getElementById('audio-introduction');
    audio.addEventListener('ended', function() {
      quizWindow.open();
    });
    audio.play()
  });

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
    // Set move window interval
    window.setInterval(function() {
      var timeUntilMove = Math.random() * movementInterval;
      if(Math.random() > 0.5) {
        window.setTimeout(function() {
          moveWindow(playWindow, workWindow, (5 + (Math.random() * 10)));
        }, timeUntilMove);;
      }
    }, movementInterval);

    // Set resize window interval
    window.setInterval(function() {
      var timeUntilResize = Math.random() * resizeInterval;
      if(Math.random() > 0.5) {
        window.setTimeout(function() {
          resizeWindow(playWindow, Math.random() * 10);
        }, timeUntilResize);;
      }
    }, resizeInterval);
  });
}
