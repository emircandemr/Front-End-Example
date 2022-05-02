let data =[];
let count = 0;

function addTask() {

    let taskValue = document.getElementById("task").value;

    let task = {
        id:count,
        task:taskValue,
        statu:"to-do",
        
    }

    data.push(task);

    document.getElementById("task").value= null;

    fillData();
    count++;

    
}

function fillData() {

    let tempHTML = "" ;
    let tempHTMLCompleted = "" ; 

    for(let i=0; i<data.length;i++){
        
        if(data[i].statu=="to-do"){
            tempHTML +=  
            '<div class="input-group mb-3">'+
                '<div class="input-group-text">'+
                ' <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onclick="clickCheck('+data[i].id+')">'+
                '</div> '+
                '<span type="text" class="form-control" aria-label="Text input with checkbox ">'+data[i].task+'</span>'+
                '<div class="input-group-append">'+
                    '<button class="btn btn-outline-primary ms-1" onclick=editTask('+data[i].id+') type="button">'+
                        '<i class="fa-solid fa-pen-to-square" ></i>'+
                    '</button>'+
                    '<button class="btn btn-outline-danger ms-1" onclick=deleteTask('+data[i].id+') type="button">'+
                        '<i class="fa-solid fa-trash-can"></i>'+
                    '</button>'+
                '</div>'+
            '</div>'
        }
        else {
            tempHTMLCompleted += 
            '<div class="input-group mb-3">'+
                '<span type="text" class="form-control" aria-label="Text input with checkbox ">'+data[i].task+'</span>'+
                '<div class="input-group-append">'+
                    '<button class="btn btn-outline-primary ms-1" onclick=undoTask('+data[i].id+') type="button">'+
                        '<i class="fa-solid fa-rotate-left"></i>'+
                    '</button>'+
                    '<button class="btn btn-outline-danger ms-1" onclick=deleteTask('+data[i].id+')  type="button">'+
                        '<i class="fa-solid fa-trash-can"></i>'+
                    '</button>'+
                '</div>'+
            '</div>'
        }
    }
     document.getElementById("toDo").innerHTML = tempHTML;
     document.getElementById("completed").innerHTML = tempHTMLCompleted;

    
}

function clickCheck(id) {

    let index = data.findIndex(x=>x.id==id);

    data[index].statu ="completed";

    setTimeout(function(){
        fillData();
    },300)  
}

function deleteTask(id) {
    let index = data.findIndex(x =>x.id==id);

    data.splice(index , 1);

    fillData();
}

function undoTask(id) {
    let index = data.findIndex(x=>x.id==id);

    data[index].statu="to-do";

    fillData();
}

function editTask(id) {
    document.getElementById("edittask").value =data[id].task;

    $('#editTaskModal').modal('show');

    let element=document.getElementById("btn-save");
    element.onclick=function(){
        Edit(id);

        $('#editTaskModal').modal('hide');
    }
}

function Edit(id){
    let index = data.findIndex(x=>x.id==id);
    data[index].task=document.getElementById("edittask").value;

    fillData();
}

// ENTER TUŞU İLE KAYDETME

let input = document.getElementById("task");
input.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById("add").click();
    }
})