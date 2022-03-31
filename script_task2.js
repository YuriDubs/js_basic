var a = 1,
    b = 1,
    c, d;
c = ++a;
console.log(c); // 2 переменная а = 2 (переменная вначале увеличится, а уже затем будет вывод на экран), с = 2
d = b++;
console.log(d); // 1 переменная b = 1 (так как вначале сработает вывод на экран, а уже затем переменная увеличится), d = 1
c = (2 + ++a);
console.log(c); // 5 в памяти держится предыдущее значение, поэтому а = 3 и с = (2 + 3) = 5 
d = (2 + b++);
console.log(d); // 4 так и здесь как в предыдущем, поэтому b = 2 и d = (2 + 2) = 4 
console.log(a); // 3 здесь переменная а = 3 (так как в памяти предыдущие операции инкремента)
console.log(b); // 3 здесь переменная b = 3 (так как в памяти предыдущие операции инкремента)


var a = 2;
var x = 1 + (a *= 2);
console.log(x); // x = 1 + (2 * 2) = 5


var a = 3,
    b = 5,
    r, m, s;
r = (a - b);
m = (a * b);
s = (-a + b)
console.log(r); // 3 - 5 = -2
console.log(m); // 3 * 5 = 15
console.log(s); // -3 + 5 = 2


a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 1:
        alert('1');
    case 2:
        alert('2');
    case 3:
        alert('3');
    case 4:
        alert('4');
    case 5:
        alert('5');
    case 6:
        alert('6');
    case 7:
        alert('7');
    case 8:
        alert('8');
    case 9:
        alert('9');
    case 10:
        alert('10');
    case 11:
        alert('11');
    case 12:
        alert('12');
    case 13:
        alert('13');
    case 14:
        alert('14');
    case 15:
        alert('15');
}


var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}