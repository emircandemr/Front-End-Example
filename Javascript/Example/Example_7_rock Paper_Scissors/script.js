let option = ["url(scissors.png)" ,"url(rock1.png)" , "url(paper.png)" ,
 "url(scissors.png)" ,"url(rock1.png)" , "url(paper.png)","url(scissors.png)" ,
 "url(rock1.png)" , "url(paper.png)","url(scissors.png)" ,"url(rock1.png)" , 
 "url(paper.png)","url(scissors.png)" ,"url(rock1.png)" , "url(paper.png)",
 "url(scissors.png)" ,"url(rock1.png)" , "url(paper.png)"]

let numberlaps=prompt("Number of Laps");
let laps = parseInt(numberlaps);

function randomSRP () {
    let random = Math.round(Math.random()*option.length-1);
    return random;
}

let player1 , player2 ;

function playSRP() {

    player1=option[randomSRP()]
    player2=option[randomSRP()]

    document.getElementById("player1").style.backgroundImage = player1;
    document.getElementById("player2").style.backgroundImage = player2;
    return player1 , player2
}

function checkwin() {
    playSRP();

    if ( player1 == "url(scissors.png)" && player2 =="url(paper.png)") {

        newValue = document.getElementById("player1score").innerHTML;
        newValue = Number(newValue);
        newValue += 1;
        document.getElementById("player1score").innerHTML = newValue;
    }

    else if ( player1 == "url(scissors.png)" && player2 == "url(rock1.png)" ) {

        newValue = document.getElementById("player2score").innerHTML;
        newValue = Number(newValue);
        newValue += 1;
        document.getElementById("player2score").innerHTML = newValue;
    }

    else if ( player1 == "url(rock1.png)" && player2 == "url(scissors.png)" ) {

        newValue = document.getElementById("player1score").innerHTML;
        newValue = Number(newValue);
        newValue += 1;
        document.getElementById("player1score").innerHTML = newValue;
    }

    else if ( player1 == "url(rock1.png)" && player2 == "url(paper.png)" ) {

        newValue = document.getElementById("player2score").innerHTML;
        newValue = Number(newValue);
        newValue += 1;
        document.getElementById("player2score").innerHTML = newValue;
    }

    else if ( player1 == "url(paper.png)" && player2 == "url(rock1.png)" ) {

        newValue = document.getElementById("player1score").innerHTML;
        newValue = Number(newValue);
        newValue += 1;
        document.getElementById("player1score").innerHTML = newValue;
    }


    else if ( player1 == "url(paper.png)" && player2 == "url(scissors.png)" ) {

        newValue = document.getElementById("player2score").innerHTML;
        newValue = Number(newValue);
        newValue += 1;
        document.getElementById("player2score").innerHTML = newValue;
    }
}



function SRP() {

    checkwin();

    let player1score = Number(document.getElementById("player1score").innerHTML);
    let player2score = Number(document.getElementById("player2score").innerHTML);

    console.log("player1score"+player1score)
    console.log("numberlaps"+laps)
    
    while ( player1score == laps || player2score == laps) {

        console.log("burdayım")

        if (player1score == laps) {
            console.log("if");
            document.getElementById("resultbox").innerHTML = "Kazanan 1.Player";
            }
    
        else if (player2score == laps) {
            console.log("else if");
            document.getElementById("resultbox").innerHTML = "Kazanan 2.Player";
            
        }
  
    }

    }




