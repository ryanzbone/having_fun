var WM = require('simple-window-manager');
const wm = new WM({
  borderRadius: '10px'
})

export function runQuiz() {
  var score = 0;
  document.addEventListener('change', function (event) {
    if(event.target.classList.contains('radio-question')) {
      var questions = currentAndNextQuestion();
      score = score + questionScore(questions.currentQuestion);
      questions.currentQuestion.classList.add('invisible');
      if(questions.nextQuestion != null) {
        questions.nextQuestion.classList.remove('invisible');
      } else {
        console.log(score / 5);
        document.getElementById('submit-quiz').classList.remove('invisible');
      }
    }
  });
  return score;
}

function currentAndNextQuestion() {
  var visible;
  var questions = document.getElementsByClassName('question');
  var qIndex = 0;
  for(var i = 0; i < questions.length; i += 1) {
    if(!questions[i].classList.contains('invisible')) {
      visible = questions[i];
      qIndex = i;
    }
  }
  return { currentQuestion: visible, nextQuestion: questions[qIndex + 1] };
}

function questionScore(question) {
  var points = 0;
  var answers = question.getElementsByClassName('radio-question');
  if(answers[0].checked) { points = 1; }
  if(answers[1].checked) { points = 2; }
  if(answers[2].checked) { points = 3;; }
  return points;
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
    <form id="quiz">
      <fieldset id="group1" class="question">
        <p>I lose interest quickly if I don't get to learn new things.</p>
        <input class="radio-question"id="q11" type="radio" value=1 name="group1">
        <label for="q11">Always</label>
        <input class="radio-question"id="q12" type="radio" value=2 name="group1">
        <label for="q12">Sometimes</label>
        <input class="radio-question"id="q13" type="radio" value=3 name="group1">
        <label for="q13">Never</label>
      </fieldset>

      <fieldset id="group2" class="question invisible">
        <p>I believe stories are the best way to get a point across.</p>
        <input class="radio-question"id="q21" type="radio" value=1 name="group2">
        <label for="q21">Always</label>
        <input class="radio-question"id="q22" type="radio" value=2 name="group2">
        <label for="q22">Sometimes</label>
        <input class="radio-question"id="q23" type="radio" value=3 name="group2">
        <label for="q23">Never</label>
      </fieldset>

      <fieldset id="group3" class="question invisible">
        <p>I need to take control of situations that seem to be out of control.</p>
        <input class="radio-question"id="q31" type="radio" value=1 name="group3">
        <label for="q31">Always</label>
        <input class="radio-question"id="q32" type="radio" value=2 name="group3">
        <label for="q32">Sometimes</label>
        <input class="radio-question"id="q33" type="radio" value=3 name="group3">
        <label for="q33">Never</label>
      </fieldset>

      <fieldset id="group4" class="question invisible">
        <p>I believe that even the most disadvantageous peace is better than any direct conflict.</p>
        <input class="radio-question"id="q41" type="radio" value=1 name="group4">
        <label for="q41">Always</label>
        <input class="radio-question"id="q42" type="radio" value=2 name="group4">
        <label for="q42">Sometimes</label>
        <input class="radio-question"id="q43" type="radio" value=3 name="group4">
        <label for="q43">Never</label>
      </fieldset>

      <fieldset id="group5" class="question invisible">
        <p>I find it difficult to incorporate new ideas with my existing world view.</p>
        <input class="radio-question"id="q51" type="radio" value=1 name="group5">
        <label for="q51">Always</label>
        <input class="radio-question"id="q52" type="radio" value=2 name="group5">
        <label for="q52">Sometimes</label>
        <input class="radio-question"id="q53" type="radio" value=3 name="group5">
        <label for="q53">Never</label>
      </fieldset>
  </form>
  <button class="invisible" id="submit-quiz">Start Working</button>
`
  return test
}
