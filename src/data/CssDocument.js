// src/data/documents.js

export const CssDocumentFirst = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "css1",
        content: [
            { type: 'header', value: 'Синтаксис CSS' },
            { type: 'text', value: 'CSS (Cascading Style Sheets) — это язык стилей, который используется для описания внешнего вида документа, написанного на HTML. Основные компоненты CSS включают селекторы, свойства и значения.' },
        
        
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

            { type: 'header', value: '2. Свойства' },
            { type: 'text', value: 'Свойства определяют, какие именно стили будут применены к выбранным элементам. Вот несколько распространенных свойств:' },
            { type: 'text', value: 'color: задает цвет текста.' },
            { type: 'text', value: 'background-color: задает цвет фона.' },
            { type: 'text', value: 'font-size: задает размер шрифта.' },
            { type: 'text', value: 'margin: задает внешние отступы.' },
            { type: 'text', value: 'padding: задает внутренние отступы.' },
            { type: 'text', value: 'border: задает рамку вокруг элемента.' },

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
        path: "/css2",
        content: [
            { type: 'header', value: 'Блочная модель' },
            { type: 'text', value: 'Блочная модель CSS определяет прямоугольную область, занимаемую каждым HTML-элементом. Она состоит из четырех основных компонентов: содержимое (content), внутренние отступы (padding), граница (border) и внешние отступы (margin).' },
        
        
            { type: 'header', value: '1. Содержимое (content)' },
            { type: 'text', value: 'Содержимое — это область, где располагается текст или изображения элемента. Размер содержимого определяется свойствами width и height.' },
            { type: 'code', value: `
            div {
                    width: 200px;
                    height: 100px;
            }
            ` },

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

            { type: 'header', value: '3. Граница (border)' },
            { type: 'text', value: 'Граница — это линия, окружающая содержимое и внутренние отступы элемента. Она задается с помощью свойств border-width, border-style и border-color.' },
            { type: 'code', value: `
            div {
                    border: 1px solid black; /* Ширина, стиль и цвет границы */
                    border-top: 2px dotted red; /* Верхняя граница */
            }
            
            ` },

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
        path: "/css3",
        content: [
            { type: 'header', value: 'Позиционирование в CSS' },
            { type: 'text', value: 'Позиционирование элементов в CSS позволяет управлять их расположением на странице. Свойство position определяет, как элемент будет позиционироваться в документе. Вот основные значения этого свойства:' },
        
            { type: 'header', value: '1. static' },
            { type: 'text', value: 'Это значение по умолчанию для всех элементов. Элементы с position: static располагаются в соответствии с нормальным потоком документа. Свойства top, right, bottom, left и z-index не применяются к таким элементам.' },
            { type: 'code', value: `
<div style="background: #fee; width: 500px;">
            <h2 style="background: #aef; margin: 0">Заголовок</h2>
            <div>А тут - всякий разный текст...</div>
</div>
            ` },

            { type: 'header', value: '2. relative' },
            { type: 'text', value: 'Элемент с position: relative позиционируется относительно своего нормального положения. Это означает, что вы можете использовать свойства top, right, bottom и left для сдвига элемента, но окружающие элементы будут вести себя так, как будто он не сдвинут.' },
            { type: 'code', value: `
            .relative-box {
                        position: relative;
                        top: 20px; /* Сдвигает элемент вниз на 20px */
                        left: 30px; /* Сдвигает элемент вправо на 30px */
            }
            
            ` },

            { type: 'header', value: '3. absolute' },
            { type: 'text', value: 'Элемент с position: absolute позиционируется относительно ближайшего предка с ненормальным позиционированием (то есть, который имеет relative, absolute, fixed или sticky). Если такого предка нет, элемент будет позиционироваться относительно окна браузера.' },
            { type: 'code', value: `
            .absolute-box {
                        position: absolute;
                        top: 50px; /* Сдвигает элемент вниз на 50px от верхней части родителя */
                        right: 20px; /* Сдвигает элемент вправо на 20px от правой стороны родителя */
            }
            ` },

            { type: 'header', value: '4. fixed' },
            { type: 'text', value: 'Элемент с position: fixed позиционируется относительно окна браузера. Это означает, что он остается на одном и том же месте, даже когда пользователь прокручивает страницу.' },
            { type: 'code', value: `
            .fixed-box {
                        position: fixed;
                        bottom: 10px; /* Сдвигает элемент вверх на 10px от нижней части окна */
                        left: 10px; /* Сдвигает элемент вправо на 10px от левой стороны окна */
            }
            ` },


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
        path: "/css4",
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
        path: "/css5",
        content: [
            { type: 'header', value: '1. Названия цветов' },
            { type: 'text', value: '`CSS` поддерживает более 140 предопределенных названий цветов. Примеры включают:' },
            { type: 'text', value: '`black` (черный)' },
            { type: 'text', value: '`white` (белый)' },
            { type: 'text', value: '`red` (красный)' },
            { type: 'text', value: '`blue` (синий)' },
            { type: 'text', value: '`green` (зеленый)' },
            { type: 'text', value: 'Названия цветов нечувствительны к регистру, то есть `black` и `Black` будут восприниматься одинаково' },
            { type: 'code', value: `
            p {
                        color: blue; /* Текст станет синим */
            }
            
            ` },

            { type: 'header', value: '2. HEX (шестнадцатеричные значения)' },
            { type: 'text', value: 'HEX-коды представляют собой шестнадцатеричные значения, которые задают цвет в формате #RRGGBB, где RR, GG и BB — это значения красного, зеленого и синего компонентов соответственно. Каждое значение может варьироваться от 00 до FF (от 0 до 255 в десятичной системе). Примеры HEX-кодов:' },
            { type: 'text', value: '#000000 (черный)' },
            { type: 'text', value: '#FFFFFF (белый)L' },
            { type: 'text', value: '#FF0000 (красный)' },
            { type: 'text', value: '#00FF00 (зеленый)' },
            { type: 'text', value: '#0000FF (синий)' },
            { type: 'code', value: `
            h1 {
                        color: #FF5733; /* Текст станет оранжевым */
            }
            ` },

            { type: 'header', value: '3. RGB (красный, зеленый, синий)' },

            { type: 'text', value: 'RGB-значения задаются в формате rgb(red, green, blue), где каждый компонент может принимать значение от 0 до 255.' },
            { type: 'text', value: 'Примеры RGB:' },
            { type: 'text', value: 'rgb(0, 0, 0) (черный)' },
            { type: 'text', value: 'rgb(255, 255, 255) (белый)' },
            { type: 'text', value: 'rgb(255, 0, 0) (красный)' },
            { type: 'text', value: 'rgb(0, 255, 0) (зеленый)' },
            { type: 'text', value: 'rgb(0, 0, 255) (синий)' },

            { type: 'code', value: `
            div {
                background-color: rgb(100, 150, 200); /* Фон станет светло-голубым */
            }
            ` },

            { type: 'header', value: '4. RGBA (красный, зеленый, синий, альфа)' },
            { type: 'text', value: 'RGBA — это расширение RGB, добавляющее альфа-канал для задания прозрачности. Формат: rgba(red, green, blue, alpha), где alpha — значение от 0.0 (полностью прозрачный) до 1.0 (полностью непрозрачный).' },
            { type: 'code', value: `
            p {
                background-color: rgba(255, 0, 0, 0.5); /* Полупрозрачный красный фон */
            }
            ` },

            { type: 'header', value: '5. HSL (оттенок, насыщенность, светлота)' },
            { type: 'text', value: 'HSL-значения задаются в формате hsl(hue, saturation, lightness), где:' },
            { type: 'text', value: 'hue — оттенок (угол на цветовом круге от 0 до 360)' },
            { type: 'text', value: 'saturation — насыщенность (от 0% до 100%)' },
            { type: 'text', value: 'lightness — светлота (от 0% до 100%)' },
            { type: 'text', value: 'Примеры HSL:' },
            { type: 'text', value: 'hsl(0, 100%, 50%) (красный)' },
            { type: 'text', value: 'hsl(120, 100%, 50%) (зеленый)' },
            { type: 'text', value: 'hsl(240, 100%, 50%) (синий)' },

            { type: 'code', value: `
            h2 {
                color: hsl(240, 100%, 50%); /* Текст станет синим */
            }
            
            
            ` },

            { type: 'header', value: '6. HSLA (оттенок, насыщенность, светлота, альфа)' },
            { type: 'text', value: 'HSLA — это расширение HSL с добавлением альфа-канала для задания прозрачности. Формат: hsla(hue, saturation, lightness, alpha).' },

            { type: 'code', value: `
            h3 {
                background-color: hsla(120, 100%, 50%, 0.3); /* Полупрозрачный зеленый фон */
            }
            
            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Понимание различных способов задания цветов в CSS позволяет более гибко управлять стилями и визуальным восприятием веб-страниц.' },

        ],
    },
];


export const CssDocumentSixth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css6",
        content: [
            { type: 'header', value: '1. font-family' },
            { type: 'text', value: 'Свойство font-family определяет шрифт, который будет использоваться для текста. Вы можете указать конкретный шрифт или использовать общее название группы шрифтов. Рекомендуется указывать запасные шрифты, чтобы браузер мог выбрать альтернативу, если указанный шрифт недоступен.' },
            { type: 'code', value: `
            p {
                        font-family: 'Arial', sans-serif; /* Arial с запасным шрифтом sans-serif */
            }
            
            ` },
            { type: 'text', value: 'Вы можете указать несколько шрифтов через запятую. Если первый шрифт недоступен, браузер перейдет к следующему в списке.' },
            { type: 'text', value: 'Примеры групп шрифтов:' },
            { type: 'text', value: 'serif (с засечками)' },
            { type: 'text', value: 'sans-serif (без засечек)' },
            { type: 'text', value: 'monospace (моноширинный)' },
            { type: 'text', value: 'cursive (рукописный)' },
            { type: 'text', value: 'fantasy (фантазийный)' },
            
            { type: 'header', value: '2. font-size' }, 
            { type: 'text', value: 'Свойство font-size определяет размер шрифта. Размеры можно задавать в различных единицах, таких как пиксели (px), проценты (%), em, rem и т.д.' },
            { type: 'code', value:  `
            h1 {
                    font-size: 32px; /* Размер шрифта 32 пикселя */
            }
            
            p {
                    font-size: 1.5em; /* 1.5 раза больше, чем размер шрифта родителя */
            }
            
            ` },

            { type: 'header', value: '3. font-weight' }, 
            { type: 'text', value: 'Свойство font-weight определяет толщину шрифта. Вы можете использовать числовые значения (от 100 до 900) или ключевые слова, такие как normal, bold, bolder, и lighter.' },
            { type: 'code', value: `
            h1 {
                    font-weight: bold; /* Жирный шрифт */
            }
            
            p {
                    font-weight: 300; /* Тонкий шрифт */
            }
            
            ` },

            { type: 'header', value: '4. font-style' }, 
            { type: 'text', value: 'Свойство font-style определяет стиль шрифта. Основные значения — это normal, italic и oblique.' },
            { type: 'text', value: 'normal: обычный стиль текста.' },
            { type: 'text', value: 'italic: курсивный стиль текста.' },
            { type: 'text', value: 'oblique: наклонный стиль текста (может выглядеть как курсив, но не обязательно).' },

            { type: 'code', value: `
            em {
                    font-style: italic; /* Курсивный стиль для выделенного текста */
            }
            
            strong {
                    font-style: normal; /* Обычный стиль для жирного текста */
            }
            ` },

            { type: 'header', value: 'Пример кода' }, 

            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Свойства шрифтов</title>
        <style>
                body {
                    font-family: 'Arial', sans-serif;
                }

                h1 {
                    font-size: 32px;
                    font-weight: bold;
                }

                p {
                    font-size: 16px;
                    font-weight: normal;
                    font-style: italic;
                }

                .light {
                    font-weight: 300;
                }
        </style>    
</head>
<body>
            <h1>Заголовок</h1>
            <p>Это обычный текст.</p>
            <p class="light">Это тонкий текст.</p>
            <p>Это <em>курсивный текст</em> внутри параграфа.</p>
</body>
</html>

            `},
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Понимание свойств шрифтов в CSS позволяет вам эффективно управлять типографикой на веб-страницах, улучшая читаемость и визуальную привлекательность. Если у вас есть вопросы или вы хотите изучить что-то более конкретное, дайте знать!' },

        ],
    },


];


export const CssDocumentSeventh = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css7",
        content: [
            { type: 'header', value: '1. color' },
            { type: 'text', value: 'Свойство color задает цвет текста. Вы можете использовать названия цветов, HEX-коды, RGB, RGBA, HSL или HSLA.' },
            { type: 'code', value: `
            p {
                        color: blue; /* Текст будет синим */
            }
            
            ` },


            { type: 'header', value: '2. text-align' },
            { type: 'text', value: 'Свойство text-align определяет выравнивание текста внутри элемента. Возможные значения:' },
            { type: 'text', value: 'left: выравнивание по левому краю.' },
            { type: 'text', value: 'right: выравнивание по правому краю.' },
            { type: 'text', value: 'center: выравнивание по центру.' },
            { type: 'text', value: 'justify: выравнивание по ширине (растягивание текста).' },
            { type: 'code', value: `
            h1 {
                        text-align: center; /* Заголовок будет по центру */
            }
            
            p {
                        text-align: justify; /* Текст параграфа будет выровнен по ширине */
            }
            
            ` },


            { type: 'header', value: '3. text-decoration' },
            { type: 'text', value: 'Свойство text-decoration применяет декорацию к тексту. Возможные значения:' },
            { type: 'text', value: 'none: отменяет все декорации.' },
            { type: 'text', value: 'underline: добавляет подчеркивание.' },
            { type: 'text', value: 'overline: добавляет линию сверху.' },
            { type: 'text', value: 'line-through: добавляет зачеркивание.' },
            { type: 'header', value: `
            a {
                        text-decoration: none; /* Ссылки без подчеркивания */
            }
            
            h2 {
                        text-decoration: underline; /* Заголовок с подчеркиванием */
            }
            
            ` },


            { type: 'header', value: '4. text-transform' },
            { type: 'text', value: 'Свойство text-transform изменяет регистр текста. Возможные значения:' },
            { type: 'text', value: 'none: не изменяет регистр.' },
            { type: 'text', value: 'uppercase: преобразует текст в верхний регистр.' },
            { type: 'text', value: 'lowercase: преобразует текст в нижний регистр.' },
            { type: 'text', value: 'capitalize: делает первую букву каждого слова заглавной.' },
            { type: 'code', value: `
            p {
                        text-transform: uppercase; /* Текст параграфа будет в верхнем регистре */
            }
            
            h3 {
                        text-transform: capitalize; /* Первая буква каждого слова в заголовке будет заглавной */
            }
            
            ` },


            { type: 'header', value: 'Пример кода' },
            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Свойства текста</title>
    <style>
            body {
                        font-family: Arial, sans-serif;
            }

            h1 {
                        color: #333;
                        text-align: center;
            }

            p {
                        color: #666;
                        text-align: justify;
                        line-height: 1.5;
            }

            a {
                        color: blue;
                        text-decoration: none;
            }

            a:hover {
                        text-decoration: underline;
            }

            .uppercase {
                        text-transform: uppercase;
            }

            .lowercase {
                       text-transform: lowercase;
            }

            .capitalize {
                        text-transform: capitalize;
            }
    </style>
</head>
<body>
            <h1>Свойства текста в CSS</h1>
            <p>Это обычный текст параграфа. <a href="#">Это ссылка</a>.</p>
            <p class="uppercase">Этот текст будет в верхнем регистре.</p>
            <p class="lowercase">Этот текст будет в нижнем регистре.</p>
            <p class="capitalize">этот текст будет с заглавной буквы.</p>
</body>
</html>

            ` },

            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Свойства текста в CSS позволяют вам эффективно управлять внешним видом и форматированием текста на веб-страницах. Они помогают улучшить читаемость и визуальную привлекательность контента.' },

        ],
    },

];


export const CssDocumentEighth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css8",
        content: [
            { type: 'header', value: '1. background-color' },
            { type: 'text', value: 'Свойство background-color задает цвет фона элемента. Вы можете использовать названия цветов, HEX-коды, RGB, RGBA, HSL или HSLA.' },
            { type: 'code', value: `
            div {
                        background-color: lightblue; /* Светло-голубой фон */
            }
            
            ` },

            { type: 'header', value: '2. background-image' },
            { type: 'text', value: 'Свойство background-image позволяет установить изображение в качестве фона элемента. Изображение задается с помощью URL. Вы можете использовать одно изображение или несколько, разделяя их запятой.' },
            { type: 'code', value: `
            div {
                        background-image: url('image.jpg'); /* Фон с изображением */
            }
            
            ` },
            { type: 'text', value: 'Вы также можете использовать несколько изображений:' },
            { type: 'code', value: `
            div {
                        background-image: url('image1.jpg'), url('image2.jpg'); /* Несколько изображений */
            }
            
            ` },
            { type: 'header', value: '3. background-repeat' },
            { type: 'text', value: 'Свойство background-repeat определяет, как изображение фона будет повторяться. Возможные значения:' },
            { type: 'text', value: 'repeat: изображение повторяется как по горизонтали, так и по вертикали (значение по умолчанию).' },
            { type: 'text', value: 'repeat-x: изображение повторяется только по горизонтали.' },
            { type: 'text', value: 'repeat-y: изображение повторяется только по вертикали.' },
            { type: 'text', value: 'no-repeat: изображение не повторяется.' },
            { type: 'text', value: 'space: изображение повторяется, но оставшееся пространство между ними остается пустым.' },
            { type: 'text', value: 'round: изображение повторяется, и его размеры могут быть изменены, чтобы заполнить пространство.' },
            { type: 'code', value: `
            div {
                        background-image: url('pattern.png');
                        background-repeat: repeat; /* Повторение изображения по обеим осям */
            }
            
            ` },
            { type: 'text', value: 'Вот пример, который демонстрирует использование всех этих свойств:' },
            { type: 'code', value: `
<!DOCTYPE html>
<html lang="ru">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Свойства фона</title>
        <style>
                    body {
                        font-family: Arial, sans-serif;
                    }

                    .color-background {
                        background-color: lightgreen; /* Цвет фона */
                        padding: 20px;
                        margin: 10px;
                    }

                    .image-background {
                        background-image: url('https://via.placeholder.com/150'); /* Изображение фона */
                        background-repeat: no-repeat; /* Не повторять изображение */
                        background-size: cover; /* Заполнить элемент изображением */
                        height: 200px;
                        margin: 10px;
                    }

                    .pattern-background {
                        background-image: url('https://via.placeholder.com/50'); /* Паттерн фона */
                        background-repeat: repeat; /* Повторять изображение */
                        height: 200px;
                        margin: 10px;
                    }
        </style>
</head>
<body>
            <div class="color-background">Это элемент с цветным фоном.</div>
            <div class="image-background">Это элемент с изображением фона.</div>
            <div class="pattern-background">Это элемент с паттерном фона.</div>
</body>
</html>

            ` },
            { type: 'text', value: 'Заключение' },
            { type: 'text', value: 'Свойства фона в CSS позволяют вам настраивать внешний вид элементов, добавляя цвет и изображения, что значительно улучшает визуальную привлекательность веб-страниц.' },

        
        ],
    },

];


export const CssDocumentNinth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css9",
        content: [
            { type: 'header', value: '1. Свойство float' },
            { type: 'text', value: 'Свойство float позволяет элементам "плавать" влево или вправо, позволяя окружающим элементам обтекать их. Это свойство изначально было разработано для обтекания текста вокруг изображений, но впоследствии стало популярным для создания многоколонных макетов.' },
            { type: 'header', value: 'Значения свойства float:' },
            { type: 'text', value: 'float: left; — элемент выравнивается по левому краю, а текст и другие элементы обтекают его справа.' },
            { type: 'text', value: 'float: right; — элемент выравнивается по правому краю, а текст и другие элементы обтекают его слева.' },
            { type: 'text', value: 'float: none; — элемент не плавает и располагается в обычном потоке документа (значение по умолчанию).' },
            { type: 'text', value: 'Пример использования:' },
            { type: 'code', value: `
            .img-left {
                        float: left; /* Картинка будет слева */
                        margin-right: 10px; /* Отступ справа от картинки */
            }
            
            .img-right {
                        float: right; /* Картинка будет справа */
                        margin-left: 10px; /* Отступ слева от картинки */
            }
            
            ` },
            { type: 'header', value: '2. Свойство clear' },
            { type: 'text', value: 'clear: left; — элемент не будет располагаться рядом с плавающим элементом слева.' },
            { type: 'text', value: 'clear: right; — элемент не будет располагаться рядом с плавающим элементом справа.' },
            { type: 'text', value: 'clear: both; — элемент не будет располагаться рядом с плавающими элементами ни слева, ни справа.' },
            { type: 'text', value: 'Пример использования:' },
            { type: 'text', value: 'Вот пример, который демонстрирует использование float и clear для создания простого макета с изображениями и текстом:' },
            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Блочная верстка с float и clear</title>
        <style>
                .img-left {
                            float: left;
                            margin-right: 10px;
                }

                .img-right {
                            float: right;
                            margin-left: 10px;
                }

                .clearfix::after {
                            content: "";
                            display: table;
                            clear: both; /* Очищает плавающие элементы */
                }
        </style>
</head>
<body>
            <div class="clearfix">
                        <img src="https://via.placeholder.com/100" alt="Картинка слева" class="img-left">
                        <p>Это текст, который обтекает картинку слева. Он будет продолжаться вокруг картинки, пока не закончится.</p>
                        <img src="https://via.placeholder.com/100" alt="Картинка справа" class="img-right">
                        <p>Это текст, который обтекает картинку справа. Он также будет продолжаться вокруг картинки.</p>
            </div>
            <p>Этот текст находится под плавающими элементами.</p>
</body>
</html>

            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Свойства float и clear позволяют создавать сложные макеты и управлять расположением элементов на странице. Хотя современные методы, такие как Flexbox и Grid, предлагают более гибкие и мощные способы верстки, знание float и clear остается полезным для понимания основ CSS. ' },
        ],
    },
];


export const CssDocumentTenth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css10",
        content: [
            { type: 'header', value: 'Flexbox' },
            { type: 'text', value: 'Давайте рассмотрим Flexbox — мощный инструмент для создания адаптивных макетов в CSS. Мы обсудим основные свойства Flexbox: flex-direction, flex-wrap, justify-content и align-items.' },
            { type: 'text', value: 'Flexbox (Flexible Box Layout) позволяет легко управлять расположением и выравниванием элементов в контейнере. Он упрощает создание сложных макетов и адаптивных интерфейсов.' },
            { type: 'header', value: '1. flex-direction' },
            { type: 'text', value: 'Свойство flex-direction определяет направление расположения элементов внутри флекс-контейнера. Возможные значения:' },
            { type: 'text', value: 'row: элементы располагаются в строку (по умолчанию).' },
            { type: 'text', value: 'row-reverse: элементы располагаются в строку, но в обратном порядке.' },
            { type: 'text', value: 'column: элементы располагаются в столбик.' },
            { type: 'text', value: 'column-reverse: элементы располагаются в столбик, но в обратном порядке.' },
            { type: 'text', value: 'Пример использования:' },
            { type: 'code', value: `
            .container {
                        display: flex;
                        flex-direction: row; /* Элементы располагаются в строку */
            }
            
            ` },
            { type: 'header', value: '2. flex-wrap' },
            { type: 'text', value: 'Свойство flex-wrap определяет, как элементы будут обтекать контейнер, если они не помещаются в одну строку. Возможные значения:' },
            { type: 'text', value: 'nowrap: элементы не переносятся на новую строку (значение по умолчанию).' },
            { type: 'text', value: 'wrap: элементы переносятся на новую строку, если не помещаются в одну.' },
            { type: 'text', value: 'wrap-reverse: элементы переносятся на новую строку в обратном порядке.' },
            { type: 'text', value: 'Пример использования:' },
            { type: 'code', value: `
            .container {
                        display: flex;
                        flex-wrap: wrap; /* Элементы будут переноситься на новую строку */
            }
            
            ` },
            { type: 'text', value: '3. justify-content' },
            { type: 'text', value: 'Свойство justify-content управляет выравниванием элементов по главной оси (горизонтально, если flex-direction — row). Возможные значения:' },
            { type: 'text', value: 'flex-start: элементы выравниваются по началу контейнера.' },
            { type: 'text', value: 'flex-end: элементы выравниваются по концу контейнера.' },
            { type: 'text', value: 'center: элементы выравниваются по центру контейнера.' },
            { type: 'text', value: 'space-between: элементы распределяются с равными промежутками между ними.' },
            { type: 'text', value: 'space-around: элементы распределяются с равными отступами вокруг них.' },
            { type: 'text', value: 'Пример использования:' },
            { type: 'code', value: `
            .container {
                        display: flex;
                        justify-content: center; /* Элементы выравниваются по центру */
            }
            
            ` },
            { type: 'header', value: '4. align-items' },
            { type: 'text', value: 'Свойство align-items управляет выравниванием элементов по поперечной оси (вертикально, если flex-direction — row). Возможные значения:' },
            { type: 'text', value: 'flex-start: элементы выравниваются по началу контейнера.' },
            { type: 'text', value: 'flex-end: элементы выравниваются по концу контейнера.' },
            { type: 'text', value: 'center: элементы выравниваются по центру контейнера.' },
            { type: 'text', value: 'baseline: элементы выравниваются по базовой линии текста.' },
            { type: 'text', value: 'stretch: элементы растягиваются, чтобы заполнить контейнер (значение по умолчанию).' },
            { type: 'text', value: 'Пример использования:' },
            { type: 'code', value: `
            .container {
                        display: flex;
                        align-items: center; /* Элементы выравниваются по центру вертикально */
            }
            
            ` },
            { type: 'text', value: 'Вот пример, который демонстрирует использование всех этих свойств Flexbox:' },
            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Пример</title>
            <style>
                        .container {
                                display: flex;
                                flex-direction: row; /* Расположение элементов в строку */
                                flex-wrap: wrap; /* Перенос элементов на новую строку */
                                justify-content: space-around; /* Равномерное распределение элементов */
                                align-items: center; /* Вертикальное выравнивание по центру */
                                height: 200px;
                                background-color: #f0f0f0;
                        }

                        .item {
                                background-color: #4CAF50;
                                color: white;
                                padding: 20px;
                                margin: 10px;
                                flex: 1; /* Элементы будут равной ширины */
                                min-width: 100px; /* Минимальная ширина элемента */
                }
            </style>
</head>
<body>
            <div class="container">
                        <div class="item">Элемент 1</div>
                        <div class="item">Элемент 2</div>
                        <div class="item">Элемент 3</div>
                        <div class="item">Элемент 4</div>
            </div>
</body>
</html>

            ` },
            { type: 'text', value: 'Заключение' },
            { type: 'text', value: 'Flexbox — это мощный инструмент для создания адаптивных макетов, позволяющий легко управлять расположением и выравниванием элементов. Понимание свойств flex-direction, flex-wrap, justify-content и align-items поможет вам создавать более сложные и удобные интерфейсы.' },
        
        ],
    },

];


