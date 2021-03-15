/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#project1").innerHTML = generateexcuse();
  console.log();
};
let generateexcuse = function() {
  let who = ["we", "they"];
  let how = ["build", "helped", "guided"];
  let what = ["websites", "each other"];

  let whoindex = Math.floor(Math.random() * who.length);
  let howindex = Math.floor(Math.random() * how.length);
  let whatindex = Math.floor(Math.random() * what.length);

  return who[whoindex] + " " + how[howindex] + " " + what[whatindex];
};
