const payment_method=document.querySelector('input["name=paymethod"]:checked').value

let bouquets = JSON.parse(localStorage.getItem("bouquet"));

const url = window.location.search;
console.log(url);
const urlparams = new URLSearchParams(url);
console.log(urlparams);
const urlserached_value = urlparams.get("id");
console.log(urlserached_value);

let result;
let product;
let bouquet = bouquets.find(function (e) {
  if (e["product_id"] == urlserached_value) {
     product=e
    return (result = e);
  } else {
    return (result = 0);
  }
});

console.log(product);

let user = JSON.parse(localStorage.getItem("active_user"));
let order = JSON.parse(localStorage.getItem("order")) ?? [];

let placeorder = document.getElementById("order");
placeorder.addEventListener("click", (e) => {
  let obj = {};

  obj["img"] = product["img"];
  obj["price"] = product["price"];
  obj["product_id"] = product["product_id"];
  obj["order_date"] = product["order_date"];
  obj["emailid"] = user["emailid"];
  obj["order-method"]= 
 
    order.push(obj);
    localStorage.setItem("order", JSON.stringify(order));
});



