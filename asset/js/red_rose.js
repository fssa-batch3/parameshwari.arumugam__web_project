let bouquets = JSON.parse(localStorage.getItem("bouquet"));

    const url = window.location.search; 
    const urlparams= new URLSearchParams(url);
    const urlserached_value=urlparams.get("id");
    
    let result;
    
    bouquets.find(function(e){
      if(e["product_id"] == urlserached_value){
        return result=e;

      }
      else{
        return result=0;
      }
     
    });
  
 let div_cart_page;
 let legend;
 let h6;
 let image_flower;
 let icon;
 let button;
 let a1;
 let a2;



//  const products_sample=[
//   { "image":"../../asset/IMG/anniversary bouquet/red.webp",
//     "alt":"red_bouquet",
//     "name":"Red Rose Bouquet",
//     "price":900}
//  ]

 
 
      div_cart_page = document.createElement("div");
      div_cart_page.setAttribute("class","red");
      console.log(div_cart_page);



      image_flower=document.createElement("img");
      image_flower.setAttribute("id","flower");
      image_flower.setAttribute("src", result["img"]);
      image_flower.setAttribute("alt", result["alt"]);
      div_cart_page.append(image_flower);


      legend=document.createElement("legend");
      legend.innerText = result["tittle"];
      div_cart_page.append(legend);

      h6=document.createElement("h6");
      h6.setAttribute("class","price");
      h6.innerText= "₹" + result["price"];
      div_cart_page.append(h6);

      
      for (let i=1; i<=5; i++){
        icon = document.createElement("i");
        icon.setAttribute("id", "star");
        icon.setAttribute("class","fa-regular fa-star");
        div_cart_page.append(icon);
      
      }


      a1=document.createElement("a");
      a1.setAttribute("href","../Order/Cart.html");
      div_cart_page.append(a1);


      a2=document.createElement("a");
      a2.setAttribute("href","../Order/Buy Now.html");
      div_cart_page.append(a2);


      button1=document.createElement("button");
      button1.setAttribute("id","buy_now");
      button1.innerText = ["Add to cart"];
      a1.append(button1);
      
      button2=document.createElement("button");
      button2.setAttribute("id","buy_now");
      button2.setAttribute("class","buy_now");
      button2.innerText = ["Buy Now"];
      a2.append(button2);

    
    


    document.querySelector("fieldset").append(div_cart_page);