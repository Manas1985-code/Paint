var mouseEvent = "empty";
var last_p_x, last_p_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = "5";
canvas.addEventListener("mouseDown", mouse_down);

function mouse_down(e){
     color = document.getElementById("color").Value;
     width =  document.getElementById("width").Value;
     mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseMove", mouse_move);

function mouse_move(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last position of x & y co-ordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y); 
        ctx.moveTo(last_position_of_x, last_position_of_y); 
        console.log("Current position of x and y coordinates = "); 
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); 
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
        ctx.stroke();
    }
    last_p_x = current_position_of_mouse_x;
    last_p_y = current_position_of_mouse_y;

}
canvas.addEventListener("mouseUp", my_mouseup);

function my_mouseup(e) {
     mouseEvent = "mouseUP"; 
    } 
    canvas.addEventListener("mouseleave", my_mouseleave); 
    function my_mouseleave(e) {
         mouseEvent = "mouseleave"; 
    }

    function clearArea() { 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    }