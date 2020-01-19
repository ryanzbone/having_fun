var WM = require('simple-window-manager');
const wm = new WM({
  borderRadius: '10px'
})

export function appIcon(idName, appWindow, x, y, icon)
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
  test.content.style.backgroundSize = 'contain';
  test.content.style.backgroundImage = `url('../../assets/${icon}')`;
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

export function quiz()
{
  const test = wm.createWindow({
    width: 1200,
    height: 800,
    x: 100, y: 100,
    titlebar: false,
    maximizable: false,
    minimizable: false,
    resizable: false,
    closable: false,
    movable: false
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = '<button id="submit-quiz">Start Working</button>'
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
    minimizeSize: 200,
  })
  test.content.style.padding = '0.5em'
  test.content.style.backgroundColor = 'black'
  test.content.innerHTML='<div id="twitch-embed" class="full-frame"></div>'

  test.on('open', function(event) {
    var embed = new Twitch.Embed("twitch-embed", {
      channel: "dodgeballcanada",
      layout: "video",
    });
    var iframe = document.getElementById('twitch-embed').querySelector('iframe');
    iframe.removeAttribute('width');
    iframe.removeAttribute('height');
    iframe.classList.add('full-frame');
  });
  return test
}

export function moveWindow(toMove, targetWindow, moveSpeed) {
  var timer = 0;
  var duration = 200
  var intervalId = setInterval(frame, 10);
  var scaleRatio = 1.77;
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var targetMultiplier =  plusOrMinus;;

  var targetX = (targetWindow.x + (Math.random() * targetWindow.width) - (toMove.width/2)) * targetMultiplier;
  var targetY = (targetWindow.y + (Math.random() * targetWindow.height) - (toMove.height/2)) * targetMultiplier;
  var targetWidth = 400 + (Math.random() * targetWindow.width);
  var targetHeight = toMove.width / scaleRatio;

  var iframe = document.getElementById('twitch-embed').querySelector('iframe');

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
      clearInterval(intervalId);
    } else {
      timer++;
      toMove.focus();
      toMove.move(
        toMove.x + direction(toMove.x, targetX, moveSpeed),
        toMove.y + direction(toMove.y, targetY, moveSpeed),
      );
      if(toMove.width <= targetWidth) {
        toMove.width = toMove.width + moveSpeed;
        toMove.height = toMove.height + (moveSpeed/scaleRatio);
      } else if(toMove.width > targetWidth) {
        toMove.width = toMove.width - moveSpeed;
        toMove.height = toMove.height - (moveSpeed/scaleRatio);
      }
    }
  }

  function closeTo(actual, target, error) {
    return (target - error) <= actual && actual <= (target + error);
  }
}
