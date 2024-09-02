// src/data/documents.js

export const CssDocumentFirst = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: 'Синтаксис CSS' },
            { type: 'text', value: 'CSS (Cascading Style Sheets) — это язык стилей, который используется для описания внешнего вида документа, написанного на HTML. Основные компоненты CSS включают селекторы, свойства и значения.' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: '1. Селекторы' },
            { type: 'text', value: 'Селекторы — это элементы, к которым применяются стили. Они определяют, какие HTML-элементы будут затронуты стилем. Вот несколько основных типов селекторов:' },
            { type: 'text', value: '1.1 Селектор по тегу: выбирает все элементы определенного тега.' },
            { type: 'code', value: `
            p {
                        color: blue; /* Все <p> будут синими */
            }
            
            ` },
            { type: 'text', value: '1.2 Селектор по классу: выбирает элементы с определенным классом. Класс обозначается точкой (.)' },
            { type: 'code', value: `
            .my-class {
                        font-size: 20px; /* Элементы с классом "my-class" будут размером 20px */
            }
            
            ` },
            { type: 'text', value: '1.3 Селектор по идентификатору: выбирает элемент с определенным идентификатором. Идентификатор обозначается решеткой (#).' },
            { type: 'code', value: `
            #my-id {
                        background-color: yellow; /* Элемент с id "my-id" будет с желтым фоном */
            }
            
            ` },
            { type: 'text', value: '1.4 Комбинированные селекторы: можно комбинировать селекторы для более точного выбора.' },
            { type: 'code', value: `
            div.my-class {
                        margin: 10px; /* Все <div> с классом "my-class" будут иметь отступ 10px */
            }
            
            ` },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: '2. Свойства' },
            { type: 'text', value: 'Свойства определяют, какие именно стили будут применены к выбранным элементам. Вот несколько распространенных свойств:' },
            { type: 'text', value: 'color: задает цвет текста.' },
            { type: 'text', value: 'background-color: задает цвет фона.' },
            { type: 'text', value: 'font-size: задает размер шрифта.' },
            { type: 'text', value: 'margin: задает внешние отступы.' },
            { type: 'text', value: 'padding: задает внутренние отступы.' },
            { type: 'text', value: 'border: задает рамку вокруг элемента.' },
        
        ],
    },
    {
        id: 4,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: '3. Значения' },
            { type: 'text', value: 'Значения определяют, как именно будет применено свойство. Они могут быть различных типов:' },
            { type: 'text', value: '3.1 Цвета: могут быть заданы в различных форматах (названия, HEX, RGB и т.д.).' },
            { type: 'code', value: `
            color: red; /* Название цвета */
            background-color: #ff0000; /* HEX код */
            border: 1px solid rgba(0, 0, 0, 0.5); /* RGBA */
            ` },
            { type: 'text', value: '3.2 Размеры: могут быть заданы в пикселях (px), процентах (%), em, rem и других единицах.' },
            { type: 'code', value: `
            font-size: 16px; /* Пиксели */
            width: 50%; /* Процент от родительского элемента */
            ` },
            { type: 'text', value: '3.3 Другие значения: могут быть специфичными для свойства, например, для свойства display можно использовать значения block, inline, flex и т.д.' },
            { type: 'code', value: `
            display: flex; /* Устанавливает флекс-контейнер */
            ` },
        ],
    },
    {
        id: 5,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Пример кода' },
            { type: 'text', value: 'Вот пример, который объединяет все вышеперечисленные элементы:' },
            { type: 'code', value: `
<!DOCTYPE html>
<html lang="ru">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Пример CSS</title>
        <style>
                    body {
                        background-color: #f0f0f0; /* Цвет фона страницы */
                    }
                    h1 {
                        color: darkblue; /* Цвет заголовка */
                        font-size: 24px; /* Размер шрифта заголовка */
                    }
                    .my-paragraph {
                        margin: 20px; /* Внешний отступ параграфа */
                        padding: 10px; /* Внутренний отступ параграфа */
                        background-color: white; /* Цвет фона параграфа */
                        border: 1px solid #ccc; /* Рамка параграфа */
                    }
        </style>
</head>
<body>
                <h1>Привет, мир!</h1>
                <p class="my-paragraph">Это пример параграфа с применением CSS.</p>
</body>
</html>

            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Теперь у вас есть базовое понимание синтаксиса CSS, включая селекторы, свойства и значения. Это основа, на которой строится дальнейшее изучение CSS. ' },
        ],
    },
];

export const CssDocumentSecond = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/Css2",
        content: [
            { type: 'header', value: 'Блочная модель' },
            { type: 'text', value: 'Блочная модель CSS определяет прямоугольную область, занимаемую каждым HTML-элементом. Она состоит из четырех основных компонентов: содержимое (content), внутренние отступы (padding), граница (border) и внешние отступы (margin).' },
        ],
    },
    {
        id: 2,
        path: "/Css2",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: '1. Содержимое (content)' },
            { type: 'text', value: 'Содержимое — это область, где располагается текст или изображения элемента. Размер содержимого определяется свойствами width и height.' },
            { type: 'code', value: `
            div {
                    width: 200px;
                    height: 100px;
            }
            ` },

        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/Css2",

        content: [
            { type: 'header', value: '2. Внутренние отступы (padding)' },
            { type: 'text', value: 'Внутренние отступы — это пространство между содержимым и границей элемента. Они задаются с помощью свойств padding-top, padding-right, padding-bottom и padding-left.' },
            { type: 'code', value: `
            div {
                    padding: 20px; /* Одинаковый отступ со всех сторон */
                    padding: 10px 20px; /* Вертикальный и горизонтальный отступы */
                    padding: 10px 15px 20px; /* Верхний, горизонтальный и нижний отступы */
                    padding: 5px 10px 15px 20px; /* Верхний, правый, нижний и левый отступы */
            }
            ` },

        ],
    },

    {
        id: 4,
        // title: "Что такое HTML?",
        path: "/Css2",

        content: [
            { type: 'header', value: '3. Граница (border)' },
            { type: 'text', value: 'Граница — это линия, окружающая содержимое и внутренние отступы элемента. Она задается с помощью свойств border-width, border-style и border-color.' },
            { type: 'code', value: `
            div {
                    border: 1px solid black; /* Ширина, стиль и цвет границы */
                    border-top: 2px dotted red; /* Верхняя граница */
            }
            
            ` },

        ],
    },

    {
        id: 5,
        // title: "Что такое HTML?",
        path: "/Css2",

        content: [
            { type: 'header', value: '4. Внешние отступы (margin)' },
            { type: 'text', value: 'Внешние отступы — это пространство между границей элемента и окружающими элементами. Они задаются с помощью свойств margin-top, margin-right, margin-bottom и margin-left.' },
            { type: 'code', value: `
            div {
                    margin: 20px; /* Одинаковый отступ со всех сторон */
                    margin: 10px 20px; /* Вертикальный и горизонтальный отступы */
                    margin: 10px 15px 20px; /* Верхний, горизонтальный и нижний отступы */
                    margin: 5px 10px 15px 20px; /* Верхний, правый, нижний и левый отступы */
            }
            
            ` },

        ],
    },

    {
        id: 6,
        // title: "Что такое HTML?",
        path: "/Css2",

        content: [
            { type: 'header', value: 'Пример кода' },
            { type: 'code', value: `
<!DOCTYPE html>
<html lang="ru">
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Блочная модель</title>
                    <style>
                        .box {
                            width: 200px;
                            height: 100px;
                            background-color: #f0f0f0;
                            padding: 20px;
                            border: 1px solid #ccc;
                            margin: 50px;
                        }
                    </style>
        </head>
        <body>
                    <div class="box">
                        Это пример блока с применением блочной модели.
                    </div>
        </body>
</html>
            
            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Блочная модель — это фундаментальное понятие в CSS, которое определяет размеры и отступы элементов. Понимание этой концепции поможет вам правильно размещать и выравнивать элементы на странице.' },


        ],
    },
];

