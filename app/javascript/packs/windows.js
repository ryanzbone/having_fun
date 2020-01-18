const wm = new WM({
  borderRadius: '10px'
})

export function apps()
{
  const test = wm.createWindow({
    width: 300,
    height: 200,
    x: 10, y: 10,
    title: "Applications",
    maximizable: false,
    minimizable: false,
    closable: false,
    movable: false
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = `
    <a href="#" id="work">Work</a><br/>
    <a href="#" id="play">Play</a><br/>
    <a href="#" id="test">Test</a>
    `
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
  test.content.innerHTML = '<iframe style="position: relative; height:100%; width:100%"" allowfullscreen="true" frameborder="0" height="300" scrolling="no" src="https://instantwild.zsl.org/task/159037" width="400"></iframe>'
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
    resizable: true,
    maximizable: false,
    minimizable: true,
    titleCenter: true,
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = '<iframe style="position: relative; height:100%; width:100%"" allowfullscreen="true" frameborder="0" height="300" scrolling="no" src="https://player.twitch.tv/?channel=supermcgamer&muted=true" width="400"></iframe>'
  test.on('close', function(event) {
    test.open();
  });
  return test
}

export function moveWindow(toMove, targetWindow) {
  var timer = 0;
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
    var closeToX = closeTo(toMove.x, targetX, 5);
    var closeToY = closeTo(toMove.y, targetY, 5);

    if (timer >= duration || closeToX || closeToY) {
      clearInterval(id);
    } else {
      timer++;
      toMove.focus();
      toMove.move(
        toMove.x + direction(toMove.x, targetX, 2),
        toMove.y + direction(toMove.y, targetY, 2),
      );
    }
  }

  function closeTo(actual, target, error) {
    return (target - error) <= actual && actual <= (target + error);
  }
}
