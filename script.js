"use strict"

console.log("Шутки на русском подрубил с сайта http://www.rzhunemogu.ru/, прям не на 100% уверен что будет правильно работать")

const jokeBtn=document.querySelector(".btn-joke");
const jokeHolder=document.querySelector(".joke-holder")
const audio = document.querySelector(".audio");
const skeletor = document.querySelector(".mr-skeletor");
const bubble = document.querySelector(".speech")
const bubbleText = document.querySelector(".speech-text")
const langBtn = document.querySelector(".btn-lang")

langBtn.addEventListener("click", () => {
  if (langBtn.dataset.lang==="en") {
    langBtn.dataset.lang="ru"
    jokeBtn.textContent="Хочу шутку"
    langBtn.textContent="Скелетор, давай по английски"
  } else {
    langBtn.dataset.lang="en"
    jokeBtn.textContent="I want joke"
    langBtn.textContent="Skeletor, go russian pls"
  }
})

let skeletorLaughtFrase = [
  "Хахаха",
  "Щекотно",
  "Ого, давай еще",
  "Соскучился по чужим прикосновениям",
  "Достаточно",
  "Наверное хватит",
  "Чел, это перестает быть смешным",
  "Уже как то по гейски выглядит",
  "Это харасмент",
  "Прекрати"
]

skeletor.addEventListener("click", () => {
  sceletorRandomLaught(),
  tickles()
});

jokeBtn.addEventListener("click", () => {
  langBtn.dataset.lang==="en"?jokeEvent(jokeHolder, true):randomRussianJoke(jokeHolder)
})

 async function jokeEvent(placeForJoke, laugth = false) {
  placeForJoke.textContent = await getData();
  if (laugth) sceletorRandomLaught();
}

const url = 'https://api.icndb.com/jokes/random';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  return data.value.joke
}

function randomRussianJoke(placeForJoke) {
  placeForJoke.textContent=ruJokes[Math.floor(Math.random()*ruJokes.length+1)].text
  sceletorRandomLaught()
}


function sceletorRandomLaught() {
let randomFive=Math.floor(Math.random()*5+1);
  audio.src=`./assets/audio/skeletor${randomFive}.mp3`
  audio.play();
  skeletor.classList.add("animation-shake");
  setTimeout(()=>{skeletor.classList.remove("animation-shake")}, 1000)
}

let theshhold=0;
function tickles() {
  bubbleText.textContent=skeletorLaughtFrase[theshhold]
  bubble.classList.add("show")
  setTimeout(()=>{bubble.classList.remove("show")}, 2000)
  if (theshhold<9) theshhold++;
}

jokeEvent(jokeHolder)

const ruJokes = [
  {
    "text": "Как называют человека, который продал свою печень? Обеспеченный.",
  },
  {
    "text": "Почему шутить можно над всеми, кроме безногих? Шутки про них обычно не заходят.​",
  },
  {
    "text": "Почему безногий боится гопников? Не может постоять за себя."
  },
  {
    "text": "Почему толстых женщин не берут в стриптиз? Они перегибают палку."
  },
  {
    "text": "Что сказал слепой, войдя в бар? 'Всем привет, кого не видел'"
  },
  {
    "text": "Как называется избушка Бабы-Яги лесбиянки? Лисбушка."
  },
  {
    "text": "Как предотвратить инцест у грибов? Фразой 'Не спорь с матерью!'"
  },
  {
    "text": "Нервный альпинист время от времени срывается на свою жену"
  },
  {
    "text": "Чего общего у некрофила и владельца строительной кампании? Они оба имеют недвижимость."
  },
  {
    "text": "Почему наркоманы могут получить Нобелевскую премию по физике? Они знают как измерять скорость в граммах."
  },
  {
    "text": "-Алло, это Чешская Республика? Почешите мне спинку."
  },
  {
    "text": "Почему среди фигуристов, не бывает цыган? Никто не верит что это их конёк"
  },
  {
    "text": "Как называется притон наркоманов-закладчиков? Клуб весёлых и находчивых."
  },
  {
    "text": "В чем разница между землей и нашими шутками? Земля не плоская."
  }]