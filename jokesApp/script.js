async function getJokes() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const resposne = await fetch(URL);

  const data = await resposne.json();

//   console.log(resposne);
//   console.log(data);

//   console.log(data.setup);
//   console.log(data.punchline);

  const jokeSpace = document.getElementById("Joke");

  jokeSpace.innerHTML = `<span class="fs-5 text-primary">${data.setup}</span>
  <span class="fs-5 text-success">${data.punchline}</span>`;
}
