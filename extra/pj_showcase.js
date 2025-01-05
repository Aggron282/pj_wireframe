function DecideBoxes() {
  var dynamic_boxes = [
  {
    long: `
      <div class="brand_container brand_container--long brand_container--long--w brand_container--5">

        <img class="stocking" src="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/Untitled_790_x_1000_px.png?v=1733647772"/>

        <img class="stocking--2" src="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/Untitled_790_x_1000_px.png?v=1733647772"/>

        <p class="brand_title brand_title--w"> Save 15% on All Products </p>

        <p class="brand_text brand_text--w"> Hurry and order because this deal ends on 1/1/2025 </p>

      </div>
      `,
    main:`
         <div class="company_name_container">
            <p class="title"> Save Big this Winter! </p>
            <canvas id="canvas-winter"></canvas>
          </div>
    `,
    mobile:
      `
      <div class="inner">

        <div class="mobile_seasonal_background">

           <canvas id="canvas-w" class="c-winter"></canvas>

           <p class="title"> Holiday Deals! </p>
           <p class="subtitle"> Save 15% on all products!</p>
           <p class="description"> Don't Miss Out! <br> Ends on January 2 2025</p>

           <button class="seasonal_button"> See Products </button>

           <p class=" description--small">(This deal does not stack with other deals)</p>

        </div>

     </div>`,
    end_date: new Date('2024-01-01'),
    start_date: new Date('2024-12-01')
    },
     {
    long: `
      <div class="brand_container brand_container--long brand_container--long--ny brand_container--5">
         <img class="watermark--2" src="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/mf_282420a1-27c6-408d-a000-2618343f3bc9.png?v=1735588392">
         <p class="brand_title brand_title--ny"> New Products Coming Soon!</p>
      </div>
      `,
    main:`
         <div class="company_name_container company_name_container--new_years">

            <img class="watermark--2" src="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/Untitled_design_-_2024-12-30T031617.550.png?v=1735553785">

            <p class="title"> Happy New Years </p>

            <canvas id="newyears"></canvas>

         </div>
    `,
    mobile:
      `
      <div class="inner">

        <div class="mobile_seasonal_background--new_years">

           <canvas  id="newyears_canvas"></canvas>
           <img class="graphic" src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/mf_282420a1-27c6-408d-a000-2618343f3bc9.png?v=1735588392"/>

            <div class="text-container">
             <p class="title"> Happy New Years! </p>
             <p class="subtitle"> Start the year off with a bang! </p>
             <p class="description"> Stay in the loop for our deals!</p>
             <button class="seasonal_button seasonal_button--ny"> See Products </button>
            </div>
            <svg id="wave--showcase--ny"  viewBox="0 0 1440 350" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(229, 229, 229, 1)" offset="0%"></stop><stop stop-color="rgba(230, 230, 230, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,175L205.7,210L411.4,140L617.1,280L822.9,140L1028.6,210L1234.3,105L1440,35L1645.7,175L1851.4,175L2057.1,70L2262.9,140L2468.6,140L2674.3,210L2880,35L3085.7,175L3291.4,35L3497.1,280L3702.9,35L3908.6,315L4114.3,140L4320,105L4525.7,0L4731.4,70L4937.1,70L4937.1,350L4731.4,350L4525.7,350L4320,350L4114.3,350L3908.6,350L3702.9,350L3497.1,350L3291.4,350L3085.7,350L2880,350L2674.3,350L2468.6,350L2262.9,350L2057.1,350L1851.4,350L1645.7,350L1440,350L1234.3,350L1028.6,350L822.9,350L617.1,350L411.4,350L205.7,350L0,350Z"></path></svg>
        </div>

     </div>`,
    end_date: new Date('2025-01-01'),
    start_date: new Date('2024-12-28')
    },
  {
    long: `

        <div class="brand_container brand_container--long long_banner--3">

          <img class="pallete" src="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/iop.png?v=1735539389"/>

          <div class="text-container">
            <strong class="brand_title brand_title--z">Available Now!</strong><br>
            <p class="brand_text brand_text--z">Hot Sauces, Teas, Pastries, and more!</p>
          </div>

        </div>
      `,
    main:`
         <div class="company_name_container company_name_container--main o-hidden">
            <img class="paint" src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/converted_image.png?v=1735379151"/>
          </div>
    `,
     mobile:`
        <div class="inner">

          <div class="mobile_background">

              <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/converted_image.png?v=1735379151" class = "background--mobile--normal"/>

              <button class="seasonal_button--normal">
                <p class="title">See Products</p>
                <img class="graphic" src ="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/mainnn.png?v=1735728223"/>

              </button>

              <svg id="wave--showcase"  viewBox="0 0 1440 350" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(229, 229, 229, 1)" offset="0%"></stop><stop stop-color="rgba(230, 230, 230, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,175L205.7,210L411.4,140L617.1,280L822.9,140L1028.6,210L1234.3,105L1440,35L1645.7,175L1851.4,175L2057.1,70L2262.9,140L2468.6,140L2674.3,210L2880,35L3085.7,175L3291.4,35L3497.1,280L3702.9,35L3908.6,315L4114.3,140L4320,105L4525.7,0L4731.4,70L4937.1,70L4937.1,350L4731.4,350L4525.7,350L4320,350L4114.3,350L3908.6,350L3702.9,350L3497.1,350L3291.4,350L3085.7,350L2880,350L2674.3,350L2468.6,350L2262.9,350L2057.1,350L1851.4,350L1645.7,350L1440,350L1234.3,350L1028.6,350L822.9,350L617.1,350L411.4,350L205.7,350L0,350Z"></path></svg>

          </div>

        </div>
     `,
    end_date:null,
    start_date:null
  }

]

  var today = new Date();

  for (var i = 0; i < dynamic_boxes.length; i++) {

    if (
      today >= dynamic_boxes[i].start_date &&
      today <= dynamic_boxes[i].end_date
    ) {
      return dynamic_boxes[i];
    }

  }

  return dynamic_boxes[dynamic_boxes.length - 1];

}

