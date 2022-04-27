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

//fonction valdier le form
const validForm = () => {
  submitBtn.style.cursor = "not-allowed";
};

//close modal
closed.forEach((span) => span.addEventListener("click", closeModal));

// fonction verifier form

const validate = () => {
  const errorBox = document.getElementById("first-error");
  if (first.value.length < 2) {
    errorBox.textContent = "prenom + 2 caract";
  } else {
    errorBox.style.display = "none";
  }
};

//valider le form
mondalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validate();
});
