const targetDate = new Date("2026-02-14T00:00:00");
const startDate = new Date("2026-02-01");

// ===== Вкладки =====
function showTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ===== Таймер =====
function updateTimer(){
  const timerEl = document.getElementById("timer");
  const now = new Date();
  const diff = targetDate - now;
  
  if(diff <= 0){ 
    timerEl.innerText = "Сегодня наш момент! ❤️"; 
    return; 
  }

  const d = Math.floor(diff/86400000);
  const h = Math.floor((diff%86400000)/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  timerEl.innerText = `${d}д ${h}ч ${m}м ${s}с`;
}
setInterval(updateTimer,1000);
updateTimer();


// === 22 фото и тексты ===
// === 43 фото и текста ===
// === 43 фото и текста ===
const allPhotos = [
  {src:"photos/1.JPG", text:"Ты делаешь меня счастливым ❤️"},
  {src:"photos/2.JPG", text:"Люблю твою улыбку 😍"},
  {src:"photos/3.JPG", text:"Наш вечер под луной 🌙"},
  {src:"photos/4.JPG", text:"Ты мое солнце ☀️"},
  {src:"photos/5.JPG", text:"Лучший день вместе 🥰"},
  {src:"photos/6.JPG", text:"Ты прекрасна 💖"},
  {src:"photos/7.JPG", text:"Моя радость каждый день 😊"},
  {src:"photos/8.JPG", text:"Твои глаза сияют ✨"},
  {src:"photos/9.JPG", text:"Вместе навсегда ❤️"},
  {src:"photos/10.JPG", text:"Ты делаешь мир ярче 🌈"},
  {src:"photos/11.JPG", text:"Люблю каждый момент с тобой 😘"},
  {src:"photos/12.JPG", text:"Ты мое счастье 💕"},
  {src:"photos/13.JPG", text:"Мечтаю о нас вместе 🌸"},
  {src:"photos/14.JPG", text:"Ты особенная 💝"},
  {src:"photos/15.JPG", text:"Каждый день с тобой волшебный ✨"},
  {src:"photos/16.JPG", text:"Ты мое вдохновение 🎵"},
  {src:"photos/17.JPG", text:"С тобой легко дышать 🌬️"},
  {src:"photos/18.JPG", text:"Люблю твои шутки 😂"},
  {src:"photos/19.JPG", text:"Ты мое утро и вечер 🌅"},
  {src:"photos/20.JPG", text:"Ты чудо моей жизни 🌟"},
  {src:"photos/21.JPG", text:"Ты мое все ❤️"},
  {src:"photos/22.JPG", text:"Спасибо, что ты есть 😘"},
  {src:"photos/23.JPG", text:"С тобой каждый день праздник 🎉"},
  {src:"photos/24.JPG", text:"Ты мой ангел 😇"},
  {src:"photos/25.JPG", text:"Твои глаза как море 🌊"},
  {src:"photos/26.JPG", text:"Ты — моя вселенная 🌌"},
  {src:"photos/27.JPG", text:"Ты согреваешь сердце 🔥"},
  {src:"photos/28.JPG", text:"Люблю твой смех 😄"},
  {src:"photos/29.JPG", text:"Ты мой свет в темноте 💡"},
  {src:"photos/30.JPG", text:"Ты делаешь меня лучше 💪"},
  {src:"photos/31.JPG", text:"С тобой легко мечтать 🌟"},
  {src:"photos/32.JPG", text:"Ты — моя радость каждый день 😊"},
  {src:"photos/33.JPG", text:"Люблю твой стиль 👗"},
  {src:"photos/34.JPG", text:"Ты мое вдохновение 💖"},
  {src:"photos/35.JPG", text:"Ты делаешь жизнь яркой 🌈"},
  {src:"photos/36.JPG", text:"Люблю твои глаза 👀"},
  {src:"photos/37.JPG", text:"Ты — мой лучший друг 🤗"},
  {src:"photos/38.JPG", text:"С тобой время летит ⏳"},
  {src:"photos/39.JPG", text:"Ты всегда в моем сердце ❤️"},
  {src:"photos/40.JPG", text:"Ты волшебна ✨"},
  {src:"photos/41.JPG", text:"Ты — моя мечта 🌸"},
  {src:"photos/42.JPG", text:"Люблю твой голос 🎶"},
  {src:"photos/43.JPG", text:"С тобой я дома 🏡"}
];



function showAllPhotos(photosToShow = allPhotos){
  const container = document.getElementById("photoContainer");
  container.innerHTML = ""; // очищаем старые фото

  photosToShow.forEach(photo=>{
    const div = document.createElement("div");
    div.className="photoItem";
    const img = document.createElement("img");
    img.src = photo.src;

    const overlay = document.createElement("div");
    overlay.className="photoTextOverlay";
    overlay.innerText = photo.text;

    div.appendChild(img);
    div.appendChild(overlay);

    // Показываем текст при клике
    div.addEventListener("click", ()=>{
      overlay.style.display = overlay.style.display==="block" ? "none" : "block";
    });

    container.appendChild(div);
  });
}

// Изначально показываем фото
showAllPhotos();

// Кнопка «Новые» для случайного обновления фото
document.getElementById("newPhotosBtn").addEventListener("click", ()=>{
  // Случайная сортировка 43 фото
  const shuffled = allPhotos.sort(()=>0.5-Math.random());
  showAllPhotos(shuffled);
});


// Изначально показываем фото
showAllPhotos();

// Кнопка «Новые»
document.getElementById("newPhotosBtn").addEventListener("click", ()=>{
  // можно сделать случайную сортировку
  const shuffled = allPhotos.sort(()=>0.5-Math.random());
  showAllPhotos(shuffled);
});

showAllPhotos();

// ===== Слова дня =====
const texts = [
  "Ты делаешь мой мир светлее.",
  "Мне нравится просыпаться с мыслью о тебе.",
  "Ты самое тёплое, что есть в моей жизни."
];

function dailyText(){
  const dayIndex = Math.floor((new Date()-startDate)/86400000);
  const el = document.getElementById("dailyText");
  el.innerText = texts[dayIndex] || texts[0];
}

const dailyTexts = [
  `Ты делаешь мой мир светлее. Каждый раз, когда я вижу твою улыбку, мое сердце наполняется теплом и радостью. Ты — мое вдохновение, моя радость, моя поддержка. С тобой каждый день становится особенным. ❤️`,
  `Я безумно благодарен за то, что ты есть в моей жизни. Ты приносишь столько счастья и любви. Твоя улыбка озаряет мой день, а твой смех — музыка для моей души. Ты мое самое дорогое чудо. 😍`,
  `Ты — моя радость и мое спокойствие одновременно. Каждое утро я просыпаюсь с мыслями о тебе, и весь день кажется ярче и счастливее. Ты мое солнце и мое небо, моя любовь и мое вдохновение. 💖`,
  `С тобой каждый момент волшебный. Даже самый обычный день становится особенным, когда ты рядом. Ты делаешь меня лучше, сильнее, счастливее. Спасибо, что ты есть в моей жизни. 🌸`,
  `Твоя доброта, нежность и забота делают меня счастливым. Я хочу, чтобы ты знала — я ценю каждую секунду, проведенную с тобой. Ты — моя мечта, моя любовь, моя жизнь. 💕`,
  `Я люблю смотреть на тебя, слушать твой голос, держать тебя за руку. С тобой легко дышать, легко мечтать и легко быть счастливым. Ты делаешь мой мир идеальным. ❤️`,
  `Ты приносишь свет в мою жизнь, даже когда за окном дождь. Твоя улыбка согревает душу, а твоя любовь делает меня сильным. Я благодарен судьбе за то, что встретил тебя. 🌹`,
  `С тобой каждый день — праздник. Ты моя радость, моя сила, моя поддержка. Я люблю все в тебе: твой смех, взгляд, слова, заботу. С тобой жизнь становится яркой и красивой. 😘`,
  `Ты — мое самое большое счастье. Твоя любовь окрыляет меня, твоя улыбка заставляет сердце биться быстрее. Я хочу быть с тобой всегда и дарить тебе столько же радости, сколько ты даришь мне. 💖`,
  `Ты особенная. Твоя душа, твоя энергия, твоя любовь делают мир вокруг тебя прекрасным. Я хочу, чтобы каждый день ты ощущала, как сильно ты мне дорога. ❤️`,
  `Я люблю твои глаза, твой смех, твою заботу. С тобой я чувствую себя дома. Ты — мое вдохновение, мой свет и моя радость. С тобой я счастлив. 🌸`,
  `Каждый день с тобой — подарок. Ты учишь меня любить, радоваться и быть благодарным. Твоя любовь делает меня лучшим человеком. 💕`,
  `Ты мое утро и вечер, моя звезда и мой свет. С тобой каждый миг ценен, каждый взгляд — драгоценен, каждая секунда — счастье. Я люблю тебя безмерно. ❤️`,
  `С тобой легко мечтать, легко жить, легко быть собой. Ты мое счастье, мой покой и моя радость. Я хочу, чтобы ты знала, как сильно я тебя люблю. 💖`
];

// === Функция для случайного текста ===
function showRandomText(){
  const container = document.getElementById("textContainer");
  if(!container) return; // защита на случай, если блока нет
  const randomIndex = Math.floor(Math.random() * dailyTexts.length);
  container.innerText = dailyTexts[randomIndex];
}

// Показываем текст сразу
document.addEventListener("DOMContentLoaded", showRandomText);

// Кнопка «Обновить»
document.getElementById("newTextBtn").addEventListener("click", showRandomText);


// === Функция для показа случайного текста ===
function showRandomText(){
  const container = document.getElementById("textContainer");
  const randomIndex = Math.floor(Math.random() * dailyTexts.length);
  container.innerText = dailyTexts[randomIndex];
}

// Показываем текст при загрузке страницы
showRandomText();

// Кнопка «Обновить»
document.getElementById("newTextBtn").addEventListener("click", showRandomText);


// ===== Кнопка финала =====
const finalBtn = document.getElementById("startFinalBtn");
function checkFinalButton(){
  const now = new Date();
  if(now >= targetDate){
    finalBtn.innerText = "Открой подарок ❤️";
    finalBtn.onclick = startFinalSequence;
  } else { finalBtn.onclick = ()=>{}; }
}
setInterval(checkFinalButton,1000);
checkFinalButton();

// ===== Вопросы =====
const questions = [
  {q:"Что для меня ты на самом деле — за пределами чувств?", a:"Выбор"},
  {q:"Что удержало нас, когда расстояние могло всё разрушить?", a:"Верность"},
  {q:"Зачем я продолжаю ждать и идти, даже когда тяжело?", a:"Будущее"},
  {q:"Что я чувствую рядом с тобой сильнее всего остального?", a:"Дом"},
  {q:"Чем для меня является наша любовь по своей сути?", a:"Навсегда"}

];
let qIndex = 0;

function startFinalSequence(){
  document.getElementById("startFinalContainer").style.display="none";
  document.getElementById("quizContainer").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  const qEl = document.getElementById("question");
  qEl.innerText = questions[qIndex].q;
  const ans = document.getElementById("answer"); 
  ans.value=""; 
  ans.classList.remove("wrong");
  document.getElementById("feedback").innerText="";
}

function checkAnswer(){
  const ans = document.getElementById("answer"); 
  const val = ans.value.toLowerCase();
  if(val === questions[qIndex].a.toLowerCase()){
    qIndex++; 
    if(qIndex>=questions.length){
      document.getElementById("quizContainer").style.display="none";
      document.getElementById("introVideoContainer").style.display="block";
    } else loadQuestion();
  } else {
    ans.classList.add("wrong");
    document.getElementById("feedback").innerText="Неправильно, попробуй ещё раз ❤️";
  }
}

// ===== Видео через кнопки =====
function watchIntroVideo(){
  window.open("https://youtu.be/76rpa46iEig","_blank");
  document.getElementById("introVideoContainer").style.display="none";
  document.getElementById("finalVideoContainer").style.display="block";
}

function watchFinalVideo(){
  window.open("https://youtu.be/37CdkZdZqSY","_blank");
  document.getElementById("finalVideoContainer").style.display="none";
  document.getElementById("finalScreen").style.display="block";
}

// ===== Падающие сердечки =====
function createHeart(){
  const heart = document.createElement("div");
  heart.className="heart";
  heart.innerText="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*20+10)+"px";
  heart.style.animationDuration=(5+Math.random()*5)+"s";
  document.getElementById("heartContainer").appendChild(heart);
  setTimeout(()=>heart.remove(),10000);
}
setInterval(createHeart,300);
