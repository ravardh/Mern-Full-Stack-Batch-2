const punchline = document.getElementById("punchline");
const setup = document.getElementById("setup");
const message = document.getElementById("message")

async function getJokes() {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/jokes/randoms"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

    punchline.innerText = data.punchline;
    setup.innerText = data.setup;
    message.innerText = "Joke fetched Sucessfully"

  } catch (error) {
      
    message.innerText = 'Jokes Not Found';
  }
  finally{
    console.log("Fetch Process Complete");
    
  }
}

// {
//     "type": "general",
//     "setup": "what do you call a dog that can do magic tricks?",
//     "punchline": "a labracadabrador",
//     "id": 200
//   }
