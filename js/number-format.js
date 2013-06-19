
var number_format = function (value, decimal) {
	var delim = ' ',
		buff = '',
		sep = '.',
		sepIndex, integ, fract, i, j, ch;
	
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
	
	sepIndex = value.indexOf(sep);
	if (sepIndex !== -1) {
		integ = value.substr(0, sepIndex);
		fract = value.substr(sepIndex);
	} else {
		integ = value;
		fract = '';
	}
	
	for (i = integ.length - 1, j = 0; i >= 0; i--, j++) {
        ch = integ[i];
        if (ch.charCodeAt(0) < 48 || ch.charCodeAt(0) > 57) {
            j--;
            buff = ch + buff;
            continue;
        }
        if (j % 3 == 0 && j != 0) {
        	buff = delim + buff;
        }
        buff = ch + buff;
    }
	
	return buff + fract;
};
