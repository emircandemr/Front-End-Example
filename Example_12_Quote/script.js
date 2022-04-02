let quotes = [];

function getQuotes() {
    return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data =>{
        quotes = data;
        Change();
    })
}

function Change(){
    let count = quotes.length;
    let randomNumber = Math.floor(Math.random()*count);

    document.getElementById("quoteText").innerText=quotes[randomNumber].text;
    document.getElementById("author").innerText="-"+quotes[randomNumber].author;

}




getQuotes()