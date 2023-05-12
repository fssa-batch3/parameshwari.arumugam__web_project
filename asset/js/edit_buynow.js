// if (activeuser["emailid"] == bio[i]["emailid"]) {
const firstname = document.getElementById("ntext");
const number = document.getElementById("pnumber");
const address = document.getElementById("aname");
const city = document.getElementById("text");
const state = document.getElementById("stext");
const pincode = document.getElementById("cnumber");

// }

let user_details;

const form = document.getElementById("buynow");
form.addEventListener("submit", (el) => {
  el.preventDefault();

  const active_user = JSON.parse(localStorage.getItem("active_user"));
  const new_address = JSON.parse(localStorage.getItem("address")) ?? [];

  const obj = {};

  obj.address = address.value;
  obj.firstname = firstname.value;
  obj.city = city.value;
  obj.pincode = pincode.value;
  obj.Phone_number = number.value;
  obj.state = state.value;
  obj.emailid = active_user.emailid;

  new_address.push(obj);
  localStorage.setItem("address", JSON.stringify(new_address));
});
