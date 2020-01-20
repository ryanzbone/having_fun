var WM = require('simple-window-manager');
const wm = new WM({
  borderRadius: '10px'
})

export function runQuiz() {
  var score = 0;
  document.addEventListener('click', function (event) {
    if(event.target.classList.contains('button-question')) {
      event.preventDefault();
      var context = questionContext();
      score = score + parseInt(event.target.value);
      context.currentQuestion.classList.add('invisible');

      context.audio.addEventListener('ended', function() {
        if(context.nextQuestion != null) {
          context.nextQuestion.classList.remove('invisible');
        } else {
          var scoreEvent = new CustomEvent('calculateScore', { detail: score });
          document.dispatchEvent(scoreEvent);
          document.getElementById('submit-quiz').classList.remove('invisible');
        }
      });
      context.audio.play();
    }
  });
}

function questionContext() {
  var visible;
  var questions = document.getElementsByClassName('question');
  var qIndex = 0;
  for(var i = 0; i < questions.length; i += 1) {
    if(!questions[i].classList.contains('invisible')) {
      visible = questions[i];
      qIndex = i;
    }
  }
  var audio = visible.querySelector('audio')
  return { audio: audio, currentQuestion: visible, nextQuestion: questions[qIndex + 1] };
}

function questionScore(question) {
  var points = 0;
  var answers = question.getElementsByClassName('radio-question');
  if(answers[0].checked) { points = 1; }
  if(answers[1].checked) { points = 2; }
  if(answers[2].checked) { points = 3;; }
  return points;
}

export function titleScreen()
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
  test.content.backgroundColor = 'black'
  test.content.color = 'white'
  test.content.innerHTML = `
  <div class="centered">
    <h1 class="play-title">(I Know You're Having Fun But)</h1>
    <h1 class="work-title">I'm Still Working</h1>
  </div>
  <div class="centered title-text">
    <p class="mb-2">We all have too much fun at work from time to time. In this game you’ll contribute to actual real life important ecology data while dealing with a workplace that likes to have just a little too much fun.</p>
    <p class="mb-2">If you’d like to contribute to actual real life important ecology data without the fun visit <a href="https://instantwild.zsl.org">instantwild.zsl.org</a></p>
    <button id="start-game" class="btn">Start Game</button>
  </div>
  `
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
  test.content.innerHTML = `
    <audio id="audio-introduction"  src="assets/clip1.mp3" type="audio/mp3"></audio>
    <form id="quiz">
      <fieldset id="group1" class="centered question">
        <p class="mb-2 question-text">I lose interest quickly if I don't get to learn new things.</p>
        <button class="button-question btn" value=1 name="group1">Always</button>
        <button class="button-question btn" value=2 name="group1">Sometimes</button>
        <button class="button-question btn" value=3 name="group1">Never</button>
        <audio src="assets/clip2.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group2" class="centered question invisible">
        <p class="mb-2 question-text">I believe stories are the best way to get a point across.</p>
        <button class="button-question btn" value=1 name="group1">Always</button>
        <button class="button-question btn" value=2 name="group1">Sometimes</button>
        <button class="button-question btn" value=3 name="group1">Never</button>
        <audio src="assets/clip3.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group3" class="centered question invisible">
        <p class="mb-2 question-text">I need to take control of situations that seem to be out of control.</p>
        <button class="button-question btn" value=1 name="group1">Always</button>
        <button class="button-question btn" value=2 name="group1">Sometimes</button>
        <button class="button-question btn" value=3 name="group1">Never</button>
        <audio src="assets/clip4.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group4" class="centered question invisible">
        <p class="mb-2 question-text">I believe that even the most disadvantageous peace is better than any direct conflict.</p>
        <button class="button-question btn" value=1 name="group1">Always</button>
        <button class="button-question btn" value=2 name="group1">Sometimes</button>
        <button class="button-question btn" value=3 name="group1">Never</button>
        <audio src="assets/clip5.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group5" class="centered question invisible">
        <p class="mb-2 question-text">I find it difficult to incorporate new ideas with my existing world view.</p>
        <button class="button-question btn" value=1 name="group1">Always</button>
        <button class="button-question btn" value=2 name="group1">Sometimes</button>
        <button class="button-question btn" value=3 name="group1">Never</button>
        <audio src="assets/clip6.mp3" type="audio/mp3"></audio>
      </fieldset>
  </form>
  <div class="centered">
    <button class="invisible btn start-working" id="submit-quiz">Start Working</button>
  </div>
`
  return test
}
