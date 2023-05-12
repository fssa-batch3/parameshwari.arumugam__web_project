let div_content_main;
let h2;
let h3;
let image_flower;
let icon;

// const product_list=[

//    {
//      image:"../../asset/IMG/anni with cake/black forest.jpg",
//      alt:"red_bouquet",
//      name:"Bouquet With Black Forest Cake",
//      price:1600,

//    },

//    {
//      image:"../../asset/IMG/anni with cake/anni cake.jpg",
//      alt:"pink_bouquet",
//      name:"Red Bouquet With Orange Cake",
//      price:1500,
//    },
//    {
//      image:"../../asset/IMG/anni with cake/cambo.webp",
//      alt:"basket_boquet",
//      name:"Yellow Bouquet With Black Forest Cake",
//      price:1200,
//    },
//    {
//      image:"../../asset/IMG/anni with cake/pink with cake.webp",
//      alt:"red_bouquet",
//      name:"Pink Bouquet And White Cake",
//      price:1400,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/red cake.jpg",
//      alt:"dark_pnik_bouquet",
//      name:"Daisy Bouquet with Heart Cake",
//      price:1500,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/red forest.webp",
//      alt:"red_bouquet",
//      name:"Rose Bouquet With Black Forest Cake",
//      price:1300,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/white cake.jpg",
//      alt:"red_bouquet",
//      name:"Love Bouquet With Chocolate Cake",
//      price:1600,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/yellow cake.webp",
//      alt:"red_bouquet",
//      name:"Mixed Bouqurt With Yellow Cake",
//      price:1200,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/red velvet.png",
//      alt:"red_bouquet",
//      name:"Bouquet with Red velvet Cake",
//      price:1900,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/pnk rose.webp",
//      alt:"red_bouquet",
//      name:"Pinkey Bouquet With Black Forest Cake",
//      price:1600,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/nuste.jpg",
//      alt:"red_bouquet",
//      name:"Lovely Bouquet With Nuste Cake",
//      price:1800,
//    },

//    {
//      image:"../../asset/IMG/anni with cake/chocolate.jpg",
//      alt:"red_bouquet",
//      name:"Rose Bouquet With Chocolate Cake",
//      price:1500,
//    },
// ]

const Cart = JSON.parse(localStorage.getItem("Cart"));
const user = JSON.parse(localStorage.getItem("active_user"));

// let cartCount = [];

// Cart.forEach((e) => {
//   if (e["emailid"] == user["emailid"]) {
//     cartCount.push(e);
//   }
// });

// let count = document.getElementById("cartcount");
// count.innerText = cartCount.length;

const bouquets = JSON.parse(localStorage.getItem("bouquet"));

const filterdata = bouquets.filter((data) => {
  if (data.status == true && data.category == "AnniversaryBouquetCake") {
    return true;
  }
  return false;
});

for (let i = 0; i < filterdata.length; i++) {
  console.log("hello");

  div_content_main = document.createElement("div");
  div_content_main.setAttribute("class", "red");
  console.log(div_content_main);

  a = document.createElement("a");
  a.setAttribute(
    "href",
    `../../pages/Anniversary/Red Rose bouquet.html?id=${filterdata[i].product_id}`
  );
  div_content_main.append(a);
  console.log(a);

  image_flower = document.createElement("img");
  image_flower.setAttribute("id", "flower");
  image_flower.setAttribute("src", filterdata[i].img);
  image_flower.setAttribute("alt", filterdata[i].alt);
  a.prepend(image_flower);

  h2 = document.createElement("h2");
  h2.innerText = filterdata[i].tittle;
  h2.setAttribute("class", "product-title");
  div_content_main.append(h2);

  h3 = document.createElement("h3");
  h3.setAttribute("class", "price");
  h3.innerText = `₹${filterdata[i].price}`;
  div_content_main.append(h3);

  for (let i = 1; i <= 5; i++) {
    icon = document.createElement("i");
    icon.setAttribute("id", "star");
    icon.setAttribute("class", "fa-regular fa-star");
    div_content_main.append(icon);
  }
  document.querySelector("div.content_main").append(div_content_main);
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
