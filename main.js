noseX=0;
noseY=0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,500);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Posenet Is Intialized')
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y
console.log("noseX ="+"noseY ="+noseY);

leftWrist = results[0].pose.leftWrist.x;
rightWrist = results[0].pose.rightWrist.x;
difference = leftWrist - rightWrist;

console.log("leftWrist = "+ leftWrist +"rightWrist="+rightWrist +"difference ="+difference);
}
}
function draw(){
background('#969A97');

document.getElementById("why").innerHTML ="WIDTH AND HEIGHT OF A SQUARE WILL BE ="+ difference +"px";
fill('#F90093');
stroke('#90093');
square(noseX,noseY, difference);
}