let userForm = document.querySelector("#userForm");

// let listUser = document.querySelector("#ulList");
// let alertSign = document.querySelector("#alertSign")

let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let ulList = document.querySelector("#ulList");
let listBox = document.querySelector("#listBox");


const submitFunc = (event) => {
    event.preventDefault()

    if (userName.value && password.value){
        setUserPassword(userName.value , password.value)
        let alarm = setAlarm("Başarılı !"," Kullanıcı ve Şifre Başarılı Bir Şekilde Eklendi" ,"success");
        userName.value = "";
        password.value = "" ;
        setTimeout(alarm,2)
    }

    else {
        setAlarm("Başarısız !" , " Lütfen Geçerli Bir Kullanıcı ve Şifre Giriniz" , "danger")
    }

}

const setUserPassword = (username , password) =>{

    let userInfo = {
        username : username ,
        password : password 
    }

    localStorage.setItem("userInfo" , JSON.stringify(userInfo));
    let getUserInfo = JSON.parse(localStorage.getItem("userInfo"))

    ulList.innerHTML += 
    `<li class="list-group-item mb-2 d-flex justify-content-between align-items-center">
    ${getUserInfo.username}
    <span class="badge bg-primary">${getUserInfo.password}</span>
    </li>
    `

    listBox.classList.add("listBox");

}

const setAlarm = (station,stationText,stationColor) => {
    // let div = document.createElement("div");
    // div.classList.add("row");
    // document.getElementById("container").appendChild(div)
    let div = document.querySelector("#row");
    div.classList.add("row");
    div.innerHTML = `
    <div class="col-md-5 mt-5 m-auto" id="alertSign">
                    <div class="alert alert-${stationColor} alert-dismissible fade show" role="alert">
                        <strong>${station}</strong>${stationText}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
    `
}

let resetButton = document.querySelector("#reset");

const clearFunc = () => {
    ulList.innerHTML = "";
    listBox.classList.remove("listBox");
}

resetButton.addEventListener("click", clearFunc);
userForm.addEventListener("submit", submitFunc);