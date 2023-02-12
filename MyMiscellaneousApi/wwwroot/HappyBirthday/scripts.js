import {
  getRandomCoordinate,
  getRandomArrayElement,
  getRandomColor,
  getRandomInt
} from "../Utils/scripts.js";

import { Baloon } from "./baloons.js"; 

const canvas = document.getElementById("happyCanvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = [
  "Вітаю",
  "з Днем",
  "Народження!",
  `Бажаю Щастя, Здоров'я`,
  "Всього найкращого!",
];

let interval = 500;

const drawGreeting = function () {
  const { x, y } = getRandomCoordinate(canvas);

  const baloonColor = getRandomColor();
  const baloonRadius = getRandomInt(5, 100);
  const baloon = new Baloon(context, x, y, baloonRadius, baloonColor);

  baloon.draw();

  const greeting = getRandomArrayElement(words);
  context.fillText(greeting, x, y);

  interval--;

  setTimeout(drawGreeting, interval);
};

setTimeout(drawGreeting, interval);