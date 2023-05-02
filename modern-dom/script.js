const name = document.querySelector(".name");

const btnBl = document.querySelector(".blue");
const btnGr = document.querySelector(".green");
const btnOr = document.querySelector(".orangered");

btnBl.addEventListener("click", function() {
  name.style.color = "blue";
})
btnGr.addEventListener("click", function() {
  name.style.color = "green";
})
btnOr.addEventListener("click", function() {
  name.style.color = "orangered";
})


// Também é possível separar totalmente a função do eventListener, sem perder a funcionalidade:
// btn.addEventListener("click", changeColor);
// function changeColor() {
//   name.style.color = "blue";
// }
