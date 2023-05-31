let div_main_content;
let h2;
let h3;
let image_flower;
let icon;

// const product_list=[

//        {
//          image:"../../asset/IMG/birth with cake/black forest.webp",
//          alt:"red_bouquet",
//          name:"Red Bouquet with Black Forest Cake",
//          price:1100,

//        },

//        {
//         image:"../../asset/IMG/birth with cake/red rose.jpg",
//         alt:"red_bouquet",
//         name:"Rose Bouquet With Chocolate Cake",
//         price:1500,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/pink.webp",
//         alt:"red_bouquet",
//         name:"Pink Bouquet  With Black Forest Cake",
//         price:1900,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/chocolate.jpg",
//         alt:"red_bouquet",
//         name:"Red Bouquet With Chocolate Cake",
//         price:1400,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/light pink.webp",
//         alt:"red_bouquet",
//         name:"Crazy Bouquet With White Forest Cake",
//         price:1200,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/beauty.jpg",
//         alt:"red_bouquet",
//         name:"Bunch Bouquet With Black Forest Cake",
//         price:1600,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/yellow.jpg",
//         alt:"red_bouquet",
//         name:"Love Boquet With Vennilla Cake",
//         price:1800,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/nuste.jpeg",
//         alt:"red_bouquet",
//         name:"Bunch Bouquet With Nuste Cake",
//         price:1600,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/white forest.jpg",
//         alt:"red_bouquet",
//         name:"White Bouquet With White Forest Cake",
//         price:1500,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/mixed.jpeg",
//         alt:"red_bouquet",
//         name:"Mixed Bouquet With Black Forest Cake",
//         price:1900,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/normal.webp",
//         alt:"red_bouquet",
//         name:"Red Rose Bouquet With Normal Cake",
//         price:1400,

//       },

//       {
//         image:"../../asset/IMG/birth with cake/velvet.jpg",
//         alt:"red_bouquet",
//         name:"Lovely Bouquet With Red Velvet Cake",
//         price:2100,

//       },

//     ]

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

const filterdata = bouquets.filter((data) => {
  if (data.status == true && data.category == "BirthdayBouquetCake") {
    return true;
  }
  return false;
});

for (let i = 0; i < filterdata.length; i++) {
  console.log("hello");
  if (bouquets[i].status) {
    div_main_content = document.createElement("div");
    div_main_content.setAttribute("class", "red");
    console.log(div_main_content);

    a = document.createElement("a");
    a.setAttribute(
      "href",
      `../../pages/Anniversary/Red Rose bouquet.html?id=${filterdata[i].product_id}`
    );
    div_main_content.prepend(a);
    // console.log(a);

    image_flower = document.createElement("img");
    image_flower.setAttribute("id", "flower");
    image_flower.setAttribute("src", filterdata[i].img);
    image_flower.setAttribute("alt", filterdata[i].alt);
    a.append(image_flower);

    h2 = document.createElement("h2");
    h2.innerText = filterdata[i].tittle;
    h2.setAttribute("class", "product-title");
    div_main_content.append(h2);

    h3 = document.createElement("h3");
    h3.setAttribute("class", "price");
    h3.innerText = `₹${filterdata[i].price}`;
    div_main_content.append(h3);

    for (let i = 1; i <= 5; i++) {
      icon = document.createElement("i");
      icon.setAttribute("id", "star");
      icon.setAttribute("class", "fa-regular fa-star");
      div_main_content.append(icon);
    }
    document.querySelector("div.main_content").append(div_main_content);
  }
}
