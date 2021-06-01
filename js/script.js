$(function() {

    // Preloader
    // fadeOut the preloader in 2s after document loaded
    // let preloaderCont = $("#preloader");
    // preloaderCont.delay(2000).fadeOut(200); // hide preloaderCont in 2s


    // Navbar toggler
    let btnToggler = $(".navbar-toggler");
    btnToggler.on("click", function() {
        btnToggler.children().toggleClass("displayNone");
    })

    // ScrollToTop

    $(window).scroll(function() {
        var $scrollPosition = $(window).scrollTop(),
            $scrollToTopArea = $(".scrollToTop");

        if ($scrollPosition >= 300) {
            $scrollToTopArea.removeClass("hideScrollTop").addClass("showScrollTop");
        } else {
            $scrollToTopArea.removeClass("showScrollTop").addClass("hideScrollTop");
        }
    });


    // scrollToTopView();
    $(document).ready(function() {
        // Add smooth scrolling to all links
        $("a.js-scroll").on('click', function(event) {

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
                }, 800, function() {

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



}(jQuery))