const form = document.getElementById("contactForm");
const successBanner = document.getElementById("successBanner");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

 
  const first = document.querySelector("#firstName");
  const last = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const consent = document.querySelector("#consent");

 
  const querySelected = document.querySelector("input[name='query']:checked");

  // Validation Function
  
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