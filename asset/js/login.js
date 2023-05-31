const checklogin = document.getElementById("loginform");

checklogin.onsubmit = function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const localdata = JSON.parse(localStorage.getItem("user_list"));

  let success;

  localdata.find((el) => {
    if (el.emailid === email && el.password === password) {
      const active_user = el;
      console.log(active_user);
      localStorage.setItem("active_user", JSON.stringify(active_user));
      return (success = 1);
    }
    return (success = 0);
  });

  if (success == 1) {
    alert("login successful");
    window.location.href = "../pages/profile.html";
  } else {
    alert("incorrect email or password");
  }
};
