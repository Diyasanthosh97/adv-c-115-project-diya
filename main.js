function preload(){
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
   
     
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function takepic(){
    save("clown nose_filter.jpg");
}
    function draw(){
        image(video,0,0,400,400);
    }
    function modelLoaded(){
        console.log("Pose net is working");
    }
    function gotPoses(results){
    if(results.length>0){
    console.log(results);
    console.log("nosex="+ results[0].pose.nose.x);
    console.log("nosey="+ results[0].pose.nose.y);
    }
    }