var banner_config = [
  {
    html: [
       `
        ${DecideBoxes().long}
      `,


   ],
   root:"brand_container--long",
   col:"brand_col--4",
  counter:0
 },
  {
   html:[
     `<div class="brand_container brand_container--big big_banner--2">
       <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/m.png?v=1735534463"/>
     </div>`
   ],
    root:"brand_container--big",
    col:"brand_col--3",
    counter:0
  },
/*  https://cdn.shopify.com/s/files/1/0300/2577/7251/files/teas.png?v=1732241651 */
  {
   html:[

     `<div class="brand_container brand_container--1 brand_container--1--2">
       <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/teas_1b563eea-5b58-4233-9722-152d6a477983.png?v=1735526939" />
     </div>`,
     `<div class="brand_container brand_container--1 brand_container--1--1">
        <img src = " https://cdn.shopify.com/s/files/1/0300/2577/7251/files/bak3.png?v=1733113742" />
     </div>`,
     `<div class="brand_container brand_container--1 brand_container--1--3">
       <img src = "  https://cdn.shopify.com/s/files/1/0300/2577/7251/files/tea.png?v=1732241650" />
     </div>`
   ],
   root:"brand_container--1",
   col:"brand_col--1",
   counter:0
 },
   {
   html:[
        `<div class="brand_container brand_container--2 brand_container--2--1">
          <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/sauce_ae0d4519-135a-4305-afcc-237707e57e50.png?v=1732241651" />
        </div>
        `,
        `<div class="brand_container brand_container--2 brand_container--2--2">
          <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/dfekqmnga.png?v=1735527886" />
        </div>`,
        `<div class="brand_container brand_container--2 brand_container--2--3">
          <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/pf.png?v=1735532598" />
        </div>`
   ],
   root:"brand_container--2",
   col:"brand_col--2",
   counter:0
 },
   {
   html:[
     `
     <div class="brand_container brand_container--sub brand_container--3--1 brand_container--3">
       <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/bak.jpg?v=1735690742" />
     </div>
     `,
     `
     <div class="brand_container brand_container--sub brand_container--3--2 brand_container--3">
       <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/ddewdw.webp?v=1735379093" />
     </div>
     `,
     `
     <div class="brand_container brand_container--sub brand_container--3--3 brand_container-3">
        <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/bak.png?v=1732241651" />
     </div>
     `
   ],
  root:"brand_container--3",
  col:"brand_col--5",
  counter:0
  },
   {
   html:[
      `<div class = "brand_container brand_container--sub brand_container--4--2 brand_container--4 o-hidden">
       <img class = "graphic--4--2" src="https://cdn.shopify.com/s/files/1/0300/2577/7251/files/rr_1.png?v=1735691284"/>
     </div>
     `,
      `<div class="brand_container brand_container--sub brand_container--4--3 brand_container--4">
      <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/u.png?v=1732241651"/>
    </div>
     `,
      `<div class = "brand_container brand_container--sub brand_container--4--1 brand_container--4">
       <img src = "https://cdn.shopify.com/s/files/1/0300/2577/7251/files/jfr.png?v=1735535496"/>
     </div>
     `
   ],
   root:"brand_container--4",
   col:"brand_col--6",
   counter:0
 }

];
