var showcase_html = `
<div class="row">

  <div class="col-5 mobile-col-5-s">

      <div class="row company_row">

        <div class="col-12 company_col">

          ${DecideBoxes().main}

        </div>

        <div class="col-6 brand_col--1">

          <div class="brand_container brand_container--1">
            <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/teas.png?v=1732241651" />
          </div>

        </div>

        <div class="col-6 brand_col--2">

          <div class="brand_container brand_container--2">
            <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/sauce_ae0d4519-135a-4305-afcc-237707e57e50.png?v=1732241651" />
          </div>

        </div>

      </div>

  </div>

  <div class="col-7 mobile-col-7-s">

    <div class="row company_row">

      <div class="col-8">

        <div class="row company_row">

          <div class="col-12 brand_col--3">
            <div class="brand_container brand_container--big big_banner--1">
              <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/u.png?v=1732241651"/>
            </div>
          </div>

          <div class="col-12 brand_col--4">

            ${DecideBoxes().long}

          </div>

        </div>

      </div>


      <div class="col-4">

        <div class="row company_row">

          <div class="col-12 brand_col--5">
            <div class="brand_container brand_container--sub brand_container--6">
              <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/bak.png?v=1732241651" />
            </div>
          </div>

          <div class="col-12 brand_col--6">
            <div class="brand_container brand_container--sub">
              <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/tea.png?v=1732241650"/>
            </div>
          </div>

        </div>

      </div>

     </div>

    </div>

  </div>
`;

var mobile_showcase_container = DecideBoxes().mobile;
var showcase_container = document.querySelector("#showcase_container");
var showcase_container_mobile = document.querySelector(
  "#showcase_container--mobile"
);
showcase_container.innerHTML = showcase_html;
showcase_container_mobile.innerHTML = mobile_showcase_container;
