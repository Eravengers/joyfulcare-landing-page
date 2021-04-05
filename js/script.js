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

  // ScrollToTop

  $(window).scroll(function () {
    var $scrollPosition = $(window).scrollTop(),
      $scrollToTopArea = $(".scrollToTop");

    if ($scrollPosition >= 300) {
      $scrollToTopArea.removeClass("hideScrollTop").addClass("showScrollTop");
    } else {
      $scrollToTopArea.removeClass("showScrollTop").addClass("hideScrollTop");
    }
  });


  // scrollToTopView();
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a.js-scroll").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  // Add current year to copyright 
  let date = new Date();
  let copyrightYear = date.getFullYear();

  $("#copyright").text(`© ${copyrightYear}`);

  // Modal
  $('#detailsModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var modalTitle = button.data('title') // Extract info from data-* attributes
    var modalText = button.data('text') // Extract info from data-* attributes
    var modalSrc = button.data('src') // Extract info from data-* attributes

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(modalTitle);
    modal.find('.modal-text').html(modalText);
    modal.find('#blogPostImg').attr("src", modalSrc);
  })


}(jQuery))