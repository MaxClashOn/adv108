"https://teachablemachine.withgoogle.com/models/pmyL78GiI/"
function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pmyL78GiI/.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        red=Math.floor(Math.random()*255)+1;
        blue=Math.floor(Math.random()*255)+1;
        green=Math.floor(Math.random()*255)+1;
        document.getElementById("resultado_label").innerHTML="escucho: "+results[0].label;
        document.getElementById("resultado_precision").innerHTML="precision: "+(results[0].confidence*100).toFixed(3);
        document.getElementById("resultado_label").style.color="rgb("+red+","+green+","+blue+")";
        document.getElementById("resultado_precision").style.color="rgb("+red+","+green+","+blue+")";
        img=document.getElementById("cat");
        img1=document.getElementById("dog");
       
        if(results[0].label=="latir"){
            img.src="cat.jpg";
            img1.src="dog-puppy.jpg";
            
        }else if(results[0].label=="miau"){
            img.src="cat.jpg";
            img1.src="dog-puppy.jpg";
            
        
            
        }
    }
}