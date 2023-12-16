function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let context =
    "You are a poem expert and love to write short poems. Please return a four line poem in the Irish language. Please also include a translation of the poem below it. Please return all of this in basic HTML. Sign the poem by 'AI Poem Generator' at the end of the translation and make only the signature bold. Please leave a space between the poem and the translation. Don't give the poem a title.";
  let prompt = `User instructions: Generate an Irish poem about ${userInput.value}`;

  let apiKey = "33840b8e1tc5oa820f7a06b487319f0d";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  const responseFormatted = response.data.answer.replaceAll("\n", "<br />")
   new Typewriter("#poem", {
     strings: responseFormatted,
     autoStart: true,
     cursor: "",
     delay: 10,
   });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
