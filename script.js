
checkLogin();

function checkLogin() {
var user = [
    email = "coolguy@gmail.com",
    password = "ILoveCoffee",
    name = "Grand Chirpus"
    ]
    
user.forEach(function () {
//var x =document.getElementsByClassName("one")[0].value = "Email"; //EMail
var x = document.querySelectorAll("input[value=Email]")[0];
//var y = document.getElementsByValue("two")[0].value = "Password"; //Password
var y = document.querySelectorAll("input[value=Password]")[1];
    if ( x.email === "coolguy@gmail.com"  && y.password === "ILoveCoffee"){
        console.log("correct");
        //document.getElementsByClassName("welcome")[0].display= "welcome";
    }

    else {
        console.log("incorrect");
    //    document.getElementsByClassName("error")[0].display.error;
     //   alert("Sign-in information is invailid");
  }

}
)
}