let input = document.querySelector("#input");
let up = document.querySelector("#up");
let down = document.querySelector("#down");


const upFunc = () => {
    upText = Number(input.innerHTML);
    upText ++;
    input.innerHTML = upText
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
    input.innerHTML = downText

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

