
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
let a = 3; // biz o'zgaruvchini e'lon qilamiz va unga qiymat beramiz
alert(a); // chiqaradi 3
                `},
            { type: 'text', value: "E'londan so'ng darhol qiymatni o'zgaruvchiga yozish shart emas. Siz avval o'zgaruvchini e'lon qilishingiz va keyin unga qiymat berishingiz mumkin:"},
            { type: 'code', value: `
let a; // o'zgaruvchini e'lon qilish
a = 3; // biz unga qiymat beramiz
alert(a); // ekranda o'zgaruvchi qiymatini ko'rsatamiz
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
let a, b, c; // biz barcha 3 o'zgaruvchini e'lon qilamiz
// o'zgaruvchilarga quyidagi qiymatlarni belgilang:
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
alert(a); // 3-sonni chiqaradi 
                `},
            { type: 'text', value: `Ayruv amali:`},
            { type: 'code', value: `
let b = 3 - 2;
alert(b); // 1-sonni chiqaradi 
                `},
            { type: 'text', value: `Ko'paytiruv amali:`},
            { type: 'code', value: `
let c = 3 * 2;
alert(c); // 6-sonni chiqaradi 
                `},
            { type: 'text', value: `Bo'luv amali:`},
            { type: 'code', value: `
let d = 4 / 2;
alert(d); // 2-sonni chiqaradi 
                `},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `A o'zgaruvchisini yarating. Unga 1, 2 va 3 raqamlari yig'indisini yozing. Alert funksiyasidan foydalanib, a o'zgaruvchisi tarkibini ekranga olib chiqing.`},

            { type: 'header', value: `Javascript-da o'zgaruvchilar bilan matematik operatsiyalar`},
            { type: 'text', value: `Matematik amallar nafaqat raqamlar ustida, balki o'zgaruvchilar ustida ham bajarilishi mumkin. Masalan, ikkita o'zgaruvchining qiymatlarini qo'shamiz:`},
            { type: 'code', value: `
let a = 1;
let b = 2;
alert(a + b); // 3-sonni chiqaradi
                `},
            { type: 'text', value: `Operatsiya natijasini darhol chiqarish shart emas, siz avval uni biron bir o'zgaruvchiga yozishingiz va shundan keyingina ushbu o'zgaruvchining qiymatini olishingiz mumkin:`},
            { type: 'code', value: `
let a = 1;
let b = 2;
let c = a + b; // keling, miqdorni c o'zgaruvchisiga yozamiz
alert(c);      // 3-sonni chiqaradi
                `},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `1. Qiymati 10 bo'lgan a o'zgaruvchisini va qiymati 2 bo'lgan b o'zgaruvchisini yarating. Ekranda ularning yig'indisini, farqini, mahsulotini va shaxsiy qismini ko'rsating (bo'linish natijasi).`},
            { type: 'text', value: `2. Qiymati 10 bo'lgan o'zgaruvchini va qiymati 5 bo'lgan d o'zgaruvchisini yarating. Ularni umumlashtiring va natijani natija o'zgaruvchisiga belgilang. Ekranda ijro o'zgaruvchisining qiymatini ko'rsating.`},
            { type: 'text', value: `3. Qiymati 1 bo'lgan a o'zgaruvchisini, qiymati 2 bo'lgan b o'zgaruvchini va 3 qiymatiga ega o'zgaruvchini yarating. Ularning miqdorini ekranda ko'rsating.`},
            { type: 'text', value: `4. Qiymati 10 bo'lgan a o'zgaruvchisini va qiymati 5 bo'lgan b o'zgaruvchisini yarating. B o'zgaruvchisini a dan olib tashlang va natijani c o'zgaruvchisiga belgilang. Keyin d o'zgaruvchisini yarating, unga 7 qiymatini belgilang. C va d o'zgaruvchilarni qo'shing va natijani natija o'zgaruvchisiga yozing. Ekranda ijro o'zgaruvchisining qiymatini ko'rsating.`},

            { type: 'header', value: `Javascript-da matematik operatsiyalarning ustuvorligi`},
            { type: 'text', value: `Javascript matematik operatsiyalari an'anaviy matematikadagi kabi ustunlikka ega. Ya'ni, boshida ko'paytirish va bo'lish amalga oshiriladi, so'ngra qo'shish va ayirish amalga oshiriladi.`},
            { type: 'text', value: `Keyingi misolda birinchi 2 2 ga ko'paytiriladi va keyin natijaga 3 qo'shiladi:`},
            { type: 'code', value: `
let a = 2 * 2 + 3;
alert(a); // 7 ko'rsatiladi (natija 4 + 3)
                `},
            { type: 'header', value: `Javascript-dagi salbiy raqamlar`},
            { type: 'text', value: `Raqamlar salbiy bo'lishi mumkin. Buning uchun raqamdan oldin minus belgisini qo'yishingiz kerak:`},
            { type: 'code', value: `
let a = -1;
alert(a); // -1 chiqadi
                `},
            { type: 'text', value: `Minus belgisi ham raqamlarga, ham o'zgaruvchilarga yozilishi mumkin:`},
            { type: 'code', value: `
let a = 1;
let b = -a; // biz b tarkibiga teskari belgi bilan a tarkibini yozdik
alert(b);   // -1 chiqadi
                `},
            { type: 'header', value: `Javascript-da bo'linish qoldig'i`},
            { type: 'text', value: `Maxsus % operatori mavjud bo'lib, uning yordamida siz bir sonni boshqasiga bo'lish qoldig'ini topishingiz mumkin:`},
            { type: 'code', value: `alert(10 % 3); // 1 chiqadi`},
            { type: 'text', value: `Agar bitta raqam ikkinchisiga bo'lingan bo'lsa, qoldiq nolga teng bo'ladi:`},
            { type: 'code', value: `alert(10 % 2); // 0 chiqadi`},
            { type: 'text', value: `% operatori, albatta, nafaqat raqamlarga, balki o'zgaruvchilarga ham qo'llanilishi mumkin:`},
            { type: 'code', value: `
let a = 10;
let b = 3;
alert(a % b); // 1 chiqadi
                `},
            { type: 'header', value: `Javascript darajasiga ko'tarilish`},
            { type: 'text', value: `Raqamni darajaga ko'tarish uchun maxsus operator ham mavjud **. Keling, uning yordami bilan 10 raqamini uchinchi darajaga ko'taraylik:`},
            { type: 'code', value: `alert(10 ** 3); // 1000 chiqadi`},
            { type: 'text', value: `Raqam ham, daraja ham o'zgaruvchilarda bo'lishi mumkin:`},
            { type: 'code', value: `
let a = 10;
let b = 3;
alert(a ** b); // 1000 chiqadi

                `},
            
            { type: 'header', value: `Javascript-dagi qatorlar / hariflar`},
            { type: 'text', value: `Yuqorida aytib o'tilganidek, ma'lumotlar har xil turdagi bo'lishi mumkin. Turlardan biri raqamlar, biz allaqachon bir oz o'rganganmiz. Endi qatorlarga o'tamiz.`},
            { type: 'text', value: `Hariflar tirnoqli qoshtirnoq yordamida yaratiladi:`},
            { type: 'code', value: `
let str = 'abc';
alert(str); // abc chiqadi
                `},
            { type: 'text', value: `Qo'shtirnoq nafaqat bitta, balki ikkita bo'lishi mumkin:`},
            { type: 'code', value: `
let str = "abc";
alert(str); // abc chiqadi
                `},
            { type: 'text', value: `Javascript-da bitta va ikkita tirnoq o'rtasida farq yo'q. Ulardan foydalanish sizning afzalliklaringizga bog'liq. Men bitta qo'shtirnoqdan foydalanishni afzal ko'raman, shuning uchun ular darslikning boshqa hamma joyida bo'ladi.`},
            { type: 'text', value: `Bu erda va bundan keyin, agar xulosaning natijasi satr bo'lsa, men uni qo'shtirnoq ichiga qo'yaman, bu satr ekanligini ko'rsataman, bu shunday: u "abc" ni chiqaradi. Chiziqni alert orqali ko'rsatishda qo'shtirnoq ko'rinmaydi (ya'ni, qo'shtirnoq ichida yozilganlarim ekranda ko'rsatiladi).`},

            { type: 'header', value: `Mashq`},
            { type: 'text', value: `Hariflar yordamida o'zingizni ismingizni yozing. Ushbu ma'lumotlarni ekranga chiqaring.`},
            { type: 'header', value: `Javascript-da qator qo'shish`},
            { type: 'text', value: `Satrlarni qo'shish uchun, shuningdek, raqamlarni qo'shish uchun +: operatori ishlatiladi`},
            { type: 'code', value: `
let str = 'abc' + 'def'; // ikki qatorni katlaymiz
alert(str); // 'abcdef' chiqadi
                `},
            { type: 'text', value: `hariflar o'zgaruvchilarda ham saqlanishi mumkin:`},
            { type: 'code', value: `
let str1 = 'abc';
let str2 = 'def';
alert(str1 + str2); // 'abcdef' chiqadi
                `},
            { type: 'text', value: `Shuningdek, siz o'zgaruvchilar va satrlarni qo'shishingiz mumkin:`},
            { type: 'code', value: `
let str1 = 'abc';
let str2 = 'def';
alert(str1 + '!!!' + str2); // 'abc!!!def' chiqadi
                `},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `"java" matni bilan o'zgaruvchi va "skript" matni bilan o'zgaruvchi yarating. Ushbu o'zgaruvchilar va satrlarni qo'shish operatsiyasidan foydalanib, ekranda "javascript" qatorini ko'rsating.`},
            { type: 'text', value: `"salom" matni bilan o'zgaruvchi va "dunyo" matni bilan o'zgaruvchi yarating. Ushbu o'zgaruvchilar va satrlarni qo'shish operatsiyasidan foydalanib, ekranda "salom dunyo" qatorini ko'rsating.`},
            { type: 'header', value: `Javascript-da qator uzunligi`},
            { type: 'text', value: `Qatordagi belgilar soni teng xususiyatda mavjud:`},
            { type: 'code', value: `
let str = 'abcde';
alert(str.length); // 5 chiqadi
                `},
            { type: 'header', value: `Length xususiyati to'g'ridan-to'g'ri qatorga qo'llanilishi mumkin:`},
            { type: 'code', value: `alert('abcde'.length); // 5 chiqadi`},
            { type: 'text', value: `Bo'shliq ham ramzdir:`},
            { type: 'code', value: `alert('ab de'.length); // 5 chiqadi`},
            { type: 'header', value: `Javascript-dagi shablon satrlari`},
            { type: 'text', value: `Qo'shtirnoqning maxsus turi mavjud - qiyshiq:`},
            { type: 'code', value: 'let str = `abc`;'},
            { type: 'text', value: "O'zgaruvchilar qiyshiq tirnoqlarga kiritilishi mumkin. Buning uchun o'zgaruvchining nomi ${} dizaynida yozilishi kerak."},
            { type: 'text', value: `Keling, bir misolni ko'rib chiqaylik. Biz qatorlar va o'zgaruvchilarni qo'shishni xohlaymiz:`},
            { type: 'code', value: `
let str = 'xxx';
let txt = 'aaa ' + str + ' bbb';
                `},
            { type: 'text', value: `Ushbu kodni quyidagicha qayta yozish mumkin:`},
            { type: 'code', value: "let txt = `aaa ${} bbb`;"},
            { type: 'header', value: `Javascript-da maxsus qiymatlar`},
            { type: 'text', value: `Javascript-da, boshqa dasturlash tillarida bo'lgani kabi, ba'zi maxsus qiymatlar uchun kalit so'zlar mavjud. Mana ular: aniqlanmagan, nol, rost, yolg'on, NaN, Infinity, -Infinity.`},
            { type: 'header', value: `undefined`},
            { type: 'text', value: `undefined - noaniqlikni bildiradi. Agar biz uni e'lon qilgan bo'lsak, lekin unga qiymat yozmagan bo'lsak, o'zgaruvchi shunday qiymatga ega bo'ladi:`},
            { type: 'code', value: `
let a;
alert(a); // undefined chiqadi
                `},
            { type: 'text', value: `Bu qiymat o'zgaruvchiga aniq tayinlanishi mumkin:`},
            { type: 'code', value: `
let a = undefined;
alert(a); // undefined chiqadi
                `},
            { type: 'header', value: `null`},
            { type: 'text', value: `null qiymati "hech narsa" degan ma'noni anglatadi. Misol uchun, biz o'zgaruvchiga hech narsa yo'qligining belgisi sifatida bunday qiymatni berishimiz mumkin:`},
            { type: 'code', value: `
let a = null;
alert(a); // null chiqadi
                `},
            { type: 'header', value: `true va false`},
            { type: 'text', value: `true va false ma'nolari mos ravishda haqiqat va yolg'onni anglatadi. Ular ikkita javobni o'z ichiga olgan narsalar uchun ishlatiladi - ha yoki yo'q.`},
            { type: 'header', value: `NaN`},
            { type: 'text', value: `NaN (Not-A-Number) sonni bildirmaydi. Bu qiymat matematik operatsiyalarni raqamlar bilan emas, balki boshqa narsa bilan bajarishga harakat qilganingizda olinadi. Masalan, bu qiymat qatorni raqamga ko'paytirishga urinish orqali beriladi:`},
            { type: 'code', value: `alert('abc' * 3); // выведет NaN`},
            { type: 'header', value: `Infinity va -Infinity`},
            { type: 'text', value: `Infinity va -Infinity qiymatlari mos ravishda cheksizlik va minus cheksizlikni bildiradi. Agar ma'lum bir raqam nolga bo'lingan bo'lsa, bunday qiymatlar olinadi - bu holda JavaScript boshqa dasturlash tillaridagi kabi xato hosil qilmaydi, balki bu qiymatlarni qaytaradi:`},
            { type: 'code', value: `
alert( 1 / 0); // Infinity chiqadi
alert(-1 / 0); // -Infinity chiqadi
                `},
            { type: 'header', value: `Javascript-da konsol bilan ishlash`},
            { type: 'text', value: `Dasturchilarga qulaylik yaratish uchun har bir brauzerda maxsus ishlab chiquvchi paneli mavjud. Ushbu panelni ochish uchun sayt sahifasida istalgan joyni sichqonchaning o'ng tugmasi bilan bosishingiz kerak. Ko'rsatilgan menyuda siz eng past elementni tanlashingiz kerak (u Inspect deb nomlanadi yoki qandaydir tarzda shunga o'xshash).`},
            { type: 'text', value: `Ochilgan panelda siz asosan ikkita yorliqdan foydalanasiz: Elements va Console. Birinchi yorliqda siz sahifa teglari haqida ma'lumot olishingiz mumkin, ikkinchisida esa JavaScript disk raskadrovka ma'lumotlarini olishingiz mumkin.`},
            { type: 'text', value: `Keling, konsolning imkoniyatlarini ko'rib chiqaylik.`},
            { type: 'text', value: `Maxsus console.log buyrug'i yordamida siz skriptlaringizdagi ma'lumotlarni konsolga ko'rsatishingiz mumkin. Bu dasturlarni disk raskadrovka qilish uchun ishlatiladi.`},
            { type: 'text', value: `Misol tariqasida konsolga biror narsa joylashtiramiz:`},
            { type: 'code', value: `console.log(123);`},
            { type: 'text', value: `Endi o'zgaruvchining qiymatini chiqaramiz:`},
            { type: 'code', value: `
let num = 123;
console.log(num);`},
            { type: 'text', value: `Siz bir nechta o'zgaruvchilarni navbat bilan olishingiz mumkin:`},                                                                       
            { type: 'code', value: `
let num1 = 123;
let num2 = 456;

console.log(num1);
console.log(num2);`},
            { type: 'text', value: `Ushbu o'zgaruvchilarni vergul bilan yozish orqali bitta buyruq yordamida bir nechta o'zgaruvchilarni chiqarish mumkin:`},
            { type: 'text', value: `
let num1 = 123;
let num2 = 456;
console.log(num1, num2);`},
            { type: 'header', value: `Javascript konsolidagi xatolar`},
            { type: 'text', value: `Kodingizda sintaktik xatoga yo'l qo'yganingizda, JavaScript bu haqda ma'lumotni konsolga joylashtiradi. Bunday xato qizil rangda ko'rsatiladi va uning o'ng tomonida ushbu xato sodir bo'lgan qator raqami ko'rsatiladi. Bu raqam havola - siz uni bosishingiz va xato bilan konsoldagi kodingizni ochishingiz mumkin.`},
            { type: 'text', value: `Keling, amalda harakat qilaylik. Keling, mavjud bo'lmagan o'zgaruvchiga murojaat qilaylik. Bunday holda, JavaScript xato chiqaradi:`},
            { type: 'code', value: `alert(eee); // Uncaught ReferenceError: eee is not defined `},
            { type: 'header', value: `Javascript-dagi konstantalar`},
            { type: 'text', value: `O'zgaruvchilardan tashqari, JavaScript-da konstantalar ham yaratilishi mumkin. Ular faqat bir marta ma'lumotlarni yozib olishlari mumkin, keyin esa ularning qiymatlarini o'zgartirib bo'lmaydi. Konstantalar const operatori yordamida e'lon qilinadi.`},
            { type: 'code', value: `const pi = 3.14;`},
            { type: 'text', value: `Odatda konstantalar oddiy o'zgaruvchilardan ajralib turishi uchun katta harflar bilan yoziladi:`},
            { type: 'code', value: `const PI = 3.14;`},
            { type: 'text', value: `Keling, konstantamizning qiymatini o'zgartirishga harakat qilaylik:`},
            { type: 'code', value: `
const PI = 3.14;
PI = 3; // Xato chiqaradi`},
            { type: 'header', value: `Ma'lumotlar turlarini avtomatik konvertatsiya qilish`},
            { type: 'text', value: `Ma'lumki, JavaScript-dagi satrlar tirnoq ichida olinishi kerak. Chiziqning barcha belgilari raqamlar bo'lishi mumkin:`},
            { type: 'code', value: `let a = '123';`},
            { type: 'text', value: `Bunday holda, a o'zgaruvchisi ham qatordir, lekin ba'zi nuance bilan.`},
            { type: 'text', value: `Nuansning mohiyati quyidagicha: agar siz raqamlar qatori ustida biron bir matematik operatsiyani bajarsangiz, bu operatsiya bizda satrlar emas, balki raqamlar mavjud bo'lgandek amalga oshiriladi:`},
            { type: 'code', value: `alert('2' * '3'); // 6 chiqadi`},
            { type: 'text', value: `Bunday holda, JavaScript biz satrlar uchun nomaqbul, ammo raqamlar uchun maqbul bo'lgan operatsiyani bajarishga harakat qilayotganimizni ko'radi.`},
            { type: 'text', value: `U, shuningdek, aslida bizning satrlarimiz tirnoq ichidagi raqamlar ekanligini ko'radi. Shuning uchun JavaScript avtomatik ravishda ushbu satrlarni raqamlarga aylantiradi va ular ustida tegishli matematik operatsiyani bajaradi.`},
            { type: 'text', value: `Bu bizning satrlarimizda faqat raqamlar bo'lsa ishlaydi. Agar kamida bitta harf bo'lsa, JavaScript operatsiyani noto'g'ri deb hisoblaydi va natijada NaN: qiymatini yaratadi`},
            { type: 'code', value: `alert('2' * '3s'); // NaN chiqadi`},
            { type: 'text', value: `Bundan tashqari, agar operatsiya matematik jihatdan to'g'ri bo'lsa, lekin satrlar uchun qabul qilinishi mumkin bo'lmasa, avtomatik konvertatsiya sodir bo'ladi.`},
            { type: 'text', value: `Misol uchun, satrlarni ko'paytirish, bo'lish yoki ayirish mumkin emas (va raqamlarni bo'lishi mumkin), shuning uchun barcha bunday operatsiyalarda raqamlar bilan satrlarni avtomatik ravishda raqamlarga aylantirish bo'ladi.`},
            { type: 'text', value: `Misol uchun, satrlarni ko'paytirish, bo'lish yoki ayirish mumkin emas (va raqamlarni bo'lishi mumkin), shuning uchun barcha bunday operatsiyalarda raqamlar bilan satrlarni avtomatik ravishda raqamlarga aylantirish bo'ladi.`},
            { type: 'code', value: `
let a = '1' + '2';
alert(a); // '12' chiqadi - qatorlar qo'shilshi sodir bo'ldi
                `},
            { type: 'text', value: `Agar atamalardan biri raqam, ikkinchisi esa satr bo'lsa, u holda satr doimo g'alaba qozonadi:`},
            { type: 'code', value: `
let a = 1 + '2';
alert(a); //  '12' chiqadi
                `},
            { type: 'text', value: `Bunday hollarda JavaScript, aksincha, raqamlarni avtomatik ravishda satrlarga aylantiradi va qatorlarni qo'shadi.`},
            { type: 'text', value: `Biroq, ikkitadan ortiq shartlar mavjud bo'lganda nuanslar mavjud: bu holda ma'lum bir turga o'tish operatsiyalarni bajarish tartibiga bog'liq.`},
            { type: 'text', value: `Quyidagi misolda 2 va 3 birinchi navbatda raqamlar sifatida qo'shiladi, so'ngra natija "1" qatoriga "5" qatori sifatida qo'shiladi, bu esa oxir-oqibat "15" qatorini beradi:`},
            { type: 'code', value: `
let a = '1' + (2 + 3);
alert(a); // '15' chiqadi
                `},
            { type: 'text', value: `Agar siz qavslarni olib tashlasangiz, hamma narsa chapdan o'ngga buklanadi. Ya'ni, birinchi navbatda '1' qatoriga 2 raqami qo'shiladi va natijada "12" qatori paydo bo'ladi. Keyin bu qatorga 3 raqami qo'shiladi va natijada "123" qatori paydo bo'ladi:`},
            { type: 'code', value: `
let a = '1' + 2 + 3;
alert(a); // выведет '123'
                `},
            { type: 'text', value: `Ammo quyidagi misolda 2 va 3 raqamlari boshida yozilgan, shuning uchun avval ular raqamlar sifatida qo'shilib, natijada 5 raqamini beradi, so'ngra bu raqamga "1" qatori qo'shiladi va oxir-oqibat "51" qatorini beradi:`},
            { type: 'code', value: `
let a = 2 + 3 + '1';
alert(a); // выведет '51'
                `},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`},
            { type: 'code', value: `
