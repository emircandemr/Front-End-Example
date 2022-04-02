function calculateBMI() {

    let weight = document.getElementById("weightValue").value ;
    let height = document.getElementById("heightValue").value ;

    let result = weight/Math.pow(height,2);

    document.getElementById("result").innerText = result.toFixed(2) ;
    document.getElementById("result").style.display = "flex";

    if (result<18.5){
        document.getElementById("result2").innerText = "Under Weight";
        document.getElementById("result2").style.display = "flex";
        document.getElementById("result2").style.backgroundColor ="#bbe4e9"
    }

    else if (result<25 && result>18.5){
        document.getElementById("result2").innerText = "Normal";
        document.getElementById("result2").style.display = "flex";
        document.getElementById("result2").style.backgroundColor ="#cbf078"
    }

    else if (result>25 && result<30){
        document.getElementById("result2").innerText = "Over Weight";
        document.getElementById("result2").style.display = "flex";
        document.getElementById("result2").style.backgroundColor ="#f96d00"
    }

    else if (result>30){
        document.getElementById("result2").innerText = "Obese";
        document.getElementById("result2").style.display = "flex";
        document.getElementById("result2").style.backgroundColor ="#dc2f2f"
    }

}

function Resetle() {
    document.getElementById("weightValue").value = "" ;
    document.getElementById("heightValue").value = "" ;
    document.getElementById("result").style.display = "none";
    document.getElementById("result2").style.display = "none";
}