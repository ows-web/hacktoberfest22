const Area = document.querySelector(".box");
const button = document.querySelector("button");
const input = Area.querySelector("input");
const dragText = Area.querySelector("header");
let file;
button.onclick = () => {
    input.click();
}
input.addEventListener("change", function () {
    file = this.files[0];
    Area.classList.add("active");
    showFile();
})
Area.addEventListener("dragover", (e) => {
    //console.log("andar hai");
    e.preventDefault();
    Area.classList.add("active");
    dragText.textContent = "Release to Upload";
})
Area.addEventListener("dragleave", (e) => {
    //console.log("bahar hai");
    Area.classList.remove("active");
    dragText.textContent = "Drag and Drop your files";
})
Area.addEventListener("drop", (e) => {
    e.preventDefault();
    file = e.dataTransfer.files[0];
    e.dataTransfer.dropEffect = 'copy';
    showFile();
})

function showFile() {
    let fileType = file.type;
    let valid = ["image/jpeg", "image/jpg", "image/png"];
    if (valid.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            Area.innerHTML = `<img src="${fileURL}">`;
        }
        fileReader.readAsDataURL(file);
    }
    else {
        alert("Thie is not Image File!");
        Area.classList.remove("active");
        dragText.textContent = "Drag and Drop your files";
    }
}