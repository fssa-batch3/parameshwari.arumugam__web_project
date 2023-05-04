
let bouquets = JSON.parse(localStorage.getItem("bouquet")) ?? [];

let count=0;

for(let m=0; m<bouquets.length; m++){
  count++
}

let productid = count;


function createproduct() {
  let bouquet = {};

  const image = document.getElementById("img").value;
  const tittle = document.getElementById("tittle").value;
  const price = document.getElementById("price").value;
  const rating = document.getElementById("rating").value;

  const category=document.getElementById("selectopt").value
  bouquet["product_id"] = productid;
  bouquet["img"] = image;
  bouquet["tittle"] = tittle;
  bouquet["price"] = price;
  bouquet["rating"] = rating;
  bouquet["category"]=category;
  bouquet["status"]=true;

  bouquets.push(bouquet);

  localStorage.setItem("bouquet", JSON.stringify(bouquets));
}


let output = "";

let append_div = document.querySelector(".table-body");

for (let i = 0; i < bouquets.length; i++) {
  output += ` 
  <tr>
  <td>${bouquets[i].product_id}</td>
  <td class="td-img"><img src="${bouquets[i].img}"></td>
  <td>${bouquets[i].tittle}</td>
  <td>${bouquets[i].price}</td>
  <td onclick="updateproduct(${bouquets[i].product_id})"><button>Update</button></td>
  <td onclick="deleteproduct(${bouquets[i].product_id})"><button>Delete</button></td>
</tr>`;

  append_div.innerHTML = output;
}

function updateproduct(id) {
  bouquets.find(function (obj) {
    if (obj.product_id == id) {
      document.getElementById("img").value = obj.img;
      document.getElementById("tittle").value = obj.tittle;
      document.getElementById("price").value = obj.price;
      document.getElementById("rating").value = obj.rating;
    }
  });
}

function updatenew(){

  const image = document.getElementById("img").value;
  const tittle = document.getElementById("tittle").value;
  const price = document.getElementById("price").value;
  const rating = document.getElementById("rating").value;
  
  bouquets.find(function (obj){

    if(tittle == obj.tittle){

      obj.img = image;
      obj.tittle = tittle;
      obj.price = price;
      obj.rating = rating;
    }
  })

  localStorage.setItem("bouquet", JSON.stringify(bouquets));

}


function deleteproduct(id) {
  bouquets.find(function(obj){
    console.log(obj.product_id)
    if(obj.product_id==id){
      obj.status=false;
      localStorage.setItem("bouquet",JSON.stringify(bouquets));
    }
  })
  
}