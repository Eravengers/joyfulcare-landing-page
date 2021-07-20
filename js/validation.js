function validateName() {

	var name = document.getElementById("formName").value;

	if (name.length === 0) {

		producePrompt("Name field cannot be empty.", "name-error", "#d9534f");
		return false;

	}

	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

		producePrompt("First and last name required.", "name-error", "#d9534f");
		return false;

	}

	producePrompt("Looks good", "name-error", "#5cb85c");
	return true;

	function producePrompt(message, promptLocation, color) {

		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = color;
	}
}

function validateEmail() {

	var email = document.getElementById("formEmail").value;

	if (email.length === 0) {

		producePrompt("Email field cannot be empty.", "email-error", "#d9534f");
		return false;

	}

	if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

		producePrompt("Invalid email address.", "email-error", "#d9534f");
		return false;

	}

	producePrompt("Looks good", "email-error", "#5cb85c");
	return true;

	function producePrompt(message, promptLocation, color) {

		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = color;
	}
}

function validateMessage() {
	var message = document.getElementById("formMessage").value;
	var required = 30;
	var left = required - message.length;

	if (left > 0) {
		producePrompt(left + " more characters required", "message-error", "#d9534f");
		return false;
	}

	producePrompt("Looks good", "message-error", "#5cb85c");
	return true;

	function producePrompt(message, promptLocation, color) {

		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = color;
	}
}

function validateForm() {
	var nameLocation = document.getElementById("formName"),
		emailLocation = document.getElementById("formEmail"),
		messageLocation = document.getElementById("formMessage"),
		contactSubmitBtn = document.getElementById("contactSubmitBtn"),
		closeContactModal = document.getElementById("closeContactModal"),
		contactDetailsModal = document.getElementById("contactDetailsModal");

	// Coloring the border of the input fields

	if (!validateName()) {
		nameLocation.style.borderColor = "#d9534f";
	} else {
		nameLocation.style.borderColor = "#5cb85c";
	}

	if (!validateEmail()) {
		emailLocation.style.borderColor = "#d9534f";
	} else {
		emailLocation.style.borderColor = "#5cb85c";
	}

	if (!validateMessage()) {
		messageLocation.style.borderColor = "#d9534f";
	} else {
		messageLocation.style.borderColor = "#5cb85c";
	}

	function jsShow(id) {
		document.getElementById(id).style.display = "block";
	}

	function jsHide(id) {
		document.getElementById(id).style.display = "none";
	}


	function producePrompt(message, promptLocation, color) {

		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = color;
	}

	if (validateName() === false || validateEmail() === false || validateMessage() === false) {

		jsShow("submit-error");
		producePrompt("Please fix errors to submit.", "submit-error", "#d9534f");
		setTimeout(function () {
			jsHide("submit-error");
		}, 2000);
		return false;
	} else {
		showContactModal();
		clearFormInputs();
		hideContactPopup();
		// Prevent page from reloading
		return true;
	}

}

function showContactModal() {
	contactDetailsModal.style.display = "block";
	contactDetailsModal.style.opacity = 1;
};

function clearFormInputs() {

	// sets all contact inputs to empty
	var clearedName = document.getElementById("formName").value = "",
		clearedEmail = document.getElementById("formEmail").value = ""
	clearedMessage = document.getElementById("formMessage").value = "";

	/* console.log(`${clearedName}, ${clearedEmail}, ${clearedMessage}`) */

	restoreFormState();

	function restoreFormState() {

		document.getElementById("name-error").innerHTML = "";
		document.getElementById("email-error").innerHTML = "";
		document.getElementById("message-error").innerHTML = "";

		document.getElementById("formName").style.borderColor = "#ced4da";
		document.getElementById("formEmail").style.borderColor = "#ced4da";
		document.getElementById("formMessage").style.borderColor = "#ced4da";
	}
}

function hideContactPopup() {

	setTimeout(() => {

		// auto hide the successfully submitted modal in 2s
		contactDetailsModal.style.opacity = 0;
	}, 2000);


	// hide the successfully submitted modal when closeContactModal is clicked
	closeContactModal.addEventListener("click", function () {
		contactDetailsModal.style.opacity = 0;
	});
}
// validate newsletterField

function validateNewsletterField() {
	var newsletterField = document.getElementById("newletterEmail").value,
		newsletterLocation = document.getElementById("newletterEmail");


	if (newsletterField.length === 0) {
		producePrompt("Newsletter field cannot be empty.", "newsletter-error", "#d9534f");
		return false;
	}
	if (!newsletterField.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

		producePrompt("Invalid email address.", "newsletter-error", "#d9534f");
		return false;
	}

	producePrompt("Looks good", "newsletter-error", "#5cb85c");
	return true;

	function producePrompt(message, promptLocation, color) {

		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = color;
	}

	if (!validateNewsletterField()) {
		newsletterLocation.style.borderColor = "#d9534f";
	} else {
		newsletterLocation.style.borderColor = "#5cb85c";
	}
}