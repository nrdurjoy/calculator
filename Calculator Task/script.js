
//Function for showing value in input field
function calculate(value){
    var input = document.getElementById("display").value;
    console.log(`Input : ${input}, Value : ${value}`);
    
    document.getElementById("display").value = input + value;
}

//function for clear input field
function clearInput(){
    document.getElementById("display").value = "";    
}

//Delete One 
function deleteOne() {
    var input = document.getElementById('display');
input.value = input.value.slice(0, -1);
}