function preload() {

    }
    
    function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(110, 240)
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
    }
    
    function draw() {
    image(video, 10, 10, 150, 120);
    tint(tint_color);
    }

    function take_snapshot(){
     save('happybirthyayhappybirthyay.png');
    }

    function filter_tint(){
        tint_color = document.getElementById("color_name").value;
    }