export const CssDocumentEleventh = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css11",
        content: [
            { type: 'header', value: 'Grid' },
            { type: 'text', value: 'Давайте рассмотрим CSS Grid Layout и его основные свойства: grid-template-columns, grid-template-rows и grid-gap. Grid Layout позволяет создавать сложные макеты с помощью сетки, что делает его мощным инструментом для веб-дизайна.' },
        
            { type: 'header', value: 'CSS Grid Layout' },
            { type: 'text', value: 'Grid Layout позволяет организовать элементы в виде сетки, используя строки и столбцы. Это упрощает создание адаптивных и сложных макетов.' },
            { type: 'header', value: '1. grid-template-columns' },
            { type: 'text', value: 'Свойство grid-template-columns определяет количество и ширину столбцов в сетке. Вы можете задавать фиксированные размеры (в пикселях, процентах и т.д.), относительные размеры (в fr, что означает "доля свободного пространства") или использовать автоматические размеры.' },
            { type: 'code', value: `
            .container {
                        display: grid;
                        grid-template-columns: 100px 200px; /* Два столбца: первый 100px, второй 200px */
            }
            
            ` },
            { type: 'text', value: 'Вы также можете использовать repeat() для упрощения записи:' },
            { type: 'code', value: `
            .container {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr); /* Три равные колонки */
            }
            
            ` },
            { type: 'header', value: '2. grid-template-rows' },
            { type: 'text', value: 'Свойство grid-template-rows аналогично grid-template-columns, но определяет количество и высоту строк в сетке.' },

            { type: 'code', value: `
            .container {
                        display: grid;
                        grid-template-rows: 50px 100px; /* Две строки: первая 50px, вторая 100px */
            }
            
            ` },
            { type: 'text', value: 'Также можно использовать repeat():' },

            { type: 'code', value: `
            .container {
                        display: grid;
                        grid-template-rows: repeat(2, 1fr); /* Две равные строки */
            }
            
            ` },
            { type: 'header', value: '3. grid-gap' },
            { type: 'text', value: 'Свойство grid-gap (или gap) задает расстояние между строками и столбцами в сетке. Вы можете указать одно значение для обоих направлений или два значения для строк и столбцов отдельно.' },
            { type: 'code', value: `
            .container {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 10px; /* Отступ 10px между строками и столбцами */
            }
            
            ` },
            { type: 'text', value: 'Если вы хотите задать разные отступы для строк и столбцов:' },
            { type: 'code', value: `
            .container {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 10px 20px; /* 10px между строками и 20px между столбцами */
            }
            
            ` },
            { type: 'text', value: 'Вот пример, который демонстрирует использование всех этих свойств в CSS Grid Layout:' },
            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Layout Пример</title>
    <style>
            .container {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr); /* Три равные колонки */
                        grid-template-rows: 100px 200px; /* Две строки: первая 100px, вторая 200px */
                        grid-gap: 15px; /* Отступ 15px между строками и столбцами */
            }

            .item {
                        background-color: #4CAF50;
                        color: white;
                        padding: 20px;
                        text-align: center;
            }
    </style>
