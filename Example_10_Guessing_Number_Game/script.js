let heart = 3 ;

function guessing() {
    
    let random = Math.round(Math.random()*10);

    let value = document.getElementById("guessInput").value;

    if(random == value) {

        document.getElementById("result").innerHTML = "Tebrikler Doğru Bildiniz :)" ;
        document.getElementById("btn-guess").style.display ="none";
        document.getElementById("btn-again").style.display = "inline";

    }

    else {
        document.getElementsByClassName("fa-solid")[heart-1].style.display ="none";
        heart--;


        if ( heart>0) {
            document.getElementById("result").innerHTML = "Yanlış Bildiniz !" ;
            document.getElementById("result").style.display ="inline "
            document.getElementById("btn-again").style.display ="none";
        }

        else {
            document.getElementById("btn-again").style.display = "inline-block"
            document.getElementById("btn-guess").style.display ="none";

            document.getElementById("result").innerHTML = "Yanlış Bildiniz ! Doğru Cevap :" +random ;
        }
    }



}

function again() {
    heart =3 ;

    for ( let i =0 ; i<3 ;i++){
        document.getElementsByClassName("fa-solid")[i].style.display ="inline";
    }

    document.getElementById("btn-guess").style.display ="block";
    document.getElementById("btn-again").style.display = "none";
    document.getElementById("result").style.display ="none"
}