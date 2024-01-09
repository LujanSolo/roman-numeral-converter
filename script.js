const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("number");
const output = document.getElementById("output");

const hideToggle = () => {
  output.classList.toggle("hidden");
};

const arabicToRoman = (number) => {
  let romanSequence = "";
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
  };


});

// const numberInput = document.getElementById("number-input");
// const convertBtn = document.getElementById("convert-btn");
// const result = document.getElementById("result");

// const decimalToBinary = (input) => {
//   if (input === 0 || input === 1) {
//     return String(input);
//   } else {
//     return decimalToBinary(Math.floor(input / 2)) + (input % 2);
//   }
// };



// const checkUserInput = () => {
//   if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
//     alert("Please provide a decimal number");
//     return;
//   }

//   result.textContent = decimalToBinary(parseInt(numberInput.value));
//   numberInput.value = "";
// };

// convertBtn.addEventListener("click", checkUserInput);

// numberInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     checkUserInput();
//   }
// });