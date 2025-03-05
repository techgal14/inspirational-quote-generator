function generatePositivity(event) {
  event.preventDefault();

  new Typewriter("#inspiration", {
    strings: "whatever positive thing is generated",
    autoStart: true,
    cursor: "✍🏼",
    delay: 50,
  });
}

let formElement = document.querySelector("#positivity-generator-form");
formElement.addEventListener("submit", generatePositivity);
