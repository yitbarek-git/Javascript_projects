 "use strict";
    const mybutton = document.getElementById("mybutton");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const label3 = document.getElementById("label3");
    const newButton = document.getElementById("newButton");

    function rollDice(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    mybutton.addEventListener("click", () => {
      label1.textContent = rollDice(1, 6);
      label2.textContent = rollDice(1, 6);
      label3.textContent = rollDice(1, 6);
    });
