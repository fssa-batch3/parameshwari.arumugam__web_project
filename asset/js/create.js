const productid= Math.floor(Math.random()*1000);
      function createproduct() {
        let bouquet = {};

        let bouquets = JSON.parse(localStorage.getItem("bouquet")) ?? [];

        const image = document.getElementById("img").value;
        const tittle = document.getElementById("tittle").value;
        const price = document.getElementById("price").value;
        const rating = document.getElementById("rating").value;
        bouquet["product_id"]=productid; 
        bouquet["img"] = image;
        bouquet["tittle"] = tittle;
        bouquet["price"] = price;
        bouquet["rating"] = rating;

        bouquets.push(bouquet);

        localStorage.setItem("bouquet", JSON.stringify(bouquets));
      }
      function deleteproduct() {
        let bouquets = JSON.parse(localStorage.getItem("bouquet"));
        for (let i = 0; i < bouquets.length; i++) {
          if (
            document.getElementById("tittle").value == bouquets[i]["tittle"]
          ) {
            confirm("Are you sure want to delete your account?");
            bouquets.splice(i, 1);
            localStorage.setItem("bouquet", JSON.stringify(bouquets));
          }
        }
      }