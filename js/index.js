

$(document).ready( function() {
    
    var n = 0;
    var m = 0;
    $("#hs1").val(m);
    var t = sessionStorage.getItem("sessionScore");
    $("#hs1").val(t);
    $("#cs1").val(n);
    //$("#hs1").val(m);
    //This code will run after your page loads
    
        $("#hover1").hide();
        $("#hover2").hide();
        $("#hover3").hide();
        $("#hover4").hide();
        $("#hover5").hide();
        $("#hover6").hide();
        $("#hover7").hide();
        $("#hover8").hide();
        $("#hover9").hide();
        
        $("#penguin1").mouseenter(function(){
            $("#hover1").show();
            $("#base1").hide();
        });
        
        $("#penguin1").mouseleave(function(){
            $("#hover1").hide();
            $("#base1").show();
        });
        
        $("#penguin2").mouseenter(function(){
            $("#hover2").show();
            $("#base2").hide();
        });
        
        $("#penguin2").mouseleave(function(){
            $("#hover2").hide();
            $("#base2").show();
        });
        
         $("#penguin3").mouseenter(function(){
            $("#hover3").show();
            $("#base3").hide();
        });
        
        $("#penguin3").mouseleave(function(){
            $("#hover3").hide();
            $("#base3").show();
        });
        
         $("#penguin4").mouseenter(function(){
            $("#hover4").show();
            $("#base4").hide();
        });
        
        $("#penguin4").mouseleave(function(){
            $("#hover4").hide();
            $("#base4").show();
        });
        
         $("#penguin5").mouseenter(function(){
            $("#hover5").show();
            $("#base5").hide();
        });
        
        $("#penguin5").mouseleave(function(){
            $("#hover5").hide();
            $("#base5").show();
        });
        
         $("#penguin6").mouseenter(function(){
            $("#hover6").show();
            $("#base6").hide();
        });
        
        $("#penguin6").mouseleave(function(){
            $("#hover6").hide();
            $("#base6").show();
        });
        
         $("#penguin7").mouseenter(function(){
            $("#hover7").show();
            $("#base7").hide();
        });
        
        $("#penguin7").mouseleave(function(){
            $("#hover7").hide();
            $("#base7").show();
        });
        
         $("#penguin8").mouseenter(function(){
            $("#hover8").show();
            $("#base8").hide();
        });
        
        $("#penguin8").mouseleave(function(){
            $("#hover8").hide();
            $("#base8").show();
        });
        
         $("#yeti").mouseenter(function(){
            $("#hover9").show();
            $("#base9").hide();
        });
        
        $("#yeti").mouseleave(function(){
            $("#hover9").hide();
            $("#base9").show();
        });
   
    var imageArray = new Array();
    var randomValues = new Array();
    var i;
    var j=1;
    for(i=0;i<8;i++){
        imageArray[i] = "images/penguin_"+j+".png";
        j++
    }
    imageArray[imageArray.length] = "images/yeti.png";
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    function yetiSound(){
        var audio = new Audio('sound/yeti.wav');
        audio.play();
    }
    
    function penguinSound(){
        var audio = new Audio('sound/penguin.wav');
        audio.play();
    }
    
    function changehighScore(){
        n1 = $("#cs1").val();
        m = $("#hs1").val();
        if(m<n1){
            $("#hs1").val(n1);
        }
        var m1 = $("#hs1").val();
        sessionStorage.setItem("sessionScore",m1);
    }
    
    $("#penguin1").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py1").src = imageArray[ran];
        $("#hover1").remove();
        $("#base1").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    $("#penguin2").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py2").src = imageArray[ran];
        $("#hover2").remove();
        $("#base2").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    
    $("#penguin3").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py3").src = imageArray[ran];
        $("#hover3").remove();
        $("#base3").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    
    $("#penguin4").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py4").src = imageArray[ran];
        $("#hover4").remove();
        $("#base4").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    
    $("#penguin5").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py5").src = imageArray[ran];
        $("#hover5").remove();
        $("#base5").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    
    $("#penguin6").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py6").src = imageArray[ran];
        $("#hover6").remove();
        $("#base6").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    
    $("#penguin7").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py7").src = imageArray[ran];
        $("#hover7").remove();
        $("#base7").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    
    $("#penguin8").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py8").src = imageArray[ran];
        $("#hover8").remove();
        $("#base8").remove();
        if(ran==8){
            yetiSound();
            n =0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
        changehighScore();
    });
    
    
    $("#yeti").one("click",function(){
        do{
            var ran = getRandomInt(9);
        }while(randomValues.includes(ran))
        randomValues.push(ran);
        document.getElementById("py9").src = imageArray[ran];
        $("#hover9").remove();
        $("#base9").remove();
        if(ran==8){
            yetiSound();
            n = 0;
            alert("Yaaaarrrr!");
            window.location.reload(true);
        }
        else{
            penguinSound();
            n += 1;
        }
        $("#cs1").val(n);
       changehighScore();
    });
    /*$("#yeti").mousedown(function() {
        alert("Yaaaarrrr!");
    });*/
    
    

});

 
