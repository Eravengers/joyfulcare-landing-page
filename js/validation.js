function validateName() {

	var name = document.getElementById("formName").value;

	if (name.length === 0) {

		producePrompt("Name is required", "name-error", "#d9534f");
		return false;

	}

	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

		producePrompt("First and last name, please.", "name-error", "#d9534f");
		return false;

	}

	producePrompt("Valid", "name-error", "#5cb85c");
	return true;

}



function validateEmail() {

	var email = document.getElementById("formEmail").value;

	if (email.length === 0) {

		producePrompt("Email Invalid", "email-error", "#d9534f");
		return false;

	}

	if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

		producePrompt("Invalid Email", "email-error", "#d9534f");
		return false;

	}

	producePrompt("Valid", "email-error", "#5cb85c");
	return true;

}

function validateMessage() {
	var message = document.getElementById("formMessage").value;
	var required = 30;
	var left = required - message.length;

	if (left > 0) {
		producePrompt(left + " more characters required", "message-error", "#d9534f");
		return false;
	}

	producePrompt("Valid", "message-error", "#5cb85c");
	// return true;

}

function validateForm() {
	var nameLocation = document.getElementById("formName"),
		emailLocation = document.getElementById("formEmail"),
		messageLocation = document.getElementById("formMessage");

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


	if (validateName() == false || validateEmail() == false || validateMessage() == false) {
		jsShow("submit-error");
		producePrompt("Please fix errors to submit.", "submit-error", "#d9534f");
		setTimeout(function () {
			jsHide("submit-error");
		}, 2000);
		return false;
	} else {

	}
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