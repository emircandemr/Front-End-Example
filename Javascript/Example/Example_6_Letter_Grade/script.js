let quiz , midTerm , final ;

function calculate() {

    quiz = document.getElementById("quizInput").value;
    midTerm = document.getElementById("midtermInput").value;
    final = document.getElementById("finalInput").value;

    average = (quiz * 0.2) + (midTerm * 0.3) + (final *0.5 ) ;

    return average;

}

function letterGrade() {

    let avg = calculate();
    
    if (avg > 90) {

        return "AA";
    }

    else if (avg > 80) {
        return "BA" ;

    }

    else if (avg > 70) {
        return "BB" ;
        
    }

    else if (avg > 60) {
        return "CB" ;
        
    }
    else if (avg > 50) {
        return "CC" ;
        
    }

    else if (avg > 45) {
        return "DC" ;
        
    }

    else if (avg > 40) {
        return "DD" ;
        
    }

    else if (avg > 0 &&  avg < 40) {
        return "FF" ;
        
    }

    else {
        return ""
    }
}

function print() {
    document.getElementById("lettergrade").style.display="block";
    document.getElementById("Grade").innerHTML = letterGrade();
}

function clean() {
    document.getElementById("lettergrade").style.display="none";
    document.getElementById("quizInput").value =""
    document.getElementById("midtermInput").value = "";
    document.getElementById("finalInput").value = "";
}
