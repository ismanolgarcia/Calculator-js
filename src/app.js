let screen = document.getElementById("screen");
let btn = document.querySelectorAll(".btn");
let clear = document.querySelector(".allClear");
let equal = document.querySelector(".equalSign");
let decimal = document.querySelectorAll(".decimal");
let operator = document.querySelectorAll(".operator");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    screen.value += btn.value;
  });
});

decimal.forEach((decimal) => {
  decimal.addEventListener("click", () => {
    screen.value += decimal.value;
  });
});

operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    screen.value += operator.value;
  });
});

equal.addEventListener("click", () => {
  screen.value = eval(screen.value);
});

clear.addEventListener("click", () => {
  screen.value = "";
});
