//Make use of both Array and Object data structures.
//Make use of at least TWO conditional statements that play a significant role in your code.
//Make use of either Functions or Classes to organize your code.
//Make use of at least TWO Event listeners and handlers to respond to user interaction.
//Perform at least TWO string modifications/replacements on the page.
document.addEventListener('DOMContentLoaded', function (e) {
  document.querySelector("#output-sec").classList.add("hide")
  document.addEventListener('reset', function (e){
  //  e.preventDefault();
  document.querySelector("#gender").innerHTML ="";
  document.querySelector("#age-input").innerHTML = "";
  document.querySelector("#weight-input").innerHTML = "";
  displayOutput("", "", "");

  })
  document.addEventListener('submit', function (e) {
   e.preventDefault();
   let gender = document.querySelector("#gender").value ;
   document.querySelector("#gender-output").innerHTML = gender;
   let age = document.querySelector("#age-input").value ;
   document.querySelector("#age-output").innerHTML = age;
   let weight = document.querySelector("#weight-input").value ;
   document.querySelector("#weight-output").innerHTML = weight;
   displayOutput(gender, age, weight);
  })
})
function displayOutput(gender,age, weight){
  if (showOutPut(gender,age,weight)){
    document.querySelector("#output-sec").classList.remove("hide")
    document.querySelector("#output-sec").classList.add("show")
  }else{
   document.querySelector("#output-sec").classList.add("hide")
   document.querySelector("#output-sec").classList.remove("show")
  }
}
function showOutPut(gender,age,weight){
  if(gender.length >0 || age.length > 0 || weight.length > 0){
    return true;
  }else{
    return false;
  }
}
