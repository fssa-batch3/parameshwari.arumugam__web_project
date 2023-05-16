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
  console.log(today);
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

let timeoption={
  time0:"7:00 AM-8:00 AM",
  time1:"8:00 AM-9:00 AM",
  time2:"9:00 AM-10:00 AM",
  time3:"10:00 AM-11:00 AM",
  time4:"11:00 AM-12:00 PM",
  time5:"1:00 PM-2:00 PM",
  time6:"2:00 PM-3:00 PM",
  time7:"3:00 PM-4:00 PM",
  time8:"4:00 PM-5:00 PM",
  time9:"5:00 PM-6:00 PM",
  time10:"6:00 PM-7:00 PM",
  time11:"7:00 PM-8:00 PM",
  time12:"8:00 PM-9:00 PM",
  time13:"9:00 PM-10:00 PM",
  time14:"10:00 PM-11:00 PM",
  time15:"11:00 PM-12:00 AM",
}
console.log(timeoption);
// timing

select_time = document.createElement("select");
select_time.setAttribute("class","selectoption");
select_time.setAttribute("id","selectopt");
select_time.setAttribute("required","");
document.querySelector(".details").append(select_time);

let date1=document.getElementById("date")

date1.addEventListener("input",timeupdate);

function timeupdate(){

let selectdate = date1.value;
console.log(selectdate);
select_time.innerHTML = "";

let opt0=document.createElement("option");
opt0.innerText="select timing";
opt0.value="";
select_time.append(opt0);

let current_date = new Date();
let hour = current_date.getHours();
let minute = current_date.getMinutes();
let current_time = hour * 60 + minute;
console.log(current_time);


let currentdate = `${current_date.getFullYear()}-${(current_date.getMonth() + 1).toString().padStart(2,"0")}-${current_date.getDate().toString().padStart(2,"0")}`;
console.log(current_date);

for(const opttime in timeoption ){
  console.log(opttime);

  optitime=document.createElement("option");
  optitime.innerText=timeoption[opttime];
 

  let option = timeoption[opttime].split("-")[0].trim();

  // console.log(option);
  let option1 = option.split(/:|\s/);
  console.log(option1);
  let option2 = option1[2];
  // console.log(option2);
  let optionhour = parseInt(option1[0]);
  // console.log(optionhour);
  let optiontrim = parseInt(option1[1]);
  // console.log(optiontrim);
  if(option2 === "PM" && optionhour !==12){
    optionhour += 12;
  }
  else if (option2 === "AM" && optionhour === 12){
    optionhour = 0;
  }
  let optiontime = optionhour * 60 + optiontrim;

  
  let optionend = timeoption[opttime].split("-")[1].trim();
  let optionend1 = optionend.split(/:|\s/);
  let optionend2 = optionend1[2];
  let optionendhour = parseInt(optionend1[0]);
  let optionendminute = parseInt(optionend1[1]);
  if(optionend2 === "PM" && optionendhour !==12){
    optionendhour += 12;
  }
  else if (optionend2 === "AM" && optionendhour === 12){
    optionendhour = 0;
  }
  let optionendtime = optionendhour * 60 + optionendminute;


  if(selectdate===currentdate && optionendtime < current_time){
    
    optitime.setAttribute("disabled","true")
  }


  select_time.append(optitime)

}

}

let edit = document.getElementById("edit_btn");

edit.addEventListener("click", (e) => {
  window.location.href=`../../pages/order/edit_buynow.html?id=${urlserached_value}`;
});
