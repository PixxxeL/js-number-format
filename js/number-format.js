/**
 * Format digits by space after every 3 signs in integer part
 * 
 * @param {*}value	any value for formatting
 * @param {int}decimal	decimal digits after separator (usually dot)
 * @return
 */

/*jslint continue: true, plusplus: true, white: true */

var number_format = function (value, decimal) {

    'use strict';

    var delim = ' ',
        buff = '',
        sep = '.',
        sepIndex, integ, fract, i, j, ch,
        toInt = function (d) { return parseInt(d, 10) || 0; };
    
    if (typeof value === 'string') {
    	sepIndex = value.indexOf(sep);
    	if (sepIndex !== -1) {
    		fract = value.substr(sepIndex);
    	}
    	value = parseFloat(value.replace(/\s+/g, '')) || 0;
    }
    else if (typeof value !== 'number') {
        value = 0;
    }
    
    if (typeof decimal === 'number') {
        value = value.toFixed(toInt(decimal));
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
        fract = fract || '';
    }
    
    for (i = integ.length - 1, j = 0; i >= 0; i--, j++) {
        ch = integ[i];
        if (ch.charCodeAt(0) < 48 || ch.charCodeAt(0) > 57) {
            j--;
            buff = ch + buff;
            continue;
        }
        if (j % 3 === 0 && j !== 0) {
            buff = delim + buff;
        }
        buff = ch + buff;
    }
    
    return buff + fract;
};
