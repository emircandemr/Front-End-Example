let comment = [
    {yorum : "Lorem ipsum dolor sit amet" , isim : " Abdi Sükrü"},
    {yorum : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, rem!" , isim : " Abdi köle"},
    {yorum : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ducimus rem quo, exercitationem quibusdam odit labore fuga quaerat iure ipsum." , isim : " Abdi Sükrü"},
    {yorum : "Lorem ipsum dolor sit amet sddfsadsadasd" , isim : " Absdasddi sadasd"},
    {yorum : "Lorem ipsum dodasdsalor sit amdsadasdasdaset" , isim : " Abdsadasdi dasdsad"}
] ;

let randomComment;

function selectComment() {
    randomComment = Math.round(Math.random()*4);

};

function randomSelectComment() {

    selectComment();

    document.getElementById("comment").innerHTML = comment[randomComment].yorum;
    document.getElementById("name").innerHTML = comment[randomComment].isim;
}

setInterval(randomSelectComment,2000)
