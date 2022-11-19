alert("welcome to Aptitud Fisca!!!!please provide your details")
var name= prompt("enter your name")
//var contact = prompt("enter your phone number")
var email =prompt("enter your email address")
//var service = prompt("what services are you looking for?")

alert("Thank you " +name+ "!!! you have been registered successfully")
console.log("Thank you " +name+ "!!! you have been registered successfully");




//loader//

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut();