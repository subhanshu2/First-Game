var correct=0;
var timeleft = 20;
document.querySelector("#random1").disabled=true;
document.querySelector("#random2").disabled=true;
document.querySelector("#random2").style.color="black";
document.querySelector("#random3").disabled=true;
document.querySelector("#random4").disabled=true;
document.querySelector("#random4").style.color="black";
document.querySelector("#random5").disabled=true;
document.querySelector("#random6").disabled=true;
document.querySelector("#random6").style.color="black";
document.querySelector("#random7").disabled=true;
document.querySelector("#random7").style.color="black";
document.querySelector("#random8").disabled=true;
document.querySelector("#random8").style.color="black";
document.querySelector("#random9").disabled=true;
function randomGeneration()
{
    var colors = ["red","yellow","green","orange","blue","purple","grey","pink","brown"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor4 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor5 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor6 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor7 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor8 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor9 = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("ques").innerHTML = randomColor;
    var list = [randomColor1,randomColor2,randomColor3,randomColor4,randomColor5,randomColor6,randomColor7,randomColor8,randomColor9];
    var fixed = Math.floor(Math.random() * list.length);
    list[fixed] = randomColor;
    document.getElementById("random1").innerHTML = list[0];
    document.getElementById("random2").innerHTML = list[1];
    document.getElementById("random3").innerHTML = list[2];
    document.getElementById("random4").innerHTML = list[3];
    document.getElementById("random5").innerHTML = list[4];
    document.getElementById("random6").innerHTML = list[5];
    document.getElementById("random7").innerHTML = list[6];
    document.getElementById("random8").innerHTML = list[7];
    document.getElementById("random9").innerHTML = list[8];
}
function compare(i)
{
    var rhs = i;
    var lhs = document.getElementById("ques").innerHTML;    
    if(lhs == rhs )
    {
        ++correct;
        document.getElementById("score").innerHTML = correct;        
    }
    randomGeneration();
}
function startTime()
{
    timeleft=10;
    document.querySelector("#random1").disabled=false;
    document.querySelector("#random2").disabled=false;
    document.querySelector("#random3").disabled=false;
    document.querySelector("#random4").disabled=false;
    document.querySelector("#random5").disabled=false;
    document.querySelector("#random6").disabled=false;
    document.querySelector("#random7").disabled=false;
    document.querySelector("#random8").disabled=false;
    document.querySelector("#random9").disabled=false;
    randomGeneration();
    document.getElementById("score").innerHTML = correct;
    document.getElementById("button2").textContent = timeleft;
    document.getElementById("button1").disabled=true;
    document.getElementById("button2").style.backgroundColor = "green";
    var Timer = setInterval(function()
    {
        timeleft--;
        document.getElementById("button2").textContent = timeleft;
        if(timeleft <= 0)
        {
            clearInterval(Timer);
            document.getElementById("button2").style.backgroundColor = "red";
            document.getElementById("button1").disabled=false;
            document.querySelector("#random1").disabled=true;
            document.querySelector("#random2").disabled=true;
            document.querySelector("#random3").disabled=true;
            document.querySelector("#random4").disabled=true;
            document.querySelector("#random5").disabled=true;
            document.querySelector("#random6").disabled=true;
            document.querySelector("#random7").disabled=true;
            document.querySelector("#random8").disabled=true;
            document.querySelector("#random9").disabled=true;
            if(correct < 5)
                setTimeout(function(){alert("You need to work on your Gaming Skills....\nYour Final Score: " + correct);}, 1000);
            else if(correct >= 5 && correct <=10)
                setTimeout(function(){alert("Good !! But you can do better....\nYour Final Score: " + correct);}, 1000);
            else
                setTimeout(function(){alert("Now that's like a true Gamer....\nYour Final Score: " + correct);}, 1000);
            correct=0;
            timeleft=10;
        }
    },1000);
}


