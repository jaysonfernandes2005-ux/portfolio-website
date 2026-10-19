
const journeyButton = document.getElementById("journey-button");
const journeyMessage = document.getElementById("journey-message");

journeyButton.addEventListener("click", function() {
  journeyMessage.textContent =
    "I'm learning web development and building projects with HTML, CSS and JavaScript.";
  
  journeyMessage.hidden = false;
});
