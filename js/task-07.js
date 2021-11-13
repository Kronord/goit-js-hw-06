const inputSlider = document.querySelector("#font-size-control");
const textForSlide = document.querySelector("#text");
inputSlider.addEventListener("input", (event) => textForSlide.style.fontSize = `${event.currentTarget.value}px`);