let newValue 

function funcPlus() {

    newValue = document.getElementById("text").value;

    newValue = Number(newValue) ; // Number ile string olan ifadeyi int çevirdik...
    newValue += 1 ;
    document.getElementById("text").value = newValue;
}

function funcMinus() {

    newValue = document.getElementById("text").value;
    newValue = Number(newValue) ; // Number ile string olan ifadeyi int çevirdik...
    newValue -= 1 ;
    document.getElementById("text").value = newValue;
}