function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Placeholder for first line <br /> Placeholder for second line <br /> Placeholder for third line <br /> Placeholder for fourth line",
    autoStart: true,
    cursor: "",
    delay: 10
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
