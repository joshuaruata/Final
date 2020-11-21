var contentEle = document.body.querySelector(".content");

var inputBox = document.body.querySelector(".username");
var outputBox = document.body.querySelector(".password");
var messageBox = document.body.querySelector(".message");


document.body.querySelector(".submit").addEventListener("click", function(){
  if(inputBox.value=="cool" && outputBox.value=="password"){
     messageBox.innerHTML="Welcome!"
   }else{
     messageBox.innerHTML="Wrong Username or Password!!"
   }
})  

function makeLog(){

contentEle.innerHTML="Hi"
}
document.body.querySelector(".LogButt").addEventListener("click", function(){
  makeLog();
})

function makeAdd(){
  contentEle.innerHTML=""
  contentEle.innerHTML="Add Grade"

}
document.body.querySelector(".AddButt").addEventListener("click", function(){
  makeAdd();
})

function makeView(){
  contentEle.innerHTML=""
  var headEle = document.createElement("h1");
  headEle.innerHTML="Grade View"
  contentEle.appendChild(headEle);
}
document.body.querySelector(".ViewButt").addEventListener("click", function(){
  makeView();
})