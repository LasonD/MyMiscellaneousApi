import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("/hubs/painting")
  .build();

const canvas = document.getElementById("paintingCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let isMouseDown = false;

canvas.addEventListener("mousedown", (e) => {
  isMouseDown = true;
});

connection.on("paintAt", (point) => {
  console.log(point);

  const { x, y } = point;

  ctx.beginPath();
  ctx.rect(x, y, 2, 2);
  ctx.stroke();
});

canvas.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    connection.send("PaintRequested", { x: e.x, y: e.y });
  }
});

canvas.addEventListener("mouseup", (_) => {
  isMouseDown = false;
});

function fulfilled() {
  console.log("Connection to Paint Hub was successful!");
}

function rejected() {
  console.log("Connection to Paint Hub failed");
}

connection.start().then(fulfilled, rejected);
