function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const body = document.body;

const clickHandle = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorText.textContent = body.style.backgroundColor;
};

changeBtn.addEventListener("click", clickHandle);