let a = '5' + '2';
alert(a);
                `},
            { type: 'text', value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`},
            { type: 'code', value: `
let a = '5' + 2;
alert(a);
                `},
            { type: 'text', value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`},
            { type: 'code', value: `
let a = 5 + '2';
alert(a);
                `},
            { type: 'header', value: `Javascript-da raqamga aylantirish`},
            { type: 'text', value: `Keling, quyidagi kodni ko'rib chiqaylik:`},
            { type: 'code', value: `
let a = '2';
let b = '3';
alert(a + b); // '23' chiqadi
                `},
            { type: 'text', value: `Ko'rib turganingizdek, bizning holatlarimizda ikkala o'zgaruvchi ham satrlarni o'z ichiga oladi va shunga mos ravishda chiziqlar kabi katlanadi.`},
            { type: 'text', value: `Bu holda o'zgaruvchilarimiz qiymatlari qator sifatida emas, balki raqamlar sifatida qo'shilishini istardik. Bunday holda, biz maxsus raqam funksiyasi yordamida o'zgaruvchisimiz turini raqamga majburan aylantirishimiz mumkin:`},
            { type: 'code', value: `
let a = '2';
let b = '3';
alert(Number(a) + Number(b)); // 5 chiqadi
                `},
            { type: 'text', value: `Можно преобразовывать строки в числа не в операции сложения, а сразу при записи в переменную - это будет работать:`},
            { type: 'code', value: `
let a = Number('2'); // o'zgaruvchiga 2 soni muxirlanadi 
let b = Number('3'); // o'zgaruvchiga 3 soni muxirlanadi
alert(a + b); // 5 chiqadi
                `},
            { type: 'header', value: `Javascript-da raqamga qisqartirilgan konvertatsiya`},
            { type: 'text', value: `Ko'pincha kodni qisqartirish uchun raqam o'rniga qator oldiga + belgisi qo'yiladi. Shunday qilib, satr ustida faqat raqamlar uchun ruxsat etilgan operatsiya bajariladi va satr raqamga aylantiriladi.`},
            { type: 'text', value: `Misolga qarang:`},
            { type: 'code', value: `
let a = +'2'; 
let b = +'3';
alert(a + b); // 5 chiqadi
                `},
            { type: 'text', value: `Mana yana bir misol:`},
            { type: 'code', value: `
let a = '2';
let b = +a; // b son sifatida yoziladi 2
                `},
            { type: 'text', value: `Mana, keyingi misol, garchi ishlaydigan bo'lsa-da, unchalik chiroyli ko'rinmaydi. Raqam funksiyasidan foydalanish maqsadga muvofiqroq bo'ladi:`},
            { type: 'code', value: `
let a = '2';
let b = '3';
alert(+a + +b); // 5 chiqdi
                `},
            { type: 'header', value: `Javascript-da raqamlarni tanlash`},
            { type: 'text', value: `Raqam funksiyasi faqat raqamlardan iborat satrlar bilan ishlaydi. Biroq, JavaScript-da dasturlashda ko'pincha boshida raqam, keyin esa harflar bo'lgan satrlarni ishlatishingiz kerak bo'lgan holatlar mavjud.`},
            { type: 'text', value: `Bunday qatorga misol piksellardagi qiymat bo'lishi mumkin: '12px'. Chiziq qismini tashlab, boshida turgan raqamni olishimiz kerak. Bunday operatsiya uchun parseInt funksiyasi mavjud. Keling, uning ishini misol bilan ko'rib chiqaylik:`},
            { type: 'code', value: `
let num = parseInt('12px');
alert(num); // 12 chiqadi
                `},
            { type: 'text', value: `Biroq, piksellar ba'zan kasrdir: '12,5px'. Bunday holda, parseInt funktsiyasi faqat butun qismni o'tkazadi va chiqaradi:`},
            { type: 'code', value: `
let num = parseInt('12.5px');
alert(num); // 12 chiqadi
                `},
            { type: 'text', value: `Umuman olganda, bu xatti-harakat sizga kerak bo'lgan narsadir. Ammo agar yo'q bo'lsa, raqamni kasr qismi bilan birga chiqaradigan parseFloat funksiyasidan foydalaning:`},
            { type: 'code', value: `
let num = parseFloat('12.5px');
alert(num); // 12.5 chiqadi`},
            { type: 'text', value: `Albatta, kasr qismining yo'qligi parseFloat funktsiyasining to'g'ri ishlashiga to'sqinlik qilmaydi:`},
            { type: 'code', value: `
let num = parseFloat('12px');
alert(num); // 12 chiqadi
                `},
            { type: 'header', value: `Javascript-da String-ga o'tkazish`},
            { type: 'text', value: `Ba'zan siz teskari konvertatsiya qilishingiz kerak - raqamdan qatorga. String: funksiyasi shu maqsadda mo'ljallangan`},
            { type: 'code', value: `
let str = String(123); // o'zgaruvchini ichida xarif '123' 
                `},
            { type: 'text', value: `Yana bir misol:`},
            { type: 'code', value: `
let num1 = 1;
let num2 = 2;
alert(String(num1) + String(num2)); // '12' chiqadi
                `},
            { type: 'header', value: `Javascript-da satr belgilarini oling`},
            { type: 'text', value: `Bizda qandaydir chiziq bo'lsin. Ushbu qatordagi har bir belgi o'z seriya raqamiga ega: birinchi belgi raqami 0, ikkinchi belgi - raqam 1, uchinchi belgi raqami 2 va boshqalar.`},
            { type: 'text', value: `Siz allaqachon sezganingizdek, belgilarni raqamlash noldan boshlanadi (nol raqamlashning boshlanishi sifatida dasturlashda tez-tez uchraydi).`},
            { type: 'text', value: `Agar kerak bo'lsa, siz uning raqami bo'yicha ma'lum bir qator belgisiga kirishingiz mumkin. Buning uchun o'zgaruvchining nomi yoziladi, shundan so'ng kvadrat qavslar qo'yiladi va bu qavslarda belgi raqami ko'rsatiladi.`},
            { type: 'text', value: `Keling, bir misolni ko'rib chiqaylik. Bizga quyidagi qatorni bersin:`},
            { type: 'code', value: `let str = 'abcde';`},
            { type: 'text', value: `Keling, ushbu satrning ba'zi belgilariga murojaat qilaylik:`},
            { type: 'code', value: `
let str = 'abcde';
alert(str[0]); // 'a' chiqadi
alert(str[1]); // 'b' chiqadi
alert(str[2]); // 'c' chiqadi
                `},
            { type: 'text', value: `Belgi raqami o'zgaruvchida ham saqlanishi mumkin:`},
            { type: 'text', value: `Satr belgilarini o'qish mumkin, lekin ularni o'zgartirib bo'lmaydi. Quyidagi misol kodi xatolikni keltirib chiqaradi (qat'iy rejimda):`},
            { type: 'code', value: `
let str = 'abcde';
str[0] = '!';`},
            { type: 'header', value: `Javascript-dagi oxirgi qator belgisi`},
            { type: 'text', value: `Keling, oxirgi qator belgisini ko'rsatamiz. Shu bilan birga, skriptimiz satr uzunligidan qat'i nazar, oxirgi belgining raqamini o'zi aniqlashiga ishonch hosil qilamiz.`},
            { type: 'text', value: `Bizda shunday qator bo'lsin:`},
            { type: 'code', value: `let str = 'abcde';`},
            { type: 'text', value: `Ko'rib turganingizdek, bu qatordagi belgilar soni 5 ta. Bir oz o'ylab ko'rsangiz, bu satrning oxirgi belgisining raqami uning uzunligidan 1 ga kam bo'lishi aniq bo'ladi, chunki belgilarni raqamlash noldan boshlanadi.`},
            { type: 'text', value: `Ma'lum bo'lishicha, chiziq uzunligini bilib, biz undan 1 ni olib, oxirgi belgining raqamini olishimiz mumkin, keyin esa bu raqamdan oxirgi belgining o'zini olish uchun foydalanishingiz mumkin.`},
            { type: 'text', value: `Ma'lumki, chiziq uzunligini length xususiyati yordamida topish mumkin. Shunga asoslanib, biz oxirgi belgining raqamini topamiz:`},
            { type: 'code', value: `
                let str = 'abcde';
let last = str.length - 1; // oxirgi simvolni raqami chiqadi 
                `},
            { type: 'text', value: `Используем найденный номер для вывода символа на экран:`},
            { type: 'code', value: `
let str = 'abcde';
let last = str.length - 1; // oxirgi simvolni raqami chiqadi 
alert(str[last]); // 'e' chiqadi
                `},
            { type: 'text', value: `Oraliq oxirgi o'zgaruvchini kiritish shart emas:`},
            { type: 'code', value: `
let str = 'abcde';
alert(str[str.length - 1]); // 'e' chiqadi
                `},
            { type: 'header', value: `Javascript-da raqamlar bilan qatorlar`},
            { type: 'text', value: `Bizda faqat raqamlarni o'z ichiga olgan qator bo'lsin:`},
            { type: 'code', value: `let test = '12345'; // string raqamlar bilan`},
            { type: 'text', value: `Masalan, uning birinchi va ikkinchi belgilarining yig'indisini topamiz:`},
            { type: 'code', value: `
let test = '12345';
alert(test[0] + test[1]); // '12' chiqadi   
                `},
            { type: 'text', value: `Ko'rib turganingizdek, bizning qatorimizdagi belgilar ham satrlar bo'lib, satrlar sifatida umumlashtiriladi. Biz ularni raqamlar sifatida umumlashtirmoqchimiz. Buning uchun raqam funksiyasidan foydalanamiz:`},
            { type: 'code', value: `
let test = '12345';
alert(Number(test[0]) + Number(test[1])); // 3 chiqadi
                `},
            { type: 'header', value: `Javascript-da o'zgaruvchini o'zgartirish operatsiyalari`},
            { type: 'text', value: `O'zgaruvchining joriy qiymati bo'yicha ba'zi operatsiyalarni bajarish va keyin natijani bir xil o'zgaruvchiga qaytarish mumkin. Misolga qarang:`},
            { type: 'code', value: `
let num = 1;   // biz num o'zgaruvchisini e'lon qilamiz va unga 1 qiymatini yozamiz 
num = num + 2; // biz uning o'zini plyus 2 ga yozamiz
alert(num);    // 3 chiqadi
                `},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`},
            { type: 'code', value: `
let num = 1;
num = num + 1;
num = num + 1;

alert(num);
                `},
            { type: 'text', value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`},
            { type: 'code', value: `
let num = 1;
num = num + 2;
num = num + 3;

alert(num);`},
            { type: 'text', value: `Bunday operatsiyalar uchun, uning joriy qiymati va boshqa narsa o'zgaruvchiga yozilganda, maxsus qisqartirilgan sintaksis mavjud. Ushbu sintaksisda oddiy topshiriq o'rniga maxsus operator += ishlatiladi. Keling, misolni ko'rib chiqaylik:`},
            { type: 'code', value: `
let num = 1;
num += 3; // bu ko'rinish tengdur -> num = num + 3;
                `},
            { type: 'text', value: `Boshqa matematik operatsiyalar uchun shunga o'xshash operatorlar mavjud:`},
            { type: 'code', value: `
let num = 2;
num -= 3;
                `},
            { type: 'code', value: `
let num = 2;
num *= 3;
                `},
            { type: 'code', value: `
let num = 2;
num /= 3; 
                `},
            { type: 'header', value: `Javascript-da inkriment va dikriment operatsiyalari`},
            { type: 'code', value: `
let num = 0;
num = num + 1; // num o'zgaruvchisiga 1 raqamini qo'shing
alert(num);
                `},
            { type: 'text', value: `Siz allaqachon bilganingizdek, ushbu kodni += operatori orqali qisqartirilgan shaklda qayta yozish mumkin:`},
            { type: 'code', value: `
let num = 0;
num += 1;     // num o'zgaruvchisiga 1 raqamini qo'shing
alert(num);   // 1 chiqadi`},
            { type: 'text', value: `Darhaqiqat, dasturlashda birlik qo'shilishi shunchalik keng tarqalganki, bu operatsiya uchun yanada qisqartirilgan sintaksis ixtiro qilingan - o'zgaruvchining qiymatini 1 ga oshiradigan maxsus operator ++ qo'shimchasi.`},
            { type: 'text', value: `Keling, kodimizni uning yordami bilan qayta yozamiz:`},
            { type: 'code', value: `
let num = 0;
num++;        // num o'zgaruvchisiga 1 raqamini qo'shing
alert(num);   // 1 chiqadi
                `},
            { type: 'text', value: `O'zgaruvchining qiymatini 1 ga kamaytiradigan ---- operatsiyasi ham mavjud. Misolga qarang:`},
            { type: 'code', value: `
let num = 0;
num--;        // num o'zgaruvchisiga 1 raqamini ayring
alert(num);   // -1 chiqadi
                `},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `Ushbu kodni inkriment va dekrement operatsiyalarini o'z ichiga olishi uchun qayta ishlang:`},
            { type: 'code', value: `
let num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);
                `},
            { type: 'header', value: `Javascript-da prefiks va postfiks turi`},
            { type: 'text', value: `Aslida, inkriment va dekrement operatsiyalari ikki usulda qayd etilishi mumkin. Keling, ushbu usullarni ++ misolida ko'rib chiqaylik, ammo - uchun - hammasi o'xshash bo'ladi.`},
            { type: 'text', value: `Birinchi usulda operatsiya o'zgaruvchining nomidan keyin shunday yoziladi: a++, ikkinchi usulda esa - o'zgaruvchining nomidan oldin, quyidagicha: ++a.`},
            { type: 'text', value: `Birinchi shakl postfiks, ikkinchisi esa prefiks deb ataladi. Keling, bu ikki shakl o'rtasidagi farq qanday hollarda paydo bo'lishini ko'rib chiqaylik.`},
            { type: 'text', value: `Bizda alert (a++) kodi va alert (++a) kodi bo'lsin.`},
            { type: 'text', value: `Alert(a++) bo'lsa, o'zgaruvchi avval chiqariladi, so'ngra bittaga ko'payadi va alert(++a) bo'lsa, o'zgaruvchi avval bittaga ko'payadi va keyin chiqariladi.`},
            { type: 'text', value: `Keyingi misolda birinchi o'zgaruvchan 0 ni ko'rsatadi, chunki birinchi navbatda ekran chiqishi ishlaydi va shundan keyingina o'zgaruvchi ortadi:`},
            { type: 'code', value: `
let num = 0;
alert(num++); // 0 chiqadi
alert(num);   // 1 chiqadi
                `},
            { type: 'text', value: `Va endi o'zgaruvchi birinchi navbatda kattalashadi va shundan keyingina ekranda ko'rsatiladi:`},
            { type: 'code', value: `
let num = 0;
alert(++num); // 1 ni chiqaradi - o'zgaruvchi darhol oshdi
                `},
            { type: 'text', value: `Bu xatti-harakat nafaqat ekranda ko'rsatish, balki tayinlash uchun ham amal qiladi:`},
            { type: 'code', value: `
let num1 = 0;
let num2 = num1++; // 0 num2 o'zgaruvchisiga yoziladi
alert(num2); // 0 chiqadi
alert(num1); // 1 ni chiqaradi - num1 o'zgaruvchisi num2 ga yozilganidan keyin o'zgargan 
                `},
            { type: 'text', value: `Endi postfiks shaklini prefiks shakliga o'zgartiramiz:`},
            { type: 'code', value: `
let num1 = 0;
let num2 = ++num1; // 1 num2 o'zgaruvchisiga yoziladi
alert(num2); // 1 chiqadi
                `},
            { type: 'text', value: `Agar bizning operatsiyamiz alohida chiziqda bajarilsa, prefiks va postfiks shakllari o'rtasida farq yo'q:`},
            { type: 'code', value: `
let num = 0;
++num;
num++;
alert(num); // 2 chiqadi
                `},
            { type: 'header', value: `Javascript-da toq sonlarni hisoblash`},
            { type: 'text', value: `Kasr kompyuterlarda shunday saqlanadiki, ular ko'pincha noto'g'ri taqdim etilishi mumkin. Bunday holda, oddiy operatsiya g'alati natija berganida, sizni ajablantirishi mumkin. Misol:`},
            { type: 'code', value: `
let a = 0.1 + 0.2;
alert(a); // 0.30000000000000004 chiqadi
                `},
            { type: 'text', value: `Bunday xatti-harakatlarga qarshi kurashish uchun siz kasr qismida ma'lum bir belgiga yaxlitlashni amalga oshiradigan maxsus toFixed usulidan foydalanishingiz mumkin. Keling, natijamizni yaxlitlaylik:`},
            { type: 'code', value: `
let a = 0.1 + 0.2;
alert(a.toFixed(2)); // '0.30' chiqadi
                `},
            { type: 'text', value: `Tofixed usuli natijani satr sifatida beradi. Siz uning natijasini raqamga aylantirishingiz mumkin:`},
            { type: 'code', value: `
let a = 0.1 + 0.2;
alert(+a.toFixed(2)); // 0.3 chiqadi`},
            { type: 'header', value: `Javascript-da prompt funksiyasi`},
            { type: 'text', value: `Berilgan xabarni ekranda ko'rsatadigan alert funksiyasi mavjudligini allaqachon bilasiz. Bundan tashqari, foydalanuvchidan har qanday matnni olish imkonini beruvchi shunga o'xshash prompt funksiyasi mavjud.`},
            { type: 'text', value: `Misol tariqasida foydalanuvchi nomini so'raymiz:`},
            { type: 'code', value: `prompt('Sizni ismingiz ?');`},
            { type: 'text', value: `Prompt funksiyasi tomonidan chiqarilgan oynani ko'rish uchun yuqoridagi kodni ishga tushiring. Ismingizni kiriting va tugmani bosing. Agar siz yuqorida tavsiflangan barcha manipulyatsiyalarni bajargan bo'lsangiz, siz kiritgan nom bizning skriptimizga kiradi.`},
            { type: 'text', value: `Kiritilgan nomga kirish uchun prompt funktsiyasining natijasi ba'zi o'zgaruvchilarga tayinlanishi kerak, masalan:`},
            { type: 'code', value: `let name = prompt('Sizni ismingiz ?');`},
            { type: 'text', value: `Kodning keyingi qatorida alert: funksiyasidan foydalanib, avval kiritilgan nomni ekranga chiqaramiz`},
            { type: 'code', value: `
let name = prompt('Sizni ismiz ?');
alert('Sizni ismiz: ' + name);`},
            { type: 'text', value: `Prompt funksiyasi chaqirilganda, tegishli ma'lumotlar kiritilgunga qadar skriptning keyingi bajarilishi bloklanishini tushunishingiz kerak. Umuman olganda, alert funksiyasi ham ishlaydi, faqat u tegishli tugmani bosishni kutadi.`},
            { type: 'text', value: `Aytgancha, o'zgaruvchidan foydalanish shart emas:`},
            { type: 'code', value: `alert('Sizni ismingiz: ' + prompt('Sizni ismingiz?'));`},
            { type: 'header', value: `Mashq`},
            { type: 'text', value: `Prompt funksiyasidan foydalanib foydalanuvchining yoshini so'rang. Alert yordamida foydalanuvchi kiritgan yoshni chop eting.`},
            { type: 'header', value: `Javascript-dagi hujjatga matn kiritish`},
            { type: 'text', value: `Javascript vositalari HTML sahifa teglarini boshqarishi mumkin, masalan, ulardagi matnni ko'rsatish. Buni keyinroq DOM bilan ishlashga bag'ishlangan bo'limdan o'tganimizda o'rganamiz.`},
            { type: 'text', value: `Biroq, ba'zida disk raskadrovka maqsadlarida siz brauzer oynasida ba'zi matnlarni ko'rsatishingiz kerak. Bu hujjat.write buyrug'i yordamida amalga oshiriladi. Keling, u bilan ishlashni misollar bilan ko'rib chiqaylik.`},
            { type: 'text', value: `Raqamli qiymatni chiqaramiz:`},
            { type: 'code', value: `document.write(123);`},
            { type: 'text', value: `Keling, ba'zi matnni ko'rsatamiz:`},
            { type: 'code', value: `document.write('text');`},
            { type: 'text', value: `Teglarga o'ralgan matnni ko'rsatamiz:`},
            { type: 'code', value: `document.write('<b>text</b>');`},
            { type: 'text', value: `Keling, matnni o'zgaruvchidan chiqaraylik:`},
            { type: 'code', value: `
let str = 'text';
document.write(str);
                `},
            { type: 'text', value: `Keling, matnni o'zgaruvchidan teglarga yakunlaylik:`},
            { type: 'code', value: `
let str = 'text';
document.write('<b>' + str + '</b>');
                `},
            { type: 'header', value: `Javascript-da operatsiyalar bo'yicha amaliyot`},
            { type: 'text', value: `Keling, soatiga necha soniya borligini bilib olaylik. Ma'lumki, daqiqada 60 soniya, soatda esa 60 daqiqa. Shuning uchun, soatiga soniyalar sonini topish uchun siz 60 ni 60 ga ko'paytirishingiz kerak:`},
            { type: 'code', value: `alert(60 * 60);`},
            { type: 'text', value: `1. Kunlik soniyalar sonini toping.`},
            { type: 'text', value: `2. 30 kunlik soniyalar sonini toping.`},
            { type: 'text', value: `3. Yildagi soniyalar sonini toping.`},
            { type: 'text', value: `4. Kunlik daqiqalar sonini toping.`},
            { type: 'text', value: `5. Yilning daqiqalar sonini toping.`},
            { type: 'text', value: `6. Megabaytda baytlar sonini toping.`},
            { type: 'text', value: `7. Gigabaytdagi baytlar sonini toping.`},
            { type: 'text', value: `8. 10 gigabaytdagi baytlar sonini toping.`},
            { type: 'text', value: `9. Terabaytdagi baytlar sonini toping.`},
            { type: 'text', value: `10. Terabaytda kilobaytlar sonini toping.`},
        
        ],
    },
];
export const JsDocumentSecond = [
    {
        id: 2,
        path: "js2",
        content: [
            { type: 'header', value: 'Javascript-dagi massivlar' },
            { type: 'text', value: `Endi biz massiv deb ataladigan maxsus ma'lumotlar turini o'rganishni boshlaymiz. Massiv - bu ba'zi qiymatlarning butun to'plamini tartibli saqlash mumkin bo'lgan o'zgaruvchi.` },
            { type: 'text', value: `Massiv saqlaydigan qiymatlar elementlar deyiladi. Elementlar bir-biridan vergul bilan ajratiladi. Ushbu verguldan keyin bo'shliqlarni qo'yish odatiy holdir.` },
            { type: 'text', value: `Massivni yaratish uchun kvadrat qavslar ishlatiladi:` },
            { type: 'code', value: `let arr = [];` },
            { type: 'text', value: `Keling, massivimizni qatorlar bilan to'ldiraylik:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c'];` },
            { type: 'text', value: `Keling, massivimizni satrlar bilan to'ldiraylik: Endi massivni raqamlar bilan to'ldiramiz:` },
            { type: 'code', value: `let arr = [1, 2, 3];` },
            { type: 'text', value: `Massivdagi satrlar va raqamlarga qo'shimcha ravishda siz barcha ruxsat etilgan ma'lumotlar turlarini saqlashingiz, shuningdek ularni bir massivda bir-biri bilan aralashtirishingiz mumkin, misol:` },
            { type: 'code', value: `let arr = [1, 2, 'a', 'b', null, true, false];` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `1. Raqamlar bilan massiv yarating. Alert funksiyasi yordamida uni ekranga chiqaring va console.log yordamida konsolingizga chiqaring.    ` },
            { type: 'text', value: `2. Chiziqlar bilan massiv yarating. Alert funksiyasi yordamida uni ekranga chiqaring va console.log yordamida konsolingizga chiqaring.` },
            { type: 'header', value: `Javascript-da massiv elementlarini olish` },
            { type: 'text', value: `Massiv elementlariga kirish satr belgilariga murojaat qilish kabi amalga oshiriladi. Massivning har bir elementi o'z raqamiga ega: birinchi element - 0 raqami, ikkinchisi - 1 raqami va boshqalar. Bu raqamlar massiv elementlarining kalitlari deb ataladi. Keling, bir misolni ko'rib chiqaylik. Bizga quyidagi massivni bersin:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c'];` },
            { type: 'text', value: `Keling, uning elementlarini ko'rib chiqaylik:` },
            { type: 'code', value: `
console.log(arr[0]); // 'a' chiqadi
console.log(arr[1]); // 'b' chiqadi
console.log(arr[2]); // 'c' chiqadi
                ` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `1, 2, 3 elementlarga ega massiv yarating. Ushbu elementlarning har birini ekranga olib chiqing.` },
            { type: 'text', value: `Keyingi massiv berilgan:` },
            { type: 'code', value: `let arr = [1, 2, 3];` },
            { type: 'text', value: `Uning har bir elementini ekranga olib chiqing.` },
            { type: 'text', value: `Keyingi massiv berilgan:` },
            { type: 'code', value: `let arr = [1, 2, 3];` },
            { type: 'text', value: `Ekranda ushbu massiv elementlarining yig'indisini ko'rsating.` },
            { type: 'text', value: `Keyingi massiv berilgan:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c', 'd'];` },
            { type: 'text', value: `Ushbu massiv yordamida quyidagi qatorni chop eting:` },
            { type: 'text', value: `'a+b+c+d'` },
            { type: 'header', value: `Javascript-da massiv uzunligi` },
            { type: 'text', value: `
let arr = ['a', 'b', 'c'];
console.log(arr.length) // 3 chiqadi
                ` },
            { type: 'text', value: `Massivning uzunligini bilib, siz uning oxirgi elementini olishingiz mumkin:` },
            { type: 'code', value: `
let arr = ['a', 'b', 'c'];
console.log(arr[arr.length - 1]) // 'c' chiqadi` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `1. Ixtiyoriy elementlar bilan massiv yarating. Ekranda ushbu massivdagi elementlar sonini ko'rsating.` },
            { type: 'text', value: `2. Ixtiyoriy elementlar bilan massiv yarating. Ekranda ushbu massivning oxirgi elementini ko'rsating.` },
            { type: 'header', value: `Javascript-da massiv elementlarini o'zgartirish` },
            { type: 'text', value: `Massiv elementlarini o'zgartirish mumkin:` },
            { type: 'code', value: `
 let arr = ['a', 'b', 'c'];

arr[0] = '!';
console.log(arr); // ['!', 'b', 'c'] chiqadi
                ` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `"a", "b'", "c" elementlari bilan massiv yarating. Birinchi element o'rniga 1 raqamini yozing, ikkinchisi o'rniga - 2, uchinchisi o'rniga - 3.` },
            { type: 'header', value: `Javascript-da massiv elementlarini qayta yozish` },
            { type: 'text', value: `Shuningdek, siz elementning joriy qiymatini o'qishingiz, u bilan ba'zi operatsiyalarni bajarishingiz va o'zgartirilgan qiymatni ushbu elementga qayta yozishingiz mumkin:` },
            { type: 'code', value: `
let arr = ['a', 'b', 'c'];

arr[0] = arr[0] + '!';
arr[1] = arr[1] + '!';
arr[2] = arr[2] + '!';

console.log(arr); // ['a!', 'b!', 'c!'] chiqadi` },
            { type: 'text', value: `Oldingi kodni +=: operatori orqali qayta yozish mumkin` },
            { type: 'code', value: `
let arr = ['a', 'b', 'c'];

arr[0] += '!';
arr[1] += '!';
arr[2] += '!';

console.log(arr); // выведет ['a!', 'b!', 'c!']
                ` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `Raqamlar bilan massiv yarating. Massivning har bir elementiga 3 raqamini qo'shing. Ekranda o'zgartirilgan massivni ko'rsating.` },
            { type: 'header', value: `Javascript-da massiv elementlarining inkriment va dekrementi` },
            { type: 'text', value: `Shuningdek, siz inkriment va dekretning operatsiyalaridan foydalanishingiz mumkin:` },
            { type: 'code', value: `
let arr = [1, 2, 3, 4];

arr[0]++;
++arr[1];
arr[2]--;
--arr[3];

console.log(arr); // [2, 3, 2, 3] chiqadi
                ` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `1, 2 va 3 elementlarga ega massiv yarating. ++ operatoridan foydalanib, massivning har bir elementini bittaga oshiring.` },
            { type: 'header', value: `Javascript kalitlariga elementlar qo'shish` },
            { type: 'text', value: `Ushbu massiv e'lon qilingan paytda massivga elementlarni darhol qo'shish shart emas. Siz avval ushbu massivni e'lon qilishingiz va keyin unga kerakli elementlarni qo'shishingiz mumkin:` },
            { type: 'code', value: `
let arr = [];

arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';

console.log(arr); // ['a', 'b', 'c'] chiqadi` },
            { type: 'text', value: `Bundan tashqari, ma'lumotlar bilan to'ldirilgan massivga elementlarni qo'shishingiz mumkin:` },
            { type: 'code', value: `
let arr = ['a', 'b', 'c'];

arr[3] = 'd';
console.log(arr); //  ['a', 'b', 'c', 'd'] chiqadi` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `1. Ta'riflangan texnikadan foydalanib, 1, 2 va 3 elementlarga ega massiv yarating.` },
            { type: 'text', value: `2. Bunday massiv berilsin:` },
            { type: 'code', value: `let arr = [1, 2, 3];` },
            { type: 'text', value: `Uning oxiriga 4 va 5 elementlarni qo'shing.` },
            { type: 'header', value: `Javascript-da siyrak massivlar` },
            { type: 'text', value: `Agar massivda o'tkazib yuborilgan kalitlar bo'lsa, unda siz siyrak massivni olishingiz mumkin. Keling, u qanday ko'rinishini ko'rib chiqaylik. Bizda qandaydir massiv bo'lsin:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c'];` },
            { type: 'text', value: `Keling, ushbu massivga yana bir element qo'shamiz, shunda kalitlarda kamchiliklar mavjud:` },
            { type: 'code', value: `arr[4] = '!';` },
            { type: 'text', value: `Natijada, massivda teshik hosil bo'ladi, bu aniqlanmagan:` },
            { type: 'code', value: `console.log(arr); // ['a', 'b', 'c', undefined, '!'] chiqadi ` },
            { type: 'text', value: `Massivning uzunligi barcha teshiklarni o'z ichiga oladi. Ya'ni, bizning holatlarimizda u 4 emas, 5 bo'ladi:` },
            { type: 'code', value: `console.log(arr.length); // 5 chiqadi` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `Quyidagi massivning uzunligini toping:` },
            { type: 'code', value: `
let arr = [];

arr[3] = 'a';
arr[8] = 'b';
                ` },
            { type: 'header', value: `Javascript-ga push orqali elementlarni qo'shish` },
            { type: 'text', value: `Maxsus push usulidan foydalanib, siz massivning oxiriga elementlarni qo'shishingiz mumkin. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizda quyidagi massiv bo'lsin:` },
            { type: 'code', value: `let arr = [];` },
            { type: 'text', value: `Keling, uning oxiriga uchta element qo'shamiz:` },
            { type: 'code', value: `
arr.push('a');
arr.push('b');
arr.push('c');` },
            { type: 'text', value: `Keling, nima bo'lganini ko'rib chiqaylik:` },
            { type: 'code', value: `console.log(arr); // ['a', 'b', 'c'] chiqadi` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `1. Massivni 1, 2 va 3 raqamlari bilan to'ldiring.` },
            { type: 'text', value: `2. Bunday massiv berilsin:` },
            { type: 'code', value: `let arr = [1, 2, 3];` },
            { type: 'text', value: `Добавьте ему в конец элементы 4 и 5.` },
            { type: 'header', value: `Javascript-dagi o'zgaruvchilardan massiv kalitlari` },
            { type: 'text', value: `Bizga shunday massiv bersin:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c'];` },
            { type: 'text', value: `Выведем на экран элемент с ключом 0:` },
            { type: 'code', value: `
let arr = ['a', 'b', 'c'];
console.log(arr[0]); // 'a' chiqadi
                ` },
            { type: 'text', value: `Endi ko'rsatilgan elementning kalitini to'g'ridan-to'g'ri kvadrat qavs ichida yozmay, uni o'zgaruvchiga yozamiz:` },
            { type: 'code', value: `
let arr = ['a', 'b', 'c'];
let key = 0; // keling, kalitni o'zgaruvchiga yozamiz` },
            { type: 'text', value: `Endi tegishli elementni chiqarish uchun o'zgaruvchimizdan foydalanamiz:` },
            { type: 'code', value: `
let arr = ['a', 'b', 'c'];
let key = 0; // keling, kalitni o'zgaruvchiga yozamiz

console.log(arr[key]); // 'a' chiqadi
                ` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `1. Keyingi massiv berilgan:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c'];` },
            { type: 'text', value: `Shuningdek, o'zgaruvchi berilgan:` },
            { type: 'code', value: `let key = 2;` },
            { type: 'text', value: `Kalit kalit kalit o'zgaruvchisida saqlanadigan elementni ekranga chiqaring.` },
            { type: 'text', value: `2. Keyingi massiv berilgan:` },
            { type: 'code', value: `let arr = [1, 2, 3, 4, 5];` },
            { type: 'text', value: `O'zgaruvchilar ham berilgan:` },
            { type: 'code', value: `
let key1 = 1;
let key2 = 2;` },
            { type: 'text', value: `Kalitlari bizning o'zgaruvchilarimizda saqlanadigan elementlar yig'indisini toping.` },
            { type: 'header', value: `Javascript-da massivlarni o'chirish operatori` },
            { type: 'text', value: `Massiv elementlarini o'chirish operatori yordamida olib tashlashingiz mumkin. Keling, misollarni ko'rib chiqaylik. Bizga shunday massiv bersin:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c'];` },
            { type: 'text', value: `Keling, massivimizning elementlaridan birini olib tashlaylik:` },
            { type: 'code', value: `delete arr[1];` },
            { type: 'text', value: `Natijada, element olib tashlanadi, lekin massiv siyrak bo'ladi:` },
            { type: 'code', value: `console.log(arr); // ['a',, 'c'] chiqadi` },
            { type: 'header', value: `Mashq` },
            { type: 'text', value: `Massiv berilgan:` },
            { type: 'code', value: `let arr = ['a', 'b', 'c', 'd', 'e'];` },
            { type: 'text', value: `Undan ikkita elementni olib tashlang. Shundan so'ng length xossasining qiymati qanday bo'lishini tekshiring.` },
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
