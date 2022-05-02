function getTime () {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth()+1; //Java script ayları 0 dan başlattığı için
    let year = now.getFullYear();

    (hour<10)? document.getElementById("hour").innerText = "0"+hour:
               document.getElementById("hour").innerText = hour ;
    (minute<10)? document.getElementById("minute").innerText = "0" +minute :
                 document.getElementById("minute").innerText = minute ;
    (seconds<10)? document.getElementById("seconds").innerText = "0" +seconds :
                  document.getElementById("seconds").innerText = seconds ;

    document.getElementById("date").innerText = day + "/" + month + "/" + year;


}

setInterval(getTime,1000)