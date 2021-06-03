Webcam.set({
    height:300px,
    width:300px,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById ('camera');
Webcam.attach("#camera");
function take_snapshot()
{
Webcam.snap( function(data_uri) {
  // display results in page
  document.getElementById('result').innerHTML = 
  '<img id="save" src="'+data_uri+'"/>';
} );
}

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/v_sl95BzE/model.json",modelloaded);

function modelloaded ()
{
console.log("modelloaded")
}

function check()
{
img = document.getElementById ("save")
classifier.classify(img,result)
}

function result(error , result)
{
if (error){
console.log(error);
}
else{
console.log(result);
document.getElementById("o").innerHTML = result[0].label;
document.getElementById("a").innerHTML = result[0].confidence.toFixed(2);
}
}