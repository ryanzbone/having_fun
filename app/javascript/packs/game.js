import {
  apps,
  work,
  play,
  moveWindow,
  workIcon,
} from './windows.js';

//var appsWindow = apps();
var workWindow = work();
//var playWindow = play();

window.onload = () =>
{
  //appsWindow.open()
  workIcon().open();

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

  //document.getElementById('test').addEventListener('click', function(event) {
    //event.preventDefault();
    //playWindow.resize(500, 500);
    //moveWindow(playWindow, workWindow);
  //});

  var movementInterval = 5000;
  window.setInterval(function() {
    console.log('setting interval');

    var timeUntilMove = Math.random() * movementInterval;
    window.setTimeout(function() {
      console.log('moving');
      moveWindow(playWindow, workWindow, 10);
    }, timeUntilMove);;
    console.log('timeout set ' + timeUntilMove);

  }, movementInterval);
}
