let number = document.querySelector("#number");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");

let count = 0;
increment.addEventListener("click", () => {
  count += 1;
  number.innerHTML = count.toString().padStart(2, "0");
});

decrement.addEventListener("click", () => {
  if (count > 1) {
    count -= 1;
    number.innerHTML = count.toString().padStart(2, "0");
  } else {
    count = 0;
    number.innerHTML = count.toString().padStart(2, "0");
  }
});

reset.addEventListener("click", () => {
  count = 0;
  number.innerHTML = count.toString().padStart(2, "0");
});
