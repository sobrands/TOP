const form = document.querySelector("form");
const button = document.querySelector("button");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordCfm = document.getElementById("password-conf");

email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

zipcode.addEventListener("input", (e) => {
  const constraint = new RegExp("^[0-9]{6}$");
  if (constraint.test(zipcode.value)) {
    zipcode.setCustomValidity("");
  } else {
    zipcode.setCustomValidity("Zipcode must only have 6 digits!");
  }
});

password.addEventListener("input", (e) => {
  const constraint = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}$");
  console.log(constraint);
  if (password.value.match(constraint)) {
    password.setCustomValidity("");
  } else {
    password.setCustomValidity("Password must contain at least 1 lowercase, uppercase and special symbol. And have minimum length of 6 characters");
  }
});

passwordCfm.addEventListener("input", (e) => {
  if (passwordCfm.value === password.value) {
    passwordCfm.setCustomValidity("");
  } else {
    passwordCfm.setCustomValidity("Passwords do not match!");
  }
});