const form = document.getElementById("contactForm");
const successBanner = document.getElementById("successBanner");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  // Inputs
  const first = document.getElementById("firstName");
  const last = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");

  // Query type
  const querySelected = document.querySelector("input[name='query']:checked");

  // Validation Function
  function check(input) {
    const error = input.parentElement.querySelector(".error");
    if (!input.value.trim()) {
      error.style.display = "block";
      input.classList.add("error-input");
      valid = false;
    } else {
      error.style.display = "none";
      input.classList.remove("error-input");
    }
  }

  check(first);
  check(last);
  check(message);

  // Email Validation
  const emailError = email.parentElement.querySelector(".error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    emailError.style.display = "block";
    email.classList.add("error-input");
    valid = false;
  } else {
    emailError.style.display = "none";
    email.classList.remove("error-input");
  }

  // Query validation
  if (!querySelected) {
    document.getElementById("queryError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("queryError").style.display = "none";
  }

  // Consent
  if (!consent.checked) {
    document.getElementById("consentError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("consentError").style.display = "none";
  }

  if (valid) {
    successBanner.classList.remove("hidden");
    form.reset();
  }
});

// Highlight selected query option
document.querySelectorAll(".query-option").forEach(option => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".query-option").forEach(event => event.classList.remove("selected"));
    this.classList.add("selected");
    this.querySelector("input").checked = true;
  });
});