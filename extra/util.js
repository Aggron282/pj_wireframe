function isHomePage() {
  const currentURL = window.location.pathname;
  return currentURL === "/";
}

function isPage(url) {
  const currentURL = window.location.pathname;
  return currentURL === url;
}

async function Delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

if (!isHomePage()) {
  document.body.style.background = "white";
}

if (isPage("/collections")) {
  window.location.assign("https://pitajunglestore.com");
}
