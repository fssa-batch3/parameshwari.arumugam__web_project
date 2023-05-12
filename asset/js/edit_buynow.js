// if (activeuser["emailid"] == bio[i]["emailid"]) {
let firstname = document.getElementById("ntext");
let number = document.getElementById("pnumber");
let address = document.getElementById("aname");
let city = document.getElementById("text");
let state = document.getElementById("stext");
let pincode = document.getElementById("cnumber");

// }

let user_details;

let form = document.getElementById("buynow");
form.addEventListener("submit", function (el) {
  el.preventDefault();

  let active_user = JSON.parse(localStorage.getItem("active_user"));
  let new_address = JSON.parse(localStorage.getItem("address")) ?? [];

  let obj = {};

  obj["address"] = address.value;
  obj["firstname"] = firstname.value;
  obj["city"] = city.value;
  obj["pincode"] = pincode.value;
  obj["Phone_number"] = number.value;
  obj["state"] = state.value;
  obj["emailid"] = active_user["emailid"];

  new_address.push(obj);
  localStorage.setItem("address", JSON.stringify(new_address));
});
