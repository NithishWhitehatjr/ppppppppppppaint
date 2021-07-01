canvas = document.getElementById("myCanvas");
cityx = canvas.getContext("2d");
color = "var color";
cityx.beginPath();
cityx.strokeStyle = color;
cityx.lineWidth = Width;
cityx.arc(2070, 2000, 90, 3, 4 * Math.PI);
cityx.stroke();
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
var color=document.getElementById("text_inputcolor").value;
var radius=document.getElementById("text_inputradius").value;
var Width=document.getElementById("text_inputwidth").value;

function circle(mouse_x, mouse_y) {
    cityx.beginPath();
    cityx.strokeStyle = color;
    cityx.lineWidth = 2;
    cityx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    cityx.stroke();
}
}
