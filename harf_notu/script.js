const note = document.querySelector("#note");
const resultText = document.querySelector(".resultText");
const img = document.querySelector(".img");
const result = document.querySelector(".result");

let button = document.querySelector(".btn");



const calculate = () => {

    if (Number(note.value) >= 90 && Number(note.value <= 100)) {
        let newResult ="";
        resultText.innerHTML = "Harf : AA || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");

    }
    else if (Number(note.value) >= 85 && Number(note.value <= 89)) {
        let newResult ="";
        resultText.innerHTML = "Harf : BA || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");

    }
    else if (Number(note.value) >= 80 && Number(note.value <= 84)) {
        let newResult ="";
        resultText.innerHTML = "Harf : BB || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");


    }
    else if (Number(note.value) >= 75 && Number(note.value <= 79)) {
        let newResult ="";
        resultText.innerHTML = "Harf : CB || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");


    }
    else if (Number(note.value) >= 70 && Number(note.value <= 74)) {
        let newResult ="";
        resultText.innerHTML = "Harf : CC || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");


    }
    else if (Number(note.value) >= 65 && Number(note.value <= 69)) {
        let newResult ="";
        resultText.innerHTML = "Harf : DC || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");


    }

    else if (Number(note.value) >= 60 && Number(note.value <= 64)) {
        let newResult ="";
        resultText.innerHTML = "Harf : DD || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");


    }
    else if (Number(note.value) >= 50 && Number(note.value <= 59)) {
        let newResult ="";
        resultText.innerHTML = "Harf : FD || Geçtin"
        newResult += ' <i class="fa-solid fa-face-smile-beam"></i>'
        img.innerHTML = newResult;
        result.classList.add("yellow");
        result.classList.remove("red");
        result.classList.remove("black");

    }
    else if (Number(note.value) >= 0 && Number(note.value <= 49)) {
        let newResult ="";
        resultText.innerHTML = "Harf : FF || Kaldın"
        newResult += '<i class="fa-regular fa-face-frown"></i>'
        img.innerHTML = newResult;
        result.classList.add("red");
        result.classList.remove("yellow");
        result.classList.remove("black");


    }

    else {
        let newResult ="";
        resultText.innerHTML = "Geçerli Bir Not Giriniz"
        newResult += '<i class="fa-regular fa-face-frown"></i>'
        img.innerHTML = newResult;
        result.classList.add("black");
        result.classList.remove("yellow");
        result.classList.remove("red");
        
    }

}

button.addEventListener("click", calculate );