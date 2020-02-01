export function scheduleChats(wm)
{
  var daveChats = [
    "<p><b>Dave S.</b> 🎅 <i>a moment ago</i></p><p>Hey bud</p>",
    '<p>We need a photo of you for your ID</p>',
    '<p>If you want to just add me on Facebook real quick I can pick one for you.</p>',
    '<p>Ill choose one where you looks good ;P</p>',
  ];

  var susanChats = [
    "<p><b>Susan M.</b> 🌴 <i>a moment ago</i></p><p>Interesting article</p>",
    "<p><a class='browser-link' href='https://www.safetyworksmaine.gov/safe_workplace/safety_management/' >https://www.safetyworksmaine.gov/safe_workplace/safety_management/</a></p>",
    "<p>IIt's about creating a safe work environment</p>",
    "<p>EVERYONE is responsible for keeping the workplace SAFE and WELCOMING</p>",
    "<p>Clearly last months super soaker get together by the employee activation counicl could take some notes</p>",
  ];

  var daveChat2 = [
    "<p><b>Dave S.</b> 🎅 <i>a moment ago</i></p><p>Hey bud</p>",
    "<p>Sorry if that was a bit weird</p>",
    "<p>We just like to keep things super cas at work</p>",
    "<p>Everybody adds each other on social and all that</p>",
    "<p>Here's a picture of me if that makes things a bit less akward</p>",
    "<p><a class='browser-link' href='https://i.ibb.co/TcmRfyJ/dr-ian-malcolm-jurassic-park-jeff-goldblum-chaos-e1531929342928.jpg'>https://radpict.com/a/edJPm</a></p>",
    "<p>:)</p>",
    "<p>Wait. Sorry wrong pic</p>",
    "<p><a class='browser-link' href='https://i.ibb.co/dJWd9sf/MV5-BNTE3-ODQ4-Njkw-NV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-Mzg4-OTI3-OA-V1-SY1000-CR0013481000-AL.jpg'>https://radpict.com/a/34j0df</a></p>",
  ]
  var eac = [
    '<p><b>EAC</b> 🤖 <i>a moment ago</i> </p><p>JOIN THE EMPLOYEE ACTIVATION COUNSIL TODAY AT THREE FOR FREE DOUGHNUTS AND A MOVIE TO CELEBRATE WOMANS HISTORY MONTH.',
    '<p>WE WILL BE SHOWING RAMPAGE',
    '<p>STARING DWAYNE THE ROCK JOHNSON',
    '<p>DOUGHNUTS ARE FIRST COME FIRST SERVE.',
  ]
  var susanKaren = [
`<p>Susan M. 🌴, Karen P.👼</p>
<p>👨‍👩‍👧‍👦 3 members</p>
<br/>
<p><b>Susan M. 🌴</b> <i>a moment ago</i></p>
<p>Rampage!?!</p>`,
    "<p><b>Karen P.</b> 👼 <i>a moment ago</i></p><p>Unbelievable</p>",
    "<b>Susan M.</b> 🌴 <i>a moment ago</i></p><p>How could anyone possibly think that this is in anyway acceptible for womans history month</p>",
    "Who's responsible for running the EAC</p>",
    "<b>Karen P.</b> 👼 <i>a moment ago</i></p><p>I have a meeting at three</p>",
    "I'm going to miss the doughnuts</p>",
    "I never get any doughnuts</p>",
    "Unbelievable</p>",
    "I think Dave in HR is still in charge</p>",
  ]
  var daveChat3 = [
    "<b>Dave S</b>. 🎅 <i>a moment ago</i></p><p>Hey bud</p>",
    "<p>Hey forget about the picture thing</p>",
    "<p>I'll just stop by and take a picture later</p>",
    "<p>Or we can do it after work if you're busy</p>",
    "<p>Whatever works for you</p>",
  ]
  var chris = [
    "<b>Chris B.</b> 😝 <i>a moment ago</i></p><p>LOOK AT THIS FOOKIN PUP</p>",
    "<p><a class='browser-link' href='https://i.ibb.co/0YMxNnt/177ebac786ae5311149bcf964067dc0a.jpg'>https://radpict.com/a/ncKDjj</a></p>",
    "<p>:'D</p>",
    "<p>SO GOOD</p>",
  ]
  var daveChat4 = [
    "<b>Dave S.</b> 🎅 <i>a moment ago</i></p><p>Hey bud</p>",
    "<p>Sorry if that was a bit weird</p>",
    "<p>Every employee is required to have a photo for their ID badge</p>",
    "<p>I just thought it would be nice to have a casual one of you at your desk</p>",
    "<p>It's just more relaxed</p>",
    "<p>We like to create more of a fun work environment around here</p>",
    "<p>Just having a bit of fun :D</p>",
  ]
  var ryanCasey = [
    "<p>Ryan B. 🧙‍, Casey T. 😎</p><p>👨‍👩‍👧‍👦 3 members</p><p><b>Ryan B.</b> 🧙‍♂️ <i>a moment ago</i></p><p>Video games?</p>",
    "<p><b>Casey T.</b> 😎 <i>a moment ago</i></p><p>My place tonight?</p>",
    "<p><b>Ryan B.</b> 🧙‍♂️ <i>a moment ago</i></p><p>Sure thing!</p>",
    "<p>You have Destiney DL?</p>",
    "<p><b>Casey T.</b> 😎 <i>a moment ago</i></p><p>Says it'll take 12 hours to update</p>",
    "<p><b>Ryan B.</b> 🧙‍♂️ <i>a moment ago</i></p><p>Smash it is</p>",
  ]
  var daveChat5 = [
    "<p><b>Dave S.</b> 😿 <i>a moment ago</i></p><p>Hey bud</p>",
    "<p>Susan's going to get your picture tomorrow</p>",
    "<p>I'm going to be out tomorrow</p>",
    "<p>And for the rest of the month</p>",
    "<p>I actually don't work here anymore</p>",
    "<p>I've never seen someone have such an amazing first day</p>",
    "<p>You're going to do really amazing things</p>",
    "<p>Drop me a DM in my insta @DaveinHR if you wanna go to Casey's place and smash later</p>",
    "<p>Wait</p>",
    "<p>Sorry if that was a bit weird</p>",
    "<p>I just</p>",
    "<p>Nevermind</p>",
  ]
  var allChats = [
    { name: 'Dave S. 🎅', messages: daveChats },
    { name: 'Susan M. 🌴', messages: susanChats },
    { name: 'Dave S. 🎅', messages: daveChat2 },
    { name: 'EAC 🤖', messages: eac },
    { name: 'Group Chat', messages: susanKaren },
    { name: 'Dave S. 🎅', messages: daveChat3 },
    { name: 'Chris B. 😝', messages: chris },
    { name: 'Dave S. 🎅', messages: daveChat4 },
    { name: 'Group Chat', messages: ryanCasey },
    { name: 'Dave S. 😿', messages: daveChat5 },
  ]
  var chatIndex = 0;
  var timeBetweenChats = 45000;

  document.addEventListener('chatOver', function(event) {
    setTimeout(function() {
      chatWindow(wm, allChats[chatIndex].name, allChats[chatIndex].messages).open();
      chatIndex = chatIndex + 1;
    }, timeBetweenChats);
  });

  setTimeout(function() {
    var event = new Event('chatOver');
    document.dispatchEvent(event);
  }, 40000);
}

