(function($) {

	$.fn.phoneblink = function() {
		return this.each(function() {
			$(this).html($(this).html().replace(/[1]{0,1}[-]{0,1}[\(]{0,1}[0-9]{3}[\)]{0,1}[ ]{0,1}[-]{0,1}[0-9]{3}-[0-9]{4}/g, function(phone) {
				return '<blink>'+phone+'</blink>';
			}));
		});
	};

})(jQuery);