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
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
    title: "Allvuu",
    maximizable: false,
    resizable: false,
  })
  test.content.style.padding = '0.5em';
  test.content.innerHTML = '<iframe class="full-frame" frameborder="0" src="https://instantwild.zsl.org/task/95049"></iframe>';
  return test;
}

export function titleSplash(wm)
{
  const test = wm.createWindow({
    width: 1200, height: 800,
    x: 100, y: 100,
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
    minimizable: false,
    maximizable: false,
    resizable: false
  })
  test.content.style.padding = '0.5em'
  test.content.style.backgroundColor = 'black'
  test.content.style.color = 'white'
  test.content.innerHTML = `
  <div class="centered mt-9000">
    <h1 class="play-title">(I Know You're Having Fun But)</h1>
    <h1 class="work-title">I'm Still Working</h1>
  </div> `
  return test
}
export function textEditor(wm)
{
  const test = wm.createWindow({
    width: 500,
    height: 650,
    x: 400, y: 200,
    title: "Tea",
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
  })
  var textarea = document.createElement
  test.content.innerHTML = `
<textarea id="editor" autofocus="true">
To do:
- Far cry 2
- Baboo
- The wizaaaarrrd

Credits:
Programmer - Ryan Bone
Audio - Casey Toney
Streamer - Casey Toney
Lighting - Casey Toney
Art - Casey Toney
Writing - Chris Berg, Casey Toney
Game Design - Ryan Bone, Chris Berg, Casey Toney
Music - Louie Zong

Fiancé - Casey Toney
Fiancé Friend - Chris Berg
Nostalgic Gamer 1 - Casey Toney
Nostalgic Gamer 2 - Chris Berg
Hostile Charity Host - Casey Toney
Injured Player - Chris Berg
Community Organizer - Ryan Bone
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
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
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
    minimizeSize: 400,
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
  })
  test.win.id = 'streamWindow'
  test.content.style.padding = '0.5em'
  test.content.style.backgroundColor = 'black'
  test.content.innerHTML='<div id="twitch-embed" class="full-frame"></div>'

  test.once('open', function(event) {
    var embed = new Twitch.Embed("twitch-embed", {
      video: video,
      layout: "video",
    });
    var iframe = document.getElementById('twitch-embed').querySelector('iframe');
    iframe.removeAttribute('width');
    iframe.removeAttribute('height');
    iframe.classList.add('full-frame');
    document.addEventListener('pauseStream', function() {
      embed.player.pause();
    });
    document.addEventListener('playStream', function() {
      embed.player.play();
    });
  });
  document.addEventListener('gameOver', function(event) {
    console.log('game over event recieved by play window');
    var streamWindow = document.getElementById('streamWindow');
    streamWindow.parentNode.removeChild(streamWindow);
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
      toMove.focus();
    } else {
      timer++;
      //toMove.focus();
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
  var maxWidth = 800;
  var minWidth = 400;
  var minHeight = 300;
  var scaleRatio = 1.6;

  var newWidth = minWidth + (Math.random() * maxWidth);
  var newHeight = newWidth/scaleRatio;

  var intervalId = setInterval(frame, 10);

  function frame() {
    if (timer >= duration || closeTo(target.width, newWidth, scaleRate + 1)) {
      clearInterval(intervalId);
      target.focus();
    } else {
      timer++;
      if(target.width <= newWidth) {
        target.width = target.width + scaleRate;
      } else if(target.width > newWidth) {
        target.width = target.width - scaleRate;
      }

      if(target.height <= newHeight) {
        target.height = target.height + scaleRate;
      } else if(target.height > newHeight) {
        target.height = target.height - scaleRate;
      }
    }
  }
}

function closeTo(actual, target, error) {
  return Math.abs(actual - target) <= error;
}
