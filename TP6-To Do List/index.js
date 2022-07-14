const myInput = document.querySelector("input");

// supprimer le "a faire"

myInput.addEventListener("click", (e) => {
  myInput.value = "";
});

// afficher le mot dans la console en cliquant sur entrer

myInput.addEventListener("keypress", (e) => {
  console.log(disable.enter);
  if (e.key) {
    document.body.style.background = "red";
  }
});
