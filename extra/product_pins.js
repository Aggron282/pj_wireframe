var products_config = [
  {
    title: "Jungle Damage Ghost",
    price: 9.99,
    url: "https://www.pitajunglestore.com/collections/hot-sauce/products/jungle-damage-ghost-1",
    tagline:
      "Ghost Flavor Hot Sauce: Haunt Your Taste Buds, Ignite Your Senses!",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/60220CA3-9F56-4374-B4CD-51CF43A664AB-PhotoRoom-PhotoRoom.png?v=1685163787",
  },
  {
    title: "Jungle Damage Green",
    price: 9.99,
    url: "https://www.pitajunglestore.com/collections/hot-sauce/products/jungle-damage-green-1",
    tagline: "Fresh, Fiery, and Full of Zing!",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/4CBE0F75-F6B0-403C-8804-BFD009243730-PhotoRoom-PhotoRoom.png?v=1685163741",
  },
  {
    title: "Jungle Damage Red",
    price: 9.99,
    url: "https://www.pitajunglestore.com/collections/hot-sauce/products/jungle-damage-red",
    tagline: " Bold, Spicy, and Bursting with Heat!",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/9DD348FD-B846-4A5F-B2DE-2704A2CD0142-PhotoRoom-PhotoRoom.png?v=1685163696",
  },
  {
    title: "Jungle Damage Variety",
    price: 25.99,
    tagline: " A Flavor Expedition, One Bold Heat at a Time! ",
    url: "https://www.pitajunglestore.com/collections/hot-sauce/products/jungle-damage-variety-pack",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/EA820A21-DFCE-4E36-9956-FC822F381F5D-PhotoRoom-PhotoRoom.png?v=1685164051",
  },
  {
    title: "Jungle Tea Green",
    price: 7.99,
    url: "https://www.pitajunglestore.com/collections/accessories/products/green-tea",
    tagline: "Sip Into Serenity, Naturally Refreshing",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/green_2de83925-666e-414f-9157-54f509e32cd9-removebg-preview.png?v=1734854498",
  },
  {
    title: "Jungle Tea Berry Hibiscus",
    price: 7.99,
    url: "https://www.pitajunglestore.com/collections/accessories/products/berry-hibiscus-tea",
    tagline: "A Sweet Twist of Nature's Refreshment!",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/beryyy-removebg-preview.png?v=1734854498",
  },
  {
    title: "Jungle Tea Black",
    price: 7.99,
    url: "https://www.pitajunglestore.com/collections/accessories/products/tropical-tea",
    tagline: "Bold, Smooth, and Perfectly Brewed",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/tropical-removebg-preview.png?v=1734854498",
  },
  {
    title: "Jungle Tea Variety",
    price: 7.99,
    url: "https://www.pitajunglestore.com/collections/accessories/products/iced-tea-variety-pack",
    tagline: "A Sip for Every Mood, Crafted by Nature",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/83E05FE3-F3B4-4990-B586-A19D6A6C4C0F-PhotoRoom-PhotoRoom.png?v=1685164292",
  },

  {
    title: "Original Baklava",
    price: 4.99,
    url: "https://www.pitajunglestore.com/collections/desserts/products/original-baklava",
    tagline: "Layers of Sweet Tradition, Perfectly Crafted",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/Untitled_1000x1000px_3000x3000px_17-removebg-preview.png?v=1734854775",
  },
  {
    title: "Chocolate Baklava",
    price: 4.99,
    tagline: "A Decadent Twist on a Sweet Classic",
    url: "https://www.pitajunglestore.com/collections/desserts/products/chocolate-dipped-baklava",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/Untitled_1000x1000px_3000x3000px_14-removebg-preview.png?v=1734854498",
  },
  {
    title: "Baklava Flight",
    price: 22.99,
    tagline: "A Symphony of Sweets, One Bite at a Time",
    img: "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/IMG_0969_1_12b584d8-81c3-419b-b4a1-c1d7833bf204.png?v=1733700464",
    url: "https://www.pitajunglestore.com/collections/desserts/products/baklava-flights",
  },
];

function ReturnPinCardHTML(config) {
  return `

    <figure class="product_figure">

      <p class="title">
      ${config.title}
      </p>

      <img src = "${config.img}" class="figure_img" />

       <p class="price">
        $${config.price}
      </p>

      <a href = ${config.url} ><button class="fill product--fill" >
        <p>See Product </p>
      </button></a>

    </figure>

  `;
}

function RenderProductsAsPins() {
  var container = document.querySelector("#product_galleries");
  var wrapper = document.querySelector(".product_wrapper");
  var html = ``;

  for (var i = 0; i < products_config.length; i++) {
    var config = products_config[i];
    html += ReturnPinCardHTML(config);
  }

  container.innerHTML = html;
  wrapper.innerHTML += `
      <img src="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/file.png?v=1735692137" class="absolute main_site_background--4 gb">
    `;
}

RenderProductsAsPins();