</head>
<body>
            <div class="container">
                        <div class="item">Элемент 1</div>
                        <div class="item">Элемент 2</div>
                        <div class="item">Элемент 3</div>
                        <div class="item">Элемент 4</div>
                        <div class="item">Элемент 5</div>
                        <div class="item">Элемент 6</div>
            </div>
</body>
</html>

            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'CSS Grid Layout — это мощный инструмент для создания адаптивных и сложных макетов. Понимание свойств grid-template-columns, grid-template-rows и grid-gap поможет вам эффективно организовывать элементы на веб-странице.' },
        ],
    },
];



export const CssDocumentTwelfth = [
    {
        id: 1,
        path: "/css12",
        content: [
            { type: 'header', value: 'Медиа-запросы' },
            { type: 'text', value: 'Медиа-запросы — это техника, используемая в CSS для применения различных стилей в зависимости от характеристик устройства, на котором отображается веб-страница, таких как ширина экрана, высота, разрешение и т.д. Это позволяет адаптировать макет и стили под разные устройства (мобильные телефоны, планшеты, настольные компьютеры).' },
        
            { type: 'header', value: 'Синтаксис медиа-запросов' },
            { type: 'text', value: 'Основной синтаксис медиа-запроса выглядит следующим образом:' },
            { type: 'code', value: `
            @media медиа-тип и/или условие {
                        /* CSS-правила */
            }
            
            ` },
            { type: 'text', value: 'Пример использования:' },
            { type: 'code', value: `
            @media screen and (max-width: 600px) {
                    body {
                                background-color: lightblue; /* Фон станет светло-голубым на экранах шириной до 600px */
                    }
            }
            ` },
            { type: 'header', value: 'Параметры min-width и max-width' },
            { type: 'text', value: 'min-width: этот параметр используется для определения минимальной ширины экрана, при которой будут применяться стили. Если ширина экрана больше или равна указанному значению, стили внутри медиа-запроса будут применены.' },
            { type: 'text', value: 'max-width: этот параметр используется для определения максимальной ширины экрана, при которой будут применяться стили. Если ширина экрана меньше или равна указанному значению, стили внутри медиа-запроса будут применены.' },
            { type: 'header', value: '1. Использование min-width' },
            { type: 'code', value: `
            @media screen and (min-width: 768px) {
                    body {
                                font-size: 18px; /* Увеличение размера шрифта на экранах шириной от 768px */
                    }
            }
            ` },
            { type: 'header', value: '2. Использование max-width' },
            { type: 'code', value: `
            @media screen and (max-width: 480px) {
                    body {
                                font-size: 14px; /* Уменьшение размера шрифта на экранах шириной до 480px */
                    }
            }
            ` },
            { type: 'header', value: '3. Комбинирование min-width и max-width' },
            { type: 'text', value: 'Вы также можете комбинировать оба параметра для создания диапазонов:' },
            { type: 'code', value: `
            @media screen and (min-width: 481px) and (max-width: 767px) {
                    body {
                                font-size: 16px; /* Размер шрифта для экранов между 481px и 767px */
                    }
            }
            
            ` },
            { type: 'header', value: 'Пример кода' },
            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Медиа-запросы Пример</title>
    <style>
            body {
                    font-size: 16px; /* Размер шрифта по умолчанию */
                    background-color: white;
                    color: black;
                    margin: 0;
                    padding: 20px;
            }

            @media screen and (max-width: 480px) {
                    body {
                            font-size: 14px; /* Уменьшение размера шрифта для мобильных устройств */
                            background-color: lightyellow; /* Изменение фона */
                    }
            }

            @media screen and (min-width: 481px) and (max-width: 767px) {
                    body {
                            font-size: 16px; /* Размер шрифта для планшетов */
                            background-color: lightgreen; /* Изменение фона */
                    }
            }

            @media screen and (min-width: 768px) {
                    body {
                              font-size: 18px; /* Увеличение размера шрифта для настольных компьютеров */
                               background-color: lightblue; /* Изменение фона */
                    }
            }
    </style>
</head>
<body>
            <h1>Пример медиа-запросов</h1>
            <p>Измените размер окна браузера, чтобы увидеть изменения в стилях.</p>
</body>
</html>

            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Медиа-запросы являются важным инструментом для создания адаптивного дизайна, позволяя вам изменять стили в зависимости от характеристик устройства. Понимание использования min-width и max-width поможет вам создавать более отзывчивые и удобные интерфейсы' },
        ],
    },
];
export const CssDocumentThirteenth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css13",
        content: [
            { type: 'header', value: 'Относительные единицы' },
            { type: 'text', value: 'Давайте рассмотрим относительные единицы измерения в CSS: %, em, rem, vw и vh. Эти единицы позволяют создавать адаптивные и отзывчивые веб-дизайны, так как они зависят от других значений в документе.' },
        
            { type: 'header', value: '1. Проценты (%)' },
            { type: 'text', value: 'Проценты — это единица, которая задает размеры относительно родительского элемента. Например, если вы установите ширину элемента в 50%, он займет половину ширины своего родителя.' },
            { type: 'code', value: `
            .container {
                        width: 80%; /* Ширина контейнера 80% от ширины родителя */
            }
            .box {
                        width: 50%; /* Ширина блока 50% от ширины контейнера */
            }
            
            ` },
            { type: 'header', value: '2. em' },
            { type: 'text', value: 'Единица em относительна к размеру шрифта родительского элемента. Если размер шрифта родителя составляет 16px, то 1em будет равен 16px. Это удобно для создания гибких и масштабируемых интерфейсов, так как элементы могут изменять свои размеры в зависимости от размера шрифта.' },

            { type: 'code', value: `
            p {
                        font-size: 2em; /* Размер шрифта будет в 2 раза больше размера шрифта родителя */
            }
            
            ` },
            { type: 'header', value: '3. rem' },
            { type: 'text', value: 'Единица rem (root em) основана на размере шрифта корневого элемента (обычно <html>). Это позволяет избежать каскадного эффекта, который может возникнуть с em, и использовать единицу, которая всегда будет относиться к одному и тому же значению.' },
            { type: 'code', value: `
            html {
                        font-size: 16px; /* Размер шрифта корневого элемента */
            }
            h1 {
                        font-size: 2rem; /* Размер шрифта заголовка будет 32px (2 * 16px) */
            }
            
            ` },
            { type: 'header', value: '4. vw (viewport width)' },
            { type: 'text', value: 'Единица vw представляет собой 1% от ширины области просмотра (viewport). Это полезно для задания размеров, которые будут адаптироваться к ширине окна браузера.' },
            { type: 'code', value: `
            .container {
                        width: 50vw; /* Ширина контейнера будет 50% от ширины окна браузера */
            }
            ` },
            { type: 'header', value: '5. vh (viewport height)' },
            { type: 'text', value: 'Единица vh представляет собой 1% от высоты области просмотра. Это позволяет задавать размеры, которые будут адаптироваться к высоте окна браузера.' },
            { type: 'code', value: `
            .full-height {
                height: 100vh; /* Высота элемента будет равна 100% высоты окна браузера */
            }
            
            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Относительные единицы в CSS позволяют создавать адаптивные и отзывчивые макеты, которые могут изменять свои размеры в зависимости от контекста. Понимание того, как и когда использовать %, em, rem, vw и vh, поможет вам создавать более гибкие и удобные интерфейсы.' },
        ],
    },
];
export const CssDocumentFourteenth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css14",
        content: [
            { type: 'header', value: '1. @keyframes' },
            { type: 'text', value: 'С помощью правила @keyframes вы определяете анимацию, задавая ключевые кадры, которые определяют состояние анимации в определенные моменты времени. Каждый ключевой кадр задается с помощью процента (от 0% до 100%), где 0% — это начальное состояние, а 100% — конечное.' },
            { type: 'code', value: `
            @keyframes myAnimation {
                    0% {
                                opacity: 0; /* Начальная прозрачность */
                                transform: translateY(-20px); /* Начальное смещение по оси Y */
                    }
                    100% {
                                opacity: 1; /* Конечная прозрачность */
                                transform: translateY(0); /* Конечное смещение по оси Y */
                    }
            }
            
            ` },
            { type: 'header', value: '2. animation' },
            { type: 'text', value: 'Свойство animation применяется к элементу, чтобы задать анимацию. Оно включает в себя имя анимации, продолжительность, временную функцию, задержку, количество повторений и направление.' },
            { type: 'code', value: `
            .box {
                        width: 100px;
                        height: 100px;
                        background-color: blue;
                        animation: myAnimation 1s ease-in-out forwards; /* Применение анимации */
            }
            
            ` },
            { type: 'header', value: 'Полный пример анимации' },
            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Анимация в CSS</title>
    <style>
            @keyframes myAnimation {
                0% {
                        opacity: 0;
                        transform: translateY(-20px);
                }
                100% {
                        opacity: 1;
                        transform: translateY(0);
                }
            }

            .box {
                        width: 100px;
                        height: 100px;
                        background-color: blue;
                       animation: myAnimation 1s ease-in-out forwards;
            }
    </style>
</head>
<body>
            <div class="box"></div>
</body>
</html>

            ` },
            { type: 'header', value: '1. transform' },
            { type: 'text', value: 'Свойство transform позволяет изменять размер, положение и ориентацию элемента. Оно может принимать несколько функций, таких как rotate, scale, translate и другие.' },
            { type: 'header', value: '2. rotate' },
            { type: 'text', value: 'Функция rotate поворачивает элемент на указанный угол. Угол задается в градусах (deg) или радианах (rad).' },
            { type: 'code', value: `
            .box {
                        transform: rotate(45deg); /* Поворот на 45 градусов */
            }
            ` },
            { type: 'header', value: '3. scale' },
            { type: 'text', value: 'Функция scale изменяет размер элемента. Вы можете задать один или два параметра: первый для изменения ширины, второй для высоты.' },

            { type: 'code', value: `
            .box {
                       transform: scale(1.5); /* Увеличение размера на 150% */
            }
            ` },
            { type: 'header', value: '4. translate' },
            { type: 'text', value: 'Функция translate перемещает элемент по оси X и Y. Параметры задаются в пикселях (px), процентах (%) и других единицах.' },
            { type: 'code', value: `
            .box {
                        transform: translate(50px, 100px); /* Перемещение на 50px вправо и 100px вниз */
            }
            
            ` },
            { type: 'header', value: 'Полный пример трансформаций' },
            { type: 'text', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Трансформации в CSS</title>
    <style>
            .box {
                        width: 100px;
                        height: 100px;
                        background-color: red;
                        transition: transform 0.5s; /* Плавный переход при трансформации */
            }

            .box:hover {
                       transform: rotate(45deg) scale(1.5) translate(50px, 50px); /* Поворот, увеличение и перемещение при наведении */
            }
    </style>
</head>
<body>
            <div class="box"></div>
</body>
</html>

            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Анимации и трансформации в CSS позволяют создавать динамичные и интерактивные веб-страницы. Использование @keyframes и animation помогает задавать сложные анимации, а transform, rotate, scale и translate позволяют изменять элементы с помощью различных эффектов.' },
        ],
    },
];
export const CssDocumentFifteenth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css15",
        content: [
            { type: 'header', value: 'Тени в CSS' },
            { type: 'header', value: '1. box-shadow' },
            { type: 'text', value: 'Свойство box-shadow позволяет добавлять тень к элементу. Оно принимает несколько параметров: смещение по горизонтали, смещение по вертикали, радиус размытия, радиус распространения и цвет тени.' },
            { type: 'code', value: `
            .box {
                        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5); /* Тень со смещением, размытием и цветом */
            }
            ` },
            { type: 'header', value: '2. text-shadow' },
            { type: 'text', value: 'Свойство text-shadow добавляет тень к тексту. Параметры аналогичны box-shadow.' },
            { type: 'code', value: `
            h1 {
                        text-shadow: 2px 2px 5px #999; /* Тень для заголовка */
            }            
            ` },
            { type: 'header', value: 'Градиенты в CSS' },
            { type: 'header', value: '1. linear-gradient' },
            { type: 'text', value: 'Функция linear-gradient создает линейный градиент. Вы можете указать угол градиента, а также цвета и их позиции.' },
            { type: 'code', value: `
            .box {
                    background-image: linear-gradient(to right, blue, white); /* Горизонтальный градиент от синего к белому */
            }            
            ` },
            { type: 'header', value: '2. radial-gradient' },
            { type: 'text', value: 'Функция radial-gradient создает радиальный градиент. Вы можете задать форму, размер и позицию градиента.' },
            { type: 'code', value: `
            .box {
                        background-image: radial-gradient(circle, yellow, orange, red); /* Радиальный градиент */
            }            
            ` },
            { type: 'header', value: 'Полные примеры' },
            { type: 'code', value: `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тени и Градиенты в CSS</title>
    <style>
        .box {
                    width: 200px;
                    height: 200px;
                    background-color: white;
                    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5); /* Тень блока */
                    margin: 50px;
        }

        h1 {
                    text-align: center;
                    text-shadow: 2px 2px 5px #999; /* Тень заголовка */
        }

        .gradient-box {
                    background-image: linear-gradient(to right, blue, white); /* Линейный градиент */
                    background-size: 200% 200%;
                    animation: gradientAnimation 5s ease infinite; /* Анимация градиента */
        }

        @keyframes gradientAnimation {
            0% {
                        background-position: 0% 50%;
            }
            50% {
                        background-position: 100% 50%;
            }
            100% {
                        background-position: 0% 50%;
            }
        }
    </style>
</head>
<body>
            <h1>Тени и Градиенты в CSS</h1>
            <div class="box"></div>
            <div class="box gradient-box"></div>
</body>
</html>

            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Тени и градиенты в CSS позволяют добавлять глубину, реалистичность и визуальный интерес к элементам веб-страницы. Использование box-shadow и text-shadow помогает создавать эффекты тени, а linear-gradient и radial-gradient позволяют генерировать красивые градиентные фоны. ' },
        ],
    },
];
export const CssDocumentSixteenth = [
    {
        id: 1,
        path: "/css16",
        content: [
            { type: 'header', value: 'БЭМ' },
            { type: 'text', value: 'Методология БЭМ (Блок, Элемент, Модификатор) — это подход к веб-разработке, который помогает организовать код и улучшить его читаемость и повторное использование. Основные понятия БЭМ включают блоки, элементы и модификаторы.' },
        
            { type: 'header', value: 'Блок' },
            { type: 'text', value: 'Блок — это независимый интерфейсный компонент, который может содержать другие блоки или элементы. Блоки должны быть самодостаточными и могут использоваться в любом месте веб-страницы. Например, блоком может быть кнопка, форма, меню или любой другой компонент интерфейса.' },
            { type: 'code', value: `
<div class="menu">
            <a href="#" class="menu__item">Home</a>
            <a href="#" class="menu__item">About</a>
</div>
            ` },
            { type: 'header', value: 'Элемент' },
            { type: 'text', value: 'Элемент — это составная часть блока, которая не может существовать отдельно от него. Элементы описывают внутренние компоненты блока и обозначаются двойным подчеркиванием в имени класса.' },
            { type: 'code', value: `
<div class="button">
            <span class="button__text">Click me</span>
</div>

            ` },
            { type: 'header', value: 'Модификатор' },
            { type: 'text', value: 'Модификатор — это свойство блока или элемента, которое определяет его внешний вид, состояние или поведение. Модификаторы позволяют изменять стиль или функциональность блока или элемента. Они обозначаются одним нижним подчеркиванием.' },
            { type: 'code', value: '<button class="button button--primary">Submit</button> '},
            { type: 'text', value: 'В этом примере button--primary — это модификатор, который изменяет стиль кнопки.' },
            { type: 'header', value: 'Применение БЭМ' },
            { type: 'text', value: 'Методология БЭМ помогает разработчикам создавать более структурированный и понятный код, что упрощает его поддержку и расширение. БЭМ также способствует уменьшению конфликтов имен классов, так как каждое имя класса уникально и описывает его назначение.' },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'БЭМ — это мощный инструмент для организации кода веб-приложений, который позволяет создавать независимые и переиспользуемые компоненты интерфейса. Понимание концепций блока, элемента и модификатора поможет вам более эффективно разрабатывать и поддерживать веб-проекты.' },
        ],
    },
];
export const CssDocumentSeventeenth = [
    {
        id: 1,
        // title: "Что такое HTML?",
        path: "/css17",
        content: [
            { type: 'header', value: 'OOCSS' },
            { type: 'text', value: 'Методология OOCSS (Объектно-Ориентированный CSS) фокусируется на разделении структуры и оформления, что позволяет создавать более гибкие и переиспользуемые стили. Основные идеи OOCSS включают:' },
        
            { type: 'header', value: 'Разделение структуры и оформления' },
            { type: 'text', value: '1. Структура: Это основная разметка и функциональность элементов на странице. Она определяет, как элементы взаимодействуют друг с другом и как они располагаются в макете.' },
            { type: 'text', value: '2. Оформление: Это визуальные стили, такие как цвета, шрифты, отступы и тени, которые применяются к элементам. Оформление должно быть независимым от структуры, что позволяет легко изменять внешний вид без необходимости вносить изменения в HTML.' },
            { type: 'header', value: 'Преимущества OOCSS' },
            { type: 'text', value: 'Повторное использование: Одна и та же структура может использоваться в различных контекстах, что уменьшает дублирование кода и упрощает его поддержку.' },
            { type: 'text', value: 'Масштабируемость: Подход OOCSS позволяет легко добавлять новые стили и компоненты, не нарушая существующую структуру.' },
            { type: 'text', value: 'Упрощение поддержки: Разделение стилей на структурные и визуальные упрощает понимание кода и его поддержку.' },

            { type: 'header', value: 'Пример применения OOCSS' },
            { type: 'text', value: 'В OOCSS классы создаются таким образом, чтобы их можно было легко переиспользовать. Например:' },

            { type: 'code', value: `
            /* Структурный класс */
.box {
            display: flex;
            padding: 10px;
            border: 1px solid #ccc;
}

/* Визуальный класс */
.box--primary {
            background-color: blue;
            color: white;
}

            ` },
            { type: 'code', value: `
<div class="box box--primary">Это основная коробка с первичным стилем.</div>
<div class="box">Это основная коробка без визуального стиля.</div>
            ` },
            { type: 'header', value: 'Заключение' },
            { type: 'text', value: 'Методология OOCSS помогает разработчикам создавать более чистый, структурированный и поддерживаемый CSS-код. Разделение структуры и оформления является ключевым принципом, который способствует повторному использованию и упрощению поддержки стилей' },
        ],
    },
];
