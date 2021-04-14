function preload() {
    
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
            console.log("nose X:"+results[0].pose.nose.x);
            console.log("nose Y:"+results[1].pose.nose.y);
        }
}

function draw() {
    Image(video, 0, 0, 300, 300)
}

function take_snapshot() {
    save('my_filter_image.png');
}