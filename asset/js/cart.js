let h1;
let h6;
let image_flower;
let icon;
let quantity;
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

const cart_sample = JSON.parse(localStorage.getItem("Cart"));
const user = JSON.parse(localStorage.getItem("active_user"));

let cartCount = [];

cart_sample.forEach((e) => {
  if (e["emailid"] == user["emailid"]) {
    cartCount.push(e);
  }
});

let count = document.getElementById("cartcount");
count.innerText = cartCount.length;

let total = 0;
let quantityvalue = 1;

// cart_sample.find((e) => {

for (let i = 0; i < cart_sample.length; i++) {
  if (user.emailid == cart_sample[i].emailid) {
    total += Number(cart_sample[i].price);

    div_cart_page = document.createElement("div");
    div_cart_page.setAttribute("class", "align_flex");
    div_cart_page.setAttribute("data-value", cart_sample[i].product_id);

    image_flower = document.createElement("img");
    image_flower.setAttribute("id", "flower");
    image_flower.setAttribute("src", cart_sample[i].img);
    // image_flower.setAttribute("alt", cart_sample["alt"]);
    div_cart_page.prepend(image_flower);

    div_text = document.createElement("div");
    div_text.setAttribute("class", "txt1");
    div_cart_page.append(div_text);

    h1 = document.createElement("h1");
    h1.innerText = cart_sample[i].tittle;
    div_text.append(h1);

    h6 = document.createElement("h2");
    h6.innerText = `₹${cart_sample[i].price}`;
    h6.setAttribute("data-keyword", cart_sample[i].price);
    h6.setAttribute("id", "rupee");
    div_text.append(h6);

    // h2 = document.createElement("h2");
    // h2.innerText = `₹${cart_sample[i].price}`;
    // h2.setAttribute("data-keyword", cart_sample[i].price);
    // h2.setAttribute("id", "rs");
    // div_text.append(h2);

    // for (let i = 1; i <= 5; i++) {
    //   icon = document.createElement("i");
    //   icon.setAttribute("id", "star");
    //   icon.setAttribute("class", "fa-regular fa-star");
    //   div_text.append(icon);
    // }

    const br = document.createElement("br");
    div_text.append(br);

    label = document.createElement("label");
    label.setAttribute("for", "quality");
    label.setAttribute("class", "qty_label");
    label.innerText = "Quantity";
    div_text.append(label);

    // quantity = document.createElement("input");
    // quantity.setAttribute("type", "number");
    // quantity.setAttribute("class", "qty");
    // quantity.setAttribute("min", "1");
    // quantity.setAttribute("max", "10");
    // quantity.setAttribute("value", "1");
    // quantity.setAttribute("id", "qnumber");
    // label.append(quantity);

    let p_minus = document.createElement("p");
    p_minus.setAttribute("class", "minus");
    p_minus.innerText = "-";
    label.append(p_minus);

    let qty_value = document.createElement("p");
    qty_value.setAttribute("class", "qty_value");
    qty_value.innerText = quantityvalue;
    label.append(qty_value);

    let p_plues = document.createElement("p");
    p_plues.setAttribute("class", "plues");
    p_plues.innerText = "+";
    label.append(p_plues);

    button = document.createElement("button");
    button.setAttribute("id", "remove1");
    button.innerText = ["Remove"];
    div_text.append(button);

    icon1 = document.createElement("i");
    icon1.setAttribute("class", "fa-solid fa-trash");
    icon1.setAttribute("id", "icon");
    button.append(icon1);

    document.querySelector("div.black").append(div_cart_page);

    button.addEventListener("click", (e) => {
      for (let j = 0; j < cart_sample.length; j++) {
        if (
          user.emailid == cart_sample[i].emailid &&
          cart_sample[i].tittle == cart_sample[j].tittle
        ) {
          cart_sample.splice(i, 1);
          localStorage.setItem("Cart", JSON.stringify(cart_sample));
          alert(
            "Are you sure you would like to remove this item from the shopping cart?"
          );
          location.reload();
          break;
        }
      }
    });

    // console.log(button);
  }
}
// });

// total product amound count code

const totalAmount = document.getElementById("total_count");

totalAmount.innerText = total;

const totalAmount1 = document.getElementById("total_count1");

totalAmount1.innerText = total;

const quantityIn = document.querySelectorAll(".qty_value");
const plues = document.querySelectorAll(".plues");
const minus = document.querySelectorAll(".minus");
const rs = document.querySelectorAll("#rupee");
const align_flex = document.querySelectorAll(".align_flex");

// let price = h2.innerText.replace("₹", "");
// console.log(price);

for (let i = 0; i < plues.length; i++) {
  plues[i].addEventListener("click", function () {
    if (quantityIn[i].innerText < 10) {
      quantityIn[i].innerText++;
      // console.log("working")

      // product full price
      const full_price =
        parseFloat(rs[i].dataset.keyword) * parseFloat(quantityIn[i].innerText);
      // console.log(full_price);
      rs[i].innerText = `₹${full_price}`;

      total += parseFloat(rs[i].dataset.keyword);

      document.getElementById("total_count").innerText = total;
      document.getElementById("total_count1").innerText = total;
    }
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (quantityIn[i].innerText > 1) {
      quantityIn[i].innerText--;

      const full_price =
        parseFloat(rs[i].dataset.keyword) * parseFloat(quantityIn[i].innerText);
      console.log(full_price);
      rs[i].innerText = `₹${full_price}`;

      total -= parseFloat(rs[i].dataset.keyword);

      document.getElementById("total_count").innerText = total;
      document.getElementById("total_count1").innerText = total;
    }
  });
}

const continue_btn = document.getElementById("continue");
continue_btn.addEventListener("click", () => {
  cart_sample.find((e) => {
    if (e.emailid === user.emailid) {
      for (let i = 0; i < quantityIn.length; i++) {
      // console.log(quantityIn[i].innerText)
      console.log(align_flex[i].dataset.value)
      console.log(e.product_id)

        if (Number(e.product_id) === Number(align_flex[i].dataset.value)) {



          e.quantity = Number(quantityIn[i].innerText);

          localStorage.setItem("Cart", JSON.stringify(cart_sample))

          break;
        }
      }
    }
  });

  window.location.href = `../../pages/Order/Buy Now.html?id=${user.emailid}`;
});



 