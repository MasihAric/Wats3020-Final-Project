//Make use of both Array and Object data structures.
//Make use of at least TWO conditional statements that play a significant role in your code.
//Make use of either Functions or Classes to organize your code.
//Make use of at least TWO Event listeners and handlers to respond to user interaction.
//Perform at least TWO string modifications/replacements on the page.
//document.addEventListener('DOMContentLoaded', function(g){
//    docment.addEventListener('submit', function(g){
//        g.preventDefault();
//        let 
//    })
//});
function Cal(){
    let gender = document.getElementById("gender").nodeValue;
    let age = document.getElementById("age").nodeValue;
    let weight = document.getElementById("weight").nodeValue;
    if(age == 0 || weight  == 0 || gender === "")
    alert("Please enter values");
    return;
    if(age <= 18 || weight <= 125)
    console.log("You should 100 grams of protein for the day!")
}
docueent .getElementById("calculate").onclick = function(){
    Cal();
}