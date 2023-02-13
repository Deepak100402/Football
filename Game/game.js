var rand = Math.floor(Math.random()*100+1);
var guess=1;
document.getElementById("SubmitButton").onclick=function(){
    var user_value=document.getElementById("enternumber").value;
    if(user_value == rand)
    {
        alert("Congratulations!!! you have got correct Number");
    }
    else if(user_value<rand)
    {
        guess++;
        alert("Try with larger");
    }
    else{
        guess++;
        alert("Try with smaller");
    }
}