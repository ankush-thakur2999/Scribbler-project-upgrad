var signinbox = document.getElementById("Sign-in");
var signupbox = document.getElementById("Sign-up");
var opaq = document.getElementById("opaq");
var post = document.getElementById("post-box");
var   fullname = document.getElementById("fullname");
var  username = document.getElementById("username");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

console.log("js");
function signin(){
    console.log("si");
    signupbox.style.display="none";
    post.style.display="none";
    signinbox.style.display="block";
    opaq.style.display="block";
}

 function closesigninbox() {
     signinbox.style.display="none";
     opaq.style.display="none";
 }
 function signup(){
  
    signinbox.style.display="none";
    post.style.display="none";
    signupbox.style.display="block";
    opaq.style.display="block";
 }
 function closesignupbox() {
    signupbox.style.display="none";
    opaq.style.display="none";
}
function createpost(){
    post.style.display="block";
    opaq.style.display="block";
    signupbox.style.display="none";
    signinbox.style.display="none";
}
function closepostbox(){
    post.style.display="none";
    opaq.style.display="none";
}
function check(event){
    event.preventDefault();
    if(fullname.value.length==0||username.value.length==0||password.value.length==0||cpassword.value.length==0){
    alert("no field should be empty");
   
    }
  
}