export const CssDocumentТhird = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: 'Позиционирование в CSS' },
            { type: 'text', value: 'Позиционирование элементов в CSS позволяет управлять их расположением на странице. Свойство position определяет, как элемент будет позиционироваться в документе. Вот основные значения этого свойства:' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: '1. static' },
            { type: 'text', value: 'Это значение по умолчанию для всех элементов. Элементы с position: static располагаются в соответствии с нормальным потоком документа. Свойства top, right, bottom, left и z-index не применяются к таким элементам.' },
            { type: 'code', value: `
<div style="background: #fee; width: 500px;">
            <h2 style="background: #aef; margin: 0">Заголовок</h2>
            <div>А тут - всякий разный текст...</div>
</div>
            ` },
            
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: '2. relative' },
            { type: 'text', value: 'Элемент с position: relative позиционируется относительно своего нормального положения. Это означает, что вы можете использовать свойства top, right, bottom и left для сдвига элемента, но окружающие элементы будут вести себя так, как будто он не сдвинут.' },
            { type: 'code', value: `
            .relative-box {
                        position: relative;
                        top: 20px; /* Сдвигает элемент вниз на 20px */
                        left: 30px; /* Сдвигает элемент вправо на 30px */
            }
            
            ` },

        ],
    },

    {
        id: 4,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: '3. absolute' },
            { type: 'text', value: 'Элемент с position: absolute позиционируется относительно ближайшего предка с ненормальным позиционированием (то есть, который имеет relative, absolute, fixed или sticky). Если такого предка нет, элемент будет позиционироваться относительно окна браузера.' },
            { type: 'code', value: `
            .absolute-box {
                        position: absolute;
                        top: 50px; /* Сдвигает элемент вниз на 50px от верхней части родителя */
                        right: 20px; /* Сдвигает элемент вправо на 20px от правой стороны родителя */
            }
            ` },

        ],
    },

    {
        id: 5,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: '4. fixed' },
            { type: 'text', value: 'Элемент с position: fixed позиционируется относительно окна браузера. Это означает, что он остается на одном и том же месте, даже когда пользователь прокручивает страницу.' },
            { type: 'code', value: `
            .fixed-box {
                        position: fixed;
                        bottom: 10px; /* Сдвигает элемент вверх на 10px от нижней части окна */
                        left: 10px; /* Сдвигает элемент вправо на 10px от левой стороны окна */
            }
            ` },

        ],
    },

    {
        id: 4,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Пример кода' },
            { type: 'text', value: 'Вот пример, который демонстрирует все четыре типа позиционирования:' },
            { type: 'code', value: `
<!DOCTYPE html>
<html lang="ru">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Позиционирование в CSS</title>
                <style>
                    .static-box {
                        position: static;
                        background-color: lightgrey;
                        padding: 10px;
                        margin: 10px;
                    }
            
                    .relative-box {
                        position: relative;
                        top: 20px;
                        left: 30px;
                        background-color: lightblue;
                        padding: 10px;
                        margin: 10px;
                    }
            
                    .absolute-box {
                        position: absolute;
                        top: 50px;
                        right: 20px;
                        background-color: lightgreen;
                        padding: 10px;
                        margin: 10px;
                    }
            
                    .fixed-box {
                        position: fixed;
                        bottom: 10px;
                        left: 10px;
                        background-color: lightcoral;
                        padding: 10px;
                    }
                </style>
</head>
<body>
                <div class="static-box">Статическое позиционирование</div>
                <div class="relative-box">Относительное позиционирование</div>
                <div class="absolute-box">Абсолютное позиционирование</div>
                <div class="fixed-box">Фиксированное позиционирование</div>
</body>
</html>
            
            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Понимание различных типов позиционирования в CSS является ключевым для создания сложных макетов и управления расположением элементов на странице. ' },

        ],
    },

];


export const CssDocumentFourth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '1. Block (блочные элементы)' },
            { type: 'text', value: 'Блочные элементы всегда начинаются с новой строки и занимают всю доступную ширину родительского контейнера. Они создают новый блок в потоке документа и могут содержать другие блочные и строчные элементы. Блочные элементы автоматически добавляют отступы (margin) сверху и снизу.' },
            { type: 'text', value: 'Примеры блочных элементов:' },
            { type: 'text', value: '`<div>`' },
            { type: 'text', value: '`<p>`' },
            { type: 'text', value: '`<h1>, <h2>, <h3>, итд.`' },
            { type: 'text', value: '`<section>`' },
            { type: 'text', value: '`<article>`' },
            { type: 'text', value: 'Пример кода:' },
            { type: 'code', value: `
<div style="background-color: lightblue; padding: 10px;">
            Это блочный элемент.
</div>
<p>Это еще один блочный элемент.</p>
            ` },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: '2. Inline (строчные элементы)' },
            { type: 'text', value: 'Строчные элементы не начинают с новой строки и занимают только ту ширину, которая необходима для их содержимого. Они могут находиться на одной строке с другими строчными элементами. Для строчных элементов свойства width и height не работают.' },
            { type: 'text', value: 'Примеры строчных элементов:' },
            { type: 'text', value: '`<span>`' },
            { type: 'text', value: '`<a>`' },
            { type: 'text', value: '`<img>`' },
            { type: 'text', value: '`<strong>`' },
            { type: 'text', value: '`<em>`' },
            { type: 'text', value: '`Пример кода:`' },
            { type: 'code', value: `
<p>
            Это <span style="color: red;">строчный элемент</span> внутри параграфа.
</p>
            ` },

        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: '3. Inline-Block (строчно-блочные элементы)' },
            { type: 'text', value: 'Строчно-блочные элементы ведут себя как строчные элементы, но позволяют устанавливать ширину и высоту. Они не создают новой строки после себя, что позволяет им находиться на одной строке с другими элементами, как строчные элементы, но при этом могут иметь размеры, как блочные элементы. Примеры строчно-блочных элементов:' },
            { type: 'text', value: ' Элементы, у которых задано display: inline-block.' },
            
            { type: 'code', value: `
<div style="display: inline-block; width: 100px; height: 100px; background-color: lightgreen; margin: 5px;">
            Это строчно-блочный элемент.
</div>
<div style="display: inline-block; width: 100px; height: 100px; background-color: lightcoral; margin: 5px;">
            Это еще один строчно-блочный элемент.
</div>

            ` },
        
        ],
    },

    {
        id: 4,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: 'Сравнение' },
            { type: 'header', value: 'Блочные элементы:' },
            { type: 'text', value: 'Начинаются с новой строки.' },
            { type: 'text', value: 'Занимают всю ширину родителя.' },
            { type: 'text', value: 'Могут содержать другие блочные и строчные элементы.' },

            { type: 'header', value: 'Строчные элементы:' },
            { type: 'text', value: 'Начинаются с новой строки.' },
            { type: 'text', value: 'Занимают только необходимую ширину.' },
            { type: 'text', value: 'Не могут содержать блочные элементы.' },

            { type: 'header', value: 'Строчно-блочные элементы:' },
            { type: 'text', value: 'Не начинают с новой строки.' },
            { type: 'text', value: 'Позволяют устанавливать ширину и высоту.' },
            { type: 'text', value: 'Могут находиться на одной строке с другими элементами.' },

            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Понимание различий между блочными, строчными и строчно-блочными элементами является важным аспектом работы с CSS и помогает в создании структурированных и адаптивных макетов. ' },
        ],
    },

];


export const CssDocumentFifth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '' },
            { type: 'text', value: '' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: 'Зачем нужен HTML?' },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Темы, которые мы рассмотрим' },
            { type: 'text', value: '1. Основы HTML' },
        ],
    },

];


export const CssDocumentSixth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '' },
            { type: 'text', value: '' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: 'Зачем нужен HTML?' },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Темы, которые мы рассмотрим' },
            { type: 'text', value: '1. Основы HTML' },
        ],
    },

];


export const CssDocumentSeventh = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '' },
            { type: 'text', value: '' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: 'Зачем нужен HTML?' },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Темы, которые мы рассмотрим' },
            { type: 'text', value: '1. Основы HTML' },
        ],
    },

];


export const CssDocumentEighth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '' },
            { type: 'text', value: '' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: 'Зачем нужен HTML?' },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Темы, которые мы рассмотрим' },
            { type: 'text', value: '1. Основы HTML' },
        ],
    },

];


export const CssDocumentNinth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '' },
            { type: 'text', value: '' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: 'Зачем нужен HTML?' },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Темы, которые мы рассмотрим' },
            { type: 'text', value: '1. Основы HTML' },
        ],
    },

];


export const CssDocumentTenth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '' },
            { type: 'text', value: '' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: 'Зачем нужен HTML?' },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Темы, которые мы рассмотрим' },
            { type: 'text', value: '1. Основы HTML' },
        ],
    },

];


export const CssDocumentEleventh = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/",
        content: [
            { type: 'header', value: '' },
            { type: 'text', value: '' },
        ],
    },
    {
        id: 2,
        path: "/",

        // title: "Зачем нужен HTML?",
        content: [
            { type: 'header', value: 'Зачем нужен HTML?' },
        ],
    },
    {
        id: 3,
        // title: "Что такое HTML?",
        path: "/",

        content: [
            { type: 'header', value: 'Темы, которые мы рассмотрим' },
            { type: 'text', value: '1. Основы HTML' },
        ],
    },

];
