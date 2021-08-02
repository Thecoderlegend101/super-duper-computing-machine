console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RqO4mUqIN/model.json',modelLoaded);

function modelLoaded() {
    console.log("model loaded")
}
Webcam.set({
    width:375,
    height:300,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById('camera')
Webcam.attach(camera)
function take_snap()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
       
    });
}

function check() {
    img = document.getElementById('captured_img')
    classifier.classify(img, gotresult)
}

function gotresult(error, result) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(result)
        
        document.getElementById('res_ob_1').innerHTML = result[0].label
        
        confi = (result[0].confidence.toFixed(2) * 100) + '%'
        document.getElementById('res_ob_2').innerHTML = confi
        
        
    }

}
