let h1;
let h6;
let image_flower;
let icon;
let ouantity;
let label;
let button;
let icon1;

// let cart_sample =
//   {
//     image: "../../asset/IMG/birth with cake/black forest.webp",
//     alt: "red_bouquet",
//     name: "Red Bouquet With Black Forest Cake",
//     price: 1100,
//   }

let cart_sample = JSON.parse(localStorage.getItem("Cart"));
let user = JSON.parse(localStorage.getItem("active_user"));

let total = 0;

cart_sample.find((e) => {
  if (e["emailid"] == user["emailid"]) {
    total += Number(e["price"]);

    div_cart_page = document.createElement("div");
    div_cart_page.setAttribute("class", "align_flex");

    image_flower = document.createElement("img");
    image_flower.setAttribute("id", "flower");
    image_flower.setAttribute("src", e["img"]);
    // image_flower.setAttribute("alt", cart_sample["alt"]);
    div_cart_page.prepend(image_flower);

    div_text = document.createElement("div");
    div_text.setAttribute("class", "txt1");
    div_cart_page.append(div_text);

    h1 = document.createElement("h1");
    h1.innerText = e["tittle"];
    div_text.append(h1);

    h6 = document.createElement("h2");
    h6.innerText = "₹" + e["price"];
    div_text.append(h6);

    for (let i = 1; i <= 5; i++) {
      icon = document.createElement("i");
      icon.setAttribute("id", "star");
      icon.setAttribute("class", "fa-regular fa-star");
      div_text.append(icon);
    }

    let br = document.createElement("br");
    div_text.append(br);

    label = document.createElement("label");
    label.setAttribute("for", "quality");
    label.innerText = "Quantity";
    div_text.append(label);

    quantity = document.createElement("input");
    quantity.setAttribute("type", "number");
    quantity.setAttribute("id", "qnumber");
    label.append(quantity);

    button = document.createElement("button");
    button.setAttribute("id", "remove1");
    button.innerText = ["Remove"];
    div_text.append(button);

    icon1 = document.createElement("i");
    icon1.setAttribute("class", "fa-solid fa-trash");
    icon1.setAttribute("id", "icon");
    button.append(icon1);

    document.querySelector("div.black").append(div_cart_page);
  }
});

let totalAmount = document.getElementById("total_count");

totalAmount.innerText = total;

let totalAmount1 = document.getElementById("total_count1");

totalAmount1.innerText = total;
