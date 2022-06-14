noseX=0;
noseY=0;
function preload(){

    img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video,model_loded);
    posenet.on('pose', gotposes);
}

function model_loded(){

    console.log("PoseNet is Loaded");
}

function draw(){

    image(video,0,0,300,300);
    image(img,noseX,noseY,30,30);
   


}

function gotposes(results){
    if (results.length>0){

        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nose x ="+noseX);
        console.log("nose y ="+ noseY);

    }

}

function take_snapshot(){

    save("myimage.png");
}






