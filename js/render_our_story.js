function RenderOurStory() {
  var container = document.querySelector(".our_story_container");

  var html = `
  <div class="inner-container--story">

    <img src ="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/landing19199.png?v=1735536950" class="graphic"/>

    <div class="text-container--story text-container--story--active">
      <p class="title">Where Passion Meets Flavor</p>
      <p class="subtitle">From Our Roots to Your Plate – A Journey of Taste and Tradition</p>

     <a href="https://pitajungle.com/about/"> <button>Learn More</button></a>

    </div>

  </div>
  `;

  container.innerHTML = html;
}

RenderOurStory();
