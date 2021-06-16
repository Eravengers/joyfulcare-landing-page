$(function () {

	// Preloader
	// fadeOut the preloader in 2s after document loaded
	// let preloaderCont = $("#preloader");
	// preloaderCont.delay(2000).fadeOut(200); // hide preloaderCont in 2s


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


	// Read more / Read less buttons

	function readMoreLess() {
		var dots = $("#dots"),
			moreText = $("#moreText"),
			learnMoreBtn = $("#learnMoreBtn");

		// Services section

		//readMoreCompanionshipBtn
		let readMoreCompanionshipBtn = $("#readMoreCompanionshipBtn"),
			readMoreCompanionshipBtnTxt = $("#readMoreCompanionshipBtnTxt"),
			readMoreCompanionshipCaret = $("#readMoreCompanionshipCaret"),
			readMoreCompanionship = $("#readMoreCompanionship");

		readMoreCompanionship.slideToggle(); //hide readMoreCompanionship by default;
		readMoreCompanionshipCaret.text("Read more"); //sets text to "Read more" by default

		readMoreCompanionshipBtn.on("click", function () {
			readMoreCompanionship.slideToggle(300); //toggles readMoreCompanionship when the btn is clicked
			let newText = $(this).text().trim(); // Gets text and remove whitespace;
			// Alternate between texts
			if (newText == "Read more") {
				newText = "Read less";
				readMoreCompanionshipCaret.addClass("fa-caret-up");
				readMoreCompanionshipCaret.removeClass("fa-caret-down");
			} else {
				newText = "Read more";
				readMoreCompanionshipCaret.removeClass("fa-caret-up");
				readMoreCompanionshipCaret.addClass("fa-caret-down");
			}

			readMoreCompanionshipCaret.text(newText); //sets new text

			// For development use ONLY
			// console.log(`Text is ${newText}`);
		});

		//readMorePcaBtn
		let readMorePcaBtn = $("#readMorePcaBtn"),
			readMorePcaBtnTxt = $("#readMorePcaBtnTxt"),
			readMorePcaCaret = $("#readMorePcaCaret"),
			readMorePca = $("#readMorePca");

		readMorePca.slideToggle(); //hide readMorePca by default;
		readMorePcaCaret.text("Read more"); //sets text to "Read more" by default
		readMorePcaBtn.on("click", function () {
			readMorePca.slideToggle(300); //toggles readMorePca when the btn is clicked
			let newText = $(this).text().trim(); // Gets text and remove whitespace;
			// Alternate between texts
			if (newText == "Read more") {
				newText = "Read less";
				readMorePcaCaret.addClass("fa-caret-up");
				readMorePcaCaret.removeClass("fa-caret-down");
			} else {
				newText = "Read more";
				readMorePcaCaret.removeClass("fa-caret-up");
				readMorePcaCaret.addClass("fa-caret-down");
			}

			readMorePcaCaret.text(newText); //sets new text

			// For development use ONLY
			// console.log(`Text is ${newText}`);
		});

		//if Read more/less btn is clicked
		/* learnMoreBtn.on("click", function() {

		    console.log("Learn more btn clicked");

		    if (dots.style.display === "none") {
		        dots.style.display = "inline";
		        learnMoreBtn.innerHTML = "Read more";
		        moreText.style.display = "none";
		    } else {
		        dots.style.display = "none";
		        learnMoreBtn.innerHTML = "Read less";
		        moreText.style.display = "inline";
		    }
		}); */
	}

	// readMoreLess();

}(jQuery))