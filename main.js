
    song ="";
    leftwristX = 0;
    leftwristY = 0;

    rightwristX = 0;
    rightwristY = 0;

    inNumberleftWristY = 0;



function preload()
{
    song = loadSound("music.mp3");
}

function setup() 
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO); 
    video.hide();


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}


function draw() 
{
    image(video,0,0,600,500);

    fill("#ff0000");
    stroke("#ff0000");


    circle(leftwristX,leftwristY,20);


    inNumberleftWristY = Number(leftwristY);
    remove_decimal = floor(inNumberleftWristY);

    volume = remove_decimal/500;
    document.getElementById("volume").innerHTML = "Volume =" + volume;

    song.setVolume(volume); 

}


function play() 
{
        song.play();
        song.setVolume(1);
        song.rate(1);
}


function modelLoaded() 
{
    console.log("posenet is innitilized");
}


function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftwirstX = " + leftwristX);
        console.log("leftwirstY = " + leftwristY);

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightwirstX = " + rightwristX);
        console.log("rightwirstY = " + rightwristY);

    }
}













