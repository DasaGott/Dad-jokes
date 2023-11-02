const jokeElement =
  document.getElementById("joke");
const jokeButton =
  document.getElementById("jokeBtn");
generateJoke();

function generateJoke() {
  const configuration = {
    headers: { Accept: "application/json" },
  };

  fetch(
    "https://icanhazdadjoke.com",
    configuration
  )
    .then((response) => response.json())
    .then((data) => {
      jokeElement.innerHTML = data.joke;
    });
}

jokeButton.addEventListener(
  "click",
  generateJoke
);
