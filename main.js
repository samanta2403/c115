noseX=0;
noseY=0;
function preload(){

}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=creatCapture(VIDEO);
    video.size(300,300);
    video.hide();
    postNet=ml5.postNet(video,modelLoaded);
    postNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('postNet is initialized');
}

function gotPoses(results)
{
    if ( results.length > 0)
    {
        console.log(results);
        console.log('nose x ='+results[0].pose.nose.x);
        console.lof('nose y ='+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    }
    
    function take_snapshot(){
        save (' myFilterImage.png');
    }
