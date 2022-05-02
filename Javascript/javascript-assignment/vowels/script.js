s = "javascriptloops"

function getvowels(s){
    let stringToList = [];
    let vowels  =[];
    let nonvowels =[];
    for ( let index = 0 ; index< s.length ; index++){
        let st = s.charAt(index)
        stringToList.push(st)
    }
    stringToList.forEach(element => {
        if ( element == "a" ||element =="e" || element =="i" || 
        element == "o" || element =="u" ) {
            vowels.push(element)
        }
        else {
            nonvowels.push(element)
        }
        
    });
    let lastString = vowels.concat(nonvowels)
    
    lastString.forEach(element => {
        console.log(element)
    });
}

getvowels(s)