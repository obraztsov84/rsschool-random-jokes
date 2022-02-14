"use strict"

const jokeBtn=document.querySelector(".btn-joke");
const jokeHolder=document.querySelector(".joke-holder")
const sceletorLaught=document.querySelector(".audio");
const sceletor = document.querySelector(".mr-skeletor");

sceletor.addEventListener("click", ()=>sceletorRandomLaught())


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
  console.log("check ", sceletorLaught)
  sceletorLaught.play();
}