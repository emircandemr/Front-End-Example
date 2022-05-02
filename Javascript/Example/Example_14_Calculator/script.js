let btnNumber = document.querySelectorAll("#btnNumber");
let btnOpt = document.querySelectorAll("#btnOpt");
let screen = document.querySelector("#screen");

let optState = false;
let opt = "";
let final = 0;

let leftPart = "" ;
let rightPart = "";
let selectedOperator ="";



btnNumber.forEach(element => {
    element.addEventListener("click", showNumber);

    function showNumber(){
        if (screen.textContent=="0"){
            screen.textContent ="";
        }

        screen.textContent += this.textContent;

        if (selectedOperator==""){
            leftPart +=this.textContent
        }

        else if(selectedOperator!==""){
            rightPart += this.textContent;
            
        }
        console.log("LeftPart"+leftPart)
        console.log("RightPart"+rightPart)

        
    }
});


btnOpt.forEach(element => {
    element.addEventListener("click", showOpt);

    function showOpt(){
        selectedOperator = this.textContent;
        screen.textContent += this.textContent

    }
});


document.getElementById("btnEquals").addEventListener("click" ,function(){

    if (selectedOperator == "+") {
        screen.textContent = Number(leftPart) + Number(rightPart);
    }
    else if (selectedOperator == "-") {
        screen.textContent = Number(leftPart) - Number(rightPart);
    }
    else if (selectedOperator == "x") {
        screen.textContent = Number(leftPart) * Number(rightPart);
    }
    else if (selectedOperator == "÷") {
        screen.textContent = Number(leftPart) / Number(rightPart);
    }

    leftPart = "";
    rightPart = "";

})

document.getElementById("reset").addEventListener("click",function(){
    selectedOperator = "";
    leftPart = "";
    rightPart = "";
    screen.textContent = "0" ;

})  

// BLACK MODE

let ball = document.querySelector("#ball");
let theme = document.querySelector("#theme");
let mainBg = document.querySelector("#mainBg");
let container = document.querySelector("#container")
let equals = document.querySelector("#btnEquals");
let del = document.querySelector("#del");
let reset = document.querySelector("#reset");
let moon = document.querySelector("#moon")

ball.addEventListener("click", changeTheme);


let leftside=true;

function changeTheme() {

    if(leftside==true){
        ball.style.left = "40px";
        ball.style.backgroundColor = "#ddd";
        theme.style.backgroundColor = "#151D3B";
        mainBg.style.backgroundColor ="#ddd";
        container.style.backgroundColor ="#151D3B";
        btnNumber.forEach(element => {
            element.style.backgroundColor="#ddd";
            element.style.color = "#151D3B";
            element.addEventListener("mouseover",function(){
                this.style.backgroundColor = "#151D3B";
                this.style.color="#ddd";
                this.style.border ="1px solid #ddd"
            })
            element.addEventListener("mouseout",function(){
                this.style.backgroundColor = "#ddd"
                this.style.color="#151D3B";
                this.style.border ="1px solid #151D3B"
            })
        });
        btnOpt.forEach(element => {
            element.style.backgroundColor = "#ddd";
            element.style.color = "#151D3B";
            element.addEventListener("mouseover",function(){
                this.style.backgroundColor = "#151D3B";
                this.style.color="#ddd";
                this.style.border ="1px solid #ddd"
            })
            element.addEventListener("mouseout",function(){
                this.style.backgroundColor = "#ddd"
                this.style.color="#151D3B";
                this.style.border ="1px solid #151D3B"
            })
        });
        equals.style.border= "1px solid #ddd";
        del.style.backgroundColor = "#151D3B";
        del.style.color ="#ddd";
        del.style.border ="1px solid #ddd";
        reset.style.border = "1px solid #ddd";
        reset.style.backgroundColor ="#151D3B";
        reset.style.color="#ddd";
        moon.style.color ="#fff"
        leftside = false ;
    }
    else{
        ball.style.left ="5px";
        ball.style.backgroundColor = "#151D3B";
        theme.style.backgroundColor = "#ddd";
        mainBg.style.backgroundColor ="#151D3B";
        container.style.backgroundColor ="rgba(255, 255, 255, 0.19)";
        btnNumber.forEach(element => {
            element.style.backgroundColor="#151D3B";
            element.style.color = "#ddd";
            element.addEventListener("mouseover",function(){
                this.style.backgroundColor = "#ddd";
                this.style.color="#151D3B";
                this.style.border ="1px solid #ddd"
            })
            element.addEventListener("mouseout",function(){
                this.style.backgroundColor = "#151D3B"
                this.style.color="#ddd";
                this.style.border ="1px solid #151D3B"
            })
        });
        btnOpt.forEach(element => {
            element.style.backgroundColor = "#151D3B";
            element.style.color = "#ddd";
            element.addEventListener("mouseover",function(){
                this.style.backgroundColor = "#ddd";
                this.style.color="#151D3B";
                this.style.border ="1px solid #ddd"
            })
            element.addEventListener("mouseout",function(){
                this.style.backgroundColor = "#151D3B"
                this.style.color="#ddd";
                this.style.border ="1px solid #151D3B"
            })
        });
        equals.style.border="none";
        del.style.backgroundColor = "#ddd";
        del.style.color ="#151D3B";
        reset.style.backgroundColor ="#ddd";
        reset.style.color="#151D3B";
        leftside = true ;
    }

}
















// btnOpt.forEach(element => {
//     element.addEventListener("click",calculator);

//     function calculator(){
//         screen.textContent = "" ; 
//         screen.textContent += this.textContent;
//         selectedOperator =this.textContent;
//         switch (opt){
//             case "+" :
//                 deneme = Number(leftPart) + Number(rightPart);
//                 break
//             case "-" :
//                 screen.textContent = final - Number(screen.textContent);
//                 break
//             case "x" :
//                 screen.textContent = final * Number(screen.textContent);
//                 break
//             case "÷" :
//                 screen.textContent = final / Number(screen.textContent);
//                 break
// //             // case "=" :
// //             //     screen.textContent = deneme;
// //             //     break

// //         }
// //         final = Number(screen.textContent);
// //         opt = selectedOperator;
// //     }
    
// // });


