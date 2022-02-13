"use strict"

const jokeBtn=document.querySelector(".btn-joke");
const jokeHolder=document.querySelector(".joke-holder")

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
getData();