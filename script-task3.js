1.

function primeNumbers() {
    var setOfNumbers = +prompt('Введите конечное значение числового ряда от 2 до 100 для вывода простых чисел');
    while (setOfNumbers <= 1) {
        alert('Конечное значение числового ряда не может быть меньше, чем 2');
        setOfNumbers = +prompt('Введите конечное значение числового ряда от 2 до 100 для вывода простых чисел');
    }

    var i = 2;
    var primeArr = [];
    while (i <= setOfNumbers) {
        if (i == 2 || i == 3 || i == 5 || i == 7) {
            primeArr.push(" " + i);
            i++
            continue;
        } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            i++;
            continue;
        }
        primeArr.push(" " + i++);
    }
    document.getElementById('question-1').innerHTML = primeArr;
}

2.

function countBasketPrice() {
    var basket = [{
            title: 'Товар-1',
            price: 100,
            count: 3
        },
        {
            title: 'Товар-2',
            price: 200,
            count: 5
        },
        {
            title: 'Товар-3',
            price: 300,
            count: 1
        },
    ];
    var sum = 0;
    var quantity = 0;
    var name = 'В корзине находится товар следующих наименований: ';
    for (var item of basket) {
        sum += (item.price * item.count);
        quantity += item.count;
        name += '(' + item.title + ') ';

    }
    var q = basket.length;
    document.getElementById('question-2-3').innerHTML = 'Всего товаров в корзине: ' + q + '.<br>' + name + '.<br>Общее количество выбранных позиций товаров составляет, шт.: ' + quantity + '.<br>Стоимость всех выбранных товаров в корзине составляет, руб.: ' + sum + '.';
}

3.

function withoutBody() {
    var arr = [];
    for (var i = 0; i <= 9; arr.push(i++ + ' ')) {}
    document.getElementById('question-4').innerHTML = arr;
}

4.

function x() {
    var i = 1
    var x = '';
    while (i <= 20) {
        i++;
        console.log(x += 'x');
    }
    document.getElementById('question-5').innerHTML = 'После запуска скрипта проверьте "пирамиду" CONSOLE.LOG';
}