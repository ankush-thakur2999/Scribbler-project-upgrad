var signinbox = document.getElementById("Sign-in");
var signupbox = document.getElementById("Sign-up");
var opaq = document.getElementById("opaq");

console.log("js");
function signin(){
    console.log("si");
    signupbox.style.display="none";
    signinbox.style.display="block";
    opaq.style.display="block";
}
 function closesigninbox() {
     signinbox.style.display="none";
     opaq.style.display="none";
 }
 function signup(){
  
    signinbox.style.display="none";
    signupbox.style.display="block";
    opaq.style.display="block";
 }
 function closesignupbox() {
    signupbox.style.display="none";
    opaq.style.display="none";
}
