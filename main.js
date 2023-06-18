const joke = document.getElementById("joke");
const btn = document.getElementById("joke-btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single";

async function getJoke() {
  const res = await fetch(url);
  const data = await res.json();

  joke.textContent = data.joke;
}

btn.addEventListener("click", getJoke);
