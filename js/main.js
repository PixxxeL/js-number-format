
$( function () {
	var input = $('input'),
		processTest = function () {
			input.val( number_format( input.val() ) );
	    };
	processTest();
	input.on('keyup', processTest).on('blur', processTest);
});
