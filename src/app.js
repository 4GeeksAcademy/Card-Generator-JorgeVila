/* eslint-disable */
import "bootstrap";
import "./style.css";

function cardGenerate() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  document.querySelector("#top").innerHTML = suits[indexSuits];
  document.querySelector("#button").innerHTML = suits[indexSuits];
  document.querySelector("#number").innerHTML = suits[indexSuits];
}
window.onload = function() {
  cardGenerate;
};
