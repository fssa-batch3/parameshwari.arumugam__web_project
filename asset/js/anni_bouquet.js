let div_content_box;
let h2;
let h3;
let image_flower;
let icon;
let a;

//  const product_list=[

//     {
//       image:"../../asset/IMG/anniversary bouquet/red.webp",
//       alt:"red_bouquet",
//       name:"Red Rose Bouquet",
//       price:900,

//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/light pink.jpg",
//       alt:"pink_bouquet",
//       name:"Love Rose Bouquet",
//       price:700,
//     },
//     {
//       image:"../../asset/IMG/anniversary bouquet/basket.jpg",
//       alt:"basket_boquet",
//       name:"Basket Rose Bouquet",
//       price:500,
//     },
//     {
//       image:"../../asset/IMG/anniversary bouquet/yellow roses.jpg",
//       alt:"red_bouquet",
//       name:"Yellow Rose Bouquet",
//       price: 1000,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/dark pink.webp",
//       alt:"dark_pnik_bouquet",
//       name:"Pink  Bouquet",
//       price:1200,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/maroon.jpg",
//       alt:"red_bouquet",
//       name:"Maroon Rose Bouquet",
//       price:800,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/white.jpg",
//       alt:"red_bouquet",
//       name:"White Love Bouquet",
//       price:600,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/love bouquet.webp",
//       alt:"red_bouquet",
//       name:"Love Bouquet",
//       price:1100,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/12 rose.webp",
//       alt:"red_bouquet",
//       name:"12 Rose Bouquet",
//       price:1250,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/pink.jpeg",
//       alt:"red_bouquet",
//       name:"Lovely Pink Bouquet",
//       price:850,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/bunch.jpg",
//       alt:"red_bouquet",
//       name:"Bunch Rose Bouquet",
//       price:500,
//     },

//     {
//       image:"../../asset/IMG/anniversary bouquet/crazy love.jpg",
//       alt:"red_bouquet",
//       name:" Crazy Love Bouquet",
//       price:900,
//     },
//  ]

const Cart = JSON.parse(localStorage.getItem("Cart")) ?? [];
const user = JSON.parse(localStorage.getItem("active_user"));

// cart count 

let cartCount = [];

Cart.forEach((e) => {
  if (e["emailid"] == user["emailid"]) {
    cartCount.push(e);
  }
});

let count = document.getElementById("cartcount");
count.innerText = cartCount.length;

// create product category 

const bouquets = JSON.parse(localStorage.getItem("bouquet"));

const filterdata = bouquets.filter((data) => {
  if (data.status == true && data.category == "AnniversaryBouquet") {
    return true;
  }
  return false;
});

// product append code

for (let i = 0; i < filterdata.length; i++) {
  console.log("hello");

  if (bouquets[i].status) {
    div_content_box = document.createElement("div");
    div_content_box.setAttribute("class", "red");
    console.log(div_content_box);

    a = document.createElement("a");
    a.setAttribute(
      "href",
      `../../pages/Anniversary/Red Rose bouquet.html?id=${filterdata[i].product_id}`
    );
    div_content_box.append(a);
    console.log(a);

    image_flower = document.createElement("img");
    image_flower.setAttribute("id", "flower");
    image_flower.setAttribute("src", filterdata[i].img);
    image_flower.setAttribute("alt", filterdata[i].alt);
    a.append(image_flower);

    h2 = document.createElement("h2");
    h2.innerText = filterdata[i].tittle;
    div_content_box.append(h2);

    h3 = document.createElement("h3");
    h3.setAttribute("class", "price");
    h3.innerText = `₹${filterdata[i].price}`;
    div_content_box.append(h3);

    for (let i = 1; i <= 5; i++) {
      icon = document.createElement("i");
      icon.setAttribute("id", "star");
      icon.setAttribute("class", "fa-regular fa-star");
      div_content_box.append(icon);
    }

    document.querySelector("div.content_box").append(div_content_box);
  }
}

// search feature

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


