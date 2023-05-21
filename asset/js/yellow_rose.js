let div_main;
let h2;
let h3;
let image_flower;
let icon;
let a;



const Cart = JSON.parse(localStorage.getItem("Cart")) ?? [];
const user = JSON.parse(localStorage.getItem("active_user"));

let cartCount = [];

Cart.forEach((e) => {
  if (e["emailid"] == user["emailid"]) {
    cartCount.push(e);
  }
});

let count = document.getElementById("cartcount");
count.innerText = cartCount.length;

const bouquets = JSON.parse(localStorage.getItem("bouquet"));
// document.querySelector(".selectoption").value;

const filterdata = bouquets.filter((data) => {
  if (data.status == true && data.category == "YellowFlowers") {
    return true;
  }
  return false;
});

for (let i = 0; i < filterdata.length; i++) {
  console.log("hello");

  if (filterdata[i].status == true) {
    console.log(i);
    div_main= document.createElement("div");
    div_main.setAttribute("class", "red");
    console.log(div_main);

    a = document.createElement("a");
    a.setAttribute(
      "href",
      `../../pages/Anniversary/Red Rose bouquet.html?id=${filterdata[i].product_id}`
    );
    div_main.append(a);
    console.log(a);

    image_flower = document.createElement("img");
    image_flower.setAttribute("id", "flower");
    image_flower.setAttribute("src", filterdata[i].img);
    image_flower.setAttribute("alt", filterdata[i].alt);
    a.append(image_flower);

    h2 = document.createElement("h2");
    h2.innerText = filterdata[i].tittle;
    div_main.append(h2);

    h3 = document.createElement("h3");
    h3.setAttribute("class", "price");
    h3.innerText = `₹${filterdata[i].price}`;
    div_main.append(h3);

    for (let i = 1; i <= 5; i++) {
      icon = document.createElement("i");
      icon.setAttribute("id", "star");
      icon.setAttribute("class", "fa-regular fa-star");
      div_main.append(icon);
    }

    document.querySelector("div.main").append(div_main);
  }
}

const search = document.getElementById("name");

search.addEventListener("keyup", (e) => {
  const words = e.target.value.toLowerCase();

  const letter = document.querySelectorAll(".red");

  letter.forEach((element) => {
    const content = element.children[1].textContent.toLowerCase();

    if (content.includes(words)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});