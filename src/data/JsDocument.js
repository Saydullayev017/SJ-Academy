
// src/data/documents.js

export const JsDocumentFirst = [
    {
        id: 1,
        path: "js1",
        content: [
            { type: 'header', value: 'Yangi boshlanuvchilar uchun JavaScript-ga kirish.' },
            { type: 'text', value: "Javascript tili HTML va CSS bilan bir qatorda brauzerda ishlash uchun mo'ljallangan. Ammo, agar bu tillar sayt tuzilishini joylashtirish uchun mo'ljallangan bo'lsa, JavaScript veb-sahifalarni 'jonlantirish' imkonini beradi - ularni foydalanuvchi harakatlariga javob berish yoki ma'lum bir dinamizmni namoyish qilish (masalan, blokdagi rasmlarni o'zgartirish yoki chiroyli silliq ochiladigan menyular)." },
            { type: 'header', value: 'Javascript-ni ishga tushiring'},
            { type: 'text', value: "Javascript kodi to'g'ridan-to'g'ri HTML sahifasida skript yorlig'i ichida yozilgan. Ushbu teg sahifaning istalgan joyiga joylashtirilishi mumkin. Misolga qarang:"},
            { type: 'code', value: `
<!DOCTYPE html>
<html>
        <head>
        <meta charset="utf-8">
        <title>Bu sarlavha title</title>
        <script>bu erda biz JavaScript kodini yozamiz</script>
        </head>
        <body>
                Bu sahifaning asosiy mazmuni.
        </body>
</html>
                ` },
            { type: 'header', value: "Javascript-dagi birinchi dastur"},
            { type: 'text', value: "Keling, birinchi dasturimizni JavaScript-da yozamiz. Mana u:"},
            { type: 'code', value: `
                <!DOCTYPE html>
<html>
        <head>
        <meta charset="utf-8">
        <title> Mening birinchi dasturim</title>
        <script>alert ('Salom, Dunyo!');</script>
        </head>
        <body>
                mening birinchi dasturim
        </body>
</html>
                `},

            { type: 'text', value: "Ushbu koddan nusxa oling va uni HTML fayliga joylashtiring. Keyin brauzeringizda ushbu faylni oching - va siz matn bilan dialog oynasini ko'rasiz."},

            { type: 'header', value: "Keling, dastur kodini ko'rib chiqaylik"},
            { type: 'text', value: "Keling, yuqorida yozgan dastur kodini ko'rib chiqaylik. Siz bilishingiz kerak bo'lgan birinchi tushuncha - bu xususiyatlar. Funktsiyalar sizga ba'zi harakatlarni bajarishga imkon beradi. Bizning misolimizda matnni dialog oynasi ko'rinishida ekranda ko'rsatadigan alert() funksiyasi mavjud. Funktsiya ism (bizning holimizda bu alert) va bu nomdan keyin yozilgan yumaloq qavslardan iborat. Funktsiya parametrlari ushbu qavs ichida yozilishi kerak. Bizning holatda, parametr ekranda ko'rsatiladigan matndir.Bizning holatda, funktsiya bitta parametrga ega, ammo bir nechta parametrlarni o'tkazish kerak bo'lgan funktsiyalar mavjud. Bunday holda, bu parametrlar vergul bilan yoziladi."},

            { type: 'header', value: "JavaScript faylini ulash"},
            { type: 'text', value: "Javascript kodi alohida faylda yozilishi mumkin, u HTML fayliga ulanadi. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik.Birinchidan, skriptimiz bilan fayl yaratamiz. Ushbu fayl.js kengaytmasiga ega bo'lishi kerak. Misol tariqasida uni script.js deb ataymiz. Keling, unga ba'zi kodlarni joylashtiramiz:"},
            { type: 'code', value: `alert('text');`},
            { type: 'text', value: "Endi skript faylimizni HTML fayliga ulaymiz. Buning uchun src atributidagi skript tegida siz skriptli faylga yo'lni ko'rsatishingiz kerak:"},
            { type: 'code', value: `
<!DOCTYPE html>
<html>
        <head>
                <meta charset="utf-8">
                <title></title>
                <script src="script.js"></script>
        </head>
        <body>
            
        </body>
</html>
                `},

                { type: 'header', value: "Javascript skriptlari bilan bir nechta fayllar"},
                { type: 'text', value: "Bir nechta skript teglari yordamida bir emas, bir nechta fayllarni ulashingiz mumkin:"},
                { type: 'code', value: `
<!DOCTYPE html>
<html>
        <head>
                <meta charset="utf-8">
                <title></title>
                <script src="script1.js"></script>
                <script src="script2.js"></script>
        </head>
        <body>
            
        </body>
</html>
                    `},

            { type: 'header', value: "Javascript-da qat'iy rejim"},
            { type: 'text', value: "Zamonaviy JavaScript-da, birinchi qatorda kod yozishda siz qattiq rejim deb ataladigan narsani yoqishingiz kerak. Ushbu rejim brauzerni tilning barcha zamonaviy imkoniyatlaridan foydalanishga majbur qiladi. Qat'iy rejimni yoqish uchun skriptning birinchi qatoriga 'stritdan foydalanish' buyrug'ini qo'yish kerak. Keling, kodimizni qat'iy qayta yozamiz:"},
            { type: 'code', value: `
"use strict";
alert('text!');
                `},
                
            { type: 'header', value: "Javascript-da kommentariyalar"},
            { type: 'text', value: "Html va CSS tillari singari, JavaScript-da siz kommmentariyalar qoldirishingiz mumkin. Ular bir qatorli va ko'p qatorli."},
            { type: 'text', value: "Mana bir qatorli sharhning misoli:"},
            { type: 'code', value: `alert('Salom, Dunyo!'); // Kommentariya`},
            { type: 'text', value: "Mana ko'p qatorli sharhning misoli:"},
            { type: 'code', value: `
/*
ko'p qatorlik kommentariya
*/
alert ('Salom, Dunyo!');
            `},
            
            { type: 'header', value: "Javascript-dagi o'zgaruvchilar"},
            { type: 'text', value: "Har qanday dasturlash tilining asosiy tushunchasi o'zgaruvchidir. O'zgaruvchi - bu qatorlar yoki raqamlar kabi har qanday ma'lumotlarni saqlashimiz mumkin bo'lgan konteyner."},
            { type: 'text', value: "Har bir o'zgaruvchining nomi bo'lishi kerak, u lotin harflari, raqamlari, $ belgilari va pastki chiziqlardan iborat bo'lishi mumkin. Bunday holda, o'zgaruvchi nomining birinchi belgisi raqam bo'lmasligi kerak. O'zgaruvchilar nomlariga misollar: str, my_str, myStr, a1, $, $a, $$a."},


            { type: 'header', value: "O'zgaruvchilardan foydalanish"},
            { type: 'text', value: "O'zgaruvchidan foydalanish uchun avval uni e'lon qilishingiz kerak: uning nomidan oldin let kalit so'zini yozing. Masalan, a: nomli o'zgaruvchini e'lon qilaylik"},
            { type: 'code', value: `let a;`},
            { type: 'text', value: "O'zgaruvchi e'lon qilingandan so'ng, siz unga ma'lum bir qiymatni, masalan, raqam yoki qatorni yozishingiz mumkin (unga belgilang)."},
            { type: 'text', value: "O'zgaruvchiga ma'lumotlarni yozib olish = tayinlash operatsiyasi yordamida amalga oshiriladi. Masalan, a o'zgaruvchisiga 3 raqamini yozamiz:"},

            { type: 'code', value: `let a = 3;`},
            { type: 'text', value: "Endi alert funksiyasidan foydalanib, ushbu o'zgaruvchining mazmunini ekranda ko'rsatamiz:"},
            { type: 'code', value: `
let a = 3; //biz o'zgaruvchini e'lon qilamiz va unga qiymat beramiz
alert(a); //chiqaradi 3
                `},
            { type: 'text', value: "E'londan so'ng darhol qiymatni o'zgaruvchiga yozish shart emas. Siz avval o'zgaruvchini e'lon qilishingiz va keyin unga qiymat berishingiz mumkin:"},
            { type: 'code', value: `
let a; //o'zgaruvchini e'lon qilish
a = 3; //biz unga qiymat beramiz
alert(a); //ekranda o'zgaruvchi qiymatini ko'rsatamiz
                `},
            { type: 'text', value: "Ko'rib turganingizdek, let o'zgaruvchi nomidan faqat bir marta yoziladi - bu o'zgaruvchi e'lon qilinganda. Keyin, o'zgaruvchidan foydalanish uchun siz shunchaki ushbu o'zgaruvchining nomini yozishingiz kerak."},

            { type: 'header', value: "Mashq"},
            { type: 'text', value: "Num o'zgaruvchisini yarating va unga 123 qiymatini belgilang. Alert funksiyasidan foydalanib, ushbu o'zgaruvchining qiymatini ekranda ko'rsating."},


            { type: 'header', value: "Javascript-da bir nechta o'zgaruvchilarni e'lon qilish"},
            { type: 'text', value: "Keling, bir nechta o'zgaruvchilarni e'lon qilaylik:"},
            { type: 'code', value: `
let a = 1;
let b = 2;
let c = 3;
                `},
            { type: 'text', value: "Yuqoridagi kodni bir marta xat yozish va undan keyin kerakli o'zgaruvchilarni ularning qiymatlari bilan ro'yxatga olish orqali soddalashtirish mumkin:"},
            { type: 'code', value: `let a = 1, b = 2, c = 3;`},
            { type: 'text', value: "Siz avval barcha o'zgaruvchilarni e'lon qilishingiz va keyin ularga qiymatlarni belgilashingiz mumkin:"},
            { type: 'code', value: `
let a, b, c; //biz barcha 3 o'zgaruvchini e'lon qilamiz
//o'zgaruvchilarga quyidagi qiymatlarni belgilang:
a = 1;
b = 2;
c = 3;
                `},
            { type: 'header', value: "O'zgaruvchan qiymatlarning o'zgarishi"},
            { type: 'text', value: "Biz ma'lum bir qiymatni tayinlagan o'zgaruvchimiz bo'lsin. Keyin biz topshiriq operatsiyasini yana bajarishimiz va o'zgaruvchiga boshqa qiymat berishimiz mumkin:"},
            { type: 'code', value: `
let a;    // biz o'zgaruvchini e'lon qilamiz

a = 1;    // unga 1 qiymatini yozing
alert(a); // 1-sonni chiqaradi

a = 2;    // endi 2 qiymatini yozib, o'chiring qiymat 1
alert(a); // 2 ko'rsatiladi
                `},
            { type: 'text', value: "Ya'ni, o'zgaruvchining qiymati unga qattiq bog'langan narsa emas. Biz ba'zi ma'lumotlarni o'zgaruvchiga erkin yozishimiz, ularni o'qishimiz, keyin boshqa narsalarni yozishimiz mumkin - va hokazo."},
            { type: 'header', value: "Mashq"},
            { type: 'text', value: "A o'zgaruvchisini yarating. Unga 10 qiymatini yozing, uni ekranga ko'rsating. Keyin unga 20 qiymatini yozing va uni ekranga ko'rsating."},
            { type: 'header', value: "Bitta o'zgaruvchi uchun bir nechta let"},
            { type: 'text', value: "Xuddi shu o'zgaruvchini let orqali bir necha marta e'lon qilish mumkin emas. Masalan, quyidagi kod xatoga olib keladi:"},
            { type: 'code', value: `
let a = 1;
alert(a);
let a = 2;
alert(a);
                `},
            { type: 'text', value: "Muammoni hal qilishning ikkita varianti mavjud. Siz shunchaki ikki xil o'zgaruvchini kiritishingiz mumkin:"},
            { type: 'code', value: `
let a = 1;
alert(a);
let b = 2;
alert(b);
                `},
            
            { type: 'text', value: "Yoki avval a o'zgaruvchisini e'lon qilishingiz va keyin u bilan operatsiyalarni bajarishingiz mumkin:"},
            { type: 'code', value: `
let a;
a = 1;
alert(a);
a = 2;
alert(a);
                `},
            { type: 'header', value: `Javascript-da raqamlar bilan matematik operatsiyalar`},
            { type: 'text', value: `Qo'shuv:`},
            { type: 'code', value: `
let a = 1 + 2;
alert(a); //3-sonni chiqaradi 
                `},
            { type: 'text', value: `Ayruv amali:`},
            { type: 'code', value: `
let b = 3 - 2;
alert(b); //1-sonni chiqaradi 
                `},
            { type: 'text', value: `Ko'paytiruv amali:`},
            { type: 'code', value: `
let c = 3 * 2;
alert(c); //6-sonni chiqaradi 
                `},
            { type: 'text', value: `Bo'luv amali:`},
            { type: 'code', value: `
let d = 4 / 2;
alert(d); //2-sonni chiqaradi 
                `},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `A o'zgaruvchisini yarating. Unga 1, 2 va 3 raqamlari yig'indisini yozing. Alert funksiyasidan foydalanib, a o'zgaruvchisi tarkibini ekranga olib chiqing.`},


        
        
        
        
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
