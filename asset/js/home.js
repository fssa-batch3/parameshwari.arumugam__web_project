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

let bouquets = JSON.parse(localStorage.getItem("bouquet"));

for (let i = 0; i < 8; i++) {
  div_main_box = document.createElement("div");
  div_main_box.setAttribute("class", "mixed");
  console.log(div_main_box);

  image_flower = document.createElement("img");
  image_flower.setAttribute("id", "flower");
  image_flower.setAttribute("src", bouquets[i]["img"]);
  image_flower.setAttribute("alt", "image");
  div_main_box.append(image_flower);

  
  h2 = document.createElement("h2");
  h2.innerText = bouquets[i]["tittle"];
  div_main_box.append(h2);


  document.querySelector("div.main_box").append(div_main_box);
}

let Cart = JSON.parse(localStorage.getItem("Cart"));
let user = JSON.parse(localStorage.getItem("active_user"));

let cartCount = [];

Cart.forEach((e) => {
  if (e["emailid"] == user["emailid"]) {
    cartCount.push(e);
  }
});

let count = document.getElementById("cartcount");
count.innerText = cartCount.length;


let search = document.getElementById("name");

    search.addEventListener("keyup", (e) =>{
       
      let words = e.target.value.toLowerCase();

      let letter = document.querySelectorAll(".mixed");

      letter.forEach(element =>{

        let content = element.children[1].textContent.toLowerCase();

        if(content.includes(words)){
          element.style.display="block"
        }
        else{
          element.style.display="none"
        }
      })

    })
