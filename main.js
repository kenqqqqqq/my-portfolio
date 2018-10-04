// smooth scroll


// scroll to top
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scrolltop").style.display = "block";
  } else {
    document.querySelector(".scrolltop").style.display = "none";
  }
};