Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    image_quality: 90
});
cameramytho = document.getElementById("webcam");

Webcam.attach(cameramytho);

function snapfunc() {
    Webcam.snap(function(data_uri){
        document.getElementById("resultofcam").innerHTML = '<img id="imageclicked" src="' + data_uri + '">'
    })
    console.log("Tis snapping")
}

var classifytheimg = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vA-Kjk7Dh/model.json',Modeldobeloaded);

function Modeldobeloaded() {
    console.log("Model do be loaded")
}