function displayInspiration(response) {
  new Typewriter("#inspiration", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "✍🏼",
    delay: 50,
  });
}

function generatePositivity(event) {
  event.preventDefault();

  instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4a7bf3d9cod778ee0bbe6f174ftf4fa8";
  let prompt = `Generate a positive ${instructionsInput.value}`;
  let context =
    "You are a supportive and inspirational AI Assistant. Based on the option submitted by the user, please generate a positive mantra, quote or words of affirmation. Make sure to follow user instructions. Never repeat the answer twice. Sign the response with 'SheCodes AI' inside of a <strong> element. Please behave. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating positivity");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayInspiration);
}

let formElement = document.querySelector("#positivity-generator-form");
formElement.addEventListener("submit", generatePositivity);
