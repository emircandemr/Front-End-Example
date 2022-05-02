let input = document.querySelector("#input");
let up = document.querySelector("#up");
let down = document.querySelector("#down");


const upFunc = () => {
    upText = Number(input.innerHTML);
    upText ++;
    localStorage.setItem("counter", upText)
    input.innerHTML = localStorage.getItem("counter") ? localStorage.getItem("counter") :0
}

up.addEventListener("click",upFunc);
up.addEventListener("mouseover", function(){
    this.style.backgroundColor ="black";
    this.style.color ="#ddd";

})
up.addEventListener("mouseout", function(){
    this.style.backgroundColor ="#ddd";
    this.style.color ="black";


})


const downFunc = () => {
    downText = Number(input.innerHTML);
    downText --;
    localStorage.setItem("counter", downText)
    input.innerHTML = localStorage.getItem("counter") ? localStorage.getItem("counter") :0

    if (downText<0) {
        input.innerHTML = 0;
    }
}

down.addEventListener("click",downFunc);
down.addEventListener("mouseover", function(){
    this.style.backgroundColor ="black";
    this.style.color ="#ddd";

})
down.addEventListener("mouseout", function(){
    this.style.backgroundColor ="#ddd";
    this.style.color ="black";


})



let counterStorage = localStorage.getItem("counter") ? localStorage.getItem("counter") :0
input.innerHTML = counterStorage