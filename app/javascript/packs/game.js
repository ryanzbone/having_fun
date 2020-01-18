import { apps, work, play } from './windows.js';

var appsWindow = apps();
var workWindow = work();
var playWindow = play();

window.onload = () =>
{
  appsWindow.open()

  document.getElementById('work').addEventListener('click', function(event) {
    event.preventDefault();
    if(workWindow.closed) {
      workWindow.open();
    } else {
      workWindow.focus();
    }
  });
  document.getElementById('play').addEventListener('click', function(event) {
    event.preventDefault();
    if(playWindow.closed) {
      playWindow.open();
    } else {
      playWindow.focus();
    }
  });
}
