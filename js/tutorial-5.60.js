document.getElementById("btn01").onclick = function () {
    changeText("demo01");
};
document.getElementById("btn02").onclick = function () {
    changeText_01(this);
};
function changeText(id) {
    document.getElementById(id).style.color = "red";
    document.getElementById(id).innerHTML = "yes all right !";
}
function changeText_01(id) {
    id.style.color = "green";
    id.innerHTML = "看上去还不错";
    document.getElementById("demo02").innerHTML=Date();
}
