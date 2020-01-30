export function gameOver(wm)
{
  const test = wm.createWindow({
    width: 1200,
    height: 800,
    x: 100, y: 100,
    titlebar: false,
    borderRadius: "0px",
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = `
  <div class="centered mt-9000">
  <h1>Time's up!</h1>
  <p class="mt-4 mb-4">How was your first day? You spent it identifying animals? What? Who told you to do that?</p>
  <button class="sbtn" onclick="window.location.reload()">Start Over</button>
  </div>
  `
  wm.closeAll();
  test.open();
}
