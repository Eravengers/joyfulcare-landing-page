$(function () {

  // Preloader
  // fadeOut the preloader in 2s after document loaded
  let preloaderCont = $("#preloader");
  setTimeout(() => {
    preloaderCont.fadeOut(200);
  }, 2000);

  // Navbar toggler
  let btnToggler = $(".navbar-toggler");
  btnToggler.on("click", function () {
    btnToggler.children().toggleClass("displayNone");
  })
})