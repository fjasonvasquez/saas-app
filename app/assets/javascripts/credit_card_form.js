// function to get params from URL

$(document).ready(function() {

	var show_error, stripeResponseHandler, submitHandler;

// function to handle the submit of the form and intercept the default event
	submitHandler = function(event) {
		var $form = $(event.target);
		$form.find("input[type=submit]").prop("disabled", true);
		if (Stripe){
			Stripe.card.createToken($form, stripeResponseHandler);
		} else {
			show_error("Failed to load credit card processing functionality. Please reload the page")
		}
		return false;
	};

// Initiate submit handler listener for any form with class cc_form
	$(".cc_form").on('submit', submitHandler);

// handle event of plan drop down changing

// Set up plan change event listener #tenant_plan id in the forms for class cc_form

// call plan change handeler so that the plan is set correctly in the drop down when the page loads

// function to handle the token received from Stripe and remove credit card fields.
	stripeResponseHandler = function(status, response) {
		
	};

// function to show errors when Stripe functionality returns an error

});