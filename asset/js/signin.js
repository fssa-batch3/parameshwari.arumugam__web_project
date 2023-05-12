let userform = document.getElementById("signupform");

let firstName = document.getElementById("first_name");

let lastname = document.getElementById("last_name");

let email = document.getElementById("email");

let password = document.getElementById("password");

let user_records = JSON.parse(localStorage.getItem("user_list"));

userform.addEventListener("submit", e => {
e.preventDefault();

validateform();
});

function validateform(){


let firstnamevalue = first_name.value.trim();


let lastnamevalue = last_name.value.trim();

let emailvalue = email.value.trim();

let passwordvalue = password.value.trim();

let records = [];

let user = {};

user["firstname"] = firstnamevalue;
user["lastname"] = lastnamevalue;
user["emailid"] = emailvalue;
user["password"] = passwordvalue;
user["date_of_birth"] = "";
user["Phone_number"] = "";
user["address"] = "";
user["city"] = "";
user["state"] = "";
user["pincode"] = "";




let user_information = JSON.parse(localStorage.getItem("user_list")) ?? records;

let success = true;

if (user_information != null) {
 for ( let i = 0; i < user_information.length; i++){    

 if (user_information[i].emailid == emailvalue) {
  success = false;
  break;
  }
 }
}


if(success) {

user_information.push(user);
localStorage.setItem("user_list",JSON.stringify(user_information));
alert("account create successfuly");

window.location.href = "pages/login.html"

}

else{
  alert("Already you have an account")
}

}