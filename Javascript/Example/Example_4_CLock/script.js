let date = new Date();

let saat,dakika,saniye;

saat = date.getHours();
dakika = date.getMinutes();
saniye = date.getSeconds();

function clock() {

    document.getElementById("saat").innerHTML = saat ;
    document.getElementById("dakika").innerHTML = dakika ; 
    document.getElementById("saniye").innerHTML = saniye++ ;

    if (Number(document.getElementById("saniye").innerText) ==59) {

        dakika++;
        saniye = 0 ;
    }

    if (Number(document.getElementById("dakika").innerHTML) > 59) {

        saat++;
        dakika = 0 ;
    }

    if (Number(document.getElementById("saat").innerHTML) > 23) {

        saat = 0;
        dakika = 0 ;
    }


}

setInterval(clock,1000);