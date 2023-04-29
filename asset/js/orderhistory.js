// let div_content;
let h2;
let h3;
let h4;
let image_flower;

let order_list = JSON.parse(localStorage.getItem("order"));
let activeuser=JSON.parse(localStorage.getItem("active_user"));

// let order_sample=[
// {
//     image:"../../asset/IMG/anniversary bouquet/red.webp",
//     alt:"red_bouquet",
//     name:"Red Rose Bouquet",
//     order_id:"1",
//     order_date:"23/04/2023",
//     price:"2500"
// }
// ]



for(i=0; i<order_list.length; i++){


div_content = document.createElement("div");
div_content.setAttribute("class", "content");
// console.log(div_content);
// console.log(h2);

h2 = document.createElement("h2");
// document.querySelector("div.content").append(h2);
h2.setAttribute("id", "orderid");
h2.innerText = order_list[i]["order_id"];

div_content.append(h2);
console.log(h2);

h3 = document.createElement("h3");
h3.setAttribute("id", "order_date");
h3.setAttribute("class", "orderdate");
h3.innerText = order_list[i]["order_date"];
div_content.append(h3);

h4 = document.createElement("h3");
h4.setAttribute("id", "rupees");
h4.setAttribute("class", "rupees");
h4.innerText = "₹" + order_list[i]["price"];
div_content.append(h4);

image_flower = document.createElement("img");
image_flower.setAttribute("id", "flower");
image_flower.setAttribute("src", order_list[i]["img"]);
image_flower.setAttribute("alt", order_list[i]["alt"]);
div_content.append(image_flower);


document.querySelector("div.main_content").append(div_content);
// document.querySelector("div.content").append(h3);
// document.querySelector("div.content").append(h4);
// document.querySelector("div.content").append(image_flower);

};