song1=""
song2=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
InNumberLeftWristY=0;
function preload()
{
    song1= loadSound("juice_wrld_hide.mp3");
    song2= loadSound("come_as_you_are.mp3")
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image (video,0,0,600,500);
    
    fill("#FF0000");
    stroke("FF0000");

     if(scoreLeftWrist > 0.2)
     {
        circle(leftWristX, leftWristY, 20);
        song1.setVolume(1);
        song1.play();
     }
     if(scoreRightWrist > 0.2){
        circle(rightWristX,rightWristY , 20)
        song2.setVolume(1);
        song2.play();
     }
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelloaded(){
    console.log('PoseNet Is Intialized')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log(" leftWristX ="+ leftWristX +" leftWristY ="+ leftWristY)
        
       
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log(" rightWristX ="+ rightWristX+" rightWristY ="+ rightWristY )


        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);

        scoreRightWrist=results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist =" + scoreRightWrist);
    }
    if(scoreLeftWrist>0.2){
    
    }
    if(scoreRightWrist>0.2){
        
    }
}