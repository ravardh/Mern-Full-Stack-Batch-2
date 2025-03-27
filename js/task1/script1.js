const punchline = document.getElementById("punchline");
const setup = document.getElementById("setup");
const message = document.getElementById("message");

async function getJokes() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/randoms"
    );
    console.log(response);

    if (!response.ok) {
      throw new Error(`Error ${response.status} : ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);

    if (!data || !data.punchline || !data.setup) {
      throw new Error(`Error ${data.message}`);
    }

    punchline.innerText = data.punchline;
    setup.innerText = data.setup;
    message.innerText = "Joke fetched Sucessfully";
  } catch (error) {
    message.innerText = error.message;
  } finally {
    console.log("Fetch Process Complete");
  }
}
