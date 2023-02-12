export function getRandomCoordinate(canvas) {
  const x = getRandomInt(0, canvas.width);
  const y = getRandomInt(0, canvas.height);

  return { x, y };
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomArrayElement(arr) {
  const index = getRandomInt(0, arr.length);

  return arr[index];
}

export function getRandomColor() {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);

  return `rgb(${r}, ${g}, ${b})`;
}