

let bouquets = JSON.parse(localStorage.getItem("bouquet"));


const url = window.location.search;
console.log(url);
const urlparams = new URLSearchParams(url);
const urlserached_value = urlparams.get("id");
console.log(urlserached_value);

let result;

let bouquet = bouquets.find(function (e) {
  if (e["product_id"] == urlserached_value) {
    return (result = e);
  } else {
    return (result = 0);
  }
});



document.getElementById("total_count1").innerText = "Total Product Price:" + bouquet.price
document.getElementById("total_count").innerText = "Order Total:" + bouquet.price

let div_cart_page;
let h1;
let h6;
let image_flower;


// const products_sample=[
//     { "image":"../../asset/IMG/anniversary bouquet/red.webp",
//       "alt":"red_bouquet",
//       "name":"Red Rose Bouquet",
//       "price":900}
// ];
  
 
  


div_cart_page = document.createElement("div");
div_cart_page.setAttribute("class", "red");
console.log(div_cart_page);

image_flower = document.createElement("img");
image_flower.setAttribute("id", "flower");
image_flower.setAttribute("src", result["img"]);
image_flower.setAttribute("alt", result["alt"]);
div_cart_page.append(image_flower);

h1 = document.createElement("h1");
h1.setAttribute("id", "tittle");
h1.innerText = result["tittle"];
div_cart_page.append(h1);

h6 = document.createElement("h6");
h6.setAttribute("id", "rupees");
h6.setAttribute("class", "rupees");
h6.innerText = "₹" + result["price"];
div_cart_page.append(h6);


quantity = document.createElement("input");
quantity.setAttribute("type", "number");
quantity.setAttribute("id", "qnumber");
div_cart_page.append(quantity);






let bio = JSON.parse(localStorage.getItem("user_list"));
let activeuser=JSON.parse(localStorage.getItem("active_user"));
for (let i = 0; i < bio.length; i++) {
  if(activeuser["emailid"]==bio[i]["emailid"]){

  
  document.getElementById("ntext").value = bio[i]["firstname"];
  document.getElementById("pnumber").value=bio[i]["Phone_number"]
  document.getElementById("aname").value=bio[i]["address"]
  document.getElementById("text").value=bio[i]["city"]
  document.getElementById("stext").value=bio[i]["state"]
  document.getElementById("cnumber").value=bio[i]["pincode"]
  }
}

document.querySelector(".price").append(div_cart_page);

let order =document.getElementById("order_detail");

order.setAttribute("href","../../pages/Order/payment.html?id="+ result["product_id"]);




// let order_btn = document.getElementById("order_btn")
// order_btn.addEventListener("click", function(){

//   window.location.href = "../../pages/Order/payment.html";

// })