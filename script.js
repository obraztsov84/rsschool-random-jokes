"use strict"

const jokeBtn=document.querySelector(".btn-joke");
const jokeHolder=document.querySelector(".joke-holder")
const audio = document.querySelector(".audio");
const skeletor = document.querySelector(".mr-skeletor");

let skeletorLaughtFrase = [
  "Ого, давай еще",
  "Соскучился по чужим прикосновениям",
  "Наверное хватит",
  "Чел, это перестает быть смешным",
  "Уже как то по гейски выглядит",
  "Это харасмент",
  "Прекрати"
]

skeletor.addEventListener("click", () => sceletorRandomLaught());


jokeBtn.addEventListener("click", () => jokeEvent(jokeHolder))

 async function jokeEvent(placeForJoke) {
  console.log("click")
  placeForJoke.textContent = await getData();
}

const url = 'https://api.icndb.com/jokes/random';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  return data.value.joke
}

function sceletorRandomLaught() {
let randomFive=Math.floor(Math.random()*5+1);
  audio.src=`./assets/audio/skeletor${randomFive}.mp3`
  audio.play();
}
