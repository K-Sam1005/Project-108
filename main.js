var cat = 0;
var dog = 0;
var cow = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/40AYV52jm/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        random_number_r = Math.floor(Math.random() *255) +1;
        random_number_g = Math.floor(Math.random() *255) +1;
        random_number_b = Math.floor(Math.random() *255) +1;

        document.getElementById("result_label").innerHTML = "Detected voice of - "+result[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_animals_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("image");

        if(result[0].label == "Barking"){
            img.src = "dog-bark.gif";
            dog = dog + 1;
            document.getElementById("detected_animals_count").innerHTML = "Detected dog - "+dog;
        } else if(result[0].label == "Meowing"){
            img.src = "cat-meow.gif";
            cat = cat + 1;
            document.getElementById('detected_animals_count').innerHTML = "Dectected cat - "+cat;
        } else if(result[0].label == "Mooing"){
            img.src = "cow-mooing.gif";
            cow = cow + 1;
            document.getElementById('detected_animals_count').innerHTML = "Dectected cow - "+cow;
        } else{
            img.src = "ear-icon-png-2640.png";
        }

    }
}