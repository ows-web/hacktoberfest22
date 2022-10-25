let sliders = document.querySelectorAll(".slider");
let prev = document.querySelector("span:first-of-type");
let next = document.querySelector("span:last-of-type");

console.log(next);
sliders.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
});

let count = 0;
prev.style.display = "none";
next.onclick = function () {
    prev.style.display = "block";
    count++;
    if (count >= sliders.length -1) {
        next.style.display = "none";
    }
    transformImg();
}
prev.onclick = function () {
    next.style.display = "block";
    count--;
    if (count <= 0) {
        // count = sliders.length -1;
        prev.style.display = "none";
    }
    transformImg();
}

function transformImg() {
    sliders.forEach(item => {
    item.style.transform = `translateX(-${count * 100}%)`;
})
}
