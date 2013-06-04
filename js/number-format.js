
var format_number = function (theStr) {
    var delim = ' ',
    	dots = ['.', ','],
    	integ = '', 
    	fract = '',
    	addit = '',
    	temp = [],
    	parts = [],
    	dot, ch, i, j;
    
    theStr = String(theStr).replace(/[^\d\.\,]+/g, '')
    	.replace(/\.+/g, '.')
    	.replace(/\,+/g, ',');

    for (i in dots) {
    	dot = dots[i];
        if (theStr.indexOf(dot) != -1) {
        	parts = theStr.split(dot);
        	break;
        }
    }
    
    if (parts.length > 1) {
        integ = parts.shift();
        fract = parts.join(dot);
    }
    else {
    	integ = theStr;
    }
    
    for (i = integ.length - 1, j = 0; i >= 0; i--, j++) {
        ch = integ[i];
        if (ch.charCodeAt(0) < 48 || ch.charCodeAt(0) > 57) {
            temp.unshift(ch);
            j--;
            continue;
        }
        addit = (j % 3 == 0 && j != 0) ? delim : '';
        temp.unshift(ch, addit);
    }
    
    if (fract != '') {
    	temp.push(dot, fract);
    }
    
    return temp.join('');
};
