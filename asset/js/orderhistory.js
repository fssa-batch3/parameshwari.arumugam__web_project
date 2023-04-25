let div_content;
let h2;
let h3;
let h4;
let image_flower;



div_content = document.createElement("div");
div_content.setAttribute("class", "red");
console.log(div_content);

image_flower = document.createElement("img");
image_flower.setAttribute("id", "flower");
image_flower.setAttribute("src", result["img"]);
image_flower.setAttribute("alt", result["alt"]);
div_content.append(image_flower);

h2 = document.createElement("h2");
h2.setAttribute("id", "tittle");
h2.innerText = result["tittle"];
div_content.append(h2);

h3 = document.createElement("h3");
h3.setAttribute("id", "rupees");
h3.setAttribute("class", "rupees");
h6.innerText = "₹" + result["price"];
div_content.append(h6);