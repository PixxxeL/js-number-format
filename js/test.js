
module('Проверка функции number_format');

test('Общие тесты', 3, function () {
    var tested = number_format;
    equal(typeof tested, 'function', 'number_format - функция');
    strictEqual(tested(1234.5678), '1 234.5678', 'Выходной формат - строка');
    strictEqual(tested(1234.5678, 2), '1 234.57', 'Выходной формат - строка с форматированием десятичной части');
});

test('С цифрами на входе', 11, function () {
    var tested = number_format;
    strictEqual(tested(0), '0', 'На входе ноль');
    strictEqual(
    	tested(50000000000000000000000000000000), 
    	'5e+31', 
    	'На входе крупное число'
    );
    strictEqual(tested(-1234.5678), '-1 234.5678', 'На входе отрицательное число');
    strictEqual(tested(0777), '511', 'На входе восьмиричное число');
    strictEqual(tested(0xff), '255', 'На входе шестнадцатиричное число');
    strictEqual(tested(1.234), '1.234', 'На входе 1.234');
    strictEqual(tested(12.34), '12.34', 'На входе 12.34');
    strictEqual(tested(123.4), '123.4', 'На входе 123.4');
    strictEqual(tested(123456), '123 456', 'На входе 123456');
    strictEqual(tested(1234567), '1 234 567', 'На входе 1234567');
    strictEqual(tested(12345678), '12 345 678', 'На входе 12345678');
});

test('С неожиданными объектами на входе', 6, function () {
    var tested = number_format;
    strictEqual(tested(false), '0', 'На входе булев тип');
    strictEqual(tested(null), '0', 'На входе null');
    strictEqual(tested(undefined), '0', 'На входе undefined');
    strictEqual(tested([]), '0', 'На входе массив');
    strictEqual(tested({}), '0', 'На входе объект');
    strictEqual(tested(function(){}), '0', 'На входе функция');
});

test('Со строками на входе', 10, function () {
    var tested = number_format;
    strictEqual(tested('1234.567'), '1 234.567', 'На входе - валидная строка');
    strictEqual(tested('+1234.567'), '1 234.567', 'На входе - валидная строка с плюсом в начале');
    strictEqual(tested('-1234.567'), '-1 234.567', 'На входе - валидная строка с минусов в начале');
    strictEqual(tested('1234,567'), '1 234', 'На входе - неправильный разделитель');
    strictEqual(tested('1234,56.7'), '1 234', 'На входе - два разделителя, первый - неправильный');
    strictEqual(tested('1234.56,7'), '1 234.56', 'На входе - два разделителя, второй - неправильный');
    strictEqual(tested('1234.56.7'), '1 234.56', 'На входе - два правильных разделителя');
    strictEqual(tested('0777'), '777', 'На входе - строка восьмиричного числа');
    strictEqual(tested('0xff'), '0', 'На входе - строка шестнадцатиричного числа');
    strictEqual(tested('asd'), '0', 'На входе - строка без цифр');
});
