let backgColor ;

function backgroundRandom(){

    let color = "ABCDEF0123456789";
    backgColor = "#";

    for (i = 0 ; i<6; i++){
        
        let random = Math.round(Math.random()*15); // 15 çarpmamızın nedeni color listesinde 15 eleman var
        backgColor += color.charAt(random); // charAt string ifade içindeki elemanları seçme işlemi
    }
}

function selectColor() {
    backgroundRandom() ;
    document.getElementsByClassName("backg")[0].style.backgroundColor = backgColor;
}

setInterval (selectColor,2000);


// let selectedImg;

// function imgRandom() {
//     imgList = [ "https://picsum.photos/id/15/300/400" , "https://picsum.photos/id/37/300/400",
//                 "https://picsum.photos/id/45/300/400"];
//     selectedImg = "" ;

//     let randImg = Math.round(Math.random()*(imgList.length-1));
//     selectedImg = imgList[randImg];
// }

// function selectImg() {
//     imgRandom();
//     document.getElementById("img").src = selectedImg;
// }

// setInterval(selectImg,2000)


let selectedImg;

function imgRandom() {
    let randImg = Math.floor(Math.random()*2000);
    selectedImg = "https://picsum.photos/id/"+randImg+"/300/400";
}

function selectImg() {
    imgRandom();
    document.getElementById("img").src = selectedImg;
}

setInterval(selectImg,2000)


