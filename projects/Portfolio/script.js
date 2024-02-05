let btn = document.getElementById("btn-text");
let v1 = document.getElementById("v1");
let flag = 0

function opacity() {
    if (flag === 0) {
        v1.style.opacity = '0'
        btn.innerText = "Light's off"
        flag++
    }
    else if (flag === 1) {
        v1.style.opacity = '1'
        btn.innerText = "Light's on"
        flag--
    }
}
