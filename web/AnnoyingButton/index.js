const caller = document.getElementById("btn");

function ready() {
  caller.onmouseenter = function (ev) {
    const randX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randY = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log([randX, randY]);
    caller.style.left = randX + "px";
    caller.style.top = randY + "px";
  };
}
