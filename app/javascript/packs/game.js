import {
  apps,
  work,
  play,
  moveWindow,
  appIcon,
} from './windows.js';

var workWindow = work();
var playWindow = play();
var movementInterval = 5000;

window.onload = () =>
{
  appIcon('work', workWindow, 20, 20).open({ noFocus: true });
  appIcon('play', playWindow, 140, 20).open({ noFocus: true });
  setInterval(function() {
    playWindow.sendToFront();
  }, 100);
  playWindow.on('open', function() {
    window.setInterval(function() {
      console.log('setting interval');

      var timeUntilMove = Math.random() * movementInterval;
      window.setTimeout(function() {
        console.log('moving');
        moveWindow(playWindow, workWindow, 10);
      }, timeUntilMove);;
      console.log('timeout set ' + timeUntilMove);

    }, movementInterval);
  });
}
