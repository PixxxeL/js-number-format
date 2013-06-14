
var number_format = function (value, decimal) {
	var delim = ' ', parts, integ, fract, i, j, ch;
	
	if (typeof value === 'string') {
		value = parseFloat(value) || 0;
	}
	else if (typeof value !== 'number') {
		value = 0;
	}
	
	if (typeof decimal === 'number') {
		value = value.toFixed(decimal);
	} 
	else {
		value = String(value);
	}
	
	// убрать сие
	var parts = value.split('.'),
		integ = parts.shift();
	if (parts.length > 0) {
		parts.unshift('.');
	}
	for (i = integ.length - 1, j = 0; i >= 0; i--, j++) {
        ch = integ[i];
        if (ch.charCodeAt(0) < 48 || ch.charCodeAt(0) > 57) {
            j--;
            continue;
        }
        addit = (j % 3 == 0 && j != 0) ? delim : '';
        parts.unshift(ch, addit);
    }
	
	return parts.join('');
};
