const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("number");
const output = document.getElementById("output");

const romanArray = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const hideToggle = () => {
  output.classList.toggle("hidden");
};

const arabicToRoman = (input) => {

  for (const i in romanArray) {
    let romanLetter = romanArray[i][0];
    let romanNumber = romanArray[i][1];
    if (input === 0) {
      return "";
    } else if (input >= romanNumber) {
      return romanLetter + arabicToRoman(input - romanNumber);
    }
  }
};

const checkUserInput = () => {
  const userNumber = parseInt(userInput.value);

  if (!userInput.value || isNaN(userNumber)) {
    output.textContent = "Please enter a valid number";
    hideToggle();
    return;
  } else if (userNumber <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    hideToggle();
    return;
  } else if (userNumber >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    hideToggle();
    return;
  };

  output.textContent = arabicToRoman(userNumber);
  hideToggle();
  userInput.value = "";
};

convertBtn.addEventListener('click', checkUserInput);

userInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  };
});