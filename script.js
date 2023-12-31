const spacer = document.getElementById('spacer');
const menuItems = document.getElementsByClassName("mid_section")[0];
const header =  document.getElementById("changeable_header");
const languages = document.getElementsByClassName("language")[0];
const logo = document.getElementById("fajntajm_logo");
const ig = document.getElementById("ig_header");
const fb = document.getElementById("fb_header");
const hamburger = document.querySelector(".fill_empty_bar");
const topBar = document.getElementById("top_bar");
const middleBar = document.getElementById("middle_bar");
const bottomBar = document.getElementById("bottom_bar");
const navbar = document.querySelector(".mid_section");
const navbar_path = document.getElementById("bars_white");
const right_section = document.getElementsByClassName("right_section")[0];
const body = document.getElementsByTagName("body")[0];



window.onscroll = function() {
  // pageYOffset for compatibility with IE
  if (window.scrollY > (spacer.offsetHeight - header.offsetHeight) || window.pageYOffset > (spacer.offsetHeight - header.offsetHeight)) {
    logo.classList.add("logo_color_change");
    menuItems.classList.add("menu_color_change");
    header.classList.add("header_bg_color_change");
    languages.classList.add("languages_color_change");
    ig.classList.add("ig_logo_color_change");
    fb.classList.add("fb_logo_color_change");
    topBar.classList.add("bars_color_change");
    middleBar.classList.add("bars_color_change");
    bottomBar.classList.add("bars_color_change");
    console.log("added");
  } else {
    logo.classList.remove("logo_color_change");
    menuItems.classList.remove("menu_color_change");
    header.classList.remove("header_bg_color_change");
    languages.classList.remove("languages_color_change");
    ig.classList.remove("ig_logo_color_change");
    fb.classList.remove("fb_logo_color_change");
    topBar.classList.remove("bars_color_change");
    middleBar.classList.remove("bars_color_change");
    bottomBar.classList.remove("bars_color_change");
  }
};


hamburger.onclick = () => {
  body.classList.toggle("scroll-locked");
  navbar.classList.toggle("menu_open");
  right_section.classList.toggle("right_section_open");
}
