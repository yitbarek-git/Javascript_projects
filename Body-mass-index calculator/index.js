const computeBTN = document.getElementById("compute-btn")
const resultBTN = document.getElementById("result-btn")
const conditionBTN = document.getElementById("weight-condition")

function calculateBMI() {
  heightValue = document.getElementById("height").value / 100;
  weighttValue = document.getElementById("weight").value;
  const BMIValue = weighttValue / (heightValue ** 2);

  resultBTN.value = BMIValue;

  if (BMIValue < 18.5) {
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
    conditionBTN.innerText = "Error Occured!"
}
computeBTN.addEventListener("click", calculateBMI)

