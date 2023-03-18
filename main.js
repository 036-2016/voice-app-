var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function run(event)
{
    console.log(event);
    var content = event.results[0] [0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content=="take my selfie")
    {
        console.log("taking your selfie in 5 seconds");
        speak();
    }
    
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    take_snapshot();
}
camera = document.getElementById("camera");
Webcam.set({
     width:360,
      height:250,
       image_format : 'jpeg',
        jpeg_quality:90 
    });

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

