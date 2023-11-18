const form = document.forms["submit-to-google-sheet"];
const container = document.querySelector("main");
const container2 = document.querySelector(".submitMsg");
const input = document.querySelector(".input");
const errorMsg = document.querySelector(".ErrorMsg");

function displayActivity(e) {
  e.preventDefault();
  if (input.value) {
    console.log("hellosdhgsdohgi");
    container2.classList.add("show");
    container.classList.add("hidden");
    // input.value = "";
    form.reset();
  } else {
    errorMsg.style.display = "flex";
    input.classList.add("inputError");
    setTimeout(() => {
      input.classList.remove("inputError");
      errorMsg.classList.remove("show");
      errorMsg.style.display = "none";
    }, 3000);
  }
}
form.addEventListener("submit", displayActivity);
// Dismiss Success
container2.addEventListener("click", () => {
  container2.classList.remove("show");
  container.classList.remove("hidden");
});
