export function gameOver(wm)
{
  const test = wm.createWindow({
    width: 1200,
    height: 800,
    x: 100, y: 100,
    title: "Game Over",
    maximizable: false,
    minimizable: true,
    closeable: "false"
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = `
  <div class="centered">
  <h1>Time's up!</h1>
  <p class="mb-2">How was your first day? You spent it identifying animals? What? Who told you to do that?</p>
  <button class="btn" onclick="window.location.reload()">Play Again</button>
  </div>
  `
  wm.closeAll();
  test.open();
}
