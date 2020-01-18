var WM = require('simple-window-manager');
const wm = new WM({
  borderRadius: '10px'
})

export function appIcon(idName, appWindow, x, y)
{
  const test = wm.createWindow({
    minWidth: 100,
    minHeight: 100,
    width: 100,
    height: 100,
    x: x,
    y: y,
    titlebar: false,
    maximizable: false,
    minimizable: false,
    resizable: false,
    closable: false,
    movable: false
  })
  test.on('focus', function(event) {
    if(appWindow.closed) {
      appWindow.open();
    } else {
      appWindow.focus();
    }
    test.sendToBack();
  });
  return test
}

export function work()
{
  const test = wm.createWindow({
    width: 1200,
    height: 800,
    x: 100, y: 100,
    title: "I'm Still Working",
    maximizable: false,
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = '<iframe class="full-frame" frameborder="0" src="https://instantwild.zsl.org/task/159037"></iframe>'
  return test
}

export function play()
{
  const test = wm.createWindow({
    x: 550,
    y: 200,
    width: 800,
    height: 448,
    titlebar: true,
    title: 'Having Fun',
    resizable: false,
    maximizable: false,
    minimizable: true,
    titleCenter: true,
  })
  test.content.style.padding = '0.5em'
  test.content.style.backgroundColor = 'black'
  test.content.innerHTML = '<iframe class="full-frame" frameborder="0" src="https://player.twitch.tv/?channel=shinybreeder"></iframe>'
  test.on('close', function(event) {
    test.open();
  });
  return test
}

export function moveWindow(toMove, targetWindow, moveSpeed) {
  var timer = 0;
  var duration = 200
  var id = setInterval(frame, 10);

  var targetX = targetWindow.x + (Math.random() * targetWindow.width) - (toMove.width/2);
  var targetY = targetWindow.y + (Math.random() * targetWindow.height) - (toMove.height/2);
  var targetWidth = (Math.random() + 0.0)  * targetWindow.width;
  var targetHeight= toMove.width / 1.6;

  function direction(moverPoint, targetPoint, distance) {
    if(moverPoint < targetPoint) {
      return distance;
    } else {
      return -distance;
    }
  }

  function frame() {
    var closeToX = closeTo(toMove.x, targetX, 20);
    var closeToY = closeTo(toMove.y, targetY, 20);

    if (timer >= duration || closeToX || closeToY) {
      clearInterval(id);
    } else {
      timer++;
      toMove.focus();
      toMove.move(
        toMove.x + direction(toMove.x, targetX, moveSpeed),
        toMove.y + direction(toMove.y, targetY, moveSpeed),
      );
      if(toMove.width <= targetWidth) {
        toMove.width = toMove.width + 1;
      } else {
        toMove.width = toMove.width - 1;
      }
      if(toMove.height <= targetHeight) {
        toMove.height = toMove.height + 1;
      } else {
        toMove.height = toMove.height - 1;
      }
    }
  }

  function closeTo(actual, target, error) {
    return (target - error) <= actual && actual <= (target + error);
  }
}
