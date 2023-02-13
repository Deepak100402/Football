var player1={
    name:"Player 1",
    team1count:0,
    val:[]
};
var player2={
    name:"Player 2",
    team2count:0,
    val:[]
};
var count=1,team1,team2;
var arr=["y","n"];
var arrindex;
var team1turn=0,team2turn=0;
document.getElementById("submit").onclick=function(){
    if(count<=10){
    if(count%2!=0){
        team1=arr[Math.floor(Math.random()*arr.length)];
        player1.val.push(team1);
        console.log(player1.val);
        if(team1=='y'){
            player1.team1count++;
        }
        document.getElementById("submit").textContent="Chennai FC Strike!";
        var p1circle=document.getElementById("player1").children;
            player1.val.forEach((team1,value)=>{//forEach method is a loop so don't use increment operator inside loop
                if(team1=="y"){
                p1circle[value].style.backgroundColor="green";
                }
                else{
                    p1circle[value].style.backgroundColor="red";
                }
            });
            document.getElementById("team1score").textContent=player1.team1count;
    }
    else{
        team2=arr[Math.floor(Math.random()*arr.length)];
        player2.val.push(team2);
        console.log(player2.val);
        if(team2=='y'){
            player2.team2count++;
        }
        document.getElementById("submit").textContent="Mumbai FC Strike!";
        var p2circle=document.getElementById("player2").children;
            player2.val.forEach((team2,value)=>{
                if(team2=="y"){
                p2circle[value].style.backgroundColor="green";
                }
                else{
                    p2circle[value].style.backgroundColor="red";
                }
            });
            document.getElementById("team2score").textContent=player2.team2count;
    }

}
else{
    if(player1.team1count===player2.team2count){
        document.getElementById("result").textContent="Match Draw:(";
    }
    else if(player1.team1count>=player2.team2count){
        document.getElementById("result").textContent=" Chennai FC Won the Cup";
    }
    else{
        document.getElementById("result").textContent=" Mumbai FC Won the Cup";
    }
    }
    count++;
}