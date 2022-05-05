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
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const match = document.getElementById("quantity");
const radio = document.querySelectorAll('input[name="location"]');
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
  let error = 0;
  // first name check
  const errorBoxFirst = document.getElementById("first-error");
  if (first.value.length < 2) {
    error++;
    errorBoxFirst.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorBoxFirst.style.display = "block";
  } else {
    errorBoxFirst.style.display = "none";
  }
  //last name check
  const errorBoxLast = document.getElementById("last-error");
  if (last.value.length < 2) {
    error++;
    errorBoxLast.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorBoxLast.style.display = "block";
  } else {
    errorBoxLast.style.display = "none";
  }
  //email check
  const errorMail = document.getElementById("mail-error");

  for (let i = 0; i < email.value.length; i++) {
    if (email.value[i] === "@") {
      errorMail.style.display = "none";
    } else {
      error++;
      errorMail.textContent = "Veuillez rentrer un email valide";
      errorMail.style.display = "block";
    }
  }

  //birth check
  const errorBirth = document.getElementById("birth-error");
  if (birth.value) {
    errorBirth.style.display = "none";
  } else {
    error++;
    errorBirth.textContent = "Vous devez entrer votre date de naissance.";
    errorBirth.style.display = "block";
  }
  // match check
  const errorMatch = document.getElementById("match-error");
  // if (typeof match.value === number) {
  //   errorMatch.style.display = "none";
  // } else {
  //   error++;
  //   errorMatch.textContent = "Veuillez renseigner un nombre";
  // errorMatch.style.display = "block";
  // }

  // options check
  const errorOption = document.getElementById("option-error");
  let checked = false;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      checked = true;
    }
  }
  if (checked) {
    errorOption.style.display = "none";
  } else {
    error++;
    errorOption.textContent = "Vous devez choisir une option.";
    errorOption.style.display = "block";
  }

  // CGV check
  const errorCgv = document.getElementById("cgv-error");
  if (cgv.checked) {
    errorCgv.style.display = "none";
  } else {
    error++;
    errorCgv.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorCgv.style.display = "block";
  }
  return error === 0;
};

//valider le form
mondalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (checkform()) {
    alert("Merci ! Votre réservation a été reçue.");
    closeModal();
  }
});
