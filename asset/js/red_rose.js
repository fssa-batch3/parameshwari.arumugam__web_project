let bouquets = JSON.parse(localStorage.getItem("bouquet"));

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const urlserached_value = urlparams.get("id");
console.log(urlserached_value);

let result;

bouquets.find(function (e) {
  if (e["product_id"] == urlserached_value) {
    return (result = e);
  } else {
    return (result = 0);
  }
});

let Cart = JSON.parse(localStorage.getItem("Cart"));
let user = JSON.parse(localStorage.getItem("active_user"));

// let cartCount = [];

// Cart.forEach((e) => {
//   if (e["emailid"] == user["emailid"]) {
//     cartCount.push(e);
//   }
// });

// let count = document.getElementById("cartcount");
// count.innerText = cartCount.length;
let div_cart_page;
let h1;
let h6;
let image_flower;
let icon;
let button;
let a1;
let a2;

//  const products_sample=[
//   { "image":"../../asset/IMG/anniversary bouquet/red.webp",
//     "alt":"red_bouquet",
//     "name":"Red Rose Bouquet",
//     "price":900}
//  ]

div_cart_page = document.createElement("div");
div_cart_page.setAttribute("class", "red");
console.log(div_cart_page);

image_flower = document.createElement("img");
image_flower.setAttribute("id", "flower");
image_flower.setAttribute("src", result["img"]);
image_flower.setAttribute("alt", result["alt"]);
div_cart_page.append(image_flower);

h1 = document.createElement("h1");
h1.innerText = result["tittle"];
div_cart_page.append(h1);

h6 = document.createElement("h6");
h6.setAttribute("class", "price");
h6.innerText = "₹" + result["price"];
div_cart_page.append(h6);

for (let i = 1; i <= 5; i++) {
  icon = document.createElement("i");
  icon.setAttribute("id", "star");
  icon.setAttribute("class", "fa-regular fa-star");
  div_cart_page.append(icon);
}

button1 = document.createElement("button");
button1.setAttribute("id", "buy_now");
button1.innerText = ["Add to cart"];
div_cart_page.append(button1);



a2 = document.createElement("a");
a2.setAttribute("href", "../Order/Buy Now.html?id=" + result.product_id);
div_cart_page.append(a2);



button2 = document.createElement("button");
button2.setAttribute("id", "buy_now");
button2.setAttribute("class", "buy_now");
button2.innerText = ["Buy Now"];
a2.append(button2);

document.querySelector("legend").append(div_cart_page);

let btn_cart = document.getElementById("buy_now");
btn_cart.addEventListener("click", (el) => {
  let user = JSON.parse(localStorage.getItem("active_user"));
  let addCart = JSON.parse(localStorage.getItem("Cart")) ?? [];

  let check;

  addCart.find((e) => {
    if (
      e["product_id"] == result["product_id"] &&
      e["emailid"] == user["emailid"]
    ) {
      return (check = 1);
    } else {
      return (check = 0);
    }
  });

  if (check == 1) {
    alert("already added");
  } else {
    let item = {};

    item["img"] = result["img"];
    item["price"] = result["price"];
    item["product_id"] = result["product_id"];
    item["rating"] = result["rating"];
    item["tittle"] = result["tittle"];
    item["emailid"] = user["emailid"];

    addCart.push(item);
    localStorage.setItem("Cart", JSON.stringify(addCart));
    alert("added");
  }
});
