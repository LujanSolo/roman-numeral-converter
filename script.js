const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("number");
const output = document.getElementById("output");

const hideToggle = () => {
  output.classList.toggle("hidden");
}
convertBtn.addEventListener("click", () => {
  const number = Number(userInput.value);

  if(!number) {
    output.textContent = "Please enter a valid number";
    hideToggle();
  } else if (number <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    hideToggle();
  } else if (number >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
    hideToggle();
  }
});