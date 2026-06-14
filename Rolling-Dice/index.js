"use strict";
const mybutton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const r1 = document.getElementById("result1");
const r2 = document.getElementById("result2");
const r3 = document.getElementById("result3");

function rollDice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

mybutton.addEventListener("click", () => {
  label1.textContent = rollDice(1, 6);
  label2.textContent = rollDice(1, 6);
  label3.textContent = rollDice(1, 6);
  let l1 = Number(label1.textContent);
  let l2 = Number(label2.textContent);
  let l3 = Number(label3.textContent);
  let winner1 = "$100";
  let winner2 = "$50";
  let winner3 = "$40";

  if (l1 > l2 && l1 > l3 && l2 > l3) {
    r1.textContent = `die One :  ${l1}  .....${winner1} winner.`;
    r2.textContent = `die two :  ${l2}  .....${winner2} winner.`;
    r3.textContent = `die three :  ${l3}  .....${winner3} winner.`;
  }
  if (l2 > l1 && l2 > l3 && l1 > l3) {
    r1.textContent = `die One :  ${l1}  .....${winner2} winner.`;
    r2.textContent = `die two :  ${l2}  .....${winner1} winner.`;
    r3.textContent = `die three :  ${l3}  .....${winner3} winner.`;
  }

  if (l3 > l1 && l3 > l2 && l1 > l2) {
    r1.textContent = `die One :  ${l1}  .....${winner2} winner.`;
    r2.textContent = `die two :  ${l2}  .....${winner3} winner.`;
    r3.textContent = `die three :  ${l3}  .....${winner1} winner.`;
  }
});
