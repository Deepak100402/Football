var team1,team2, arrindex,turn;
var countwick1=0,countwick2=0;
var countscore1=0,countscore2=0;
var array=[0,1,2,3,4,6,"W"];
var count=0;
var arr=[1,0];
var team1scores=[],team2scores=[];

window.onload=()=>{
    turn=Math.floor(Math.random()*arr.length);
    if(turn%2==0){
    document.getElementById("submit").textContent="CSK Battle !";
    }
    else{
        document.getElementById("submit").textContent="MI Battle !";
    }
}

document.getElementById("submit").onclick=function(){
    if(turn%2==0){
    if(count<12){
        if(count<6){
            arrindex=Math.floor(Math.random()*array.length);
            team1=array[arrindex];
            team1scores.push(team1);
            if(team1=="W"){
                countwick1++;
            }
            else{
                countscore1+=team1;
            }
            document.getElementById("team1score").textContent=countscore1;
            var t1=document.getElementById("player1").children;
            team1scores.forEach((team1,value)=>{
                t1[value].textContent=team1;
            });
            if(countwick1==2)
                count=5;
        }
        else{
        document.getElementById("submit").textContent="MI Battle !";
            arrindex=Math.floor(Math.random()*array.length);
            team2=array[arrindex];
            team2scores.push(team2);
            if(team2=="W"){
                countwick2++;
            }
            else{
                countscore2+=team2;
                if(countscore2>countscore1){
                    count=12;
                    document.getElementById("result").textContent="MI BEATS CSK!";
                    document.getElementById("result").style.backgroundColor="black";
                    document.getElementById("result").style.color="red";
                    document.getElementById("result").style.fontSize="35px";
                    document.getElementById("result").style.bordercolor="black";
                }
            }
            document.getElementById("team2score").textContent=countscore2;
            var t2=document.getElementById("player2").children;
            team2scores.forEach((team2,value)=>{
                t2[value].textContent=team2;
            });
            if(countwick2==2)
                count=12;
        }
    }

    else{
        if(countwick1==2){
            document.getElementById("result").textContent="MI BEATS CSK!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else if(countwick2==2){
            document.getElementById("result").textContent="CSK BEATS MI!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else if(countscore2>countscore1){
            document.getElementById("result").textContent="MI BEATS CSK!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else if(countscore1==countscore2){
            document.getElementById("result").textContent="Match Draw :(";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else{
            document.getElementById("result").textContent="CSK BEATS MI!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
    }
    count++;
}

else{
    if(count<12){
        if(count<6){
            arrindex=Math.floor(Math.random()*array.length);
            team2=array[arrindex];
            team2scores.push(team2);
            if(team2=="W"){
                countwick2++;
            }
            else{
                countscore2+=team2;
            }
            document.getElementById("team2score").textContent=countscore2;
            var t2=document.getElementById("player2").children;
            team2scores.forEach((team2,value)=>{
                t2[value].textContent=team2;
            });
            if(countwick2==2)
                count=5;
        }
        else{
            document.getElementById("submit").textContent="CSK Battle !";
            arrindex=Math.floor(Math.random()*array.length);
            team1=array[arrindex];
            team1scores.push(team1);
            if(team1=="W"){
                countwick1++;
            }
            else{
                countscore1+=team1;
                if(countscore1>countscore2){
                    count=12;
                    document.getElementById("result").textContent="CSK BEATS MI!";
                    document.getElementById("result").style.backgroundColor="black";
                    document.getElementById("result").style.color="red";
                    document.getElementById("result").style.fontSize="35px";
                    document.getElementById("result").style.bordercolor="black";
                }
            }
            document.getElementById("team1score").textContent=countscore1;
            var t1=document.getElementById("player1").children;
            team1scores.forEach((team1,value)=>{
                t1[value].textContent=team1;
            });  
            if(countwick1==2)
                count=12;
        }
    }

    else{
        if(countwick1==2){
            document.getElementById("result").textContent="MI BEATS CSK!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else if(countwick2==2){
            document.getElementById("result").textContent="CSK BEATS MI!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else if(countscore1>countscore2){
            document.getElementById("result").textContent="CSK BEATS MI!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else if(countscore1==countscore2){
            document.getElementById("result").textContent="Match Draw :(";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
        else{
            document.getElementById("result").textContent="MI BEATS CSK!";
            document.getElementById("result").style.backgroundColor="black";
            document.getElementById("result").style.color="red";
            document.getElementById("result").style.fontSize="35px";
            document.getElementById("result").style.bordercolor="black";
        }
    }
    count++;
}
}