function chatWindow(wm, character, chats) {
  const test = wm.createWindow({
    width: 300,
    height: 500,
    x: (Math.random() * 1000), y:Math.random() * 100,
    title: `${character} via Crosstalk`,
    maximizable: false,
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
    minimizeSize: 75,
  })
  var randomId = Math.random().toString(36).substring(2).replace(/\d/g, '')
  test.content.style.padding = '0.5em'
  test.content.classList.add('chat-box-margin')
  test.content.innerHTML = `
  <div class="chat-log">
  </div>
  <div class="chat-controls footer">
    <div class="input-group padding-5-lr">
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

  var chatIndex = 0;
  test.on('close', function(event) { test.open(); });
  test.once('open', function(event) {
    var messageLog = test.win.querySelector("div.chat-log");
    var bloop = document.getElementById('bloop');

    function sendMessage(index) {
      if(index >= chats.length) {
        var event = new Event('chatOver');
        document.dispatchEvent(event);
        return;
      } else {
        var newChat = document.createElement('p');
        newChat.innerHTML = chats[index];
        messageLog.appendChild(newChat);
        linkify(newChat);
        bloop.play();
        test.focus();
        newChat.scrollIntoView();
        setTimeout(function() { sendMessage(index + 1) }, 2000 + (6000 * Math.random()));
      }
    }

    function linkify(newChat) {
      var link = newChat.querySelector('a.browser-link');
      if(link != null) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          browser(wm, link.href);
        });
      }
    }
    sendMessage(chatIndex);
  });

  document.addEventListener('click', function(event) {
    if(event.target.classList.contains("send-message")) {
      var messageLog = test.win.querySelector("div.chat-log");
      var messageInput = test.win.querySelector("input.crosstalk-message");
      var newChat = document.createElement('p');
      var newChat = document.createElement('p');
      newChat.classList.add('chat-me')
      newChat.innerHTML = `
      <br/>
      <b>You 👻</b><i> a moment ago</i>
      <br/>
      ${messageInput.value}
      </p>
      `
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
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
  })
  test.content.style.padding = '0.5em'
  test.content.classList.add('chat-box-margin')
  test.content.innerHTML = `
  <div class="chat-log">
    <p><b>Wizard</b> 🔮 <i>a moment ago</i></p>
    <p>Hello, I'm the Wizard. I try to be helpful. (But I'm still just a shitty wizard. Sorry!) Type something and click the "+" to send your message.
  </div>
  <div class="chat-controls footer">
    <div class="input-group padding-5-lr">
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
      newChat.innerHTML = `
      <br/>
      <b>You 👻</b><i> a moment ago</i>
      <br/>
      ${messageInput.value}
      </p>
      `
      messageLog.appendChild(newChat);
      newChat.scrollIntoView();
      messageInput.value = '';

      setTimeout(function() {
        var response = responses[Math.floor(Math.random()*responses.length)];
        var newChat = document.createElement('p');
        newChat.innerHTML = `
        <br/>
        <b>Wizard</b> 🔮 <i>a moment ago</i>
        <br/>
        ${response}
        </p>
        `
        messageLog.appendChild(newChat);
        newChat.scrollIntoView();
      }, 1000);
    }
  });
  return test
}
export function browser(wm, source)
{
  const test = wm.createWindow({
    width: 800, height: 600,
    x: 100, y: 100,
    backgroundColorWindow: '#ffffff',
    titlebarHeight: '45px',
    title: 'NetSquirrelNavigator',
    backgroundColorTitlebarActive: '#7eb4f8',
    backgroundColorTitlebarInactive: '#97b4d8',
    borderRadius: "0px",
    minimizable: true,
    maximizable: false,
    closable: false,
    minimizeSize: 200,
    resizable: true
  })
  test.content.style.padding = '0.5em'
  test.content.innerHTML = `
  <iframe frameborder="0" class="full-frame" src=${source}></iframe>
  `
  test.open();
}
