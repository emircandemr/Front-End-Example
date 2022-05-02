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

    document.getElementById("dates").innerText = day + "/" + month + "/" + year;

}

setInterval(getTime,1000)

let countries =[];

function getCountries() {
    return fetch("https://ezanvakti.herokuapp.com/ulkeler")
        .then(response => response.json())
        .then(data => {
            countries =data;
            let htmlcountry = "";
            let indexTurkish = 0;
            for(let i=0 ; i<data.length ; i++){
                htmlcountry +='<option id="citiesID" value="'+data[i].UlkeID+'">'+data[i].UlkeAdi+'</option>';
                if(data[i].UlkeAdi == "TÜRKİYE") indexTurkish=i;

            }

            document.getElementById("countries").innerHTML=htmlcountry;
            document.getElementById("countries").selectedIndex = indexTurkish;
        
            getCities(2)
    })

}

getCountries();

let cities=[]

function getCities(countryID){
    return fetch("https://ezanvakti.herokuapp.com/sehirler/"+countryID) 
        .then(response => response.json())
        .then(data => {
            cities = data;
            let htmlcities = "";
            let indexIstanbul = 0;
            for(let i=0 ; i<data.length ; i++){
                htmlcities +='<option value="'+data[i].SehirID+'">'+data[i].SehirAdi+'</option>';
                if(data[i].SehirAdi == "İSTANBUL") indexIstanbul=i;
            }
            document.getElementById("cities").innerHTML=htmlcities;

            if(countryID==2){
            document.getElementById("cities").selectedIndex = indexIstanbul;

            }

            else{
            document.getElementById("cities").selectedIndex = 0;

            }
        })

}

// getCities(2);

let counties = [];

function getCounties(cityID){
    return fetch("https://ezanvakti.herokuapp.com/ilceler/"+cityID)
        .then(response => response.json())
        .then(data => {
            counties = data;
            let htmlcounties = "";
            let indexBeylikdüzü = 0;
            for(let i=0 ; i<data.length ; i++){
                htmlcounties +='<option value="'+data[i].IlceID+'">'+data[i].IlceAdi+'</option>';
                if(data[i].IlceAdi == "İSTANBUL") indexBeylikdüzü=i;
            }
            document.getElementById("counties").innerHTML=htmlcounties;

            if(cityID==539){
            document.getElementById("counties").selectedIndex = indexBeylikdüzü;

            }

            else{
            document.getElementById("cities").selectedIndex = 0;

            }
        })

}
let counter;


function getPrayerTime(CountyID){
    return fetch("https://ezanvakti.herokuapp.com/vakitler/"+CountyID)
        .then(response => response.json())
        .then(data => {

            let currentData = new Date();

            let Day = (currentData.getDate()<10)? "0"+currentData.getDate(): currentData.getDate();
            let Month = ((currentData.getMonth())<10)? "0"+(currentData.getDate()-2):
                (currentData.getDate()-1);
            let Year = currentData.getFullYear();

            

            currentData = Day+"."+Month+"."+Year;


            let index = data.findIndex( d => d.MiladiTarihKisa == currentData);
            let selectData = data[index];


            document.getElementById("imsakTime").innerText = selectData.Imsak;
            document.getElementById("gunesTime").innerText = selectData.Gunes;
            document.getElementById("ogleTime").innerText = selectData.Ogle;
            document.getElementById("ikindiTime").innerText = selectData.Ikindi;
            document.getElementById("aksamTime").innerText = selectData.Aksam;
            document.getElementById("yatsiTime").innerText = selectData.Yatsi;

            
        
        clearInterval(counter);    
        counter = setInterval(function(){
            leftFastTime(selectData.Aksam);
        },1000);

        })
}


function leftFastTime(aksam){

    let now = new Date ().getTime();
    let endDate = new Date ();
    endDate.setHours(aksam.substr(0,2));
    endDate.setMinutes(aksam.substr(3,2));
    endDate.setSeconds("0");

    let timeLeft = endDate- now

    if(timeLeft>0){
        let hour =Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60));
        let minute =Math.floor((timeLeft%(1000*60*60))/(1000*60));
        let second =Math.floor((timeLeft%(1000*60))/(1000));

        document.getElementById("timeLeft").innerText=("0"+hour).slice(-2)+ ":" +("0"+minute).slice(-2);
        document.getElementById("secondLeft").innerText=("0"+second).slice(-2);     
    }
    else{
        document.getElementById("timeLeft").innerText = "00:00"
        document.getElementById("secondLeft").innerText = "05"

    }
}

function changeCountry(){
    let counrtyValue = document.getElementById("countries").value;
    getCities(counrtyValue);
}

function changeCity(){
    let cityValue = document.getElementById("cities").value;
    getCities(cityValue);
}

getPrayerTime(9541);