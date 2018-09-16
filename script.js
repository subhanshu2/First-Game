
var correct=0;
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
function startTime()
{
    var timeleft = 10;
    randomGeneration();
    document.getElementById("button2").style.backgroundColor = "green";
    
    var Timer = setInterval(function()
    {
        timeleft--;
        document.getElementById("button2").textContent = timeleft;
        
        
        if(timeleft <= 0)
        {
            clearInterval(Timer);
            document.getElementById("button2").style.backgroundColor = "red";

        }
        
    },1000);
}
function compare(lhs,rhs)
{
    if(lhs == rhs)
    {
        ++correct;
        document.getElementById("score").innerHTML = correct;        
    }
    randomGeneration();
}
function compare1()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random1").innerHTML;
    compare(lhs,rhs);
}
function compare2()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random2").innerHTML;
    compare(lhs,rhs);
}
function compare3()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random3").innerHTML;
    compare(lhs,rhs);
}
function compare4()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random4").innerHTML;
    compare(lhs,rhs);
}
function compare5()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random5").innerHTML;
    compare(lhs,rhs);
}
function compare6()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random6").innerHTML;
    compare(lhs,rhs);
}
function compare7()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random7").innerHTML;
    compare(lhs,rhs);
}
function compare8()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random8").innerHTML;
    compare(lhs,rhs);
}
function compare9()
{
    var lhs = document.getElementById("ques").innerHTML;
    var rhs = document.getElementById("random9").innerHTML;
    compare(lhs,rhs);
}
