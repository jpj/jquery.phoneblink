(function($) {

	// Non-blink browser support
	var testBlinkEl = document.createElement('blink');
	var hasBlinkSupport = testBlinkEl.toString() != '[object HTMLUnknownElement]';
	function blink(selector){
		$(selector).animate({
			opacity:0
		}, 50, "linear", function() {
			$(this).delay(400);
			$(this).animate({
				opacity:1
			}, 50, function() {
				blink(this);
			});
			$(this).delay(400);
		});
	}

	$.fn.phoneblink = function() {
		return this.each(function() {
			$(this).html($(this).html().replace(/[1]{0,1}[-]{0,1}[\(]{0,1}[0-9]{3}[\)]{0,1}[ ]{0,1}[-]{0,1}[0-9]{3}-[0-9]{4}|[1]{0,1}[-]{0,1}[\(]{0,1}[0-9]{3}[\)]{0,1}[ ]{0,1}[-]{0,1}[a-zA-Z]{7}|911/g, function(phone) {
				return '<blink>'+phone+'</blink>';
			}));

			if (!hasBlinkSupport) {
				blink($(this).find("blink"));
			}
		});
	};

})(jQuery);
