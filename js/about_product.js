function RenderAboutProduct() {
  var container = document.querySelector(".about_product_wrapper");

  container.innerHTML = `
    <div class="about_container_product">

      <img src = "https://pitajungle.com/wp-content/uploads/2023/11/splatter2_green.png" class="rough_background"/>

      <img class="parsely_img--1" src = "https://pitajungle.com/wp-content/uploads/2023/11/footer_parsley.png" />
      <img class="parsely_img--2" src = "https://pitajungle.com/wp-content/uploads/2023/11/footer_parsley.png" />

      <div class="inner-container inner-container--about">

            <p class="title"> Healthy & Full of Flavor </p>
            <p class="subtitle"> Visit our main site and see our menu! </p>

            <div class="img_group_container">
              <img class="food_img food_img--1"src = "https://pitajungle.com/wp-content/uploads/2023/11/07dca742ab235724bd7df780939bdc6d.jpg" />
              <img class="food_img food_img--2" src = "https://pitajungle.com/wp-content/uploads/2023/11/d61aa1a677cbaa90b7724a22a4c7218e.jpg" />
            </div>

            <a href ="http://pitajungle.com"><button class=" btn_about_product">Visit Main Site</button></a>

        </div>

    </div>`;
}

RenderAboutProduct();
