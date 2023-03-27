if (localStorage.getItem("bouquet")) {
  return;
} else {
  localStorage.setItem(
    "bouquet",
    JSON.stringify([
      {
        image: "../asset/IMG/index/mixed.webp",
        alt: "red_flower boquet",
        name: "Anniversary bouquet",
      },
      {
        image: "../asset/IMG/index/cake with flower.jpeg",
        alt: "Bouquet_cake",
        name: "Birthaday cake with Bouquet",
      },
      {
        image: "../asset/IMG/index/red.jpg",
        alt: "red_bouquet",
        name: "Red rose Bouquet",
      },
      {
        image: "../asset/IMG/index/blackforest.webp",
        alt: "cake_bouquet",
        name: "Anniversary Bouquet With cake",
      },
      {
        image: "../asset/IMG/index/yellow.jpg",
        alt: "yellow_bouquet",
        name: "Yellow Bouquet",
      },
      {
        image: "../asset/IMG/index/birthday.jpg",
        alt: "bouquet",
        name: "Birthday Bouquet",
      },
      {
        image: "../asset/IMG/index/pink.jpg",
        alt: "pink_bouquet",
        name: "Pink Bouquet",
      },
      {
        image: "../asset/IMG/index/white.jpg",
        alt: "white_bouquet",
        name: "White Rose Bouquet",
      },
      {
        image: "../../asset/IMG/anniversary bouquet/red.webp",
        alt: "red_bouquet",
        name: "Red Rose Bouquet",
        price: 900,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/light pink.jpg",
        alt: "pink_bouquet",
        name: "Love Rose Bouquet",
        price: 700,
      },
      {
        image: "../../asset/IMG/anniversary bouquet/basket.jpg",
        alt: "basket_boquet",
        name: "Basket Rose Bouquet",
        price: 500,
      },
      {
        image: "../../asset/IMG/anniversary bouquet/yellow roses.jpg",
        alt: "red_bouquet",
        name: "Yellow Rose Bouquet",
        price: 1000,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/dark pink.webp",
        alt: "dark_pnik_bouquet",
        name: "Pink  Bouquet",
        price: 1200,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/maroon.jpg",
        alt: "red_bouquet",
        name: "Maroon Rose Bouquet",
        price: 800,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/white.jpg",
        alt: "red_bouquet",
        name: "White Love Bouquet",
        price: 600,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/love bouquet.webp",
        alt: "red_bouquet",
        name: "Love Bouquet",
        price: 1100,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/12 rose.webp",
        alt: "red_bouquet",
        name: "12 Rose Bouquet",
        price: 1250,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/pink.jpeg",
        alt: "red_bouquet",
        name: "Lovely Pink Bouquet",
        price: 850,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/bunch.jpg",
        alt: "red_bouquet",
        name: "Bunch Rose Bouquet",
        price: 500,
      },

      {
        image: "../../asset/IMG/anniversary bouquet/crazy love.jpg",
        alt: "red_bouquet",
        name: " Crazy Love Bouquet",
        price: 900,
      },
      {
        image: "../../asset/IMG/anni with cake/black forest.jpg",
        alt: "red_bouquet",
        name: "Bouquet With Black Forest Cake",
        price: 1600,
      },

      {
        image: "../../asset/IMG/anni with cake/anni cake.jpg",
        alt: "pink_bouquet",
        name: "Red Bouquet With Orange Cake",
        price: 1500,
      },
      {
        image: "../../asset/IMG/anni with cake/cambo.webp",
        alt: "basket_boquet",
        name: "Yellow Bouquet With Black Forest Cake",
        price: 1200,
      },
      {
        image: "../../asset/IMG/anni with cake/pink with cake.webp",
        alt: "red_bouquet",
        name: "Pink Bouquet And White Cake",
        price: 1400,
      },

      {
        image: "../../asset/IMG/anni with cake/red cake.jpg",
        alt: "dark_pnik_bouquet",
        name: "Daisy Bouquet with Heart Cake",
        price: 1500,
      },

      {
        image: "../../asset/IMG/anni with cake/red forest.webp",
        alt: "red_bouquet",
        name: "Rose Bouquet With Black Forest Cake",
        price: 1300,
      },

      {
        image: "../../asset/IMG/anni with cake/white cake.jpg",
        alt: "red_bouquet",
        name: "Love Bouquet With Chocolate Cake",
        price: 1600,
      },

      {
        image: "../../asset/IMG/anni with cake/yellow cake.webp",
        alt: "red_bouquet",
        name: "Mixed Bouqurt With Yellow Cake",
        price: 1200,
      },

      {
        image: "../../asset/IMG/anni with cake/red velvet.png",
        alt: "red_bouquet",
        name: "Bouquet with Red velvet Cake",
        price: 1900,
      },

      {
        image: "../../asset/IMG/anni with cake/pnk rose.webp",
        alt: "red_bouquet",
        name: "Pinkey Bouquet With Black Forest Cake",
        price: 1600,
      },

      {
        image: "../../asset/IMG/anni with cake/nuste.jpg",
        alt: "red_bouquet",
        name: "Lovely Bouquet With Nuste Cake",
        price: 1800,
      },

      {
        image: "../../asset/IMG/anni with cake/chocolate.jpg",
        alt: "red_bouquet",
        name: "Rose Bouquet With Chocolate Cake",
        price: 1500,
      },
      {
        image: "../../asset/IMG/birth bouquet/pink rose.jpg",
        alt: "red_bouquet",
        name: "Mixed Rose Bouquet",
        price: 300,
      },

      {
        image: "../../asset/IMG/birth bouquet/lilly.png",
        alt: "red_bouquet",
        name: "Rose Bouquet",
        price: 800,
      },

      {
        image: "../../asset/IMG/birth bouquet/red rose.jpg",
        alt: "red_bouquet",
        name: "Red Roses Bouquet",
        price: 1000,
      },

      {
        image: "../../asset/IMG/birth bouquet/white.jpg",
        alt: "red_bouquet",
        name: "Lilly Bouquet",
        price: 500,
      },

      {
        image: "../../asset/IMG/birth bouquet/yellow.jpg",
        alt: "red_bouquet",
        name: "Pink Roses Bouquet",
        price: 350,
      },

      {
        image: "../../asset/IMG/birth bouquet/rose.jpg",
        alt: "red_bouquet",
        name: "10 Red Rose Bouquet",
        price: 500,
      },

      {
        image: "../../asset/IMG/birth bouquet/pic.jpg",
        alt: "red_bouquet",
        name: "White Roses Bouquet",
        price: 550,
      },

      {
        image: "../../asset/IMG/birth bouquet/image.webp",
        alt: "red_bouquet",
        name: "Yellow roses Bouquet",
        price: 400,
      },

      {
        image: "../../asset/IMG/birth bouquet/bouquet.jpg",
        alt: "red_bouquet",
        name: " Pinkey Bouquet",
        price: 450,
      },

      {
        image: "../../asset/IMG/birth bouquet/picture.webp",
        alt: "red_bouquet",
        name: "Bunch Red Bouquet",
        price: 400,
      },

      {
        image: "../../asset/IMG/birth bouquet/lovely.jpg",
        alt: "red_bouquet",
        name: "Red love Bouquet",
        price: 1000,
      },

      {
        image: "../../asset/IMG/birth bouquet/beauty.jpg",
        alt: "red_bouquet",
        name: "Stunning Bouquet",
        price: 1500,
      },

      {
        image: "../../asset/IMG/birth with cake/black forest.webp",
        alt: "red_bouquet",
        name: "Red Bouquet with Black Forest Cake",
        price: 1100,
      },

      {
        image: "../../asset/IMG/birth with cake/red rose.jpg",
        alt: "red_bouquet",
        name: "Rose Bouquet With Chocolate Cake",
        price: 1500,
      },

      {
        image: "../../asset/IMG/birth with cake/pink.webp",
        alt: "red_bouquet",
        name: "Pink Bouquet  With Black Forest Cake",
        price: 1900,
      },

      {
        image: "../../asset/IMG/birth with cake/chocolate.jpg",
        alt: "red_bouquet",
        name: "Red Bouquet With Chocolate Cake",
        price: 1400,
      },

      {
        image: "../../asset/IMG/birth with cake/light pink.webp",
        alt: "red_bouquet",
        name: "Crazy Bouquet With White Forest Cake",
        price: 1200,
      },

      {
        image: "../../asset/IMG/birth with cake/beauty.jpg",
        alt: "red_bouquet",
        name: "Bunch Bouquet With Black Forest Cake",
        price: 1600,
      },

      {
        image: "../../asset/IMG/birth with cake/yellow.jpg",
        alt: "red_bouquet",
        name: "Love Boquet With Vennilla Cake",
        price: 1800,
      },

      {
        image: "../../asset/IMG/birth with cake/nuste.jpeg",
        alt: "red_bouquet",
        name: "Bunch Bouquet With Nuste Cake",
        price: 1600,
      },

      {
        image: "../../asset/IMG/birth with cake/white forest.jpg",
        alt: "red_bouquet",
        name: "White Bouquet With White Forest Cake",
        price: 1500,
      },

      {
        image: "../../asset/IMG/birth with cake/mixed.jpeg",
        alt: "red_bouquet",
        name: "Mixed Bouquet With Black Forest Cake",
        price: 1900,
      },

      {
        image: "../../asset/IMG/birth with cake/normal.webp",
        alt: "red_bouquet",
        name: "Red Rose Bouquet With Normal Cake",
        price: 1400,
      },

      {
        image: "../../asset/IMG/birth with cake/velvet.jpg",
        alt: "red_bouquet",
        name: "Lovely Bouquet With Red Velvet Cake",
        price: 2100,
      },
    ])
  );
}
