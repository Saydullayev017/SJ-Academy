
// src/data/documents.js

export const JsDocumentFirst = [
    {
        id: 1,
        path: "js1",
        content: [
            { type: 'header', value: 'Переменные' },
            { type: 'text', value: 'Переменные в JavaScript используются для хранения данных и могут быть объявлены с помощью трех ключевых слов: var, let и const.' },
            { type: 'header', value: 'Способы объявления переменных'},
            { type: 'text', value: '1. var (устаревший способ): Используется для объявления переменных, которые могут быть как локальными, так и глобальными.'},
            { type: 'code', value: `var x = 5;` },
            { type: 'text', value: '2. let (для переменных, значение которых может изменяться):'},
            { type: 'code', value: `let y = 10; y = 20; // допустимо` },
            { type: 'text', value: '3. const (для констант, значение которых не должно изменяться):'},
            { type: 'code', value: `
                const PI = 3.14159;
// PI = 3; // вызовет ошибку` },
            { type: 'header', value: 'Правила именования переменных'},
            { type: 'text', value: 'Идентификаторы должны начинаться с буквы, знака доллара ($) или нижнего подчеркивания (_).'},
            { type: 'text', value: 'Они чувствительны к регистру.'},
            { type: 'text',  value: 'Примеры корректных имен: myVar, _temp, $value.'},
            { type: 'header', value: 'Типы данных'},
            { type: 'text', value: 'JavaScript имеет восемь основных типов данных, которые делятся на примитивные и сложные.'},
            { type: 'header', value: 'Примитивные типы данных'},
            { type: 'text', value: '1. String: представляет строки текста.'},
            { type: 'code', value: `let name = "John";`},
        
            { type: 'text', value: '2. Number: представляет числовые значения (как целые, так и дробные).'},
            { type: 'code', value: `let age = 30;`},

            { type: 'text', value: '3. BigInt: используется для представления больших целых чисел'},
            { type: 'code', value: `let bigNumber = 1234567890123456789012345678901234567890n;`},

            { type: 'text', value: '4. Boolean: логический тип, который может принимать значения true или false.'},
            { type: 'code', value: `let isActive = true;`},

            { type: 'text', value: '5. Undefined: указывает на то, что переменная была объявлена, но не инициализирована.'},
            { type: 'code', value: `
                let notAssigned;
console.log(notAssigned); // undefined`},

            { type: 'text', value: '6. Null: специальное значение, указывающее на отсутствие значения.'},
            { type: 'code', value: `let emptyValue = null;`},

            { type: 'text', value: '7. Symbol: уникальный и неизменяемый тип данных, часто используется для создания уникальных идентификаторов.'},
            { type: 'code', value: `const uniqueId = Symbol('id');`},

            { type: 'text', value: '8. Object: представляет комплексные структуры данных, которые могут содержать свойства и методы..'},
            { type: 'code', value: `
let person = {
        name: "Alice",
        age: 25,
        greet: function() {
                    console.log("Hello!");
        }
};
                `},

                { type: 'header', value: 'Динамическая типизация'},
                { type: 'text', value: 'JavaScript является динамически типизированным языком, что означает, что тип переменной может изменяться во время выполнения программы. Например:'},
                { type: 'code', value: `
                    let value = 42; // number
value = "Hello"; // теперь строка
                    `},

                { type: 'header', value: 'Проверка типов данных'},
                { type: 'text', value: 'Для проверки типа переменной можно использовать оператор typeof. Например:'},
                { type: 'code', value: 'console.log(typeof value); // "string"'},
        ],
    },
];
export const JsDocumentSecond = [
    {
        id: 2,
        path: "js2",
        content: [
            { type: 'header', value: 'Операторы' },
            { type: 'text', value: 'В JavaScript операторы играют важную роль в выполнении различных операций над данными. Они позволяют выполнять математические вычисления, сравнения, логические операции и многое другое. Рассмотрим основные типы операторов, их назначение и примеры использования.' },
        
            { type: 'header', value: '1. Арифметические операторы' },
            { type: 'text', value: 'Используются для выполнения математических операций.' },
            { type: 'text', value: '1. + (сложение): 5 + 3 возвращает 8.' },
            { type: 'text', value: '2. - (вычитание): 5 - 3 возвращает 2.' },
            { type: 'text', value: '3. * (умножение): 5 * 3 возвращает 15.' },
            { type: 'text', value: '4. / (деление): 6 / 3 возвращает 2.' },
            { type: 'text', value: '5. % (остаток от деления): 7 % 3 возвращает 1.' },
            { type: 'text', value: '6. ++ (инкремент): увеличивает значение на 1. Пример: let x = 5; x++; // x теперь 6.' },
            { type: 'text', value: '7. -- (декремент): уменьшает значение на 1. Пример: let y = 5; y--; // y теперь 4.' },

            { type: 'header', value: '2. Операторы присваивания' },
            { type: 'text', value: '1. Используются для присвоения значений переменным.' },
            { type: 'text', value: '2. =: простое присваивание, например, let a = 5;.' },
            { type: 'text', value: '3. +=: сложение с присваиванием, например, a += 2; // эквивалентно a = a + 2;.' },
            { type: 'text', value: '4. -=: вычитание с присваиванием, например, a -= 2;.' },
            { type: 'text', value: '5. Другие операторы присваивания: *=, /=, %= и т.д.' },

            { type: 'header', value: '3. Операторы сравнения' },
            { type: 'text', value: 'Используются для сравнения значений и возвращают логическое значение (true или false).' },
            { type: 'text', value: '1. ==: нестрогое равенство, например, 5 == "5" возвращает true.' },
            { type: 'text', value: '2. ===: строгое равенство, например, 5 === "5" возвращает false.' },
            { type: 'text', value: '3. !=: неравенство, например, 5 != "4" возвращает true.' },
            { type: 'text', value: '4. <, >, <=, >=: сравнение чисел.' },

            { type: 'header', value: '4. Логические операторы' },
            { type: 'text', value: 'Используются для выполнения логических операций.' },
            { type: 'text', value: '&&: логическое "И", возвращает true, если оба операнда истинны.' },
            { type: 'code', value: 'let result = true && false; // result будет false' },
            { type: 'text', value: '||: логическое "ИЛИ", возвращает true, если хотя бы один из операндов истинен.' },
            { type: 'code', value: 'let a = (1, 2, 3); // a будет равно 3' },
            { type: 'text', value: 'Операторы доступа к свойствам объектов' },
            { type: 'text', value: 'Точка (.) и квадратные скобки ([]) используются для доступа к свойствам объектов.' },
            { type: 'text', value: 'Специальные операторы' },
            { type: 'text', value: 'Оператор типа (typeof) возвращает строку с типом переменной.' },
            { type: 'code', value: 'console.log(typeof "Hello"); // "string"' },
            { type: 'header', value: 'Приоритет операторов' },
            
            { type: 'text', value: 'Приоритет операторов определяет порядок их выполнения в выражениях. Например, арифметические операции выполняются до логических, а операции сравнения — до присваивания.Знание операторов и их особенностей поможет вам эффективно писать код на JavaScript и решать различные задачи программирования' },
            


        ],
    },
];
export const JsDocumentТhird = [
    {
        id: 3,
        path: "js3",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentFourth = [
    {
        id: 4,
        path: "js4",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentFifth = [
    {
        id: 5,
        path: "js5",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentSixth = [
    {
        id: 6,
        path: "js6",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentSeventh = [
    {
        id: 7,
        path: "js7",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentEighth = [
    {
        id: 8,
        path: "js8",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentNinth = [
    {
        id: 9,
        path: "js9",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentTenth = [
    {
        id: 10,
        path: "js10",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentEleventh = [
    {
        id: 11,
        path: "js11",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentTwelfth = [
    {
        id: 12,
        path: "js12",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentThirteenth = [
    {
        id: 13,
        path: "js13",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentFourteenth = [
    {
        id: 14,
        path: "js14",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentFifteenth = [
    {
        id: 15,
        path: "js15",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentSixteenth = [
    {
        id: 16,
        path: "js16",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
export const JsDocumentSeventeenth = [
    {
        id: 17,
        path: "js17",
        content: [
            { type: 'header', value: 'Что такое HTML ?' },
            { type: 'text', value: '' },
        ],
    },
];
