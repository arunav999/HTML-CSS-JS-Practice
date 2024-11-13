const ageInput = document.getElementById("age");
const messageElement = document.getElementById("message");

ageInput.addEventListener("input", function () {
  const age = parseInt(ageInput.value);

  if (ageInput.value === "") {
    messageElement.textContent = "";
  } else if (age < 18) {
    messageElement.textContent = "You must be at-least 18 years old.";
  } else if (age >= 18 && age <= 30) {
    messageElement.textContent = "Allowed";
  } else {
    messageElement.textContent = "Age must be 30 or below.";
  }
});
