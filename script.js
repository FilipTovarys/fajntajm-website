const spacer = document.getElementById('spacing_div');
const menuItems = document.getElementsByClassName("mid_section")[0];
const header =  document.getElementById("changeable_header");
const languages = document.getElementsByClassName("language")[0];
const logo = document.getElementById("fajntajm_logo");
const ig = document.getElementById("ig_header");
const fb = document.getElementById("fb_header");




window.onscroll = function() {
  // Adding pageYOffset for compatibility with IE
  if (window.scrollY > (spacer.offsetHeight - 80) || window.pageYOffset > (spacer.offsetHeight - 80)) {
    logo.classList.add("logo_color_change");
    menuItems.classList.add("menu_color_change");
    header.classList.add("header_bg_color_change");
    languages.classList.add("languages_color_change");
    ig.classList.add("ig_logo_color_change");
    fb.classList.add("fb_logo_color_change");
  } else {
    logo.classList.remove("logo_color_change");
    menuItems.classList.remove("menu_color_change");
    header.classList.remove("header_bg_color_change");
    languages.classList.remove("languages_color_change");
    ig.classList.remove("ig_logo_color_change");
    fb.classList.remove("fb_logo_color_change");
  }
};

console.log(spacer.offsetHeight)