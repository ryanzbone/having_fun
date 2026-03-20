export function initInstantWild(root) {
  var categories = {
    "Large Mammal": ["Elephant", "Giraffe", "Buffalo", "Hippopotamus", "Rhinoceros", "Zebra", "Oryx"],
    "Predator": ["Lion", "Leopard", "Cheetah", "Hyena", "Wild Dog", "Jackal"],
    "Primate": ["Baboon", "Vervet Monkey", "Colobus Monkey", "Chimpanzee"],
    "Antelope": ["Impala", "Gazelle", "Springbok", "Wildebeest", "Kudu", "Eland", "Waterbuck"],
    "Small Mammal": ["Warthog", "Mongoose", "Meerkat", "Hare", "Porcupine", "Badger", "Genet"],
    "Bird": ["Ostrich", "Peacock", "Vulture", "Eagle", "Flamingo", "Pelican", "Hornbill"],
    "Reptile": ["Monitor Lizard", "Crocodile", "Tortoise", "Snake"],
    "Other": ["Domestic Animal", "Human", "Vehicle"]
  };

  var photos = [
    // Original singles - verified
    { answer: "Elephant", category: "Large Mammal", camera: "Camera 7 - Kenya, Tsavo", count: 1, img: "images/wildlife/elephant.jpg" },
    { answer: "Lion", category: "Predator", camera: "Camera 3 - Kenya, Masai Mara", count: 1, img: "images/wildlife/lion.jpg" },
    { answer: "Gazelle", category: "Antelope", camera: "Camera 12 - Kenya, Amboseli", count: 4, img: "images/wildlife/impala.jpg" },
    { answer: "Baboon", category: "Primate", camera: "Camera 9 - Kenya, Laikipia", count: 1, img: "images/wildlife/baboon.jpg" },
    { answer: "Zebra", category: "Large Mammal", camera: "Camera 5 - Kenya, Tsavo", count: 1, img: "images/wildlife/zebra.jpg" },
    { answer: "Warthog", category: "Small Mammal", camera: "Camera 2 - Kenya, Lewa", count: 1, img: "images/wildlife/warthog.jpg" },
    { answer: "Giraffe", category: "Large Mammal", camera: "Camera 11 - Kenya, Samburu", count: 1, img: "images/wildlife/giraffe.jpg" },
    { answer: "Vulture", category: "Bird", camera: "Camera 8 - Kenya, Masai Mara", count: 1, img: "images/wildlife/vulture.jpg" },
    { answer: "Leopard", category: "Predator", camera: "Camera 1 - Kenya, Laikipia", count: 1, img: "images/wildlife/leopard.jpg" },
    { answer: "Wildebeest", category: "Antelope", camera: "Camera 6 - Kenya, Masai Mara", count: 6, img: "images/wildlife/wildebeest.jpg" },
    { answer: "Hyena", category: "Predator", camera: "Camera 4 - Kenya, Tsavo", count: 1, img: "images/wildlife/hyena.jpg" },
    { answer: "Peacock", category: "Bird", camera: "Camera 10 - Kenya, Lewa", count: 1, img: "images/wildlife/peacock.jpg" },
    { answer: "Hippopotamus", category: "Large Mammal", camera: "Camera 14 - Kenya, Naivasha", count: 4, img: "images/wildlife/hippopotamus.jpg" },
    { answer: "Meerkat", category: "Small Mammal", camera: "Camera 13 - Kenya, Amboseli", count: 1, img: "images/wildlife/meerkat_single.jpg" },
    { answer: "Springbok", category: "Antelope", camera: "Camera 7 - Namibia, Etosha", count: 2, img: "images/wildlife/gazelle.jpg" },
    { answer: null, category: null, camera: "Camera 3 - Kenya, Masai Mara", count: 0, img: "images/wildlife/empty_savanna.jpg" },
    { answer: "Cheetah", category: "Predator", camera: "Camera 5 - Kenya, Lewa", count: 1, img: "images/wildlife/cheetah.jpg" },
    { answer: "Buffalo", category: "Large Mammal", camera: "Camera 2 - Kenya, Tsavo", count: 1, img: "images/wildlife/buffalo.jpg" },
    { answer: "Ostrich", category: "Bird", camera: "Camera 9 - South Africa, De Hoop", count: 1, img: "images/wildlife/ostrich.jpg" },
    { answer: "Badger", category: "Small Mammal", camera: "Camera 1 - UK, Cotswolds", count: 1, img: "images/wildlife/badger.jpg" },
    // Group photos - verified
    { answer: "Elephant", category: "Large Mammal", camera: "Camera 15 - Kenya, Amboseli", count: 7, img: "images/wildlife/elephants_herd.jpg" },
    { answer: "Lion", category: "Predator", camera: "Camera 16 - Kenya, Masai Mara", count: 7, img: "images/wildlife/lions_pride.jpg" },
    { answer: "Pelican", category: "Bird", camera: "Camera 17 - Mexico, Gulf Coast", count: 8, img: "images/wildlife/pelicans_group.jpg" },
    { answer: "Giraffe", category: "Large Mammal", camera: "Camera 18 - South Africa, Kruger", count: 6, img: "images/wildlife/giraffes_herd.jpg" },
    { answer: "Flamingo", category: "Bird", camera: "Camera 19 - Kenya, Nakuru", count: 11, img: "images/wildlife/flamingos.jpg" },
    { answer: "Wildebeest", category: "Antelope", camera: "Camera 20 - Kenya, Masai Mara", count: 20, img: "images/wildlife/wildebeest_stampede.jpg" },
    { answer: "Meerkat", category: "Small Mammal", camera: "Camera 21 - Namibia, Kalahari", count: 5, img: "images/wildlife/meerkats_group.jpg" },
    { answer: "Impala", category: "Antelope", camera: "Camera 22 - Zambia, South Luangwa", count: 15, img: "images/wildlife/impala_large_herd.jpg" },
    { answer: "Zebra", category: "Large Mammal", camera: "Camera 23 - Kenya, Masai Mara", count: 7, img: "images/wildlife/zebras_herd.jpg" },
    { answer: "Hippopotamus", category: "Large Mammal", camera: "Camera 24 - Kenya, Naivasha", count: 5, img: "images/wildlife/hippos_water.jpg" },
    { answer: "Cheetah", category: "Predator", camera: "Camera 25 - Kenya, Masai Mara", count: 2, img: "images/wildlife/cheetahs_two.jpg" },
    { answer: "Warthog", category: "Small Mammal", camera: "Camera 26 - South Africa, Marloth Park", count: 3, img: "images/wildlife/warthogs_three.jpg" },
    { answer: "Hyena", category: "Predator", camera: "Camera 27 - Tanzania, Ngorongoro", count: 3, img: "images/wildlife/hyenas_three.jpg" },
    { answer: "Vulture", category: "Bird", camera: "Camera 28 - Kenya, Masai Mara", count: 3, img: "images/wildlife/vultures_carcass.jpg" },
    { answer: "Oryx", category: "Large Mammal", camera: "Camera 29 - Kenya, Laikipia", count: 12, img: "images/wildlife/oryx_herd.jpg" },
    { answer: "Leopard", category: "Predator", camera: "Camera 30 - Kenya, Masai Mara", count: 2, img: "images/wildlife/leopard_mom_cub.jpg" },
    { answer: null, category: null, camera: "Camera 31 - Namibia, Skeleton Coast", count: 0, img: "images/wildlife/empty_riverbed_actual.jpg" },
    { answer: "Baboon", category: "Primate", camera: "Camera 32 - South Africa, Thaba Chweu", count: 6, img: "images/wildlife/baboons_building.jpg" },
    { answer: "Ostrich", category: "Bird", camera: "Camera 33 - South Africa, Karoo", count: 2, img: "images/wildlife/ostriches_two.jpg" },
    { answer: "Buffalo", category: "Large Mammal", camera: "Camera 34 - Zambia, Kafue", count: 12, img: "images/wildlife/buffalo_large_herd.jpg" },
  ];

  var photoIndex = 0;
  var score = 0;
  var tagged = 0;
  var streak = 0;
  var selectedCategory = null;
  var selectedSpecies = null;
  var currentPhoto = null;

  // Inject styles
  var style = document.createElement('style');
  style.textContent = `
    .iw-wrap { font-family: Arial, Helvetica, sans-serif; background: #eef1f2; color: #333; display: flex; flex-direction: column; position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; }
    #instant-wild-root { position: relative; width: 100%; height: 100%; }
    .iw-header { background: #80ba27; color: white; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
    .iw-header h2 { font-size: 14px; font-weight: bold; margin: 0; }
    .iw-header h2 span { font-weight: normal; font-size: 11px; display: block; }
    .iw-header-right { font-size: 12px; }
    .iw-main { display: flex; flex: 1; min-height: 0; overflow: hidden; }
    .iw-photo { flex: 1; background: #222; position: relative; overflow: hidden; min-width: 0; }
    .iw-photo img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; filter: saturate(0.55) contrast(0.9) brightness(0.95); display: block; }
    .iw-grain { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E"); mix-blend-mode: overlay; opacity: 0.5; pointer-events: none; }
    .iw-vignette { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%); pointer-events: none; }
    .iw-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; }
    .iw-bar { position: absolute; left: 0; right: 0; background: rgba(0,0,0,0.55); font: 12px/1 monospace; color: #00ff00; padding: 5px 8px; display: flex; justify-content: space-between; }
    .iw-bar-top { top: 0; }
    .iw-bar-bottom { bottom: 0; }
    .iw-sidebar { width: 260px; background: white; border-left: 1px solid #ddd; display: flex; flex-direction: column; overflow: hidden; flex-shrink: 0; }
    .iw-sidebar-header { background: #80ba27; color: white; padding: 10px 12px; font-size: 13px; font-weight: bold; flex-shrink: 0; }
    .iw-section { padding: 10px 12px; flex: 1; overflow-y: auto; }
    .iw-step-label { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; font-weight: bold; }
    .iw-cat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 10px; }
    .iw-cat-btn, .iw-sp-btn { background: #f5f5f5; border: 2px solid #ddd; border-radius: 3px; padding: 7px 6px; font-size: 12px; cursor: pointer; transition: all 0.15s; text-align: center; }
    .iw-sp-btn { display: block; width: 100%; text-align: left; margin-bottom: 3px; }
    .iw-cat-btn:hover, .iw-sp-btn:hover { border-color: #80ba27; background: #f0f8e0; }
    .iw-cat-btn.selected, .iw-sp-btn.selected { border-color: #80ba27; background: #e8f5cc; font-weight: bold; }
    .iw-count { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; padding: 8px 0; }
    .iw-count label { font-size: 12px; font-weight: bold; }
    .iw-count input { width: 45px; padding: 4px; border: 2px solid #ddd; border-radius: 3px; text-align: center; font-size: 13px; }
    .iw-submit { background: #80ba27; color: white; border: none; border-radius: 3px; padding: 10px; font-size: 13px; font-weight: bold; cursor: pointer; width: 100%; }
    .iw-submit:hover { background: #6ea21f; }
    .iw-no-animal { background: none; border: 1px solid #aaa; border-radius: 3px; padding: 6px; font-size: 11px; cursor: pointer; width: 100%; margin-top: 6px; color: #666; }
    .iw-no-animal:hover { border-color: #80ba27; color: #333; }
    .iw-back { background: none; border: none; color: #888; font-size: 11px; cursor: pointer; margin-top: 4px; width: 100%; padding: 4px; text-decoration: underline; }
    .iw-banner { padding: 10px; text-align: center; font-weight: bold; font-size: 12px; display: none; flex-shrink: 0; }
    .iw-banner.correct { background: #e8f5cc; color: #4a7a0a; display: block; }
    .iw-banner.incorrect { background: #fde8e8; color: #a33; display: block; }
    .iw-banner.info { background: #e0eef8; color: #336; display: block; }
    .iw-stats { border-top: 1px solid #eee; padding: 8px 12px; font-size: 11px; color: #888; display: flex; justify-content: space-between; background: #fafafa; flex-shrink: 0; }
    .iw-hidden { display: none !important; }
  `;
  document.head.appendChild(style);

  // Build DOM
  root.innerHTML = `
    <div class="iw-wrap">
      <div class="iw-header">
        <h2>Instant Wild <span>Conservation at your fingertips</span></h2>
        <div class="iw-header-right"><span class="iw-score">Score: 0</span></div>
      </div>
      <div class="iw-main">
        <div class="iw-photo">
          <img class="iw-img" src="" alt="Camera trap photo">
          <div class="iw-grain"></div>
          <div class="iw-vignette"></div>
          <div class="iw-overlay">
            <div class="iw-bar iw-bar-top"><span class="iw-cam"></span><span>MOTION DETECTED</span></div>
            <div class="iw-bar iw-bar-bottom"><span class="iw-ts"></span><span class="iw-env"></span><span class="iw-meta"></span></div>
          </div>
        </div>
        <div class="iw-sidebar">
          <div class="iw-sidebar-header">What do you see?</div>
          <div class="iw-banner"></div>
          <div class="iw-section">
            <div class="iw-step1">
              <p class="iw-step-label">Step 1: Select a category</p>
              <div class="iw-cat-grid"></div>
              <button class="iw-no-animal">No animal visible</button>
            </div>
            <div class="iw-step2 iw-hidden">
              <p class="iw-step-label">Step 2: Select species</p>
              <div class="iw-sp-list"></div>
              <button class="iw-sp-btn iw-unknown" style="color:#888;text-align:center;">Unknown species</button>
              <button class="iw-back iw-back1">\u2190 Back to categories</button>
            </div>
            <div class="iw-step3 iw-hidden">
              <div class="iw-count"><label>How many?</label><input type="number" class="iw-count-input" min="1" max="99" value="1"></div>
              <button class="iw-submit iw-submit-btn">Submit</button>
              <button class="iw-back iw-back2">\u2190 Back to species</button>
            </div>
            <div class="iw-step-next iw-hidden" style="text-align:center;padding-top:16px;">
              <button class="iw-submit iw-next-btn">Next Photo</button>
            </div>
          </div>
          <div class="iw-stats">
            <span>Photos tagged: <b class="iw-tagged">0</b></span>
            <span>Streak: <b class="iw-streak">0</b></span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Query scoped to root
  var $ = function(sel) { return root.querySelector(sel); };

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function updateOverlay(photo) {
    $('.iw-cam').textContent = photo.camera;
    var d = new Date();
    d.setHours(d.getHours() - Math.floor(Math.random() * 48));
    $('.iw-ts').textContent = d.toISOString().replace('T', ' ').substring(0, 19);
    var temp = 18 + Math.floor(Math.random() * 15);
    var humidity = 40 + Math.floor(Math.random() * 40);
    $('.iw-env').textContent = 'TEMP: ' + temp + 'C  HUM: ' + humidity + '%';
    var seq = String(Math.floor(Math.random() * 9000) + 1000);
    $('.iw-meta').textContent = 'BAT: ' + (60 + Math.floor(Math.random() * 35)) + '%  SEQ: ' + seq;
  }

  function loadPhoto() {
    if (photoIndex >= photos.length) { shuffle(photos); photoIndex = 0; }
    currentPhoto = photos[photoIndex];
    photoIndex++;
    $('.iw-img').src = currentPhoto.img;
    updateOverlay(currentPhoto);
    selectedCategory = null;
    selectedSpecies = null;
    $('.iw-step1').classList.remove('iw-hidden');
    $('.iw-step2').classList.add('iw-hidden');
    $('.iw-step3').classList.add('iw-hidden');
    $('.iw-step-next').classList.add('iw-hidden');
    $('.iw-banner').className = 'iw-banner';
    $('.iw-banner').textContent = '';
    $('.iw-count-input').value = 1;
    renderCategories();
  }

  function renderCategories() {
    var grid = $('.iw-cat-grid');
    grid.innerHTML = '';
    var keys = Object.keys(categories);
    for (var i = 0; i < keys.length; i++) {
      var btn = document.createElement('button');
      btn.className = 'iw-cat-btn';
      btn.textContent = keys[i];
      btn.setAttribute('data-cat', keys[i]);
      btn.addEventListener('click', function() {
        selectedCategory = this.getAttribute('data-cat');
        $('.iw-step1').classList.add('iw-hidden');
        $('.iw-step2').classList.remove('iw-hidden');
        renderSpecies(selectedCategory);
      });
      grid.appendChild(btn);
    }
  }

  function renderSpecies(cat) {
    var list = $('.iw-sp-list');
    list.innerHTML = '';
    var species = categories[cat];
    for (var i = 0; i < species.length; i++) {
      var btn = document.createElement('button');
      btn.className = 'iw-sp-btn';
      btn.textContent = species[i];
      btn.setAttribute('data-species', species[i]);
      btn.addEventListener('click', function() {
        selectedSpecies = this.getAttribute('data-species');
        var all = list.querySelectorAll('.iw-sp-btn');
        for (var j = 0; j < all.length; j++) all[j].classList.remove('selected');
        this.classList.add('selected');
        $('.iw-unknown').classList.remove('selected');
        $('.iw-step2').classList.add('iw-hidden');
        $('.iw-step3').classList.remove('iw-hidden');
      });
      list.appendChild(btn);
    }
  }

  function showResult(correct, message) {
    var banner = $('.iw-banner');
    banner.textContent = message;
    banner.className = 'iw-banner ' + (correct === true ? 'correct' : correct === false ? 'incorrect' : 'info');
    $('.iw-step1').classList.add('iw-hidden');
    $('.iw-step2').classList.add('iw-hidden');
    $('.iw-step3').classList.add('iw-hidden');
    $('.iw-step-next').classList.remove('iw-hidden');
    tagged++;
    $('.iw-tagged').textContent = tagged;
    if (correct) { score += 10; streak++; } else { streak = 0; }
    $('.iw-score').textContent = 'Score: ' + score;
    $('.iw-streak').textContent = streak;
  }

  $('.iw-no-animal').addEventListener('click', function() {
    if (currentPhoto.answer === null) {
      showResult(true, "Correct! No animal in this photo.");
    } else {
      showResult(false, "Hmm, there was a " + currentPhoto.answer + " in this photo.");
    }
  });

  $('.iw-unknown').addEventListener('click', function() {
    showResult(null, "Noted as unknown. It was: " + (currentPhoto.answer || "empty frame"));
  });

  $('.iw-back1').addEventListener('click', function() {
    $('.iw-step2').classList.add('iw-hidden');
    $('.iw-step1').classList.remove('iw-hidden');
  });

  $('.iw-back2').addEventListener('click', function() {
    $('.iw-step3').classList.add('iw-hidden');
    $('.iw-step2').classList.remove('iw-hidden');
  });

  $('.iw-submit-btn').addEventListener('click', function() {
    if (!selectedSpecies) return;
    if (selectedSpecies === currentPhoto.answer) {
      showResult(true, "Correct! That's a " + currentPhoto.answer + "!");
    } else {
      showResult(false, "Not quite. It was a " + (currentPhoto.answer || "false trigger") + ".");
    }
  });

  $('.iw-next-btn').addEventListener('click', function() { loadPhoto(); });

  shuffle(photos);
  loadPhoto();
}
