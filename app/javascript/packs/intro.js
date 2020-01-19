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
          console.log(score / 5);
          document.getElementById('submit-quiz').classList.remove('invisible');
        }
      });

      context.audio.play();
    }
  });
  return score;
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
  <h1>(I Know You're Having Fun But) I'm Still Working</h1>
  <h3>A Video Game</h3>
  <p>some explaination about the game</p>
  <button id="start-game" class="btn">Start Game</button>
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
      <fieldset id="group1" class="question">
        <p>I lose interest quickly if I don't get to learn new things.</p>
        <button class="button-question" value=1 name="group1">Always</button>
        <button class="button-question" value=2 name="group1">Sometimes</button>
        <button class="button-question" value=3 name="group1">Never</button>
        <audio src="assets/clip2.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group2" class="question invisible">
        <p>I believe stories are the best way to get a point across.</p>
        <button class="button-question" value=1 name="group1">Always</button>
        <button class="button-question" value=2 name="group1">Sometimes</button>
        <button class="button-question" value=3 name="group1">Never</button>
        <audio src="assets/clip3.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group3" class="question invisible">
        <p>I need to take control of situations that seem to be out of control.</p>
        <button class="button-question" value=1 name="group1">Always</button>
        <button class="button-question" value=2 name="group1">Sometimes</button>
        <button class="button-question" value=3 name="group1">Never</button>
        <audio src="assets/clip4.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group4" class="question invisible">
        <p>I believe that even the most disadvantageous peace is better than any direct conflict.</p>
        <button class="button-question" value=1 name="group1">Always</button>
        <button class="button-question" value=2 name="group1">Sometimes</button>
        <button class="button-question" value=3 name="group1">Never</button>
        <audio src="assets/clip5.mp3" type="audio/mp3"></audio>
      </fieldset>

      <fieldset id="group5" class="question invisible">
        <p>I find it difficult to incorporate new ideas with my existing world view.</p>
        <button class="button-question" value=1 name="group1">Always</button>
        <button class="button-question" value=2 name="group1">Sometimes</button>
        <button class="button-question" value=3 name="group1">Never</button>
        <audio src="assets/clip6.mp3" type="audio/mp3"></audio>
      </fieldset>
  </form>
  <button class="invisible btn" id="submit-quiz">Start Working</button>
`
  return test
}
