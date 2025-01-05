var deals_container = document.querySelector(".deals_container");
var html = `

    <div class="inner relative">

     <div class="graphics--deal graphics--deal--flower gb graphics--deal--flower--1">
       <img class="gs" src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/dkfkkfkdf.png?v=1735712647"/>
     </div>

     <div class="graphics--deal  graphics--deal--flower--2 gb">
       <img class="gs" src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/dkfkkfkdf.png?v=1735712647"/>
     </div>

     <main>
       <div class="deals_title_container deal_list_container--main">
          <div class="overline overline--1"></div>
            <p class="title title--main"> Exclusive Deals </p>
        </div>

      <div id="gallery">

          <figure>
    			<p class="title deal--title" >
                  Save on Hot Sauce
                </p>
                <p class="subtitle" >
                  Buy 1 for $9.99
                </p>
                <p class="subtitle" >
                  Buy 2 for <span class="cross"> $9.99 each</span> $8.99
                </p>
                <p class="subtitle" >
                  Buy 3 for <span class="cross"> $9.99 each</span> $8.99
                </p>

                <button class="fill fill--sauces">
                 <p> See Sauces </p>
                </button>

		</figure>

        <figure>
          <p class="title deal--title">
           Earn Points Today!
          </p>
          <p class="subtitle" >
            See our loyalty list and find what you can save!
          </p>
           <p class="subtitle">
            Get Prizes like a $50 gift card to Pita Jungle!
          </p>

          <button class="fill fill--loyalty" >
            <p>See Loyalty </p>
          </button>
      </figure>

        <figure>
          <p class="title deal--title" >
           Sip, Save, and Savor
          </p>

          <p class="subtitle">
            Buy 2 teas and get one for free!
          </p>
          <p class="subtitle">
            Buy a variety pack and get a hot sauce for free!
          </p>

          <button class="fill fill--teas" >
            <p>See Teas</p>
          </button>

        </figure>

      </div>

  </main>

</div>

`;

deals_container.innerHTML = html;
