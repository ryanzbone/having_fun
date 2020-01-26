export function scheduleChats(wm)
{
  var daveChats = [
    'Hey bud',
    'We need a photo of you for your ID',
    'If you want to just add me on Facebook real quick I can pick one for you.',
    'Ill choose one where you looks good ;P',
  ];

  var susanChats = [
    "Interesting article",
    "https://www.safetyworksmaine.gov/safe_workplace/safety_management/",
    "IIt's about creating a safe work environment",
    "EVERYONE is responsible for keeping the workplace SAFE and WELCOMING",
    "Clearly last months super soaker get together by the employee activation counicl could take some notes",
  ];

  var daveChat2 = [
    "Hey bud ",
    "Sorry if that was a bit weird",
    "We just like to keep things super cas at work",
    "Everybody adds each other on social and all that",
    "Here's a picture of me if that makes things a bit less akward",
    "https://imgur.com/a/edJPm",
    ":)",
    "Wait. Sorry wrong pic",
    "https://imgur.com/a/edJPm",
  ]
  var eac = [
    'EAC: JOIN THE EMPLOYEE ACTIVATION COUNSIL TODAY AT THREE FOR FREE DOUGHNUTS AND A MOVIE TO CELEBRATE WOMANS HISTORY MONTH.',
    'EAC: WE WILL BE SHOWING RAMPAGE',
    'EAC: STARING DWAYNE THE ROCK JOHNSON',
    'EAC: DOUGHNUTS ARE FIRST COME FIRST SERVE.',
  ]
  var susanKaren = [
    "Susan: Rampage!?!",
    "Karen: Unbelievable",
    "Susan: How could anyone possibly think that this is in anyway acceptible for womans history month",
    "Susan: Who's responsible for running the EAC",
    "Karen: I have a meeting at three",
    "Karen: I'm going to miss the doughnuts",
    "Karen: I never get any doughnuts",
    "Karen: Unbelievable",
    "Karen: I think Dave in HR is still in charge",
  ]
  var daveChat3 = [
    "Hey bud",
    "Hey forget about the picture thing",
    "I'll just stop by and take a picture later",
    "Or we can do it after work if you're busy",
    "Whatever works for you",
  ]
  var chris = [
    "LOOK AT THIS FOOKIN PUP",
    "https://imgur.com/a/edJPm",
    ":'D",
    "SO GOOD",
  ]
  var daveChat4 = [
    "Hey bud",
    "Sorry if that was a bit weird",
    "Every employee is required to have a photo for their ID badge",
    "I just thought it would be nice to have a casual one of you at your desk",
    "It's just more relaxed",
    "We like to create more of a fun work environment around here",
    "Just having a bit of fun :D",
  ]
  var ryanCasey = [
    "Ryan: Video games?",
    "Casey: My place tonight?",
    "Ryan: Sure thing!",
    "Ryan: You have Destiney DL?",
    "Casey: Says it'll take 12 hours to update",
    "Ryan: Smash it is",
  ]
  var daveChat5 = [
    "Hey bud",
    "Susan's going to get your picture tomorrow",
    "I'm going to be out tomorrow",
    "And for the rest of the month",
    "I actually don't work here anymore",
    "I've never seen someone have such an amazing first day",
    "You're going to do really amazing things",
    "Drop me a DM in my insta @DaveinHR if you wanna go to Casey's place and smash later",
    "Wait",
    "Sorry if that was a bit weird",
    "I just",
    "Nevermind",
  ]
  var allChats = [
    { name: 'Dave 🐶', messages: daveChats },
    { name: 'Susan 🌵', messages: susanChats },
    { name: 'Dave 🙈', messages: daveChat2 },
    { name: 'EAC 🏢', messages: eac },
    { name: 'Susan 🌵 and Karen 🎻', messages: susanKaren },
    { name: 'Dave 📷', messages: daveChat3 },
    { name: 'Chris 👀', messages: chris },
    { name: 'Dave 🎈', messages: daveChat4 },
    { name: 'Ryan 🕹 and Casey 🔉', messages: ryanCasey },
    { name: 'Dave 😿', messages: daveChat5 },
  ]
  var chatIndex = 0;

  document.addEventListener('chatOver', function(event) {
    setTimeout(function() {
      chatWindow(wm, allChats[chatIndex].name, allChats[chatIndex].messages).open();
      chatIndex = chatIndex + 1;
    }, 15000);
  });

  var event = new Event('chatOver');
  document.dispatchEvent(event);
}

