let div_main_box;
   let h2;
   let h3;
   let image_flower;
   let icon;
   let a;


  //  const product_list=[
     
  //        {
  //          image:"../../asset/IMG/birth bouquet/pink rose.jpg",
  //          alt:"red_bouquet",
  //          name:"Mixed Rose Bouquet",
  //          price:300,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/lilly.png",
  //          alt:"red_bouquet",
  //          name:"Rose Bouquet",
  //          price:800,
   
  //        },
         
  //        {
  //          image:"../../asset/IMG/birth bouquet/red rose.jpg",
  //          alt:"red_bouquet",
  //          name:"Red Roses Bouquet",
  //          price:1000,
   
  //        },
         
  //        {
  //          image:"../../asset/IMG/birth bouquet/white.jpg",
  //          alt:"red_bouquet",
  //          name:"Lilly Bouquet",
  //          price:500,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/yellow.jpg",
  //          alt:"red_bouquet",
  //          name:"Pink Roses Bouquet",
  //          price:350,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/rose.jpg",
  //          alt:"red_bouquet",
  //          name:"10 Red Rose Bouquet",
  //          price:500,
   
  //        },


  //        {
  //          image:"../../asset/IMG/birth bouquet/pic.jpg",
  //          alt:"red_bouquet",
  //          name:"White Roses Bouquet",
  //          price:550,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/image.webp",
  //          alt:"red_bouquet",
  //          name:"Yellow roses Bouquet",
  //          price:400,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/bouquet.jpg",
  //          alt:"red_bouquet",
  //          name:" Pinkey Bouquet",
  //          price:450,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/picture.webp",
  //          alt:"red_bouquet",
  //          name:"Bunch Red Bouquet",
  //          price:400,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/lovely.jpg",
  //          alt:"red_bouquet",
  //          name:"Red love Bouquet",
  //          price:1000,
   
  //        },

  //        {
  //          image:"../../asset/IMG/birth bouquet/beauty.jpg",
  //          alt:"red_bouquet",
  //          name:"Stunning Bouquet",
  //          price:1500,
   
  //        },
  //       ]


        let bouquets = JSON.parse(localStorage.getItem("bouquet"))
    
  
   for (let i=32; i< 44; i++) {
      console.log("hello")

      div_main_box=document.createElement("div");
      div_main_box.setAttribute("class","main");
      console.log(div_main_box);


      a=document.createElement("a");
      a.setAttribute("href","../../pages/Anniversary/Red Rose bouquet.html?id="+bouquets[i]["product_id"]);
      div_main_box.append(a);
      console.log(a);


      image_flower=document.createElement("img");
      image_flower.setAttribute("id","flower");
      image_flower.setAttribute("src", bouquets[i]["img"]);
      image_flower.setAttribute("alt", bouquets[i]["alt"]);
      a.append(image_flower);

      h2=document.createElement("h2");
      h2.innerText=bouquets[i]["tittle"];
      div_main_box.append(h2);

      h3=document.createElement("h3");
      h3.setAttribute("class","price");
      h3.innerText= "₹" + bouquets[i]["price"]
      div_main_box.append(h3)

      for (let i=1; i<=5; i++){
        icon = document.createElement("i");
        icon.setAttribute("id", "star");
        icon.setAttribute("class","fa-regular fa-star");
        div_main_box.append(icon)

    }



     document.querySelector("div.main_box").append(div_main_box)


    }


    let search = document.getElementById("name");

    search.addEventListener("keyup", (e) =>{
       
      let words = e.target.value.toLowerCase();

      let letter = document.querySelectorAll(".main");

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