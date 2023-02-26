import {
  getRandomCoordinate,
  getRandomArrayElement,
  getRandomColor,
  getRandomInt,
} from "../Utils/scripts";

import { Baloon } from "./baloons";

const canvas = document.getElementById("happyCanvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = [
  "Вітаю",
  "з Днем",
  "Народження!",
  `Бажаю Щастя, Здоров'я`,
  "Всього найкращого!",
];

const baloons: Baloon[] = [];

for (let i = 0; i < 10; i++) {
  baloons.push(generateRandomBaloon());
}

function generateRandomBaloon() {
  const baloonColor = getRandomColor();
  const baloonRadius = getRandomInt(5, 100);
  const x = getRandomInt(0, canvas.width);
  const y = canvas.height + baloonRadius;

  return new Baloon(context, x, y, baloonRadius, baloonColor);
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let index = 0; index < baloons.length; index++) {
    let baloon = baloons[index];
    if (!baloon.isVisible()) {
      baloons.splice(index, 1);
    }

    baloon.draw();
  }
}

function animate() {
  requestAnimationFrame(animate);
  update();
}

animate();

let clicksCount = 0;

document.addEventListener("click", () => {
  clicksCount++;

  const baloon = generateRandomBaloon();
  baloons.push(baloon);

  if (clicksCount % 10 === 0) {
    for (let i = 0; i < clicksCount; i++) {
      const baloon = generateRandomBaloon();
      baloons.push(baloon);
    }
  }
});

// const drawGreeting = function () {
//   const baloonCoords = getRandomCoordinate(canvas);
//   const baloonColor = getRandomColor();
//   const baloonRadius = getRandomInt(5, 100);
//   const baloon = new Baloon(context, baloonCoords.x, baloonCoords.y, baloonRadius, baloonColor);
//   baloon.draw();

//   const greetCoords = getRandomCoordinate(canvas);
//   const greeting = getRandomArrayElement(words);
//   context.fillText(greeting, greetCoords.x, greetCoords.y);

//   interval -= 10;

//   setTimeout(drawGreeting, interval);
// };

// setTimeout(drawGreeting, interval);
