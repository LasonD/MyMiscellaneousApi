
handleRedSquareBtn();

function handleRedSquareBtn() {
  const btnRedSquare = document.getElementById("btnRedSquare") as HTMLButtonElement;
  const originalContent = btnRedSquare.innerText;
  
  btnRedSquare.addEventListener("mouseover", (e) => {
    btnRedSquare.innerText = 'Тисни вже!';
  });
  
  btnRedSquare.addEventListener("mouseout", (e) => {
    btnRedSquare.innerText = originalContent;
  });
}
