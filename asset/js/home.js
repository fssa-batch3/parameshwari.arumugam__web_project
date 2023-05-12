let div_main_box;
let a;
let h2;
let image_flower;

//  const product_sample=[
//   {
//     image:"../asset/IMG/index/mixed.webp",
//     alt : "red_flower boquet",
//     name:"Anniversary bouquet",
//   },
//   {
//     image:"../asset/IMG/index/cake with flower.jpeg",
//     alt : "Bouquet_cake",
//     name:"Birthaday cake with Bouquet",
//   },
//   {
//     image:"../asset/IMG/index/red.jpg",
//     alt : "red_bouquet",
//     name:"Red rose Bouquet",
//   },
//   {
//     image:"../asset/IMG/index/blackforest.webp",
//     alt : "cake_bouquet",
//     name:"Anniversary Bouquet With cake",
//   },
//   {
//     image:"../asset/IMG/index/yellow.jpg",
//     alt : "yellow_bouquet",
//     name:"Yellow Bouquet",
//   },
//   {
//     image:"../asset/IMG/index/birthday.jpg",
//     alt : "bouquet",
//     name:"Birthday Bouquet",
//   },
//   {
//     image: "../asset/IMG/index/pink.jpg",
//     alt : "pink_bouquet",
//     name:"Pink Bouquet",
//   },
//   {
//     image:"../asset/IMG/index/white.jpg",
//     alt : "white_bouquet",
//     name:"White Rose Bouquet",
//   }

// ]

const bouquets = JSON.parse(localStorage.getItem("bouquet"));

const filterdata = bouquets.filter((data) => {
  if (data.status == true && data.category == "Home") {
    return true;
  }
  return false;
});
console.log(filterdata);

for (let i = 0; i < filterdata.length; i++) {
  if (bouquets[i].status) {
    div_main_box = document.createElement("div");
    div_main_box.setAttribute("class", "mixed");
    console.log(div_main_box);

    image_flower = document.createElement("img");
    image_flower.setAttribute("id", "flower");
    image_flower.setAttribute("src", filterdata[i].img);
    image_flower.setAttribute("alt", "image");
    div_main_box.append(image_flower);
    h2 = document.createElement("h2");
    h2.innerText = filterdata[i].tittle;
    div_main_box.append(h2);

    document.querySelector("div.main_box").append(div_main_box);
  }

  const Cart = JSON.parse(localStorage.getItem("Cart"));
  const user = JSON.parse(localStorage.getItem("active_user"));

  const cartCount = [];

  Cart.forEach((e) => {
    if (e.emailid == user.emailid) {
      cartCount.push(e);
    }
  });

  const count = document.getElementById("cartcount");
  count.innerText = cartCount.length;

  const search = document.getElementById("name");

  search.addEventListener("keyup", (e) => {
    const words = e.target.value.toLowerCase();

    const letter = document.querySelectorAll(".mixed");

    letter.forEach((element) => {
      const content = element.children[1].textContent.toLowerCase();

      if (content.includes(words)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
}

const select = "admin";
const user = JSON.parse(localStorage.getItem("active_user"));
console.log(user);
const admin_page = document.getElementById("admin");

if (user.emailid == "admin@gmail.com") {
  admin_page.innerText = "admin";
}
