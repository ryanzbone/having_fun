export function appIcon(idName, appWindow, x, y, icon, wm)
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
  test.content.style.backgroundImage = `url(${icon})`;
  test.win.classList.add('app-icon');
  test.win.id = idName;
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

export function work(wm)
{
  const test = wm.createWindow({
    width: 1100,
    height: 700,
    x: 100, y: 100,
    title: "Allvuu",
    maximizable: false,
    resizable: false,
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = '<iframe class="full-frame" frameborder="0" src="https://instantwild.zsl.org/task/159037"></iframe>'
  return test
}

export function textEditor(wm)
{
  const test = wm.createWindow({
    width: 300,
    height: 400,
    x: 400, y: 200,
    title: "Tea",
  })
  var textarea = document.createElement
  test.content.innerHTML = `
<textarea id="editor" autofocus="true">
To do:
- Far cry 2
- Baboo
- The wizaaaarrrd
</textarea>
  `

  test.on('open', function(event) {
    setTimeout(function() {
      var el = document.getElementById('editor');
      el.selectionStart = el.selectionEnd = el.value.length;
      el.focus()
    }, 300);
  });
  return test
}

export function dumpster(wm)
{
  const test = wm.createWindow({
    width: 400,
    height: 300,
    x: 300, y: 500,
    title: "Dempster",
  })
  var textarea = document.createElement
  test.content.innerHTML = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Size</th>
      <th scope="col">Kind</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Video Games</td>
      <td>143kb</td>
      <td>Executable</td>
    </tr>
    <tr>
      <td>Big Bird</td>
      <td>800gb</td>
      <td>PNG</td>
    </tr>
    <tr>
      <td>Famous</td>
      <td>4.2mb</td>
      <td>MP3</td>
    </tr>
    <tr>
      <td>Boost</td>
      <td>3.3mb</td>
      <td>PDF</td>
    </tr>
    <tr>
      <td>Hot Scoops</td>
      <td>66kb</td>
      <td>Text</td>
    </tr>
    <tr>
      <td>Junior Mints</td>
      <td>473kb</td>
      <td>PDF</td>
    </tr>
    <tr>
      <td>Fuck</td>
      <td>32mb</td>
      <td>mkv</td>
    </tr>
  </tbody>
</table>
  `

  test.on('open', function(event) {
    setTimeout(function() {
      var el = document.getElementById('editor');
      el.selectionStart = el.selectionEnd = el.value.length;
      el.focus()
    }, 300);
  });
  return test
}
export function play(video, wm)
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
      video: video,
      layout: "video",
    });
    var iframe = document.getElementById('twitch-embed').querySelector('iframe');
    iframe.removeAttribute('width');
    iframe.removeAttribute('height');
    iframe.classList.add('full-frame');
    embed.addEventListener('gameOver', function() {
      console.log('game over event recieved by twitch object');
      embed.pause();
    });
  });
  document.addEventListener('gameOver', function(event) {
    console.log('game over event recieved by play window');
    test.removeAllListeners();
    test.close();
  });
  test.on('close', function(event) {
    test.open();
  });
  return test;
}

export function moveWindow(toMove, targetWindow, moveSpeed) {
  var timer = 0;
  var duration = 200
  var intervalId = setInterval(frame, 10);
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

  var targetX = (targetWindow.x + (Math.random() * targetWindow.width) - (toMove.width/2));
  var targetY = (targetWindow.y + (Math.random() * targetWindow.height) - (toMove.height/2));

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
    }
  }
}

export function resizeWindow(target, scaleRate) {
  var timer = 0;
  var duration = 200;
  var maxWidth = 1200;
  var minWidth = 400;
  var minHeight = 300;
  var scaleRatio = 1.77;

  var newWidth = minWidth + (Math.random() * maxWidth);

  var intervalId = setInterval(frame, 10);

  function frame() {
    if (timer >= duration || closeTo(target.width, newWidth, scaleRate + 1)) {
      clearInterval(intervalId);
    } else {
      timer++;
      if(target.width <= newWidth) {
        target.width = target.width + scaleRate;
        target.height = target.height + (scaleRate/scaleRatio);
      } else if(target.width > newWidth) {
        target.width = target.width - scaleRate;
        target.height = target.height - (scaleRate/scaleRatio);
      }
    }
  }
}

function closeTo(actual, target, error) {
  return Math.abs(actual - target) <= error;
}
