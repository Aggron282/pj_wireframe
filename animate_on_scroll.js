function animate_elements(element_class, ani_class) {
  const elementsToAnimate = document.querySelectorAll("." + element_class);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(ani_class);
      }
    });
  });

  elementsToAnimate.forEach((element) => {
    observer.observe(element, ani_class);
  });
}

animate_elements("main_site_background--2", "appear_from_side--left");
animate_elements("main_site_background--3", "appear_from_side--right");
animate_elements("graphics--deal--flower--1", "graphics--deal--flower--active");
animate_elements("main_site_background", "main_site_background--active");
animate_elements("show_graphic--right", "show_graphic--right--active");
animate_elements("show_graphic--left", "show_graphic--left--active");
animate_elements("show_graphic--right--2", "show_graphic--right--2--active");
animate_elements("show_graphic--left--2", "show_graphic--left--2--active");
animate_elements("deal_list_container--hot", "deal_list_container--active");
animate_elements("deal_list_container--tea", "deal_list_container--active2");
animate_elements("deals_title_container", "deals_title_container--active");
animate_elements("inner-container--about", "inner_container--active");
animate_elements("text-container--story", "text-container--story--active");
