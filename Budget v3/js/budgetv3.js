// BudgetNEW.js

/*-- GLOBAL VARIABLES ------------------------------------------------------------------------*/
var inputTypeDefault = { 
	"description": "Misc.",
	"amount": 0.00,
	"date": "03/12/18", //currentDate(),
	"account": 0
}


/*-- ON PAGE LOAD ----------------------------------------------------------------------------*/

$(document).ready(function() {
	initClickEvents();

	$(".account:first").trigger('click');
	$("#form-outer-cont").hide();


});


/*-- FUNCTIONS -------------------------------------------------------------------------------*/

function showForm() {
	$("#form-outer-cont").show();
	$("#form-overlay").css("opacity", 0.6);
	$("#form-cont").css("top", "15px");
	$("#form-cont").css("opacity", 1);
}

function hideForm() {
	$("#form-overlay").css("opacity", 0);
	$("#form-cont").css("top", "-100px");
	$("#form-cont").css("opacity", 0);

	setTimeout(function() {
		$("#form-outer-cont").hide();
		resetForms();
	}, 500);
}

function resetForms() {
	$(".form-item-input").each(function() {
		$(this).val(inputTypeDefault[$(this).attr("inputType")]);
	});
}

function formItemClear($input) {
	$input.val("");
	$input.select();

	//Display Error Message
	$input.closest($(".form-item")).find($(".form-item-error-cont")).css("height", "20px");
	$input.addClass("form-input-error");
}