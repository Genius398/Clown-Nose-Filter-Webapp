noseX="0";
noseY="0";


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/jjpCMtk8/Clown-Nose.png');
}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    
    poseNet=ml5.poseNet(video, modalLoaded);

    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log('posenet On');
}

function gotPoses(results) {
        if (results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x-10;
            noseY = results[0].pose.nose.y-10;
            console.log("nose X : "+noseX);
            console.log("nose Y : "+noseY);
        }
}

function draw() {
    Image(video, 0, 0, 300, 300);
    Image(clown_nose, noseX, noseY, 30,30);
}

function take_snapshot() {
    save('my_filter_image.png');
}