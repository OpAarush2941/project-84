canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car1_width = 100;
var car1_height = 50;
var car1_x = 0;
var car1_y = 300;
var car1_image  = "https://i.postimg.cc/YqdnnNX1/car1.png";

var car2_width = 100;
var car2_height = 50;
var car2_x = 0;
var car2_y = 355;
var car2_image  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvB9OQhXYrSIie51c2pHqAC73OwA3u4C4vNQ&usqp=CAU";

var background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = upload_car1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = car2_image;
}

function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height)
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if(KeyPressed == '37'){
        arrow_left();
        console.log("arrow_left");
    };
    if(KeyPressed == '38'){
        arrow_up();
        console.log("arrow_up");
    };
    if(KeyPressed == '39'){
        arrow_right();
        console.log("arrow_right");
    };
    if(KeyPressed == '40'){
        arrow_down();
        console.log("arrow_down");
    };
    if(KeyPressed == '65'){
        alfabet_left();
        console.log("alfabet_left");
    };
    if(KeyPressed == '68'){
        alfabet_right();
        console.log("alfabet_right");
    };
    if(KeyPressed == '83'){
        alfabet_down();
        console.log("alfabet_down");
    };
    if(KeyPressed == '87'){
        alfabet_up();
        console.log("alfabet_up");
    };
}

function arrow_right(){
    if(car1_x < 700){
    car1_x = car1_x + 5;
    console.log(car1_x);
    upload_background();
    upload_car1();
    upload_car2();
    }
}
function alfabet_right(){
    if(car2_x < 700){
    car2_x = car2_x + 5;
    console.log(car2_x);
    upload_background();
    upload_car1();
    upload_car2();
    }
}