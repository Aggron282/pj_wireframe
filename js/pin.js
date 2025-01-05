const pin_card = document.querySelector("#gallery");
const delay = 4000;

const beginWiggle = () => {
  if (pin_card.classList.contains("active") == false) {
    pin_card.classList.add("active");

    setTimeout(() => {
      endWiggle();
    }, delay);
  }
};

const endWiggle = () => {
  pin_card.classList.remove("active");
  pin_card.offsetWidth;
};

if (window.innerWidth > 900) {
  document.addEventListener("scroll", function () {
    beginWiggle();
  });

  window.addEventListener("resize", beginWiggle);
  beginWiggle();
}
