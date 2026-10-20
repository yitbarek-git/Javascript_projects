const computeBTN = document.getElementById("compute-btn");
const resultBTN = document.getElementById("result-btn");
const conditionBTN = document.getElementById("weight-condition");
function calculateBMI() {
  heightValue = document.getElementById("height").value / 100;
  weighttValue = document.getElementById("weight").value;
  const BMIValue = weighttValue / (heightValue ** 2);
  resultBTN.value = BMIValue;

  /*   if (!heightValue || !weighttValue) {
      conditionBTN.innerText = "Please, Enter the empty value🙏😹"
    }
    else if (BMIValue < 18.5) {
      conditionBTN.innerText = "Underweight! 🤺"
    }
    else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
      conditionBTN.innerText = "Normal weight! 🧟‍♀️"
    }
    else if (BMIValue >= 25 && BMIValue < 29.9) {
      conditionBTN.innerText = "overweight! 👮‍♂️"
    }
    else if (BMIValue >= 30) {
      conditionBTN.innerText = "obisity! 🙆‍♀️"
    }
    else
      conditionBTN.innerText = "Something went wrong!"
  } */

  //OR WE can also apply the same logic using Switch.👇👇👇

  switch (true) {
    case !heightValue || !weighttValue:
      conditionBTN.innerHTML = "Please, Enter  valid value/s🙏😹";
      break;
    case BMIValue < 18.5:
      conditionBTN.innerHTML = "Underweight! 🤺";
      break;
    case BMIValue >= 18.5 && BMIValue <= 24.9:
      conditionBTN.innerHTML = "Normal weight! 🧟‍♀️";
      break;
    case BMIValue >= 25 && BMIValue < 29.9:
      conditionBTN.innerHTML = "overweight! 👮‍♂️";
      break;
    case BMIValue >= 30:
      conditionBTN.innerHTML = "obisity! 🙆‍♀️";
      break;
    default: conditionBTN.innerHTML = "Error has Occured!";
  }
}
computeBTN.addEventListener("click", calculateBMI);