function chatWindow(wm, character, chats) {
  const test = wm.createWindow({
    width: 300,
    height: 600,
    x: (Math.random() * 1000), y:Math.random() * 100,
    title: `${character} via Crosstalk`,
    maximizable: false,
  })
  var randomId = Math.random().toString(36).substring(2).replace(/\d/g, '')
  test.content.style.padding = '0.5em'
  test.content.classList.add('chat-box-margin')
  test.content.innerHTML = `
  <div class="chat-log">
  </div>
  <div class="chat-controls footer">
    <div class="input-group">
      <input type="text" class="crosstalk-message ${randomId} form-control" placeholder="Message #Crosstalk">
      <div class="input-group-append">
        <button class="send-message ${randomId}">+</button>
      </div>
    </div>
  </div>
 `
  var input = document.querySelector(`input.${randomId}`);
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector(`button.${randomId}`).click();
    }
  });

  test.on('open', function(event) {
    var messageLog = test.win.querySelector("div.chat-log");
    var bloop = document.getElementById('bloop');

    function sendMessage(index) {
      if(index >= chats.length) {
        var event = new Event('chatOver');
        document.dispatchEvent(event);
        return;
      } else {
        var newChat = document.createElement('p');
        newChat.innerText = chats[index];
        messageLog.appendChild(newChat);
        bloop.play();
        newChat.scrollIntoView();
        setTimeout(function() { sendMessage(index + 1) }, 1000 + (6000 * Math.random()));
      }
    }
    sendMessage(0)
  });

  document.addEventListener('click', function(event) {
    if(event.target.classList.contains("send-message")) {
      var messageLog = test.win.querySelector("div.chat-log");
      var messageInput = test.win.querySelector("input.crosstalk-message");
      var newChat = document.createElement('p');
      newChat.classList.add('chat-me')
      newChat.innerText = messageInput.value;
      messageLog.appendChild(newChat);
      newChat.scrollIntoView();
      messageInput.value = '';
    }
  });
  return test
}

export function wizardChat(wm) {
  const test = wm.createWindow({
    width: 300,
    height: 600,
    x: 800, y: 15,
    title: `Wizard 🔮 via Crosstalk`,
    maximizable: false,
  })
  test.content.style.padding = '0.5em'
  test.content.classList.add('chat-box-margin')
  test.content.innerHTML = `
  <div class="chat-log">
    <p>Hello, I'm the Allvuu Wizard. I try to be helpful. (But I'm still just a shitty wizard. Sorry!) Type something and click the "+" to send your message.
  </div>
  <div class="chat-controls footer">
    <div class="input-group">
      <input type="text" class="wizard crosstalk-message form-control" placeholder="Message #Crosstalk">
      <div class="input-group-append">
        <button class="send-message-to-wizard">+</button>
      </div>
    </div>
  </div>
 `
  var responses = [
    'Yes!',
    'No.',
    'Signs point to maybe.',
    "I'm the wizard.",
    "Try asking Dave.",
    "Let me Google that for you",
    "Would you look at that",
    "Abracadabra",
    "You don't say!",
    "Do you know what I say when I hear something like that? I say would you look at that!",
    "Hmmm",
    "🎩",
    "🐰"
  ]

  var input = document.querySelector('input.wizard');
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector("button.send-message-to-wizard").click();
    }
  });
  document.addEventListener('click', function(event) {
    if(event.target.classList.contains("send-message-to-wizard")) {
      var messageLog = test.win.querySelector("div.chat-log");
      var messageInput = test.win.querySelector("input.crosstalk-message");
      var newChat = document.createElement('p');

      newChat.classList.add('chat-me')
      newChat.innerText = messageInput.value;
      messageLog.appendChild(newChat);
      newChat.scrollIntoView();
      messageInput.value = '';

      setTimeout(function() {
        var response = responses[Math.floor(Math.random()*responses.length)];
        var newChat = document.createElement('p');
        newChat.innerText = response;
        messageLog.appendChild(newChat);
        newChat.scrollIntoView();
      }, 1000);
    }
  });
  return test
}
