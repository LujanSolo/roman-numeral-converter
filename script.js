const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("number");
const output = document.getElementById("output");

const hideToggle = () => {
  output.classList.toggle("hidden");
};

const arabicToRoman = (userNumber) => {
  let ii = "";
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

  for(let i=0; i < romanArray.length; i++) {
    let romanLetter = romanArray[i][0];
    let romanNumber = romanArray[i][1];

    
  }

  // return userNumber;

  // for(const i in romanArray){
  //   const romanLetters = i[0];
  //   const romanNumbers = i[1];

  //   if(userNumber >= romanNumbers){
  //     return arabicToRoman(userNumber - romanNumbers)
  //   }

  // }
};

const checkUserInput = () => {
  const inputNumberValue = parseInt(userInput.value);

  if (!userInput.value || isNaN(inputNumberValue)) {
    output.textContent = "Please enter a valid number";
    hideToggle();
    return;
  } else if (inputNumberValue <= 0 || inputNumberValue >= 4000) {
    output.textContent = "Please enter a number between 1 and 3999";
    hideToggle();
    return;
  };

  output.textContent = arabicToRoman(inputNumberValue);
  userInput.value = "";
};

convertBtn.addEventListener('click', checkUserInput);

userInput.addEventListener('keydown', (e) => {
  if(e.key === "Enter") {
    checkUserInput();
  };
});


// convertBtn.addEventListener("click", () => {
//   const number = Number(userInput.value);

//   if(!number) {
    
//   } else if (number <= 0) {
//     output.textContent = "Please enter a number greater than or equal to 1";
//     hideToggle();
//   } else if (number >= 4000){
//     output.textContent = "Please enter a number less than or equal to 3999";
//     hideToggle();
//   };
// });