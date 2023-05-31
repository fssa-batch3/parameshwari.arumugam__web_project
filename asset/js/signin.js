const userform = document.getElementById("signupform");

const firstName = document.getElementById("first_name");

const lastname = document.getElementById("last_name");

const email = document.getElementById("email");

const password = document.getElementById("password");

const user_records = JSON.parse(localStorage.getItem("user_list"));

userform.addEventListener("submit", (e) => {
  e.preventDefault();

  validateform();
});

function validateform() {
  const firstnamevalue = first_name.value.trim();

  const lastnamevalue = last_name.value.trim();

  const emailvalue = email.value.trim();

  const passwordvalue = password.value.trim();

  const records = [];

  const user = {};

  user.firstname = firstnamevalue;
  user.lastname = lastnamevalue;
  user.emailid = emailvalue;
  user.password = passwordvalue;
  user.date_of_birth = "";
  user.Phone_number = "";
  user.address = "";
  user.city = "";
  user.state = "";
  user.pincode = "";

  const user_information =
    JSON.parse(localStorage.getItem("user_list")) ?? records;

  let success = true;

  if (user_information != null) {
    for (let i = 0; i < user_information.length; i++) {
      if (user_information[i].emailid == emailvalue) {
        success = false;
        break;
      }
    }
  }

  if (success) {
    user_information.push(user);
    localStorage.setItem("user_list", JSON.stringify(user_information));
    alert("account create successfuly");

    window.location.href = "pages/login.html";
  } else {
    alert("Already you have an account");
  }
}
