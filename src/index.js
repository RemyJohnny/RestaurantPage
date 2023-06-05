import renderAboutTAB from "./about";
import renderHomeTAB from "./home";
import renderMenuTAB from "./menu";
import renderLocationTAB from "./location";

const pageContainer = document.querySelector("#content");
let location;
let menu;
let about;

function renderHeader(pageContainer) {
  const header = document.createElement("header");
  const LFMD = document.createElement("div");
  const navBar = document.createElement("div");
  const icon = document.createElement("i");
  const links = document.createElement("ul");
  const logo = document.createElement("div");
  const Slinks = document.createElement("ul");
  location = document.createElement("li");
  menu = document.createElement("li");
  about = document.createElement("li");
  const icon2 = document.createElement("i");
  const instagram = document.createElement("li");
  const tikTok = document.createElement("li");
  const locationA = document.createElement("a");
  const menuA = document.createElement("a");
  const aboutA = document.createElement("a");
  const instagramA = document.createElement("a");
  const tikTokA = document.createElement("a");

  LFMD.classList.add("logoForMobileDevices");
  navBar.classList.add("navBar");
  icon.classList.add("fa-solid", "fa-mug-hot");
  links.classList.add("links");
  logo.classList.add("logo");
  Slinks.classList.add("links");
  location.classList.add("locationBtn");
  menu.classList.add("menuBtn");
  about.classList.add("aboutBtn");
  icon2.classList.add("fa-solid", "fa-mug-hot");
  /*locationA.setAttribute("href", "#location");
  menuA.setAttribute("href", "#menu");
  aboutA.setAttribute("href", "#aboutSection");*/
  instagramA.setAttribute("href", "https://www.instagram.com/remy_xle/");
  tikTokA.setAttribute(
    "href",
    "https://www.tiktok.com/@remy_xle?_t=8clEJOwqYNi&_r=1"
  );

  LFMD.textContent = "ActiveMe Coffee Shop  ";
  logo.textContent = "ActiveMe Coffee Shop  ";
  locationA.textContent = "Location";
  menuA.textContent = "Menu";
  aboutA.textContent = "About";
  instagramA.textContent = "Instagram";
  tikTokA.textContent = "TikTok";

  pageContainer.appendChild(header);
  header.appendChild(LFMD);
  header.appendChild(navBar);
  LFMD.appendChild(icon);
  navBar.appendChild(links);
  navBar.appendChild(logo);
  navBar.appendChild(Slinks);
  links.appendChild(location);
  links.appendChild(menu);
  links.appendChild(about);
  logo.appendChild(icon2);
  Slinks.appendChild(instagram);
  Slinks.appendChild(tikTok);
  location.appendChild(locationA);
  menu.appendChild(menuA);
  about.appendChild(aboutA);
  instagram.appendChild(instagramA);
  tikTok.appendChild(tikTokA);
  return header;
}

function renderFooter(pageContainer) {
  const footer = document.createElement("footer");
  const contact = document.createElement("div");
  const copyright = document.createElement("div");
  const tikTok = document.createElement("a");
  const instagram = document.createElement("a");
  const snapchat = document.createElement("a");
  const telegram = document.createElement("a");
  const github = document.createElement("a");
  const tikTokIcon = document.createElement("i");
  const instagramIcon = document.createElement("i");
  const snapchatIcon = document.createElement("i");
  const telegramIcon = document.createElement("i");
  const githubIcon = document.createElement("i");

  contact.classList.add("contact");
  copyright.classList.add("copyright");
  tikTok.setAttribute(
    "href",
    "https://www.tiktok.com/@remy_xle?_t=8clEJOwqYNi&_r=1"
  );
  instagram.setAttribute("href", "https://www.instagram.com/remy_xle/");
  snapchat.setAttribute("href", "https://t.snapchat.com/X5znjj5q");
  telegram.setAttribute("href", "https://t.me/Remy553");
  github.setAttribute("href", "https://github.com/RemyJohnny");
  tikTokIcon.classList.add("fa-brands", "fa-tiktok");
  instagramIcon.classList.add("fa-brands", "fa-instagram");
  snapchatIcon.classList.add("fa-brands", "fa-snapchat");
  telegramIcon.classList.add("fa-brands", "fa-telegram");
  githubIcon.classList.add("fa-brands", "fa-github");

  copyright.textContent = "copyright © 2023 - RemyJohnny. All Right Reserved";

  footer.appendChild(contact);
  footer.appendChild(copyright);
  contact.appendChild(tikTok);
  contact.appendChild(instagram);
  contact.appendChild(snapchat);
  contact.appendChild(telegram);
  contact.appendChild(github);
  tikTok.appendChild(tikTokIcon);
  instagram.appendChild(instagramIcon);
  snapchat.appendChild(snapchatIcon);
  telegram.appendChild(telegramIcon);
  github.appendChild(githubIcon);
  pageContainer.appendChild(footer);

  return footer;
}

renderHeader(pageContainer);
const heroSection = renderHomeTAB(pageContainer);
const aboutSection = renderAboutTAB(pageContainer);
const menuSection = renderMenuTAB(pageContainer);
const locationSection = renderLocationTAB(pageContainer);
renderFooter(pageContainer);

location.addEventListener("click", () => {
  heroSection.classList.remove("active");
  aboutSection.classList.remove("active");
  menuSection.classList.remove("active");

  locationSection.classList.add("active");
  location.classList.add("clicked");

  menu.classList.remove("clicked");
  about.classList.remove("clicked");
});

menu.addEventListener("click", () => {
  heroSection.classList.remove("active");
  aboutSection.classList.remove("active");
  locationSection.classList.remove("active");

  menuSection.classList.add("active");
  menu.classList.add("clicked");

  location.classList.remove("clicked");
  about.classList.remove("clicked");
});

about.addEventListener("click", () => {
  heroSection.classList.remove("active");
  locationSection.classList.remove("active");
  menuSection.classList.remove("active");

  aboutSection.classList.add("active");
  about.classList.add("clicked");

  location.classList.remove("clicked");
  menu.classList.remove("clicked");
});
