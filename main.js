nose_X=0;
nose_Y=0;
leftwrist_X=0;
rightwrist_X=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotposes);

}

function modelLoaded()
{
    console.log("PoseNet is initilized");

}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_X=results[0].pose.nose.x;
        nose_Y=results[0].pose.nose.y;

        console.log("X cordinate of nose "+nose_X);
        console.log("Y cordinate of nose "+nose_Y);

        leftwrist_X=results[0].pose.leftWrist.x;
        rightwrist_X=results[0].pose.rightWrist.x;

        console.log("X cordinate of leftwrist = "+leftwrist_X);
        console.log("X cordinate of rightwrist = "+rightwrist_X);

        difference=floor(leftwrist_X - rightwrist_X);
        console.log("Difference of left wrist and right wrist = "+difference);
    }
}