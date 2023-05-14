const order_id = Date.now();
console.log(order_id);

const bouquets = JSON.parse(localStorage.getItem("bouquet"));

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const urlserached_value = urlparams.get("id");
console.log(urlserached_value);

let count = 0;
let result;

if (urlserached_value == Number(urlserached_value)) {
  bouquet = bouquets.find((e) => {
    if (e.product_id == urlserached_value) {
      return (result = e);
    }
    return (result = 0);
  });

  let div_cart_page;
  let h1;
  let h6;
  let image_flower;
  

  count = Number(result.price);

  div_cart_page = document.createElement("div");
  div_cart_page.setAttribute("class", "red");
  console.log(div_cart_page);

  image_flower = document.createElement("img");
  image_flower.setAttribute("id", "flower");
  image_flower.setAttribute("src", result.img);
  image_flower.setAttribute("alt", result.alt);
  div_cart_page.append(image_flower);

  h1 = document.createElement("h1");
  h1.setAttribute("id", "tittle");
  h1.innerText = result.tittle;
  div_cart_page.append(h1);

  h6 = document.createElement("h6");
  h6.setAttribute("id", "rupees");
  h6.setAttribute("class", "rupees");
  h6.innerText = `₹${result.price}`;
  div_cart_page.append(h6);

  

  document.querySelector(".prodiv").append(div_cart_page);
} 
else {
  const Cart = JSON.parse(localStorage.getItem("Cart"));
  const active_user = JSON.parse(localStorage.getItem("active_user"));

  const cart_items = Cart.find((el) => {
    if (el.emailid == active_user.emailid) {
      count += Number(el.price);

      let div_cart_page;
      let h1;
      let h6;
      let image_flower;

      div_cart_page = document.createElement("div");
      div_cart_page.setAttribute("class", "red");
      console.log(div_cart_page);

      image_flower = document.createElement("img");
      image_flower.setAttribute("id", "flower");
      image_flower.setAttribute("src", el.img);
      image_flower.setAttribute("alt", el.alt);
      div_cart_page.append(image_flower);

      h1 = document.createElement("h1");
      h1.setAttribute("id", "tittle");
      h1.innerText = el.tittle;
      div_cart_page.append(h1);

      h6 = document.createElement("h6");
      h6.setAttribute("id", "rupees");
      h6.setAttribute("class", "rupees");
      h6.innerText = `₹${el.price}`;
      div_cart_page.append(h6);

      document.querySelector(".prodiv").append(div_cart_page);
    }
  });
}

document.getElementById(
  "total_count1"
).innerText = `Total Product Price:${count}`;
document.getElementById("total_count").innerText = `Order Total:${count}`;

const bio = JSON.parse(localStorage.getItem("user_list"));
const activeuser = JSON.parse(localStorage.getItem("active_user"));
for (let i = 0; i < bio.length; i++) {
  if (activeuser.emailid == bio[i].emailid) {
    document.getElementById("ntext").value = bio[i].firstname;
    document.getElementById("email").value = bio[i].emailid;
    document.getElementById("pnumber").value = bio[i].Phone_number;
    document.getElementById("aname").value = bio[i].address;
    document.getElementById("text").value = bio[i].city;
    document.getElementById("stext").value = bio[i].state;
    document.getElementById("cnumber").value = bio[i].pincode;
  }
}

// for date
const date = document.getElementById("date");
console.log(date);
// let today = new Date().toISOString().split("T")[0];
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
date.setAttribute("min", today);

const form = document.getElementById("buynow");

form.addEventListener("submit", (el) => {
  el.preventDefault();

  const payment_option = document.querySelector(
    ".payment_option:checked"
  ).value;
  const time = document.querySelector(".selectoption").value;
  const date = document.querySelector("#date").value;

  const user = JSON.parse(localStorage.getItem("active_user"));
  const order_history = JSON.parse(localStorage.getItem("order")) ?? [];

  if (urlserached_value == Number(urlserached_value)) {
    const obj = {};

    obj.img = result.img;
    obj.price = result.price;
    obj.product_id = result.product_id;
    obj.order_id = order_id;
    obj.payment_option = payment_option;
    obj.date = date;
    obj.time = time;
    obj.address = user.address;
    obj.firstname = user.firstname;
    obj.city = user.city;
    obj.pincode = user.pincode;
    obj.Phone_number = user.Phone_number;
    obj.tittle = result.tittle;
    obj.emailid = user.emailid;

    order_history.push(obj);
    localStorage.setItem("order", JSON.stringify(order_history));
    window.location.href = "Order.html";
  } else {
    const Cart = JSON.parse(localStorage.getItem("Cart"));
    const active_user = JSON.parse(localStorage.getItem("active_user"));

    Cart.find((e) => {
      if (e.emailid == active_user.emailid) {
        const obj = {};

        obj.price = e.price;
        obj.product_id = e.product_id;
        obj.order_id = order_id;
        obj.payment_option = payment_option;
        obj.date = date;
        obj.time = time;
        obj.address = user.address;
        obj.firstname = user.firstname;
        obj.city = user.city;
        obj.pincode = user.pincode;
        obj.Phone_number = user.Phone_number;
        obj.tittle = e.tittle;
        obj.emailid = user.emailid;
        obj.img = e.img;

        order_history.push(obj);
        localStorage.setItem("order", JSON.stringify(order_history));
        window.location.href = "Order.html";
      }
    });
  }
});
