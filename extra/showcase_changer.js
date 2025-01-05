var last_r = null
var counter_banner = 0;
var counter_inner = 0;

function RenderBanner(col,html,default_html){

  var col = document.querySelector("."+col);

  var html_ = html ? html : default_html;

  col.innerHTML = html_;

}

function Init(){

  for(var i =0; i < banner_config.length ; i++){
    var banner = banner_config[i];
    RenderBanner(banner.col,banner.html[0],banner.html[0]);
  }

}

async function RandomizeBanner(banner_data){

  banners = banner_data.html;

  var b = document.querySelector("."+banner_data.root);

  b.classList.add(`${banner_data.root}--remove`)
  banner_data.counter ++;
  var random_banner = banners[banner_data.counter];

  await Delay(1200);

  if(banner_data.counter >= banners.length){
    banner_data.counter = 0;
  }
  console.log(banner_data.counter);
  RenderBanner(banner_data.col,random_banner,banner_data.html[0]);

}

setInterval(async ()=>{

    var tik = Math.floor(Math.random() * 5);

    for(var i =0; i < tik;i++){

      var r = Math.floor(Math.random() * banner_config.length);

      if(last_r != r){

        var banner = banner_config[r];

        if(r.root == "brand_container--big" && last_r == "brand_container--long" || last_r == "brand_container--big" && r.root=="brand_container--long"){
          return
        }
        else if(banner.html.length > 1){
          RandomizeBanner(banner);
          last_r = banner;
        }

      }

    }

},8000)

Init();
