
handleFnafBtn();
handleRedSquareBtn();

function handleFnafBtn() {
  const btnRedSquare = document.getElementById("btnFnaf");
  const originalContent = btnRedSquare.innerText;
  
  btnRedSquare.addEventListener("mouseover", (e) => {
    btnRedSquare.innerText = '(точно мій)';
  });
  
  btnRedSquare.addEventListener("mouseout", (e) => {
    btnRedSquare.innerText = originalContent;
  });
}

function handleRedSquareBtn() {
  const btnRedSquare = document.getElementById("btnRedSquare");
  const originalContent = btnRedSquare.innerText;
  
  btnRedSquare.addEventListener("mouseover", (e) => {
    btnRedSquare.innerText = 'Тисни вже!';
  });
  
  btnRedSquare.addEventListener("mouseout", (e) => {
    btnRedSquare.innerText = originalContent;
  });
}


