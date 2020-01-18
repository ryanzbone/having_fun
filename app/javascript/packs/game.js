import { apps, work, play } from './windows.js';

var appsWindow = apps();
var workWindow = work();
var playWindow = play();

function moveWindow(toMove, targetWindow) {
  var distance = 0;
  var duration = 200
  var id = setInterval(frame, 10);

  var targetX = targetWindow.x + (Math.random() * targetWindow.width) - (toMove.width/2);
  var targetY = targetWindow.y + (Math.random() * targetWindow.height) - (toMove.height/2);

  function direction(moverPoint, targetPoint, distance) {
    if(moverPoint < targetPoint) {
      return distance;
    } else {
      return -distance;
    }
  }

  function frame() {
    if (distance >= duration || toMove.x == targetX || toMove.y == targetY) {
      clearInterval(id);
    } else {
      distance++;
      toMove.focus();
      toMove.move(
        toMove.x + direction(toMove.x, targetX, 2),
        toMove.y + direction(toMove.y, targetY, 2),
      );
    }
  }
}

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

  document.getElementById('test').addEventListener('click', function(event) {
    event.preventDefault();
    playWindow.resize(500, 500);
    moveWindow(playWindow, workWindow);
  });
}
