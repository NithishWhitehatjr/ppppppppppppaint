var mousevent= "empty";var lastposistionofx,lastpostionofy;
canvas=document.getElementById("myCanvas");
cityx=canvas.getContext
("2d");
color="black";
width=1;
canvas.addEventListener("mousedown" ,mymousedown);
function mymousedown(e){
    mousevent="mousedown";

}
canvas.addEventListener("mouseup" ,mymouseup);
function mymouseup(e){
    mousevent="mouseup";}
    canvas.addEventListener("mouseleave" ,mymouseleave);
    function mymouseleave(e){
        mousevent="mouseleave";
    }
    canvas.addEventListener("mousemove" ,mymousemove);
function mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop
    if(mousevent=="mousedown"){
        cityx.beginPath();
        cityx.strokeStyle=color;
        cityx.lineWidth=width
        cityx.moveTo(lastposistionofx,lastpostionofy)
        cityx.lineTo(currentx,currenty)
        cityx.stroke()
    }
   lastposistionofx=currentx;
   lastpostionofy=currenty;
}
