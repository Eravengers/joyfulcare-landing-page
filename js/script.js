$(function () {

	// Preloader
	// fadeOut the preloader in 2s after document loaded
	// let preloaderCont = $("#preloader");
	// preloaderCont.delay(2000).fadeOut(200); // hide preloaderCont in 2s


	// Navbar toggler
	let btnToggler = $(".navbar-toggler");
	btnToggler.on("click", function () {
		btnToggler.children().toggleClass("displayNone");
	});

	// Accordion
	var accordion = document.getElementsByClassName("accordion");

	var i;
	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function () {
			// Toggle between adding and removing active class to accordion
			this.classList.toggle("active");

			// Toggle between hiding and showing the dropdown menu

			var dropDownMenu = this.nextElementSibling;

			if (dropDownMenu.style.display === "block") {
				dropDownMenu.style.display = "none";
			} else {
				dropDownMenu.style.display = "block";
			}
		});
		// Clicking outside the accordion
		outsideElement = this.parentElement;

	}


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
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 0, function () { // 0 represent the number of sec to delay

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
		var button = $(event.relatedTarget); // Button that triggered the modal
		var modalTitle = button.data('title'); // Extract info from data-* attributes
		var modalSubTitle = button.data('subtitle'); // Extract info from data-* attributes
		var modalText = button.data('text'); // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this);
		modal.find('.modal-title').html(modalTitle);
		modal.find('.modal-subtitle').html(modalSubTitle);
		modal.find('.modal-text').html(modalText);
	});

	// Read more / Read less buttons

	function readMoreLess() {

		// Services section

		//readMoreCompanionshipBtn
		let readMoreCompanionshipBtn = $("#readMoreCompanionshipBtn"),
			readMoreCompanionshipBtnTxt = $("#readMoreCompanionshipBtnTxt"),
			readMoreCompanionshipText = $("#caretTextCompanionshipText"),
			readMoreCompanionship = $("#readMoreCompanionship"),
			readMoreCompanionshipCaret = $("#readMoreCompanionshipCaret");

		readMoreCompanionship.slideToggle(); //hide readMoreCompanionship by default;
		readMoreCompanionshipText.text("Read more"); //sets text to "Read more" by default

		readMoreCompanionshipBtn.on("click", function () {
			readMoreCompanionship.slideToggle(300); //toggles readMoreCompanionship when the btn is clicked
			let newText = $(this).text().trim(); // Gets text and remove whitespace;
			// Alternate between texts
			if (newText === "Read more") {
				newText = "Read less";
				readMoreCompanionshipCaret.addClass("fa-caret-up");
				readMoreCompanionshipCaret.removeClass("fa-caret-down");
			} else {
				newText = "Read more";
				readMoreCompanionshipCaret.removeClass("fa-caret-up");
				readMoreCompanionshipCaret.addClass("fa-caret-down");
			}

			readMoreCompanionshipText.text(newText); //sets new text
			// For development use ONLY
			// console.log(`Text is ${newText}`);
		});


		//readMorePcaBtn
		let readMorePcaBtn = $("#readMorePcaBtn"),
			readMorePcaBtnTxt = $("#readMorePcaBtnTxt"),
			readMorePcaText = $("#caretTextPcaText"),
			readMorePca = $("#readMorePca"),
			readMorePcaCaret = $("#readMorePcaCaret");

		readMorePca.slideToggle(); //hide readMorePca by default;
		readMorePcaText.text("Read more"); //sets text to "Read more" by default

		readMorePcaBtn.on("click", function () {
			readMorePca.slideToggle(300); //toggles readMorePca when the btn is clicked
			let newText = $(this).text().trim(); // Gets text and remove whitespace;
			// Alternate between texts
			if (newText === "Read more") {
				newText = "Read less";
				readMorePcaCaret.addClass("fa-caret-up");
				readMorePcaCaret.removeClass("fa-caret-down");
			} else {
				newText = "Read more";
				readMorePcaCaret.removeClass("fa-caret-up");
				readMorePcaCaret.addClass("fa-caret-down");
			}

			readMorePcaText.text(newText); //sets new text
			// For development use ONLY
			// console.log(`Text is ${newText}`);
		});
	}

	readMoreLess();



}(jQuery));