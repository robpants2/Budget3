
// clickEvents.js

function initClickEvents() {

	setClick($(".account"), function() {
		$(".side-nav-select").removeClass("side-nav-select");
		$(".select-border").css("width", "0px");
		$(this).addClass("side-nav-select");
		$(".select-border", this).css("width","7px");
	});

	setClick($(".form-item-reset"), function() {
		formItemClear($(this).closest($(".form-item")).find($(".form-item-input")));
	});

	setClick($(".form-button-cancel"), function() {
		hideForm();
	});

	setClick($("#top-nav-select-accounts"), function() {
		$cont = $("#account-nav-cont");

		if ($cont.offset().left < 0) {
			$cont.css("left", "0px");
			$("#category-nav-cont").css("right", "");
		}
		else {
			$cont.css("left", "");
		}
	});

	setClick($("#top-nav-select-categories"), function() {
		$cont = $("#category-nav-cont");

		if ($cont.offset().left + $cont.outerWidth() >= $(window).width() + 300) {
			$cont.css("right", "0px");
			$("#account-nav-cont").css("left", "");
		}
		else {
			$cont.css("right", "");
		}
	});



}


function setClick($item, clickFunction, button="left") {
	if (button == "left") {
		$item.unbind('click').click(clickFunction);
	}
}