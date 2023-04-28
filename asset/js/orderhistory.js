let div_content;
let h2;
let h3;
let h4;
let image_flower;



let order_sample=
{
    image:"../../asset/IMG/anniversary bouquet/red.webp",
    alt:"red_bouquet",
    name:"Red Rose Bouquet",
    id:"1",
    date:"23/04/2023",
    price:"2500"
}

div_content = document.createElement("div");
div_content.setAttribute("class", "content");
console.log(div_content);


h2 = document.createElement("h2");
h2.setAttribute("id", "orderid");
h2.innerText = order_sample[i]["1"];
div_content.append(h2);

h3 = document.createElement("h3");
h3.setAttribute("id", "order_date");
h3.setAttribute("class", "orderdate");
h6.innerText = "₹" + order_sample[i]["23/04/2023"];
div_content.append(h3);

h4 = document.createElement("h3");
h4.setAttribute("id", "rupees");
h4.setAttribute("class", "rupees");
h4.innerText = "₹" + order_sample[i]["2500"];
div_content.append(h4);

image_flower = document.createElement("img");
image_flower.setAttribute("id", "flower");
image_flower.setAttribute("src", order_sample[i]["img"]);
image_flower.setAttribute("alt", order_sample[i]["alt"]);
div_content.append(image_flower);


document.querySelector("div.content").append(div_content);

console.log(div_content);