let seat = document.querySelectorAll(".seat");
let seatSelectedCount = document.querySelector("#count");
let seatSelectedInfo = document.querySelector("#selected")
let movieList = document.querySelector("#movie");
let seatReserved = document.querySelectorAll(".seat.reserved")
let seatPrice = document.querySelector("#amount");
let emptySeat = document.querySelector("#empty");
let buy = document.querySelector("#buy");
let cancel = document.querySelector("#cancel");
let reserved = document.querySelector("#reserved");

let seatCount = 0;
let index = 0;

let seatNumber = seat.length - seatReserved.length;
emptySeat.innerHTML = seatNumber ;


seat.forEach(element => {
    element.addEventListener("click",function(){
        if(element.classList.contains("selected")){
            element.classList.remove("selected");
            seatCount--;
            seatNumber++;
            let seatPriceAmount = seatCount*movieList.value
            seatPrice.innerHTML = seatPriceAmount

            element.removeAttribute("id")

        }
        else{
            element.classList.add("selected")
            seatCount++;
            seatNumber--;

            element.setAttribute("id",index)

            index++;
            let seatPriceAmount = seatCount*movieList.value
            seatPrice.innerHTML = seatPriceAmount
        }

    
        emptySeat.innerHTML = seatNumber;
        seatSelectedCount.innerHTML = seatCount;
        seatSelectedInfo.innerHTML= seatCount;
    })
});


buy.addEventListener("click",function(){
    seat.forEach(element => {
        if(element.hasAttribute("id")){
            element.classList.remove("selected");
            element.classList.add("reserved");
        }
        let seatReserved = document.querySelectorAll(".seat.reserved")
        reserved.innerHTML=seatReserved.length;
        seatSelectedInfo.innerHTML = 0;
        seatSelectedCount.innerHTML = 0;
        seatPrice.innerHTML = 0;
        seatCount = 0;
    });
})

cancel.addEventListener("click",function(){
    seat.forEach(element => {
        element.classList.remove("reserved");    
        element.classList.remove("selected");
        element.removeAttribute("id");
    });
    seatSelectedInfo.innerHTML = 0;
    seatSelectedCount.innerHTML = 0;
    seatPrice.innerHTML = 0;
    seatCount = 0;
    reserved.innerHTML = 0;
    emptySeat.innerHTML = seat.length ;
    seatNumber = seat.length;

})
