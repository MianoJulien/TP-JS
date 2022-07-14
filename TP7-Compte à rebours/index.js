// Créer la logique de compte à rebours

// Créer un événement à la validation du form pour lancer le compte à rebours

const form = document.querySelector("#form");
const countDown = document.querySelector("#countdownDisplay");
let choice = document.querySelector("#choice");
let start = document.querySelector("#start");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(choice.value);
  countDown.innerHTML = `<li>${choice.value}</li>`;
  choice.value = "";
});
// -----------------Créer le compte a rebours--------------------

// multiplier les minutes pour obtenir de secondes

// set interval : mettre le timer
