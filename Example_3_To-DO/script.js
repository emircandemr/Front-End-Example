let todoText = document.querySelector("#task");
let addButton = document.querySelector("#liveToastBtn");
let todoList = document.querySelector("#list");

const addTodo = () => {

    if(todoText.value) {
        todoList.innerHTML += 
        `
        <li class="todoli" onclick="madeList(this)"> ${todoText.value}
        <span class="mark" onclick="deleteFunc(this)" id="mark"> <i class="fa-solid fa-xmark" ></i>
        </span></li>
        `
        todoText.value=""
        toastyFuncSuccess()
    }
    else {
        toastyFuncFail("Listeye Boş Ekleme Yapamazsınız !");
    }
}

const deleteFunc = (element) => {
    element.parentElement.remove()
    toastyFuncFail("Listeden Kaldırıldı!");
}

const madeList = (element) =>{
    if (element.classList.contains("checked")) {
        element.classList.remove("checked");
    }
    else{
        element.classList.add("checked");
    }
}

// Toast //
let toastAnimation = {
    animation : true,
    delay : 2000
};

const toastyFuncSuccess  = () => {

    let toastHTMLElement = document.querySelector("#liveToast");
    let toastElement = new bootstrap.Toast(toastHTMLElement,toastAnimation);
    toastElement.show()
 
}

const toastyFuncFail  = (text) => {

    let toastHTMLElement = document.querySelector("#liveToastError");
    let toastElement = new bootstrap.Toast(toastHTMLElement,toastAnimation);
    let toastElementValue = document.querySelector("#fail");
    toastElementValue.innerHTML = `${text}`
    toastElement.show()
}

addButton.addEventListener("click",addTodo)