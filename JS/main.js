//Make use of both Array and Object data structures.
//Make use of at least TWO conditional statements that play a significant role in your code.
//Make use of either Functions or Classes to organize your code.
//Make use of at least TWO Event listeners and handlers to respond to user interaction.
//Perform at least TWO string modifications/replacements on the page.
//document.addEventListener('DOMContentLoaded', function Cal(){
//    document.addEventListener('submit', function Cal(){
//    g.preventDefault();
//})
function Cal(){
    let gender = document.getElementById("gender").value;
    let age1 = document.getElementById("age").value;
    let weight1 = document.getElementById("weight").value;
    
    let result = parseFloat(age1)+parseFloat(weight1);
    if(!isNaN(result)){
      document.getElementById("answer").innerHTML="You need this much protein in grams: "+ result;
    }
    //if(age == 0 || weight == 0 || gender == "")
    //alert("Please enter values");
    
    //if(gender == "Male" || age <= 18 || weight <=130){
    //    console.log("200 grams");
    //}
    
    //document.getElementById("calculate").onclick = value;
}
//})
