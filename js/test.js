
test('Проверка функции MEGATYUMEN.utils.numberFormat', 17, function () {
    var tested = format_number;
    equal(typeof tested, 'function', 'format_number - функция');
    strictEqual(tested(1234.5678), '1 234.5678', 'Выходной формат - строка');
    strictEqual(tested(0), '0', 'На входе - ноль');
    strictEqual(tested(5000000000000), '5 000 000 000 000', 'На входе - крупное число');
    strictEqual(tested('1234.567'), '1 234.567', 'На входе - валидная строка');
    strictEqual(tested('1234,567'), '1 234,567', 'На входе - неправильный разделитель');
    strictEqual(tested('1234,56.7'), '123 4,56.7', 'На входе - два разделителя, первый - неправильный');
    strictEqual(tested('1234.56,7'), '1 234.56,7', 'На входе - два разделителя, второй - неправильный');
    strictEqual(tested('1234.56.7'), '1 234.56.7', 'На входе - два правильных разделителя');
    strictEqual(tested('0777'), '0 777', 'На входе - строка восьмиричного числа');
    strictEqual(tested('0xff'), '0xff', 'На входе - строка шестнадцатиричного числа');
    strictEqual(tested('asd'), 'asd', 'На входе - строка без цифр');
    strictEqual(tested(false), 'false', 'На входе - булев тип');
    strictEqual(tested(null), 'null', 'На входе - null');
    strictEqual(tested(undefined), 'undefined', 'На входе - undefined');
    strictEqual(tested(0777), '511', 'На входе - восьмиричное число');
    strictEqual(tested(0xff), '255', 'На входе - шестнадцатиричное число');
});
