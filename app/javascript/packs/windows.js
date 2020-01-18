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
  test.content.innerHTML = '<a href="#" id="work">Work</a><br/><a href="#" id="play">Play</a>'
  return test
}

export function work()
{
  const test = wm.createWindow({
    width: 1000,
    height: 800,
    x: 100, y: 100,
    title: "I'm Still Working",
    maximizable: false,
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = '<iframe style="position: relative; height:100%; width:100%"" allowfullscreen="true" frameborder="0" height="300" scrolling="no" src="https://instantwild.zsl.org/task/159037" width="400"></iframe>'
  return test
}

export function stream()
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
    closable: false
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = '<iframe style="position: relative; height:100%; width:100%"" allowfullscreen="true" frameborder="0" height="300" scrolling="no" src="https://player.twitch.tv/?channel=supermcgamer&muted=true" width="400"></iframe>'
  return test
}
