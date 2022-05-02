let myname = prompt("İsminiz ? :" , " İsminizi Giriniz.");


let nameText = document.querySelector("#myName");

function getTime () {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    (hour<10)? document.getElementById("hour").innerText = "0"+ hour:
    document.getElementById("hour").innerText =  hour ;
    (minute<10)? document.getElementById("minute").innerText = "0" + ":" +minute :
    document.getElementById("minute").innerText =  ":" +minute ;
    (seconds<10)? document.getElementById("seconds").innerText = "0" + ":" +seconds :
    document.getElementById("seconds").innerText =   ":" + seconds ;
}

setInterval(getTime,1000)


myname = myname.toUpperCase();
nameText.innerHTML = myname;
