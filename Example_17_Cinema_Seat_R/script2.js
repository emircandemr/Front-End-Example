const container = document.querySelector(".container");
const count = document.querySelector("#count");
const price = document.querySelector("#amount")
const select = document.getElementById("movie")
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage()
calculateTotal()

container.addEventListener("click",function(e) {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        
        e.target.classList.toggle("selected")
        calculateTotal();


    }
});

select.addEventListener("change",function(e){
    calculateTotal();
});


function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".seat.selected");
    
    const selectedSeatArr = []; // Seçilen koltukların listesi
    const seatsArr = []; // Tüm koltukların listesi


    selectedSeats.forEach(function(element){
        selectedSeatArr.push(element)
    });

    seats.forEach(function(element){
        seatsArr.push(element)
    });

    let selectedSeatIndexs = selectedSeatArr.map(function(element){
        return seatsArr.indexOf(element);
    });  // Seçilen koltukların listesinden map fonksiyonu ile tüm koltukların listesindeki indeksini getirdik.

    let selectedSeatCount = selectedSeats.length
    count.innerHTML = selectedSeatCount;
    price.innerHTML = selectedSeatCount * select.value ;


    saveToLocalStorage(selectedSeatIndexs)

}


function getFromLocalStorage () {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")); //Local storage den liste halinde seçilen koltukları aldık

        if(selectedSeats !=null && selectedSeats.length > 0 ) {
            seats.forEach(function(seat , index) {
                if(selectedSeats.indexOf(index) > -1 ){
                    seat.classList.add("selected")
                }
            });
        }

    const selectedMovieIndex = localStorage.getItem("selectedMovie");

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }
}




function saveToLocalStorage(index){
    localStorage.setItem("selectedSeats", JSON.stringify(index));
    localStorage.setItem("selectedMovie",select.selectedIndex)
}