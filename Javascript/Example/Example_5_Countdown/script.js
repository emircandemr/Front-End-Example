let saat = 1 ; 
let dakika = 00 ; 
let saniye = 03 ;


function countDown() {

    document.getElementById("saat").innerHTML = saat;
    document.getElementById("dakika").innerHTML = dakika ; 
    document.getElementById("saniye").innerHTML = saniye-- ;

    if (Number(document.getElementById("saniye").innerText) ==0  ){
        
        saniye = 59 ;
        dakika--;
    }

    if (Number(document.getElementById("dakika").innerText) == 0  ){
        
        dakika = 59 ;
        saniye= 59;
        saat--;
    }

    if (Number(document.getElementById("saat").innerText) <0  ) {
        dakika = 0;
        saniye =0 ;
        saat =0 ;
        alert("Süre Doldu")
    }


}


setInterval(countDown,1000)