setInterval(() => {
    document.getElementById('time').innerHTML = new Date();
}, 1000);
show();
function addition() {
    let txt = document.getElementById("inputTask");
    let c = /[a-zA-Z]/g;
    if (c.test(txt.value)) {
        let tasks = localStorage.getItem("testTasks");
        if (tasks == null) {
            arr = [];
        } else {
            arr = JSON.parse(tasks);
        }
        let t = txt.value;
        t = t.trim();
        arr.push(t);
        localStorage.setItem("testTasks", JSON.stringify(arr));
        txt.value = "";
        show();
    } else {
        alert("You have'nt entered any letters");
    }
};

function sorting() {
    let tasks = localStorage.getItem("testTasks");
    arr = JSON.parse(tasks);
    arr.sort();
    localStorage.setItem("testTasks", JSON.stringify(arr));
    show();
};

function show() {
    let tasks = localStorage.getItem("testTasks");
    if (tasks == null) {
        arr = [];
    } else {
        arr = JSON.parse(tasks);
    }
    let imply = '';
    arr.forEach(function (element, index) {
        imply += `<div class="taskBox">
                            <h4>Task${index + 1}:</h4>
                            <p id="${index}">${element}</p>
                            <button id="bookmarkBtn" onclick = "bookmark(${index})">Bookmark</button>
                            <button onclick = "del(${index})">Delete Task</button>
                        </div>`;
    });
    let space = document.getElementById("myTasks");
    if (arr.length == 0) {
        space.innerHTML = 'Sorry! Your list is empty.'
        let it = document.getElementById("lastEle");
        it.style.display = "none";
        let n = document.getElementById("num");
        n.style.display = "none";
    } else {
        space.innerHTML = imply;
        let it = document.getElementById("lastEle");
        it.style.display = "block";
        let n = document.getElementById("num");
        n.style.display = "block";
        document.getElementById('arrLen').innerHTML = arr.length;
        arr.forEach(function (element, index) {
            if (element.includes("*")) {
                let e = document.getElementById(`${index}`);
                e.style.backgroundColor = "rgb(133 255 133)";
            }
        });
    }
};

function del(index) {
    let tasks = localStorage.getItem("testTasks");
    if (tasks == null) {
        arr = [];
    } else {
        arr = JSON.parse(tasks);
    }
    arr.splice(index, 1);
    localStorage.setItem("testTasks", JSON.stringify(arr));
    show();
};

function delAll() {
    let tasks = localStorage.getItem("testTasks");
    if (tasks == null) {
        arr = [];
    } else {
        arr = JSON.parse(tasks);
    }
    arr.splice(0, arr.length);
    localStorage.setItem("testTasks", JSON.stringify(arr));
    show();
};

function bookmark(index) {
    let tasks = localStorage.getItem("testTasks");
    arr = JSON.parse(tasks);
    if (arr[index].includes("*")) {
        alert("you have already bookmarked it!");
    } else {
        arr[index] += " *";
        localStorage.setItem("testTasks", JSON.stringify(arr));
        show();
    }
};

let find = document.getElementById("findTxt");
find.addEventListener("input", function () {
    let searchInput = find.value;
    let fullTask = document.getElementsByClassName("taskBox");
    Array.from(fullTask).forEach(function (element) {
        let T = element.getElementsByTagName("p")[0].innerText;
        if (T.includes(searchInput)) {
            element.style.backgroundColor = "rgb(92 96 88)";
        } else {
            element.style.backgroundColor = "#343638";
        }
    });
});