function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//mydom
const closed = document.querySelectorAll(".close");
const first = document.getElementById("first");
const last = document.getElementById("last");
const birth = document.getElementById("birthdate");
const options = document.getElementById(
  "location1",
  "location2",
  "location3",
  "location4",
  "location5",
  "location6"
);
const cgv = document.getElementById("checkbox1");
const submitBtn = document.querySelector(".btn-submit");
const mondalForm = document.getElementById("modal-form");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//fonction cose modal
const closeModal = () => {
  modalbg.style.display = "none";
};

//close modal
closed.forEach((span) => span.addEventListener("click", closeModal));

// fonction verifier form

const checkform = () => {
  // first name check
  const errorBoxFirst = document.getElementById("first-error");
  if (first.value.length < 2 && last.value.length < 2) {
    errorBoxFirst.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    errorBoxFirst.style.display = "none";
  }
  //last name check
  const errorBoxLast = document.getElementById("last-error");
  if (last.value.length < 2) {
    errorBoxLast.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    errorBoxLast.style.display = "none";
  }
  //birth check
  const errorBirth = document.getElementById("birth-error");
  if (birth.value) {
    errorBirth.style.display = "none";
  } else {
    errorBirth.textContent = "Vous devez entrer votre date de naissance.";
  }
  // options check
  const errorOption = document.getElementById("option-error");
  if (options.checked >= 1) {
    errorOption.style.display = "none";
  } else {
    errorOption.textContent = "Vous devez choisir une option.";
  }
  // CGV check
  const errorCgv = document.getElementById("cgv-error");
  if (cgv.checked) {
    errorCgv.style.display = "none";
  } else {
    errorCgv.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
};

//valider le form
mondalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkform();
  alert("Merci ! Votre réservation a été reçue.");
});
