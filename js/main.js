
$( function () {
	var input = $('input'),
		processTest = function () {
		input.val( format_number( input.val() ) );
	    };
	processTest();
	input.on('keyup', processTest).on('blur', processTest);
});
