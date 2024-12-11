// src/data/documents.js

export const JsDocumentFirst = [
  {
    id: 1,
    path: "js1",
    content: [
      {
        type: "header",
        value: "Yangi boshlanuvchilar uchun JavaScript-ga kirish.",
      },
      {
        type: "text",
        value:
          "Javascript tili HTML va CSS bilan bir qatorda brauzerda ishlash uchun mo'ljallangan. Ammo, agar bu tillar sayt tuzilishini joylashtirish uchun mo'ljallangan bo'lsa, JavaScript veb-sahifalarni 'jonlantirish' imkonini beradi - ularni foydalanuvchi harakatlariga javob berish yoki ma'lum bir dinamizmni namoyish qilish (masalan, blokdagi rasmlarni o'zgartirish yoki chiroyli silliq ochiladigan menyular).",
      },
      { type: "header", value: "Javascript-ni ishga tushiring" },
      {
        type: "text",
        value:
          "Javascript kodi to'g'ridan-to'g'ri HTML sahifasida skript yorlig'i ichida yozilgan. Ushbu teg sahifaning istalgan joyiga joylashtirilishi mumkin. Misolga qarang:",
      },
      {
        type: "code",
        value: `
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
                `,
      },
      { type: "header", value: "Javascript-dagi birinchi dastur" },
      {
        type: "text",
        value: "Keling, birinchi dasturimizni JavaScript-da yozamiz. Mana u:",
      },
      {
        type: "code",
        value: `
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
                `,
      },

      {
        type: "text",
        value:
          "Ushbu koddan nusxa oling va uni HTML fayliga joylashtiring. Keyin brauzeringizda ushbu faylni oching - va siz matn bilan dialog oynasini ko'rasiz.",
      },

      { type: "header", value: "Keling, dastur kodini ko'rib chiqaylik" },
      {
        type: "text",
        value:
          "Keling, yuqorida yozgan dastur kodini ko'rib chiqaylik. Siz bilishingiz kerak bo'lgan birinchi tushuncha - bu xususiyatlar. Funktsiyalar sizga ba'zi harakatlarni bajarishga imkon beradi. Bizning misolimizda matnni dialog oynasi ko'rinishida ekranda ko'rsatadigan alert() funksiyasi mavjud. Funktsiya ism (bizning holimizda bu alert) va bu nomdan keyin yozilgan yumaloq qavslardan iborat. Funktsiya parametrlari ushbu qavs ichida yozilishi kerak. Bizning holatda, parametr ekranda ko'rsatiladigan matndir.Bizning holatda, funktsiya bitta parametrga ega, ammo bir nechta parametrlarni o'tkazish kerak bo'lgan funktsiyalar mavjud. Bunday holda, bu parametrlar vergul bilan yoziladi.",
      },

      { type: "header", value: "JavaScript faylini ulash" },
      {
        type: "text",
        value:
          "Javascript kodi alohida faylda yozilishi mumkin, u HTML fayliga ulanadi. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik.Birinchidan, skriptimiz bilan fayl yaratamiz. Ushbu fayl.js kengaytmasiga ega bo'lishi kerak. Misol tariqasida uni script.js deb ataymiz. Keling, unga ba'zi kodlarni joylashtiramiz:",
      },
      { type: "code", value: `alert('text');` },
      {
        type: "text",
        value:
          "Endi skript faylimizni HTML fayliga ulaymiz. Buning uchun src atributidagi skript tegida siz skriptli faylga yo'lni ko'rsatishingiz kerak:",
      },
      {
        type: "code",
        value: `
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
                `,
      },

      {
        type: "header",
        value: "Javascript skriptlari bilan bir nechta fayllar",
      },
      {
        type: "text",
        value:
          "Bir nechta skript teglari yordamida bir emas, bir nechta fayllarni ulashingiz mumkin:",
      },
      {
        type: "code",
        value: `
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
                    `,
      },

      { type: "header", value: "Javascript-da qat'iy rejim" },
      {
        type: "text",
        value:
          "Zamonaviy JavaScript-da, birinchi qatorda kod yozishda siz qattiq rejim deb ataladigan narsani yoqishingiz kerak. Ushbu rejim brauzerni tilning barcha zamonaviy imkoniyatlaridan foydalanishga majbur qiladi. Qat'iy rejimni yoqish uchun skriptning birinchi qatoriga 'stritdan foydalanish' buyrug'ini qo'yish kerak. Keling, kodimizni qat'iy qayta yozamiz:",
      },
      {
        type: "code",
        value: `
"use strict";
alert('text!');
                `,
      },

      { type: "header", value: "Javascript-da kommentariyalar" },
      {
        type: "text",
        value:
          "Html va CSS tillari singari, JavaScript-da siz kommmentariyalar qoldirishingiz mumkin. Ular bir qatorli va ko'p qatorli.",
      },
      { type: "text", value: "Mana bir qatorli sharhning misoli:" },
      { type: "code", value: `alert('Salom, Dunyo!'); // Kommentariya` },
      { type: "text", value: "Mana ko'p qatorli sharhning misoli:" },
      {
        type: "code",
        value: `
/*
ko'p qatorlik kommentariya
*/
alert ('Salom, Dunyo!');
            `,
      },

      { type: "header", value: "Javascript-dagi o'zgaruvchilar" },
      {
        type: "text",
        value:
          "Har qanday dasturlash tilining asosiy tushunchasi o'zgaruvchidir. O'zgaruvchi - bu qatorlar yoki raqamlar kabi har qanday ma'lumotlarni saqlashimiz mumkin bo'lgan konteyner.",
      },
      {
        type: "text",
        value:
          "Har bir o'zgaruvchining nomi bo'lishi kerak, u lotin harflari, raqamlari, $ belgilari va pastki chiziqlardan iborat bo'lishi mumkin. Bunday holda, o'zgaruvchi nomining birinchi belgisi raqam bo'lmasligi kerak. O'zgaruvchilar nomlariga misollar: str, my_str, myStr, a1, $, $a, $$a.",
      },

      { type: "header", value: "O'zgaruvchilardan foydalanish" },
      {
        type: "text",
        value:
          "O'zgaruvchidan foydalanish uchun avval uni e'lon qilishingiz kerak: uning nomidan oldin let kalit so'zini yozing. Masalan, a: nomli o'zgaruvchini e'lon qilaylik",
      },
      { type: "code", value: `let a;` },
      {
        type: "text",
        value:
          "O'zgaruvchi e'lon qilingandan so'ng, siz unga ma'lum bir qiymatni, masalan, raqam yoki qatorni yozishingiz mumkin (unga belgilang).",
      },
      {
        type: "text",
        value:
          "O'zgaruvchiga ma'lumotlarni yozib olish = tayinlash operatsiyasi yordamida amalga oshiriladi. Masalan, a o'zgaruvchisiga 3 raqamini yozamiz:",
      },

      { type: "code", value: `let a = 3;` },
      {
        type: "text",
        value:
          "Endi alert funksiyasidan foydalanib, ushbu o'zgaruvchining mazmunini ekranda ko'rsatamiz:",
      },
      {
        type: "code",
        value: `
let a = 3; // biz o'zgaruvchini e'lon qilamiz va unga qiymat beramiz
alert(a); // chiqaradi 3
                `,
      },
      {
        type: "text",
        value:
          "E'londan so'ng darhol qiymatni o'zgaruvchiga yozish shart emas. Siz avval o'zgaruvchini e'lon qilishingiz va keyin unga qiymat berishingiz mumkin:",
      },
      {
        type: "code",
        value: `
let a; // o'zgaruvchini e'lon qilish
a = 3; // biz unga qiymat beramiz
alert(a); // ekranda o'zgaruvchi qiymatini ko'rsatamiz
                `,
      },
      {
        type: "text",
        value:
          "Ko'rib turganingizdek, let o'zgaruvchi nomidan faqat bir marta yoziladi - bu o'zgaruvchi e'lon qilinganda. Keyin, o'zgaruvchidan foydalanish uchun siz shunchaki ushbu o'zgaruvchining nomini yozishingiz kerak.",
      },

      { type: "header", value: "Mashq" },
      {
        type: "text",
        value:
          "Num o'zgaruvchisini yarating va unga 123 qiymatini belgilang. Alert funksiyasidan foydalanib, ushbu o'zgaruvchining qiymatini ekranda ko'rsating.",
      },

      {
        type: "header",
        value: "Javascript-da bir nechta o'zgaruvchilarni e'lon qilish",
      },
      {
        type: "text",
        value: "Keling, bir nechta o'zgaruvchilarni e'lon qilaylik:",
      },
      {
        type: "code",
        value: `
let a = 1;
let b = 2;
let c = 3;
                `,
      },
      {
        type: "text",
        value:
          "Yuqoridagi kodni bir marta xat yozish va undan keyin kerakli o'zgaruvchilarni ularning qiymatlari bilan ro'yxatga olish orqali soddalashtirish mumkin:",
      },
      { type: "code", value: `let a = 1, b = 2, c = 3;` },
      {
        type: "text",
        value:
          "Siz avval barcha o'zgaruvchilarni e'lon qilishingiz va keyin ularga qiymatlarni belgilashingiz mumkin:",
      },
      {
        type: "code",
        value: `
let a, b, c; // biz barcha 3 o'zgaruvchini e'lon qilamiz
// o'zgaruvchilarga quyidagi qiymatlarni belgilang:
a = 1;
b = 2;
c = 3;
                `,
      },
      { type: "header", value: "O'zgaruvchan qiymatlarning o'zgarishi" },
      {
        type: "text",
        value:
          "Biz ma'lum bir qiymatni tayinlagan o'zgaruvchimiz bo'lsin. Keyin biz topshiriq operatsiyasini yana bajarishimiz va o'zgaruvchiga boshqa qiymat berishimiz mumkin:",
      },
      {
        type: "code",
        value: `
let a;    // biz o'zgaruvchini e'lon qilamiz

a = 1;    // unga 1 qiymatini yozing
alert(a); // 1-sonni chiqaradi

a = 2;    // endi 2 qiymatini yozib, o'chiring qiymat 1
alert(a); // 2 ko'rsatiladi
                `,
      },
      {
        type: "text",
        value:
          "Ya'ni, o'zgaruvchining qiymati unga qattiq bog'langan narsa emas. Biz ba'zi ma'lumotlarni o'zgaruvchiga erkin yozishimiz, ularni o'qishimiz, keyin boshqa narsalarni yozishimiz mumkin - va hokazo.",
      },
      { type: "header", value: "Mashq" },
      {
        type: "text",
        value:
          "A o'zgaruvchisini yarating. Unga 10 qiymatini yozing, uni ekranga ko'rsating. Keyin unga 20 qiymatini yozing va uni ekranga ko'rsating.",
      },
      { type: "header", value: "Bitta o'zgaruvchi uchun bir nechta let" },
      {
        type: "text",
        value:
          "Xuddi shu o'zgaruvchini let orqali bir necha marta e'lon qilish mumkin emas. Masalan, quyidagi kod xatoga olib keladi:",
      },
      {
        type: "code",
        value: `
let a = 1;
alert(a);
let a = 2;
alert(a);
                `,
      },
      {
        type: "text",
        value:
          "Muammoni hal qilishning ikkita varianti mavjud. Siz shunchaki ikki xil o'zgaruvchini kiritishingiz mumkin:",
      },
      {
        type: "code",
        value: `
let a = 1;
alert(a);
let b = 2;
alert(b);
                `,
      },

      {
        type: "text",
        value:
          "Yoki avval a o'zgaruvchisini e'lon qilishingiz va keyin u bilan operatsiyalarni bajarishingiz mumkin:",
      },
      {
        type: "code",
        value: `
let a;
a = 1;
alert(a);
a = 2;
alert(a);
                `,
      },
      {
        type: "header",
        value: `Javascript-da raqamlar bilan matematik operatsiyalar`,
      },
      { type: "text", value: `Qo'shuv:` },
      {
        type: "code",
        value: `
let a = 1 + 2;
alert(a); // 3-sonni chiqaradi 
                `,
      },
      { type: "text", value: `Ayruv amali:` },
      {
        type: "code",
        value: `
let b = 3 - 2;
alert(b); // 1-sonni chiqaradi 
                `,
      },
      { type: "text", value: `Ko'paytiruv amali:` },
      {
        type: "code",
        value: `
let c = 3 * 2;
alert(c); // 6-sonni chiqaradi 
                `,
      },
      { type: "text", value: `Bo'luv amali:` },
      {
        type: "code",
        value: `
let d = 4 / 2;
alert(d); // 2-sonni chiqaradi 
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `A o'zgaruvchisini yarating. Unga 1, 2 va 3 raqamlari yig'indisini yozing. Alert funksiyasidan foydalanib, a o'zgaruvchisi tarkibini ekranga olib chiqing.`,
      },

      {
        type: "header",
        value: `Javascript-da o'zgaruvchilar bilan matematik operatsiyalar`,
      },
      {
        type: "text",
        value: `Matematik amallar nafaqat raqamlar ustida, balki o'zgaruvchilar ustida ham bajarilishi mumkin. Masalan, ikkita o'zgaruvchining qiymatlarini qo'shamiz:`,
      },
      {
        type: "code",
        value: `
let a = 1;
let b = 2;
alert(a + b); // 3-sonni chiqaradi
                `,
      },
      {
        type: "text",
        value: `Operatsiya natijasini darhol chiqarish shart emas, siz avval uni biron bir o'zgaruvchiga yozishingiz va shundan keyingina ushbu o'zgaruvchining qiymatini olishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let a = 1;
let b = 2;
let c = a + b; // keling, miqdorni c o'zgaruvchisiga yozamiz
alert(c);      // 3-sonni chiqaradi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1. Qiymati 10 bo'lgan a o'zgaruvchisini va qiymati 2 bo'lgan b o'zgaruvchisini yarating. Ekranda ularning yig'indisini, farqini, mahsulotini va shaxsiy qismini ko'rsating (bo'linish natijasi).`,
      },
      {
        type: "text",
        value: `2. Qiymati 10 bo'lgan o'zgaruvchini va qiymati 5 bo'lgan d o'zgaruvchisini yarating. Ularni umumlashtiring va natijani natija o'zgaruvchisiga belgilang. Ekranda ijro o'zgaruvchisining qiymatini ko'rsating.`,
      },
      {
        type: "text",
        value: `3. Qiymati 1 bo'lgan a o'zgaruvchisini, qiymati 2 bo'lgan b o'zgaruvchini va 3 qiymatiga ega o'zgaruvchini yarating. Ularning miqdorini ekranda ko'rsating.`,
      },
      {
        type: "text",
        value: `4. Qiymati 10 bo'lgan a o'zgaruvchisini va qiymati 5 bo'lgan b o'zgaruvchisini yarating. B o'zgaruvchisini a dan olib tashlang va natijani c o'zgaruvchisiga belgilang. Keyin d o'zgaruvchisini yarating, unga 7 qiymatini belgilang. C va d o'zgaruvchilarni qo'shing va natijani natija o'zgaruvchisiga yozing. Ekranda ijro o'zgaruvchisining qiymatini ko'rsating.`,
      },

      {
        type: "header",
        value: `Javascript-da matematik operatsiyalarning ustuvorligi`,
      },
      {
        type: "text",
        value: `Javascript matematik operatsiyalari an'anaviy matematikadagi kabi ustunlikka ega. Ya'ni, boshida ko'paytirish va bo'lish amalga oshiriladi, so'ngra qo'shish va ayirish amalga oshiriladi.`,
      },
      {
        type: "text",
        value: `Keyingi misolda birinchi 2 2 ga ko'paytiriladi va keyin natijaga 3 qo'shiladi:`,
      },
      {
        type: "code",
        value: `
let a = 2 * 2 + 3;
alert(a); // 7 ko'rsatiladi (natija 4 + 3)
                `,
      },
      { type: "header", value: `Javascript-dagi salbiy raqamlar` },
      {
        type: "text",
        value: `Raqamlar salbiy bo'lishi mumkin. Buning uchun raqamdan oldin minus belgisini qo'yishingiz kerak:`,
      },
      {
        type: "code",
        value: `
let a = -1;
alert(a); // -1 chiqadi
                `,
      },
      {
        type: "text",
        value: `Minus belgisi ham raqamlarga, ham o'zgaruvchilarga yozilishi mumkin:`,
      },
      {
        type: "code",
        value: `
let a = 1;
let b = -a; // biz b tarkibiga teskari belgi bilan a tarkibini yozdik
alert(b);   // -1 chiqadi
                `,
      },
      { type: "header", value: `Javascript-da bo'linish qoldig'i` },
      {
        type: "text",
        value: `Maxsus % operatori mavjud bo'lib, uning yordamida siz bir sonni boshqasiga bo'lish qoldig'ini topishingiz mumkin:`,
      },
      { type: "code", value: `alert(10 % 3); // 1 chiqadi` },
      {
        type: "text",
        value: `Agar bitta raqam ikkinchisiga bo'lingan bo'lsa, qoldiq nolga teng bo'ladi:`,
      },
      { type: "code", value: `alert(10 % 2); // 0 chiqadi` },
      {
        type: "text",
        value: `% operatori, albatta, nafaqat raqamlarga, balki o'zgaruvchilarga ham qo'llanilishi mumkin:`,
      },
      {
        type: "code",
        value: `
let a = 10;
let b = 3;
alert(a % b); // 1 chiqadi
                `,
      },
      { type: "header", value: `Javascript darajasiga ko'tarilish` },
      {
        type: "text",
        value: `Raqamni darajaga ko'tarish uchun maxsus operator ham mavjud **. Keling, uning yordami bilan 10 raqamini uchinchi darajaga ko'taraylik:`,
      },
      { type: "code", value: `alert(10 ** 3); // 1000 chiqadi` },
      {
        type: "text",
        value: `Raqam ham, daraja ham o'zgaruvchilarda bo'lishi mumkin:`,
      },
      {
        type: "code",
        value: `
let a = 10;
let b = 3;
alert(a ** b); // 1000 chiqadi

                `,
      },

      { type: "header", value: `Javascript-dagi qatorlar / hariflar` },
      {
        type: "text",
        value: `Yuqorida aytib o'tilganidek, ma'lumotlar har xil turdagi bo'lishi mumkin. Turlardan biri raqamlar, biz allaqachon bir oz o'rganganmiz. Endi qatorlarga o'tamiz.`,
      },
      {
        type: "text",
        value: `Hariflar tirnoqli qoshtirnoq yordamida yaratiladi:`,
      },
      {
        type: "code",
        value: `
let str = 'abc';
alert(str); // abc chiqadi
                `,
      },
      {
        type: "text",
        value: `Qo'shtirnoq nafaqat bitta, balki ikkita bo'lishi mumkin:`,
      },
      {
        type: "code",
        value: `
let str = "abc";
alert(str); // abc chiqadi
                `,
      },
      {
        type: "text",
        value: `Javascript-da bitta va ikkita tirnoq o'rtasida farq yo'q. Ulardan foydalanish sizning afzalliklaringizga bog'liq. Men bitta qo'shtirnoqdan foydalanishni afzal ko'raman, shuning uchun ular darslikning boshqa hamma joyida bo'ladi.`,
      },
      {
        type: "text",
        value: `Bu erda va bundan keyin, agar xulosaning natijasi satr bo'lsa, men uni qo'shtirnoq ichiga qo'yaman, bu satr ekanligini ko'rsataman, bu shunday: u "abc" ni chiqaradi. Chiziqni alert orqali ko'rsatishda qo'shtirnoq ko'rinmaydi (ya'ni, qo'shtirnoq ichida yozilganlarim ekranda ko'rsatiladi).`,
      },

      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Hariflar yordamida o'zingizni ismingizni yozing. Ushbu ma'lumotlarni ekranga chiqaring.`,
      },
      { type: "header", value: `Javascript-da qator qo'shish` },
      {
        type: "text",
        value: `Satrlarni qo'shish uchun, shuningdek, raqamlarni qo'shish uchun +: operatori ishlatiladi`,
      },
      {
        type: "code",
        value: `
let str = 'abc' + 'def'; // ikki qatorni katlaymiz
alert(str); // 'abcdef' chiqadi
                `,
      },
      {
        type: "text",
        value: `hariflar o'zgaruvchilarda ham saqlanishi mumkin:`,
      },
      {
        type: "code",
        value: `
let str1 = 'abc';
let str2 = 'def';
alert(str1 + str2); // 'abcdef' chiqadi
                `,
      },
      {
        type: "text",
        value: `Shuningdek, siz o'zgaruvchilar va satrlarni qo'shishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let str1 = 'abc';
let str2 = 'def';
alert(str1 + '!!!' + str2); // 'abc!!!def' chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `"java" matni bilan o'zgaruvchi va "skript" matni bilan o'zgaruvchi yarating. Ushbu o'zgaruvchilar va satrlarni qo'shish operatsiyasidan foydalanib, ekranda "javascript" qatorini ko'rsating.`,
      },
      {
        type: "text",
        value: `"salom" matni bilan o'zgaruvchi va "dunyo" matni bilan o'zgaruvchi yarating. Ushbu o'zgaruvchilar va satrlarni qo'shish operatsiyasidan foydalanib, ekranda "salom dunyo" qatorini ko'rsating.`,
      },
      { type: "header", value: `Javascript-da qator uzunligi` },
      {
        type: "text",
        value: `Qatordagi belgilar soni teng xususiyatda mavjud:`,
      },
      {
        type: "code",
        value: `
let str = 'abcde';
alert(str.length); // 5 chiqadi
                `,
      },
      {
        type: "header",
        value: `Length xususiyati to'g'ridan-to'g'ri qatorga qo'llanilishi mumkin:`,
      },
      { type: "code", value: `alert('abcde'.length); // 5 chiqadi` },
      { type: "text", value: `Bo'shliq ham ramzdir:` },
      { type: "code", value: `alert('ab de'.length); // 5 chiqadi` },
      { type: "header", value: `Javascript-dagi shablon satrlari` },
      { type: "text", value: `Qo'shtirnoqning maxsus turi mavjud - qiyshiq:` },
      { type: "code", value: "let str = `abc`;" },
      {
        type: "text",
        value:
          "O'zgaruvchilar qiyshiq tirnoqlarga kiritilishi mumkin. Buning uchun o'zgaruvchining nomi ${} dizaynida yozilishi kerak.",
      },
      {
        type: "text",
        value: `Keling, bir misolni ko'rib chiqaylik. Biz qatorlar va o'zgaruvchilarni qo'shishni xohlaymiz:`,
      },
      {
        type: "code",
        value: `
let str = 'xxx';
let txt = 'aaa ' + str + ' bbb';
                `,
      },
      { type: "text", value: `Ushbu kodni quyidagicha qayta yozish mumkin:` },
      { type: "code", value: "let txt = `aaa ${} bbb`;" },
      { type: "header", value: `Javascript-da maxsus qiymatlar` },
      {
        type: "text",
        value: `Javascript-da, boshqa dasturlash tillarida bo'lgani kabi, ba'zi maxsus qiymatlar uchun kalit so'zlar mavjud. Mana ular: aniqlanmagan, nol, rost, yolg'on, NaN, Infinity, -Infinity.`,
      },
      { type: "header", value: `undefined` },
      {
        type: "text",
        value: `undefined - noaniqlikni bildiradi. Agar biz uni e'lon qilgan bo'lsak, lekin unga qiymat yozmagan bo'lsak, o'zgaruvchi shunday qiymatga ega bo'ladi:`,
      },
      {
        type: "code",
        value: `
let a;
alert(a); // undefined chiqadi
                `,
      },
      {
        type: "text",
        value: `Bu qiymat o'zgaruvchiga aniq tayinlanishi mumkin:`,
      },
      {
        type: "code",
        value: `
let a = undefined;
alert(a); // undefined chiqadi
                `,
      },
      { type: "header", value: `null` },
      {
        type: "text",
        value: `null qiymati "hech narsa" degan ma'noni anglatadi. Misol uchun, biz o'zgaruvchiga hech narsa yo'qligining belgisi sifatida bunday qiymatni berishimiz mumkin:`,
      },
      {
        type: "code",
        value: `
let a = null;
alert(a); // null chiqadi
                `,
      },
      { type: "header", value: `true va false` },
      {
        type: "text",
        value: `true va false ma'nolari mos ravishda haqiqat va yolg'onni anglatadi. Ular ikkita javobni o'z ichiga olgan narsalar uchun ishlatiladi - ha yoki yo'q.`,
      },
      { type: "header", value: `NaN` },
      {
        type: "text",
        value: `NaN (Not-A-Number) sonni bildirmaydi. Bu qiymat matematik operatsiyalarni raqamlar bilan emas, balki boshqa narsa bilan bajarishga harakat qilganingizda olinadi. Masalan, bu qiymat qatorni raqamga ko'paytirishga urinish orqali beriladi:`,
      },
      { type: "code", value: `alert('abc' * 3); // выведет NaN` },
      { type: "header", value: `Infinity va -Infinity` },
      {
        type: "text",
        value: `Infinity va -Infinity qiymatlari mos ravishda cheksizlik va minus cheksizlikni bildiradi. Agar ma'lum bir raqam nolga bo'lingan bo'lsa, bunday qiymatlar olinadi - bu holda JavaScript boshqa dasturlash tillaridagi kabi xato hosil qilmaydi, balki bu qiymatlarni qaytaradi:`,
      },
      {
        type: "code",
        value: `
alert( 1 / 0); // Infinity chiqadi
alert(-1 / 0); // -Infinity chiqadi
                `,
      },
      { type: "header", value: `Javascript-da konsol bilan ishlash` },
      {
        type: "text",
        value: `Dasturchilarga qulaylik yaratish uchun har bir brauzerda maxsus ishlab chiquvchi paneli mavjud. Ushbu panelni ochish uchun sayt sahifasida istalgan joyni sichqonchaning o'ng tugmasi bilan bosishingiz kerak. Ko'rsatilgan menyuda siz eng past elementni tanlashingiz kerak (u Inspect deb nomlanadi yoki qandaydir tarzda shunga o'xshash).`,
      },
      {
        type: "text",
        value: `Ochilgan panelda siz asosan ikkita yorliqdan foydalanasiz: Elements va Console. Birinchi yorliqda siz sahifa teglari haqida ma'lumot olishingiz mumkin, ikkinchisida esa JavaScript disk raskadrovka ma'lumotlarini olishingiz mumkin.`,
      },
      {
        type: "text",
        value: `Keling, konsolning imkoniyatlarini ko'rib chiqaylik.`,
      },
      {
        type: "text",
        value: `Maxsus console.log buyrug'i yordamida siz skriptlaringizdagi ma'lumotlarni konsolga ko'rsatishingiz mumkin. Bu dasturlarni disk raskadrovka qilish uchun ishlatiladi.`,
      },
      {
        type: "text",
        value: `Misol tariqasida konsolga biror narsa joylashtiramiz:`,
      },
      { type: "code", value: `console.log(123);` },
      { type: "text", value: `Endi o'zgaruvchining qiymatini chiqaramiz:` },
      {
        type: "code",
        value: `
let num = 123;
console.log(num);`,
      },
      {
        type: "text",
        value: `Siz bir nechta o'zgaruvchilarni navbat bilan olishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let num1 = 123;
let num2 = 456;

console.log(num1);
console.log(num2);`,
      },
      {
        type: "text",
        value: `Ushbu o'zgaruvchilarni vergul bilan yozish orqali bitta buyruq yordamida bir nechta o'zgaruvchilarni chiqarish mumkin:`,
      },
      {
        type: "text",
        value: `
let num1 = 123;
let num2 = 456;
console.log(num1, num2);`,
      },
      { type: "header", value: `Javascript konsolidagi xatolar` },
      {
        type: "text",
        value: `Kodingizda sintaktik xatoga yo'l qo'yganingizda, JavaScript bu haqda ma'lumotni konsolga joylashtiradi. Bunday xato qizil rangda ko'rsatiladi va uning o'ng tomonida ushbu xato sodir bo'lgan qator raqami ko'rsatiladi. Bu raqam havola - siz uni bosishingiz va xato bilan konsoldagi kodingizni ochishingiz mumkin.`,
      },
      {
        type: "text",
        value: `Keling, amalda harakat qilaylik. Keling, mavjud bo'lmagan o'zgaruvchiga murojaat qilaylik. Bunday holda, JavaScript xato chiqaradi:`,
      },
      {
        type: "code",
        value: `alert(eee); // Uncaught ReferenceError: eee is not defined `,
      },
      { type: "header", value: `Javascript-dagi konstantalar` },
      {
        type: "text",
        value: `O'zgaruvchilardan tashqari, JavaScript-da konstantalar ham yaratilishi mumkin. Ular faqat bir marta ma'lumotlarni yozib olishlari mumkin, keyin esa ularning qiymatlarini o'zgartirib bo'lmaydi. Konstantalar const operatori yordamida e'lon qilinadi.`,
      },
      { type: "code", value: `const pi = 3.14;` },
      {
        type: "text",
        value: `Odatda konstantalar oddiy o'zgaruvchilardan ajralib turishi uchun katta harflar bilan yoziladi:`,
      },
      { type: "code", value: `const PI = 3.14;` },
      {
        type: "text",
        value: `Keling, konstantamizning qiymatini o'zgartirishga harakat qilaylik:`,
      },
      {
        type: "code",
        value: `
const PI = 3.14;
PI = 3; // Xato chiqaradi`,
      },
      {
        type: "header",
        value: `Ma'lumotlar turlarini avtomatik konvertatsiya qilish`,
      },
      {
        type: "text",
        value: `Ma'lumki, JavaScript-dagi satrlar tirnoq ichida olinishi kerak. Chiziqning barcha belgilari raqamlar bo'lishi mumkin:`,
      },
      { type: "code", value: `let a = '123';` },
      {
        type: "text",
        value: `Bunday holda, a o'zgaruvchisi ham qatordir, lekin ba'zi nuance bilan.`,
      },
      {
        type: "text",
        value: `Nuansning mohiyati quyidagicha: agar siz raqamlar qatori ustida biron bir matematik operatsiyani bajarsangiz, bu operatsiya bizda satrlar emas, balki raqamlar mavjud bo'lgandek amalga oshiriladi:`,
      },
      { type: "code", value: `alert('2' * '3'); // 6 chiqadi` },
      {
        type: "text",
        value: `Bunday holda, JavaScript biz satrlar uchun nomaqbul, ammo raqamlar uchun maqbul bo'lgan operatsiyani bajarishga harakat qilayotganimizni ko'radi.`,
      },
      {
        type: "text",
        value: `U, shuningdek, aslida bizning satrlarimiz tirnoq ichidagi raqamlar ekanligini ko'radi. Shuning uchun JavaScript avtomatik ravishda ushbu satrlarni raqamlarga aylantiradi va ular ustida tegishli matematik operatsiyani bajaradi.`,
      },
      {
        type: "text",
        value: `Bu bizning satrlarimizda faqat raqamlar bo'lsa ishlaydi. Agar kamida bitta harf bo'lsa, JavaScript operatsiyani noto'g'ri deb hisoblaydi va natijada NaN: qiymatini yaratadi`,
      },
      { type: "code", value: `alert('2' * '3s'); // NaN chiqadi` },
      {
        type: "text",
        value: `Bundan tashqari, agar operatsiya matematik jihatdan to'g'ri bo'lsa, lekin satrlar uchun qabul qilinishi mumkin bo'lmasa, avtomatik konvertatsiya sodir bo'ladi.`,
      },
      {
        type: "text",
        value: `Misol uchun, satrlarni ko'paytirish, bo'lish yoki ayirish mumkin emas (va raqamlarni bo'lishi mumkin), shuning uchun barcha bunday operatsiyalarda raqamlar bilan satrlarni avtomatik ravishda raqamlarga aylantirish bo'ladi.`,
      },
      {
        type: "text",
        value: `Misol uchun, satrlarni ko'paytirish, bo'lish yoki ayirish mumkin emas (va raqamlarni bo'lishi mumkin), shuning uchun barcha bunday operatsiyalarda raqamlar bilan satrlarni avtomatik ravishda raqamlarga aylantirish bo'ladi.`,
      },
      {
        type: "code",
        value: `
let a = '1' + '2';
alert(a); // '12' chiqadi - qatorlar qo'shilshi sodir bo'ldi
                `,
      },
      {
        type: "text",
        value: `Agar atamalardan biri raqam, ikkinchisi esa satr bo'lsa, u holda satr doimo g'alaba qozonadi:`,
      },
      {
        type: "code",
        value: `
let a = 1 + '2';
alert(a); //  '12' chiqadi
                `,
      },
      {
        type: "text",
        value: `Bunday hollarda JavaScript, aksincha, raqamlarni avtomatik ravishda satrlarga aylantiradi va qatorlarni qo'shadi.`,
      },
      {
        type: "text",
        value: `Biroq, ikkitadan ortiq shartlar mavjud bo'lganda nuanslar mavjud: bu holda ma'lum bir turga o'tish operatsiyalarni bajarish tartibiga bog'liq.`,
      },
      {
        type: "text",
        value: `Quyidagi misolda 2 va 3 birinchi navbatda raqamlar sifatida qo'shiladi, so'ngra natija "1" qatoriga "5" qatori sifatida qo'shiladi, bu esa oxir-oqibat "15" qatorini beradi:`,
      },
      {
        type: "code",
        value: `
let a = '1' + (2 + 3);
alert(a); // '15' chiqadi
                `,
      },
      {
        type: "text",
        value: `Agar siz qavslarni olib tashlasangiz, hamma narsa chapdan o'ngga buklanadi. Ya'ni, birinchi navbatda '1' qatoriga 2 raqami qo'shiladi va natijada "12" qatori paydo bo'ladi. Keyin bu qatorga 3 raqami qo'shiladi va natijada "123" qatori paydo bo'ladi:`,
      },
      {
        type: "code",
        value: `
let a = '1' + 2 + 3;
alert(a); // выведет '123'
                `,
      },
      {
        type: "text",
        value: `Ammo quyidagi misolda 2 va 3 raqamlari boshida yozilgan, shuning uchun avval ular raqamlar sifatida qo'shilib, natijada 5 raqamini beradi, so'ngra bu raqamga "1" qatori qo'shiladi va oxir-oqibat "51" qatorini beradi:`,
      },
      {
        type: "code",
        value: `
let a = 2 + 3 + '1';
alert(a); // выведет '51'
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`,
      },
      {
        type: "code",
        value: `
let a = '5' + '2';
alert(a);
                `,
      },
      {
        type: "text",
        value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`,
      },
      {
        type: "code",
        value: `
let a = '5' + 2;
alert(a);
                `,
      },
      {
        type: "text",
        value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`,
      },
      {
        type: "code",
        value: `
let a = 5 + '2';
alert(a);
                `,
      },
      { type: "header", value: `Javascript-da raqamga aylantirish` },
      { type: "text", value: `Keling, quyidagi kodni ko'rib chiqaylik:` },
      {
        type: "code",
        value: `
let a = '2';
let b = '3';
alert(a + b); // '23' chiqadi
                `,
      },
      {
        type: "text",
        value: `Ko'rib turganingizdek, bizning holatlarimizda ikkala o'zgaruvchi ham satrlarni o'z ichiga oladi va shunga mos ravishda chiziqlar kabi katlanadi.`,
      },
      {
        type: "text",
        value: `Bu holda o'zgaruvchilarimiz qiymatlari qator sifatida emas, balki raqamlar sifatida qo'shilishini istardik. Bunday holda, biz maxsus raqam funksiyasi yordamida o'zgaruvchisimiz turini raqamga majburan aylantirishimiz mumkin:`,
      },
      {
        type: "code",
        value: `
let a = '2';
let b = '3';
alert(Number(a) + Number(b)); // 5 chiqadi
                `,
      },
      {
        type: "text",
        value: `Можно преобразовывать строки в числа не в операции сложения, а сразу при записи в переменную - это будет работать:`,
      },
      {
        type: "code",
        value: `
let a = Number('2'); // o'zgaruvchiga 2 soni muxirlanadi 
let b = Number('3'); // o'zgaruvchiga 3 soni muxirlanadi
alert(a + b); // 5 chiqadi
                `,
      },
      {
        type: "header",
        value: `Javascript-da raqamga qisqartirilgan konvertatsiya`,
      },
      {
        type: "text",
        value: `Ko'pincha kodni qisqartirish uchun raqam o'rniga qator oldiga + belgisi qo'yiladi. Shunday qilib, satr ustida faqat raqamlar uchun ruxsat etilgan operatsiya bajariladi va satr raqamga aylantiriladi.`,
      },
      { type: "text", value: `Misolga qarang:` },
      {
        type: "code",
        value: `
let a = +'2'; 
let b = +'3';
alert(a + b); // 5 chiqadi
                `,
      },
      { type: "text", value: `Mana yana bir misol:` },
      {
        type: "code",
        value: `
let a = '2';
let b = +a; // b son sifatida yoziladi 2
                `,
      },
      {
        type: "text",
        value: `Mana, keyingi misol, garchi ishlaydigan bo'lsa-da, unchalik chiroyli ko'rinmaydi. Raqam funksiyasidan foydalanish maqsadga muvofiqroq bo'ladi:`,
      },
      {
        type: "code",
        value: `
let a = '2';
let b = '3';
alert(+a + +b); // 5 chiqdi
                `,
      },
      { type: "header", value: `Javascript-da raqamlarni tanlash` },
      {
        type: "text",
        value: `Raqam funksiyasi faqat raqamlardan iborat satrlar bilan ishlaydi. Biroq, JavaScript-da dasturlashda ko'pincha boshida raqam, keyin esa harflar bo'lgan satrlarni ishlatishingiz kerak bo'lgan holatlar mavjud.`,
      },
      {
        type: "text",
        value: `Bunday qatorga misol piksellardagi qiymat bo'lishi mumkin: '12px'. Chiziq qismini tashlab, boshida turgan raqamni olishimiz kerak. Bunday operatsiya uchun parseInt funksiyasi mavjud. Keling, uning ishini misol bilan ko'rib chiqaylik:`,
      },
      {
        type: "code",
        value: `
let num = parseInt('12px');
alert(num); // 12 chiqadi
                `,
      },
      {
        type: "text",
        value: `Biroq, piksellar ba'zan kasrdir: '12,5px'. Bunday holda, parseInt funktsiyasi faqat butun qismni o'tkazadi va chiqaradi:`,
      },
      {
        type: "code",
        value: `
let num = parseInt('12.5px');
alert(num); // 12 chiqadi
                `,
      },
      {
        type: "text",
        value: `Umuman olganda, bu xatti-harakat sizga kerak bo'lgan narsadir. Ammo agar yo'q bo'lsa, raqamni kasr qismi bilan birga chiqaradigan parseFloat funksiyasidan foydalaning:`,
      },
      {
        type: "code",
        value: `
let num = parseFloat('12.5px');
alert(num); // 12.5 chiqadi`,
      },
      {
        type: "text",
        value: `Albatta, kasr qismining yo'qligi parseFloat funktsiyasining to'g'ri ishlashiga to'sqinlik qilmaydi:`,
      },
      {
        type: "code",
        value: `
let num = parseFloat('12px');
alert(num); // 12 chiqadi
                `,
      },
      { type: "header", value: `Javascript-da String-ga o'tkazish` },
      {
        type: "text",
        value: `Ba'zan siz teskari konvertatsiya qilishingiz kerak - raqamdan qatorga. String: funksiyasi shu maqsadda mo'ljallangan`,
      },
      {
        type: "code",
        value: `
let str = String(123); // o'zgaruvchini ichida xarif '123' 
                `,
      },
      { type: "text", value: `Yana bir misol:` },
      {
        type: "code",
        value: `
let num1 = 1;
let num2 = 2;
alert(String(num1) + String(num2)); // '12' chiqadi
                `,
      },
      { type: "header", value: `Javascript-da satr belgilarini oling` },
      {
        type: "text",
        value: `Bizda qandaydir chiziq bo'lsin. Ushbu qatordagi har bir belgi o'z seriya raqamiga ega: birinchi belgi raqami 0, ikkinchi belgi - raqam 1, uchinchi belgi raqami 2 va boshqalar.`,
      },
      {
        type: "text",
        value: `Siz allaqachon sezganingizdek, belgilarni raqamlash noldan boshlanadi (nol raqamlashning boshlanishi sifatida dasturlashda tez-tez uchraydi).`,
      },
      {
        type: "text",
        value: `Agar kerak bo'lsa, siz uning raqami bo'yicha ma'lum bir qator belgisiga kirishingiz mumkin. Buning uchun o'zgaruvchining nomi yoziladi, shundan so'ng kvadrat qavslar qo'yiladi va bu qavslarda belgi raqami ko'rsatiladi.`,
      },
      {
        type: "text",
        value: `Keling, bir misolni ko'rib chiqaylik. Bizga quyidagi qatorni bersin:`,
      },
      { type: "code", value: `let str = 'abcde';` },
      {
        type: "text",
        value: `Keling, ushbu satrning ba'zi belgilariga murojaat qilaylik:`,
      },
      {
        type: "code",
        value: `
let str = 'abcde';
alert(str[0]); // 'a' chiqadi
alert(str[1]); // 'b' chiqadi
alert(str[2]); // 'c' chiqadi
                `,
      },
      {
        type: "text",
        value: `Belgi raqami o'zgaruvchida ham saqlanishi mumkin:`,
      },
      {
        type: "text",
        value: `Satr belgilarini o'qish mumkin, lekin ularni o'zgartirib bo'lmaydi. Quyidagi misol kodi xatolikni keltirib chiqaradi (qat'iy rejimda):`,
      },
      {
        type: "code",
        value: `
let str = 'abcde';
str[0] = '!';`,
      },
      { type: "header", value: `Javascript-dagi oxirgi qator belgisi` },
      {
        type: "text",
        value: `Keling, oxirgi qator belgisini ko'rsatamiz. Shu bilan birga, skriptimiz satr uzunligidan qat'i nazar, oxirgi belgining raqamini o'zi aniqlashiga ishonch hosil qilamiz.`,
      },
      { type: "text", value: `Bizda shunday qator bo'lsin:` },
      { type: "code", value: `let str = 'abcde';` },
      {
        type: "text",
        value: `Ko'rib turganingizdek, bu qatordagi belgilar soni 5 ta. Bir oz o'ylab ko'rsangiz, bu satrning oxirgi belgisining raqami uning uzunligidan 1 ga kam bo'lishi aniq bo'ladi, chunki belgilarni raqamlash noldan boshlanadi.`,
      },
      {
        type: "text",
        value: `Ma'lum bo'lishicha, chiziq uzunligini bilib, biz undan 1 ni olib, oxirgi belgining raqamini olishimiz mumkin, keyin esa bu raqamdan oxirgi belgining o'zini olish uchun foydalanishingiz mumkin.`,
      },
      {
        type: "text",
        value: `Ma'lumki, chiziq uzunligini length xususiyati yordamida topish mumkin. Shunga asoslanib, biz oxirgi belgining raqamini topamiz:`,
      },
      {
        type: "code",
        value: `
                let str = 'abcde';
let last = str.length - 1; // oxirgi simvolni raqami chiqadi 
                `,
      },
      {
        type: "text",
        value: `Используем найденный номер для вывода символа на экран:`,
      },
      {
        type: "code",
        value: `
let str = 'abcde';
let last = str.length - 1; // oxirgi simvolni raqami chiqadi 
alert(str[last]); // 'e' chiqadi
                `,
      },
      {
        type: "text",
        value: `Oraliq oxirgi o'zgaruvchini kiritish shart emas:`,
      },
      {
        type: "code",
        value: `
let str = 'abcde';
alert(str[str.length - 1]); // 'e' chiqadi
                `,
      },
      { type: "header", value: `Javascript-da raqamlar bilan qatorlar` },
      {
        type: "text",
        value: `Bizda faqat raqamlarni o'z ichiga olgan qator bo'lsin:`,
      },
      { type: "code", value: `let test = '12345'; // string raqamlar bilan` },
      {
        type: "text",
        value: `Masalan, uning birinchi va ikkinchi belgilarining yig'indisini topamiz:`,
      },
      {
        type: "code",
        value: `
let test = '12345';
alert(test[0] + test[1]); // '12' chiqadi   
                `,
      },
      {
        type: "text",
        value: `Ko'rib turganingizdek, bizning qatorimizdagi belgilar ham satrlar bo'lib, satrlar sifatida umumlashtiriladi. Biz ularni raqamlar sifatida umumlashtirmoqchimiz. Buning uchun raqam funksiyasidan foydalanamiz:`,
      },
      {
        type: "code",
        value: `
let test = '12345';
alert(Number(test[0]) + Number(test[1])); // 3 chiqadi
                `,
      },
      {
        type: "header",
        value: `Javascript-da o'zgaruvchini o'zgartirish operatsiyalari`,
      },
      {
        type: "text",
        value: `O'zgaruvchining joriy qiymati bo'yicha ba'zi operatsiyalarni bajarish va keyin natijani bir xil o'zgaruvchiga qaytarish mumkin. Misolga qarang:`,
      },
      {
        type: "code",
        value: `
let num = 1;   // biz num o'zgaruvchisini e'lon qilamiz va unga 1 qiymatini yozamiz 
num = num + 2; // biz uning o'zini plyus 2 ga yozamiz
alert(num);    // 3 chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`,
      },
      {
        type: "code",
        value: `
let num = 1;
num = num + 1;
num = num + 1;

alert(num);
                `,
      },
      {
        type: "text",
        value: `Kodni ishga tushirmasdan, ekranda nima ko'rsatilishini aniqlang:`,
      },
      {
        type: "code",
        value: `
let num = 1;
num = num + 2;
num = num + 3;

alert(num);`,
      },
      {
        type: "text",
        value: `Bunday operatsiyalar uchun, uning joriy qiymati va boshqa narsa o'zgaruvchiga yozilganda, maxsus qisqartirilgan sintaksis mavjud. Ushbu sintaksisda oddiy topshiriq o'rniga maxsus operator += ishlatiladi. Keling, misolni ko'rib chiqaylik:`,
      },
      {
        type: "code",
        value: `
let num = 1;
num += 3; // bu ko'rinish tengdur -> num = num + 3;
                `,
      },
      {
        type: "text",
        value: `Boshqa matematik operatsiyalar uchun shunga o'xshash operatorlar mavjud:`,
      },
      {
        type: "code",
        value: `
let num = 2;
num -= 3;
                `,
      },
      {
        type: "code",
        value: `
let num = 2;
num *= 3;
                `,
      },
      {
        type: "code",
        value: `
let num = 2;
num /= 3; 
                `,
      },
      {
        type: "header",
        value: `Javascript-da inkriment va dikriment operatsiyalari`,
      },
      {
        type: "code",
        value: `
let num = 0;
num = num + 1; // num o'zgaruvchisiga 1 raqamini qo'shing
alert(num);
                `,
      },
      {
        type: "text",
        value: `Siz allaqachon bilganingizdek, ushbu kodni += operatori orqali qisqartirilgan shaklda qayta yozish mumkin:`,
      },
      {
        type: "code",
        value: `
let num = 0;
num += 1;     // num o'zgaruvchisiga 1 raqamini qo'shing
alert(num);   // 1 chiqadi`,
      },
      {
        type: "text",
        value: `Darhaqiqat, dasturlashda birlik qo'shilishi shunchalik keng tarqalganki, bu operatsiya uchun yanada qisqartirilgan sintaksis ixtiro qilingan - o'zgaruvchining qiymatini 1 ga oshiradigan maxsus operator ++ qo'shimchasi.`,
      },
      {
        type: "text",
        value: `Keling, kodimizni uning yordami bilan qayta yozamiz:`,
      },
      {
        type: "code",
        value: `
let num = 0;
num++;        // num o'zgaruvchisiga 1 raqamini qo'shing
alert(num);   // 1 chiqadi
                `,
      },
      {
        type: "text",
        value: `O'zgaruvchining qiymatini 1 ga kamaytiradigan ---- operatsiyasi ham mavjud. Misolga qarang:`,
      },
      {
        type: "code",
        value: `
let num = 0;
num--;        // num o'zgaruvchisiga 1 raqamini ayring
alert(num);   // -1 chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Ushbu kodni inkriment va dekrement operatsiyalarini o'z ichiga olishi uchun qayta ishlang:`,
      },
      {
        type: "code",
        value: `
let num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);
                `,
      },
      { type: "header", value: `Javascript-da prefiks va postfiks turi` },
      {
        type: "text",
        value: `Aslida, inkriment va dekrement operatsiyalari ikki usulda qayd etilishi mumkin. Keling, ushbu usullarni ++ misolida ko'rib chiqaylik, ammo - uchun - hammasi o'xshash bo'ladi.`,
      },
      {
        type: "text",
        value: `Birinchi usulda operatsiya o'zgaruvchining nomidan keyin shunday yoziladi: a++, ikkinchi usulda esa - o'zgaruvchining nomidan oldin, quyidagicha: ++a.`,
      },
      {
        type: "text",
        value: `Birinchi shakl postfiks, ikkinchisi esa prefiks deb ataladi. Keling, bu ikki shakl o'rtasidagi farq qanday hollarda paydo bo'lishini ko'rib chiqaylik.`,
      },
      {
        type: "text",
        value: `Bizda alert (a++) kodi va alert (++a) kodi bo'lsin.`,
      },
      {
        type: "text",
        value: `Alert(a++) bo'lsa, o'zgaruvchi avval chiqariladi, so'ngra bittaga ko'payadi va alert(++a) bo'lsa, o'zgaruvchi avval bittaga ko'payadi va keyin chiqariladi.`,
      },
      {
        type: "text",
        value: `Keyingi misolda birinchi o'zgaruvchan 0 ni ko'rsatadi, chunki birinchi navbatda ekran chiqishi ishlaydi va shundan keyingina o'zgaruvchi ortadi:`,
      },
      {
        type: "code",
        value: `
let num = 0;
alert(num++); // 0 chiqadi
alert(num);   // 1 chiqadi
                `,
      },
      {
        type: "text",
        value: `Va endi o'zgaruvchi birinchi navbatda kattalashadi va shundan keyingina ekranda ko'rsatiladi:`,
      },
      {
        type: "code",
        value: `
let num = 0;
alert(++num); // 1 ni chiqaradi - o'zgaruvchi darhol oshdi
                `,
      },
      {
        type: "text",
        value: `Bu xatti-harakat nafaqat ekranda ko'rsatish, balki tayinlash uchun ham amal qiladi:`,
      },
      {
        type: "code",
        value: `
let num1 = 0;
let num2 = num1++; // 0 num2 o'zgaruvchisiga yoziladi
alert(num2); // 0 chiqadi
alert(num1); // 1 ni chiqaradi - num1 o'zgaruvchisi num2 ga yozilganidan keyin o'zgargan 
                `,
      },
      {
        type: "text",
        value: `Endi postfiks shaklini prefiks shakliga o'zgartiramiz:`,
      },
      {
        type: "code",
        value: `
let num1 = 0;
let num2 = ++num1; // 1 num2 o'zgaruvchisiga yoziladi
alert(num2); // 1 chiqadi
                `,
      },
      {
        type: "text",
        value: `Agar bizning operatsiyamiz alohida chiziqda bajarilsa, prefiks va postfiks shakllari o'rtasida farq yo'q:`,
      },
      {
        type: "code",
        value: `
let num = 0;
++num;
num++;
alert(num); // 2 chiqadi
                `,
      },
      { type: "header", value: `Javascript-da toq sonlarni hisoblash` },
      {
        type: "text",
        value: `Kasr kompyuterlarda shunday saqlanadiki, ular ko'pincha noto'g'ri taqdim etilishi mumkin. Bunday holda, oddiy operatsiya g'alati natija berganida, sizni ajablantirishi mumkin. Misol:`,
      },
      {
        type: "code",
        value: `
let a = 0.1 + 0.2;
alert(a); // 0.30000000000000004 chiqadi
                `,
      },
      {
        type: "text",
        value: `Bunday xatti-harakatlarga qarshi kurashish uchun siz kasr qismida ma'lum bir belgiga yaxlitlashni amalga oshiradigan maxsus toFixed usulidan foydalanishingiz mumkin. Keling, natijamizni yaxlitlaylik:`,
      },
      {
        type: "code",
        value: `
let a = 0.1 + 0.2;
alert(a.toFixed(2)); // '0.30' chiqadi
                `,
      },
      {
        type: "text",
        value: `Tofixed usuli natijani satr sifatida beradi. Siz uning natijasini raqamga aylantirishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let a = 0.1 + 0.2;
alert(+a.toFixed(2)); // 0.3 chiqadi`,
      },
      { type: "header", value: `Javascript-da prompt funksiyasi` },
      {
        type: "text",
        value: `Berilgan xabarni ekranda ko'rsatadigan alert funksiyasi mavjudligini allaqachon bilasiz. Bundan tashqari, foydalanuvchidan har qanday matnni olish imkonini beruvchi shunga o'xshash prompt funksiyasi mavjud.`,
      },
      {
        type: "text",
        value: `Misol tariqasida foydalanuvchi nomini so'raymiz:`,
      },
      { type: "code", value: `prompt('Sizni ismingiz ?');` },
      {
        type: "text",
        value: `Prompt funksiyasi tomonidan chiqarilgan oynani ko'rish uchun yuqoridagi kodni ishga tushiring. Ismingizni kiriting va tugmani bosing. Agar siz yuqorida tavsiflangan barcha manipulyatsiyalarni bajargan bo'lsangiz, siz kiritgan nom bizning skriptimizga kiradi.`,
      },
      {
        type: "text",
        value: `Kiritilgan nomga kirish uchun prompt funktsiyasining natijasi ba'zi o'zgaruvchilarga tayinlanishi kerak, masalan:`,
      },
      { type: "code", value: `let name = prompt('Sizni ismingiz ?');` },
      {
        type: "text",
        value: `Kodning keyingi qatorida alert: funksiyasidan foydalanib, avval kiritilgan nomni ekranga chiqaramiz`,
      },
      {
        type: "code",
        value: `
let name = prompt('Sizni ismiz ?');
alert('Sizni ismiz: ' + name);`,
      },
      {
        type: "text",
        value: `Prompt funksiyasi chaqirilganda, tegishli ma'lumotlar kiritilgunga qadar skriptning keyingi bajarilishi bloklanishini tushunishingiz kerak. Umuman olganda, alert funksiyasi ham ishlaydi, faqat u tegishli tugmani bosishni kutadi.`,
      },
      {
        type: "text",
        value: `Aytgancha, o'zgaruvchidan foydalanish shart emas:`,
      },
      {
        type: "code",
        value: `alert('Sizni ismingiz: ' + prompt('Sizni ismingiz?'));`,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Prompt funksiyasidan foydalanib foydalanuvchining yoshini so'rang. Alert yordamida foydalanuvchi kiritgan yoshni chop eting.`,
      },
      { type: "header", value: `Javascript-dagi hujjatga matn kiritish` },
      {
        type: "text",
        value: `Javascript vositalari HTML sahifa teglarini boshqarishi mumkin, masalan, ulardagi matnni ko'rsatish. Buni keyinroq DOM bilan ishlashga bag'ishlangan bo'limdan o'tganimizda o'rganamiz.`,
      },
      {
        type: "text",
        value: `Biroq, ba'zida disk raskadrovka maqsadlarida siz brauzer oynasida ba'zi matnlarni ko'rsatishingiz kerak. Bu hujjat.write buyrug'i yordamida amalga oshiriladi. Keling, u bilan ishlashni misollar bilan ko'rib chiqaylik.`,
      },
      { type: "text", value: `Raqamli qiymatni chiqaramiz:` },
      { type: "code", value: `document.write(123);` },
      { type: "text", value: `Keling, ba'zi matnni ko'rsatamiz:` },
      { type: "code", value: `document.write('text');` },
      { type: "text", value: `Teglarga o'ralgan matnni ko'rsatamiz:` },
      { type: "code", value: `document.write('<b>text</b>');` },
      { type: "text", value: `Keling, matnni o'zgaruvchidan chiqaraylik:` },
      {
        type: "code",
        value: `
let str = 'text';
document.write(str);
                `,
      },
      {
        type: "text",
        value: `Keling, matnni o'zgaruvchidan teglarga yakunlaylik:`,
      },
      {
        type: "code",
        value: `
let str = 'text';
document.write('<b>' + str + '</b>');
                `,
      },
      {
        type: "header",
        value: `Javascript-da operatsiyalar bo'yicha amaliyot`,
      },
      {
        type: "text",
        value: `Keling, soatiga necha soniya borligini bilib olaylik. Ma'lumki, daqiqada 60 soniya, soatda esa 60 daqiqa. Shuning uchun, soatiga soniyalar sonini topish uchun siz 60 ni 60 ga ko'paytirishingiz kerak:`,
      },
      { type: "code", value: `alert(60 * 60);` },
      { type: "text", value: `1. Kunlik soniyalar sonini toping.` },
      { type: "text", value: `2. 30 kunlik soniyalar sonini toping.` },
      { type: "text", value: `3. Yildagi soniyalar sonini toping.` },
      { type: "text", value: `4. Kunlik daqiqalar sonini toping.` },
      { type: "text", value: `5. Yilning daqiqalar sonini toping.` },
      { type: "text", value: `6. Megabaytda baytlar sonini toping.` },
      { type: "text", value: `7. Gigabaytdagi baytlar sonini toping.` },
      { type: "text", value: `8. 10 gigabaytdagi baytlar sonini toping.` },
      { type: "text", value: `9. Terabaytdagi baytlar sonini toping.` },
      { type: "text", value: `10. Terabaytda kilobaytlar sonini toping.` },
    ],
  },
];
export const JsDocumentSecond = [
  {
    id: 2,
    path: "js2",
    content: [
      { type: "header", value: "Javascript-dagi massivlar" },
      {
        type: "text",
        value: `Endi biz massiv deb ataladigan maxsus ma'lumotlar turini o'rganishni boshlaymiz. Massiv - bu ba'zi qiymatlarning butun to'plamini tartibli saqlash mumkin bo'lgan o'zgaruvchi.`,
      },
      {
        type: "text",
        value: `Massiv saqlaydigan qiymatlar elementlar deyiladi. Elementlar bir-biridan vergul bilan ajratiladi. Ushbu verguldan keyin bo'shliqlarni qo'yish odatiy holdir.`,
      },
      {
        type: "text",
        value: `Massivni yaratish uchun kvadrat qavslar ishlatiladi:`,
      },
      { type: "code", value: `let arr = [];` },
      {
        type: "text",
        value: `Keling, massivimizni qatorlar bilan to'ldiraylik:`,
      },
      { type: "code", value: `let arr = ['a', 'b', 'c'];` },
      {
        type: "text",
        value: `Keling, massivimizni satrlar bilan to'ldiraylik: Endi massivni raqamlar bilan to'ldiramiz:`,
      },
      { type: "code", value: `let arr = [1, 2, 3];` },
      {
        type: "text",
        value: `Massivdagi satrlar va raqamlarga qo'shimcha ravishda siz barcha ruxsat etilgan ma'lumotlar turlarini saqlashingiz, shuningdek ularni bir massivda bir-biri bilan aralashtirishingiz mumkin, misol:`,
      },
      { type: "code", value: `let arr = [1, 2, 'a', 'b', null, true, false];` },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1. Raqamlar bilan massiv yarating. Alert funksiyasi yordamida uni ekranga chiqaring va console.log yordamida konsolingizga chiqaring.    `,
      },
      {
        type: "text",
        value: `2. Chiziqlar bilan massiv yarating. Alert funksiyasi yordamida uni ekranga chiqaring va console.log yordamida konsolingizga chiqaring.`,
      },
      { type: "header", value: `Javascript-da massiv elementlarini olish` },
      {
        type: "text",
        value: `Massiv elementlariga kirish satr belgilariga murojaat qilish kabi amalga oshiriladi. Massivning har bir elementi o'z raqamiga ega: birinchi element - 0 raqami, ikkinchisi - 1 raqami va boshqalar. Bu raqamlar massiv elementlarining kalitlari deb ataladi. Keling, bir misolni ko'rib chiqaylik. Bizga quyidagi massivni bersin:`,
      },
      { type: "code", value: `let arr = ['a', 'b', 'c'];` },
      { type: "text", value: `Keling, uning elementlarini ko'rib chiqaylik:` },
      {
        type: "code",
        value: `
console.log(arr[0]); // 'a' chiqadi
console.log(arr[1]); // 'b' chiqadi
console.log(arr[2]); // 'c' chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1, 2, 3 elementlarga ega massiv yarating. Ushbu elementlarning har birini ekranga olib chiqing.`,
      },
      { type: "text", value: `Keyingi massiv berilgan:` },
      { type: "code", value: `let arr = [1, 2, 3];` },
      { type: "text", value: `Uning har bir elementini ekranga olib chiqing.` },
      { type: "text", value: `Keyingi massiv berilgan:` },
      { type: "code", value: `let arr = [1, 2, 3];` },
      {
        type: "text",
        value: `Ekranda ushbu massiv elementlarining yig'indisini ko'rsating.`,
      },
      { type: "text", value: `Keyingi massiv berilgan:` },
      { type: "code", value: `let arr = ['a', 'b', 'c', 'd'];` },
      {
        type: "text",
        value: `Ushbu massiv yordamida quyidagi qatorni chop eting:`,
      },
      { type: "text", value: `'a+b+c+d'` },
      { type: "header", value: `Javascript-da massiv uzunligi` },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];
console.log(arr.length) // 3 chiqadi
                `,
      },
      {
        type: "text",
        value: `Massivning uzunligini bilib, siz uning oxirgi elementini olishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];
console.log(arr[arr.length - 1]) // 'c' chiqadi`,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1. Ixtiyoriy elementlar bilan massiv yarating. Ekranda ushbu massivdagi elementlar sonini ko'rsating.`,
      },
      {
        type: "text",
        value: `2. Ixtiyoriy elementlar bilan massiv yarating. Ekranda ushbu massivning oxirgi elementini ko'rsating.`,
      },
      {
        type: "header",
        value: `Javascript-da massiv elementlarini o'zgartirish`,
      },
      { type: "text", value: `Massiv elementlarini o'zgartirish mumkin:` },
      {
        type: "code",
        value: `
 let arr = ['a', 'b', 'c'];

arr[0] = '!';
console.log(arr); // ['!', 'b', 'c'] chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `"a", "b'", "c" elementlari bilan massiv yarating. Birinchi element o'rniga 1 raqamini yozing, ikkinchisi o'rniga - 2, uchinchisi o'rniga - 3.`,
      },
      {
        type: "header",
        value: `Javascript-da massiv elementlarini qayta yozish`,
      },
      {
        type: "text",
        value: `Shuningdek, siz elementning joriy qiymatini o'qishingiz, u bilan ba'zi operatsiyalarni bajarishingiz va o'zgartirilgan qiymatni ushbu elementga qayta yozishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];

arr[0] = arr[0] + '!';
arr[1] = arr[1] + '!';
arr[2] = arr[2] + '!';

console.log(arr); // ['a!', 'b!', 'c!'] chiqadi`,
      },
      {
        type: "text",
        value: `Oldingi kodni +=: operatori orqali qayta yozish mumkin`,
      },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];

arr[0] += '!';
arr[1] += '!';
arr[2] += '!';

console.log(arr); // выведет ['a!', 'b!', 'c!']
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Raqamlar bilan massiv yarating. Massivning har bir elementiga 3 raqamini qo'shing. Ekranda o'zgartirilgan massivni ko'rsating.`,
      },
      {
        type: "header",
        value: `Javascript-da massiv elementlarining inkriment va dekrementi`,
      },
      {
        type: "text",
        value: `Shuningdek, siz inkriment va dekretning operatsiyalaridan foydalanishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let arr = [1, 2, 3, 4];

arr[0]++;
++arr[1];
arr[2]--;
--arr[3];

console.log(arr); // [2, 3, 2, 3] chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1, 2 va 3 elementlarga ega massiv yarating. ++ operatoridan foydalanib, massivning har bir elementini bittaga oshiring.`,
      },
      { type: "header", value: `Javascript kalitlariga elementlar qo'shish` },
      {
        type: "text",
        value: `Ushbu massiv e'lon qilingan paytda massivga elementlarni darhol qo'shish shart emas. Siz avval ushbu massivni e'lon qilishingiz va keyin unga kerakli elementlarni qo'shishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let arr = [];

arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';

console.log(arr); // ['a', 'b', 'c'] chiqadi`,
      },
      {
        type: "text",
        value: `Bundan tashqari, ma'lumotlar bilan to'ldirilgan massivga elementlarni qo'shishingiz mumkin:`,
      },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];

arr[3] = 'd';
console.log(arr); //  ['a', 'b', 'c', 'd'] chiqadi`,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1. Ta'riflangan texnikadan foydalanib, 1, 2 va 3 elementlarga ega massiv yarating.`,
      },
      { type: "text", value: `2. Bunday massiv berilsin:` },
      { type: "code", value: `let arr = [1, 2, 3];` },
      { type: "text", value: `Uning oxiriga 4 va 5 elementlarni qo'shing.` },
      { type: "header", value: `Javascript-da siyrak massivlar` },
      {
        type: "text",
        value: `Agar massivda o'tkazib yuborilgan kalitlar bo'lsa, unda siz siyrak massivni olishingiz mumkin. Keling, u qanday ko'rinishini ko'rib chiqaylik. Bizda qandaydir massiv bo'lsin:`,
      },
      { type: "code", value: `let arr = ['a', 'b', 'c'];` },
      {
        type: "text",
        value: `Keling, ushbu massivga yana bir element qo'shamiz, shunda kalitlarda kamchiliklar mavjud:`,
      },
      { type: "code", value: `arr[4] = '!';` },
      {
        type: "text",
        value: `Natijada, massivda teshik hosil bo'ladi, bu aniqlanmagan:`,
      },
      {
        type: "code",
        value: `console.log(arr); // ['a', 'b', 'c', undefined, '!'] chiqadi `,
      },
      {
        type: "text",
        value: `Massivning uzunligi barcha teshiklarni o'z ichiga oladi. Ya'ni, bizning holatlarimizda u 4 emas, 5 bo'ladi:`,
      },
      { type: "code", value: `console.log(arr.length); // 5 chiqadi` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi massivning uzunligini toping:` },
      {
        type: "code",
        value: `
let arr = [];

arr[3] = 'a';
arr[8] = 'b';
                `,
      },
      {
        type: "header",
        value: `Javascript-ga push orqali elementlarni qo'shish`,
      },
      {
        type: "text",
        value: `Maxsus push usulidan foydalanib, siz massivning oxiriga elementlarni qo'shishingiz mumkin. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizda quyidagi massiv bo'lsin:`,
      },
      { type: "code", value: `let arr = [];` },
      { type: "text", value: `Keling, uning oxiriga uchta element qo'shamiz:` },
      {
        type: "code",
        value: `
arr.push('a');
arr.push('b');
arr.push('c');`,
      },
      { type: "text", value: `Keling, nima bo'lganini ko'rib chiqaylik:` },
      { type: "code", value: `console.log(arr); // ['a', 'b', 'c'] chiqadi` },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1. Massivni 1, 2 va 3 raqamlari bilan to'ldiring.`,
      },
      { type: "text", value: `2. Bunday massiv berilsin:` },
      { type: "code", value: `let arr = [1, 2, 3];` },
      { type: "text", value: `Добавьте ему в конец элементы 4 и 5.` },
      {
        type: "header",
        value: `Javascript-dagi o'zgaruvchilardan massiv kalitlari`,
      },
      { type: "text", value: `Bizga shunday massiv bersin:` },
      { type: "code", value: `let arr = ['a', 'b', 'c'];` },
      { type: "text", value: `Выведем на экран элемент с ключом 0:` },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];
console.log(arr[0]); // 'a' chiqadi
                `,
      },
      {
        type: "text",
        value: `Endi ko'rsatilgan elementning kalitini to'g'ridan-to'g'ri kvadrat qavs ichida yozmay, uni o'zgaruvchiga yozamiz:`,
      },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];
let key = 0; // keling, kalitni o'zgaruvchiga yozamiz`,
      },
      {
        type: "text",
        value: `Endi tegishli elementni chiqarish uchun o'zgaruvchimizdan foydalanamiz:`,
      },
      {
        type: "code",
        value: `
let arr = ['a', 'b', 'c'];
let key = 0; // keling, kalitni o'zgaruvchiga yozamiz

console.log(arr[key]); // 'a' chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Keyingi massiv berilgan:` },
      { type: "code", value: `let arr = ['a', 'b', 'c'];` },
      { type: "text", value: `Shuningdek, o'zgaruvchi berilgan:` },
      { type: "code", value: `let key = 2;` },
      {
        type: "text",
        value: `Kalit kalit kalit o'zgaruvchisida saqlanadigan elementni ekranga chiqaring.`,
      },
      { type: "text", value: `2. Keyingi massiv berilgan:` },
      { type: "code", value: `let arr = [1, 2, 3, 4, 5];` },
      { type: "text", value: `O'zgaruvchilar ham berilgan:` },
      {
        type: "code",
        value: `
let key1 = 1;
let key2 = 2;`,
      },
      {
        type: "text",
        value: `Kalitlari bizning o'zgaruvchilarimizda saqlanadigan elementlar yig'indisini toping.`,
      },
      {
        type: "header",
        value: `Javascript-da massivlarni o'chirish operatori`,
      },
      {
        type: "text",
        value: `Massiv elementlarini o'chirish operatori yordamida olib tashlashingiz mumkin. Keling, misollarni ko'rib chiqaylik. Bizga shunday massiv bersin:`,
      },
      { type: "code", value: `let arr = ['a', 'b', 'c'];` },
      {
        type: "text",
        value: `Keling, massivimizning elementlaridan birini olib tashlaylik:`,
      },
      { type: "code", value: `delete arr[1];` },
      {
        type: "text",
        value: `Natijada, element olib tashlanadi, lekin massiv siyrak bo'ladi:`,
      },
      { type: "code", value: `console.log(arr); // ['a',, 'c'] chiqadi` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Massiv berilgan:` },
      { type: "code", value: `let arr = ['a', 'b', 'c', 'd', 'e'];` },
      {
        type: "text",
        value: `Undan ikkita elementni olib tashlang. Shundan so'ng length xossasining qiymati qanday bo'lishini tekshiring.`,
      },
    ],
  },
];
export const JsDocumentТhird = [
  {
    id: 3,
    path: "js3",
    content: [
      { type: "header", value: `Javascript-dagi ob'ektlar` },
      {
        type: "text",
        value: `Javascript-da ob'ektlar deb ataladigan maxsus ma'lumotlar tuzilmalari mavjud (boshqa dasturlash tillarida ular assotsiativ massivlar yoki xeshlar deb ataladi).`,
      },
      {
        type: "text",
        value: `Ob'ektlar { } jingalak qavslar yordamida yaratiladi, ularning ichida ushbu ob'ektning elementlari kalit: qiymat formatida yoziladi.`,
      },
      { type: "text", value: `Keling, bo'sh ob'ektni yarataylik:` },
      { type: "code", value: `let obj = {};` },
      { type: "text", value: `Endi ma'lumotlarga ega ob'ektni yaratamiz:` },
      { type: "code", value: `let obj = {1: 'a', 2: 'b', 3: 'c'};` },
      {
        type: "text",
        value: `Keling, ob'ekt elementini uning kaliti bo'yicha ko'rsatamiz:`,
      },
      { type: "code", value: `console.log(obj[1]); // 'a' chiqadi` },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1 dan 7 gacha kalitlari bo'lgan ob'ektni hafta kunlarining nomlarini o'z ichiga olgan qiymatlar sifatida yarating. Uning barcha elementlarini ekranga olib chiqing.`,
      },
      { type: "header", value: `Javascript-da butun ob'ektni ko'rsatish` },
      {
        type: "text",
        value: `Butun ob'ektning mazmunini alert funktsiyasi orqali normal ko'rish mumkin emas:`,
      },
      {
        type: "code",
        value: `
let obj = {1: 'a', 2: 'b', 3: 'c'};
alert(obj); // [Object object] chiqadi
                `,
      },
      {
        type: "text",
        value: `Butun ob'ektning mazmunini ko'rish uchun uni konsolga olib chiqishingiz kerak:`,
      },
      {
        type: "code",
        value: `
let obj = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj); // ob'ektning o'zi chiqadi
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Oy nomlarini o'z ichiga olgan qiymatlar sifatida 1 dan 12 gacha kalitlarga ega ob'ekt yarating. Ushbu ob'ektni konsolga aylantiring.`,
      },
      { type: "header", value: `Javascript-dagi ob'ektlarning satr kalitlari` },
      { type: "text", value: `Ob'ekt kalitlari qatorlar bo'lishi mumkin:` },
      { type: "code", value: `let obj = {'a': 1, 'b': 2, 'c': 3};` },
      {
        type: "text",
        value: `Bunday holda, kalit qatorlarini tirnoq ichida olmaslik odatiy holdir:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      {
        type: "text",
        value: `Keling, ob'ektimizning elementini kalit bo'yicha ko'rsataylik:`,
      },
      { type: "code", value: `console.log(obj['a']); // 1 chiqadi` },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `"name", "surname", "patronymic" kalitlari va ba'zi ixtiyoriy qiymatlar bilan user ob'ektini yarating. Bo'sh joy orqali familiyangizni, ismingizni va otasining ismini ko'rsating.`,
      },
      { type: "header", value: `Javascript-dagi ob'ekt xususiyatlari` },
      {
        type: "text",
        value: `Ob'ekt elementlariga murojaat qilishning muqobil usuli mavjud. Ushbu usulda biz ob'ekt nomidan keyin nuqta qo'yamiz va kalit nomini yozamiz. Bunday holda, kalit ob'ektning xususiyati deb ataladi. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizda quyidagi ob'ekt bo'lsin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      { type: "text", value: `let obj = {a: 1, b: 2, c: 3};` },
      { type: "code", value: `console.log(obj.a); // 1 chiqadi` },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `"year", "month" va "day" kalitlari va joriy kunga mos keladigan qiymatlar bilan date ob'ektini yarating. Yaratilgan sanani ekranda yil-oy-kun formatida ko'rsating.`,
      },
      { type: "header", value: `Javascript-da ob'ekt kalitlariga cheklovlar` },
      {
        type: "text",
        value: `Biz ob'ektlarning barcha kalitlarini tirnoqsiz yozishimiz mumkin emas, faqat quyidagi cheklovlarga javob beradigan kalitlarni yozishimiz mumkin: ular raqam bilan boshlana olmaydi va ichida defis, bo'shliq va shunga o'xshash narsalarni o'z ichiga olmaydi.`,
      },
      {
        type: "text",
        value: `Agar chiziq cheklovni buzsa, uni qo'shtirnoq ichiga olish kerak. Quyidagi misolda, ba'zi kalitlar shartlarni qondirmaydi va shuning uchun tirnoq ichida turadi:`,
      },
      {
        type: "code",
        value: `let obj = {'1key': 'a', 'key-2': 'b', key3: 'c'};`,
      },
      {
        type: "text",
        value: `Bunday kalitlarga faqat kvadrat qavslar orqali kirish mumkin:`,
      },
      {
        type: "code",
        value: `
console.log(obj['1key']);
console.log(obj['key-2']);
                `,
      },
      {
        type: "text",
        value: `Shuningdek, ob'ekt xususiyati orqali bunday nomga murojaat qilish xatoga olib keladi:`,
      },
      {
        type: "code",
        value: `
console.log(obj.1key);
console.log(obj.key-2);
                `,
      },
      {
        type: "text",
        value: `Ammo uchinchi kalit qabul qilinadi va biz unga ikkala yo'l bilan ham murojaat qilishimiz mumkin:`,
      },
      {
        type: "code",
        value: `
console.log(obj['key3']);
console.log(obj.key3);
                `,
      },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Berilgan ob'ekt:` },
      {
        type: "code",
        value: `
let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};
                `,
      },
      {
        type: "text",
        value: `Ushbu ob'ektning qaysi kalitlari uchun qo'shtirnoq kerak va qaysilari uchun emas?`,
      },
      {
        type: "text",
        value: `Quyidagi kodda yo'l qo'yilgan xatolarni tuzatish:`,
      },
      {
        type: "code",
        value: `
let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj.1a);
console.log(obj.b2);
console.log(obj.c-c);
console.log(obj.d 4);
console.log(obj.e5);
                `,
      },
      {
        type: "header",
        value: `Javascript-da ob'ekt elementlarini o'zgartirish`,
      },
      {
        type: "text",
        value: `Ob'ekt elementlarini kalitlarga murojaat qilish orqali o'zgartirish mumkin. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizda quyidagi ob'ekt bo'lsin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      { type: "text", value: `Uning elementining qiymatini o'zgartiring:` },
      { type: "code", value: `obj['a'] = '!';` },
      { type: "text", value: `Biz mulk orqali murojaatdan foydalanamiz:` },
      { type: "code", value: `obj.b = '!';` },
      { type: "text", value: `Проверим, изменился ли объект:` },
      { type: "code", value: `console.log(obj);` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Berilgan ob'ekt:` },
      { type: "code", value: `let obj = {x: 1, y: 2, z: 3};` },
      {
        type: "text",
        value: `Ushbu ob'ektning har bir elementini kvadratga joylashtiring.`,
      },
      {
        type: "header",
        value: `Javascript-dagi ob'ektlarga elementlar qo'shish`,
      },
      {
        type: "text",
        value: `Ob'ektlarga yangi elementlarni qo'shishingiz, ularni kerakli kalitlarga yozishingiz mumkin. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizda quyidagi ob'ekt bo'lsin:`,
      },
      { type: "code", value: `let obj = {};` },
      { type: "text", value: `Unga yangi elementlarni qo'shamiz:` },
      {
        type: "code",
        value: `
obj['a'] = 1;
obj['b'] = 2;
obj['c'] = 3;
                `,
      },
      { type: "text", value: `Muqobil sintaksisdan foydalanishingiz mumkin:` },
      {
        type: "code",
        value: `
obj.a = 1;
obj.b = 2;
obj.c = 3;
                `,
      },
      { type: "text", value: `Ob'ekt tarkibini tekshiramiz:` },
      { type: "code", value: `console.log(obj);` },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `Bo'sh ob'ekt yarating va keyin uni qiymatlar bilan to'ldiring.`,
      },
      { type: "header", value: `Javascript-da ob'ektlarning tartibsizligi` },
      {
        type: "text",
        value: `Siz allaqachon bilganingizdek, massivlarda elementlar qat'iy tartibda joylashtirilgan, chunki har bir elementning pozitsiyasi uning kalitini belgilaydi. Ob'ektlarda biz kalitlarni o'zimiz tayinlaymiz, shuning uchun elementlarning tartibi muhim emas. Ya'ni, massivlar tartiblangan ro'yxatlar, lekin ob'ektlar emas.`,
      },
      {
        type: "text",
        value: `Misol tariqasida, quyidagi ob'ektni ko'rib chiqing:`,
      },
      {
        type: "code",
        value: `
let obj = {1: 'a', 2: 'b', 3: 'c'};

console.log(obj[1]); // 'a'
console.log(obj[2]); // 'b'
console.log(obj[3]); // 'c'
                `,
      },
      {
        type: "text",
        value: `Agar siz ushbu ob'ektning elementlarini tasodifiy tartibda (albatta, ularning kalitlari bilan birga) qayta tartibga solsangiz, bizning skriptimizning ishlashida bundan hech narsa o'zgarmaydi:`,
      },
      {
        type: "code",
        value: `
let obj = {3: 'c', 1: 'a', 2: 'b'};

console.log(obj[1]); // 'a'
console.log(obj[2]); // 'b'
console.log(obj[3]); // 'c'
                `,
      },
      {
        type: "text",
        value: `Bundan tashqari, raqamli kalitlar massiv kabi barcha teshiksiz qiymatlarga ega bo'lishi shart emas. Bizda ixtiyoriy raqamlar bo'lishi mumkin va bu hech qanday muammoga olib kelmaydi (massivlardagi siyraklik kabi). Shuning uchun keyingi ob'ekt to'g'ri:`,
      },
      { type: "code", value: `let obj = {7: 'a', 50: 'b', 23: 'c'};` },
      { type: "header", value: `Javascript-dagi ob'ekt kalitlari Massivda` },
      {
        type: "text",
        value: `Ob'ektning kalitlari massivlarni olishingiz mumkin. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizda quyidagi ob'ekt bo'lsin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      { type: "text", value: `Keling, massiv kalitlari olaylik:` },
      { type: "code", value: `let keys = Object.keys(obj);` },
      { type: "text", value: `Keling, ushbu massivni konsolga chiqaramiz:` },
      { type: "code", value: `console.log(keys);` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi ob'ektning massiv kalitlar oling:` },
      { type: "code", value: `let obj = {x: 1, y: 2, z: 3};` },
      { type: "header", value: `Javascript-dagi ob'ekt uzunligi` },
      {
        type: "text",
        value: `Ob'ektlar uzunligini topishga imkon beruvchi dangasalik xususiyatiga ega emas. Keling, bunga ishonch hosil qilaylik. Bizda quyidagi ob'ekt bo'lsin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      {
        type: "text",
        value: `Keling, uning elementlari sonini aniqlashga harakat qilaylik:`,
      },
      { type: "code", value: `console.log(obj.length); // undefined` },
      {
        type: "text",
        value: `Muammoni vaqtinchalik yechim bilan hal qilaylik - biz ob'ektning kalitlari qatorini olamiz va uning uzunligini topamiz:`,
      },
      { type: "code", value: `console.log(Object.keys(obj).length); // 3` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi ob'ektdagi elementlar sonini toping:` },
      { type: "code", value: `let obj = {x: 1, y: 2, z: 3};` },
      {
        type: "header",
        value: `Javascript-dagi o'zgaruvchilardan ob'ekt kalitlari`,
      },
      {
        type: "text",
        value: `Ob'ekt kalitlari o'zgaruvchilarda saqlanishi mumkin. Keling, misolni ko'rib chiqaylik. Bizda quyidagi ob'ekt bo'lsin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      { type: "text", value: `Kalit o'zgaruvchida saqlansin:` },
      { type: "code", value: `let key = 'a';` },
      {
        type: "text",
        value: `Keling, kalit bo'yicha ob'ekt elementini ko'rsatamiz:`,
      },
      { type: "code", value: `console.log(obj[key]); // 1` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi ob'ekt berilgan:` },
      { type: "code", value: `let obj = {x: 1, y: 2, z: 3};` },
      {
        type: "text",
        value: `Bizning ob'ektimizning kalitlaridan birini saqlaydigan kalit o'zgaruvchisi berilgan. Ushbu o'zgaruvchidan foydalanib, tegishli ob'ekt elementini chiqaring.`,
      },
      {
        type: "header",
        value: `Javascript-da kalit elementiga kirishda xatolik yuz berdi`,
      },
      {
        type: "text",
        value: `Kvadrat qavslar orqali ob'ekt elementiga murojaat qilganda, kalit nomlari tirnoq ichida olinishi kerak, lekin o'zgaruvchilar nomlari emas. Buni tushunmaslik ko'pincha xatolarga olib kelishi mumkin. Shuning uchun, keling, murojaat qoidalarini yana bir bor muhokama qilaylik.`,
      },
      {
        type: "text",
        value: `Keyingi kodda biz ob'ektdan "key'" kaliti bo'lgan elementni olamiz:`,
      },
      { type: "code", value: `console.log(obj['key']);` },
      {
        type: "text",
        value: `Va keyingi kodda biz ob'ektdan kalit bilan elementni olamiz, uning nomi kalit o'zgaruvchisida saqlanadi:`,
      },
      { type: "code", value: `console.log(obj[key]);` },
      {
        type: "header",
        value: `Javascript-da ob'ekt xususiyatiga kirishda xatolik yuz berdi`,
      },
      {
        type: "text",
        value: `Ob'ektning xususiyatiga murojaat qilganda, bu xususiyatning nomi o'zgaruvchida saqlanishi mumkin emas. Keling, sababini ko'rib chiqaylik. Bizga shunday ob'ekt bersin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      {
        type: "text",
        value: `O'zgaruvchi biz ma'nosini olishni istagan xususiyat nomini saqlasin:`,
      },
      { type: "code", value: `let key = 'a';` },
      {
        type: "text",
        value: `Попробуем обратиться к свойству объекта, используя эту переменную:`,
      },
      { type: "code", value: `console.log(obj.key); // undefined` },
      {
        type: "text",
        value: `Berilgan kod ishlamaydi, chunki biz aslida kalit o'zgaruvchisida nomi saqlanadigan xususiyatni emas, balki "key'" nomli xususiyatni qidirmoqdamiz. Ya'ni, aslida bizning kodimiz quyidagilarga teng:`,
      },
      { type: "code", value: `console.log(obj['key']);` },
      {
        type: "text",
        value: `O'zgaruvchidan kalit elementiga murojaat qilishning yagona yo'li bu o'zgaruvchini kvadrat qavs ichida yozishdir:`,
      },
      { type: "code", value: `console.log(obj[key]);` },
      { type: "header", value: `Javascript-da hisoblangan xususiyatlar` },
      {
        type: "text",
        value: `Ob'ektni e'lon qilishda uning xususiyatlarining nomlari o'zgaruvchilardan olinishi mumkin. Bunday xususiyatlar hisoblangan deb ataladi. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizda quyidagi ob'ekt bo'lsin:`,
      },
      {
        type: "code",
        value: `
let obj = {
	a: 1,
	b: 2,
	c: 3
};
                `,
      },
      {
        type: "text",
        value: `Muayyan xususiyatning nomi o'zgaruvchida saqlansin:`,
      },
      { type: "code", value: `let key = 'a';` },
      {
        type: "text",
        value: `Keling, xususiyat nomi o'rniga o'zgaruvchimizdan qiymat olishiga ishonch hosil qilaylik. Buning uchun o'zgaruvchini kvadrat qavs ichida olish kerak:`,
      },
      {
        type: "code",
        value: `
let obj = {
	[key]: 1,
	b: 2,
	c: 3
};
                `,
      },
      {
        type: "text",
        value: `Hisoblangan xususiyatlarni e'lon qilishda siz ba'zi kodlarni bajarishingiz mumkin. Misol:`,
      },
      {
        type: "code",
        value: `
let obj = {
	[key + '1']: 1,
	[key + '2']: 2,
	[key + '3']: 3
};
                `,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1. Keyingi kodda kalit o'zgaruvchidan olinishi kerak edi. Xatoni tuzating:`,
      },
      {
        type: "code",
        value: `
let key = 'x';

let obj = {
	key: 1,
	y: 2,
	z: 3
};    
            `,
      },
      { type: "text", value: `2. Berilgan ob'ekt:` },
      {
        type: "code",
        value: `
let obj = {
	x: 1,
	y: 2,
	z: 3
};
                `,
      },
      { type: "text", value: `O'zgaruvchilar berilgan:` },
      {
        type: "code",
        value: `
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
                `,
      },
      {
        type: "text",
        value: `Ob'ekt kalitlari ushbu o'zgaruvchilardan olinganligiga ishonch hosil qiling.`,
      },
      { type: "header", value: `Javascript-da operator in` },
      {
        type: "text",
        value: `In operatoridan foydalanib, siz ob'ektda xususiyat mavjudligini tekshirishingiz mumkin. Keling, bir misolni ko'rib chiqaylik. Bizga shunday ob'ekt bersin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      {
        type: "text",
        value: `Keling, ob'ektimizda biron bir xususiyat mavjudligini tekshiramiz:`,
      },
      { type: "code", value: `console.log('b' in obj); // true` },
      {
        type: "text",
        value: `Endi mavjud bo'lmagan xususiyat uchun tekshirishni amalga oshiramiz:`,
      },
      { type: "code", value: `console.log('x' in obj); // false` },
      { type: "header", value: `Javascript-da delete operatori` },
      {
        type: "text",
        value: `delete operatori yordamida ob'ekt elementlarini olib tashlashingiz mumkin. Keling, misollarni ko'rib chiqaylik. Bizga shunday ob'ekt bersin:`,
      },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      {
        type: "text",
        value: `Keling, ob'ektimizning elementlaridan birini olib tashlaylik:`,
      },
      { type: "code", value: `delete obj.b;` },
      { type: "text", value: `Keling, nima qilganimizni ko'rib chiqaylik:` },
      { type: "code", value: `console.log(obj); // {a: 1, c: 3}` },
      { type: "header", value: `Javascript-da ob'ektlarni Tipizatsyasi` },
      {
        type: "text",
        value: `Ob'ektlar "ob'ekt" deb nomlangan o'ziga xos ma'lumotlar turiga ega. Keling, typeof operatori yordamida tekshiramiz:`,
      },
      { type: "code", value: `console.log(typeof {}); // 'object'` },
      { type: "header", value: `Javascript-dagi ob'ektlar sifatida massivlar` },
      {
        type: "text",
        value: `Massivlar aslida ob'ektlarning alohida holatidir. Buni massivni tipeof operatori orqali tekshirish orqali ko'rish mumkin:`,
      },
      { type: "code", value: `console.log(typeof []); // 'object'` },
      {
        type: "header",
        value: `Massivlarni JavaScript-dagi ob'ektlardan ajratamiz`,
      },
      {
        type: "text",
        value: `Yuqorida aytib o'tilganidek, tipeof operatori massivlar va ob'ektlarni farqlashga imkon bermaydi. Biroq, ba'zida buni qilish kerak. Array.isarray() funksiyasi yordamga keladi:`,
      },
      {
        type: "code",
        value: `
console.log( Array.isArray([]) ); // true
console.log( Array.isArray({}) ); // false`,
      },
      {
        type: "header",
        value: `Javascript-da massivlar yoki ob'ektlar bilan konstantalar`,
      },
      {
        type: "text",
        value: `Massivlar va ob'ektlarni o'z ichiga olgan konstantalar qiziqarli tarzda ishlaydi. Javascript ushbu konstantalarning qiymatlarini o'zgartirishga ruxsat bermaydi, lekin siz ob'ektlarning xususiyatlarini va massiv elementlarining qiymatlarini o'zgartirishingiz mumkin.`,
      },
      {
        type: "text",
        value: `Keling, misollarni ko'rib chiqaylik. Bizga shunday ob'ekt bersin:`,
      },
      { type: "code", value: `const obj = {a: 1, b: 2, c: 3};` },
      {
        type: "text",
        value: `Keling, unga boshqa narsani yozishga harakat qilaylik:`,
      },
      { type: "code", value: `obj = 123; // xato` },
      {
        type: "text",
        value: `Keling, doimiyga boshqa ob'ektni yozishga harakat qilaylik:`,
      },
      { type: "code", value: `obj = {x: 1, y: 2, z: 3}; // xato` },
      {
        type: "text",
        value: `Biroq, agar biz ob'ektning xususiyatini o'zgartirishga harakat qilsak, u ishlaydi:`,
      },
      { type: "code", value: `obj.a = '+'; // ishlaydi` },
      {
        type: "header",
        value: `Javascript-dagi konstantalar orqali dasturlash yondashuvi`,
      },
      {
        type: "text",
        value: `So'nggi paytlarda JavaScript o'zgaruvchilarni e'lon qilishda yangi yondashuvni qo'lladi. Yondashuvning mohiyati shundan iboratki, biz hamma joyda let o'rniga const dan foydalanamiz, qiymat o'zgaruvchan bo'lishini aniq bilmasak.`,
      },
      { type: "text", value: `Misolga qarang:` },
      {
        type: "code",
        value: `
const a = 1;
const b = 2;
const c = a + b;

console.log(c);`,
      },
      {
        type: "text",
        value: `Ushbu yondashuv juda mashhur va siz uni turli xil uchinchi tomon manbalarida topishingiz mumkin.`,
      },
      {
        type: "text",
        value: `Biroq, men bu moda yondashuviga qarshiman. Gap shundaki, doimiylar Pi raqami kabi qiymatlarni saqlash uchun ixtiro qilingan. Ya'ni, dasturingizda oldindan belgilangan qiymatlar uchun. Barcha o'zgaruvchilarni doimiy deb e'lon qilish bu fikrga ziddir.`,
      },
      {
        type: "text",
        value: `Bundan tashqari, massivlar va ob'ektlarning xatti-harakati juda mantiqiy emas - biz ularni konstantalar deb e'lon qilamiz va shu bilan birga ularning xususiyatlarini osongina o'zgartirishimiz mumkin. Agar ularni o'zgartirish mumkin bo'lsa, bu qanday konstantalar?`,
      },
      {
        type: "text",
        value: `Ko'pincha ob'ektlarni konstantalar bilan e'lon qilish biz ma'lumotlar turini o'zgartira olmasligimiz uchun ishlatiladi - ob'ekt o'rniga primitivni yozing. Ammo agar bizga JavaScript-da sukut bo'yicha mavjud bo'lmagan turdagi boshqaruv kerak bo'lsa, unda uning TypeScript lahjasidan foydalanish yaxshiroqdir.`,
      },
      {
        type: "text",
        value: `Umuman olganda, siz ushbu yondashuvdan foydalanishingiz mumkin, chunki bu moda, lekin men bunga qarshiman va darslikda o'zgaruvchilar hali ham til mualliflari mo'ljallaganidek, let orqali e'lon qilinadi.`,
      },
      { type: "header", value: `Mashq` },
      {
        type: "text",
        value: `1. Ta'riflangan yondashuv orqali quyidagi kodni qayta yozing:`,
      },
      {
        type: "code",
        value: `
let arr = [1, 2, 3, 4, 5];
let res = arr[1] + arr[2];

console.log(res);
                `,
      },
      {
        type: "text",
        value: `2. Keyingi vazifalarda ba'zi dasturchi kod yozgan va unda xatolarga yo'l qo'ygan bo'lishi mumkin. Kod tavsiflangan narsani qiladimi yoki yo'qligini tekshirishingiz kerak. Agar kod to'g'ri ishlamasa, xatolarni tuzatishingiz kerak.`,
      },
      { type: "text", value: `Kod ob'ekt elementini ko'rsatishi kerak:` },
      {
        type: "code",
        value: `
let obj = {x: 1, y: 2, z: 3};
console.log(obj[x]);
                `,
      },
      {
        type: "text",
        value: `Kod o'zgaruvchidan kalit bo'yicha ob'ekt elementini ko'rsatishi kerak:`,
      },
      {
        type: "code",
        value: `
let obj = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj.key);
                `,
      },
      {
        type: "text",
        value: `Kod ob'ekt elementlarining yig'indisini ko'rsatishi kerak:`,
      },
      {
        type: "code",
        value: `
let obj = {x: 1, y: 2, z: 3};
let sum = obj[x] + obj[y] + obj[x];

console.log(obj);
                `,
      },
    ],
  },
];
export const JsDocumentFourth = [
  {
    id: 4,
    path: "js4",
    content: [
      { type: "header", value: "Javascript-da if-else" },
      { type: "text", value: `Endi biz har qanday shartning bajarilishiga qarab ba'zi kodlarni bajarishga imkon beruvchi maxsus if-else dizaynini o'rganamiz.` },
      { type: "text", value: `If-else dizaynidan foydalanib, biz dasturga, masalan, "a o'zgaruvchisi b o'zgaruvchisidan kattaroqmi" degan savolni berishimiz mumkin va javobga qarab, bitta kodni yoki boshqasini bajaramiz.` },
      { type: "text", value: `sintaksisi quyidagicha ko'rinadi:` },
      { type: "code", value: `
        if (taqqoslash operatsiyasi) {
/*
bu erda joylashgan bajariladigan kod
agar taqqoslash operatsiyasi natijasi to'g'ri bo'lsa
*/
} else {
/*
bu erda joylashgan bajariladigan kod
agar taqqoslash operatsiyasining natijasi noto'g'ri bo'lsa
*/
}
        ` },
      { type: "text", value: `Javascript-da taqqoslash operatsiyalari uchun ko'plab operatorlar mavjud. Keling, ularni o'rganishni boshlaylik.` },
      { type: "header", value: `Javascript-da kattaroq va kichikroq operatorlar` },
      { type: "text", value: `Qaysi qiymat kattaroq va qaysi biri kichikroq ekanligini tekshirish uchun operatorlar > dan katta, >= dan katta yoki teng, < dan kichik, <= dan kichik yoki unga teng.` },
      { type: "text", value: `Keling, ularning ishini amaliy misol bilan o'rganamiz. Bizda ma'lum bir ma'noga ega o'zgaruvchan test bo'lsin:` },
      { type: "code", value: `let test = 1;` },
      { type: "text", value: `Keling, ushbu o'zgaruvchining qiymati noldan katta yoki yo'qligini tekshiramiz:` },
      { type: "code", value: `
        let test = 1;

if (test > 0) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `А теперь поменяем значение переменной на отрицательное:` },
      { type: "code", value: `
        let test = -1;

if (test > 0) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "text", value: `Endi o'zgaruvchining qiymati 0 bo'lsin. Bunday holda, biz else blokiga kiramiz, chunki bizning shartimiz test o'zgaruvchisi noldan qat'iy kattaroq bo'lishi kerakligini aytadi:` },
      { type: "code", value: `
        let test = 0;

if (test > 0) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}

        ` },
      { type: "text", value: `Keling, shartni ko'proq yoki teng ravishda o'zgartiraylik:` },
      { type: "code", value: `
        let test = 0;

if (test >= 0) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Va endi kamroq:` },
      { type: "code", value: `
        let test = 0;

if (test < 0) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "text", value: `Va endi kamroq yoki teng:` },
      { type: "code", value: `
        let test = 0;

if (test <= 0) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. test o'zgaruvchisi 10 dan katta ekanligini tekshiring.` },
      { type: "text", value: `2. test o'zgaruvchisi 10 dan kam ekanligini tekshiring.` },
      { type: "text", value: `3. test o'zgaruvchisi 10 dan katta yoki teng ekanligini tekshiring.` },
      { type: "text", value: `4. test o'zgaruvchisi 10 dan kichik yoki teng ekanligini tekshiring.` },
      { type: "header", value: `Javascript-da tenglikni tekshirish` },
      { type: "text", value: `Ikki qiymatni tenglik uchun tekshirish uchun == operatori ishlatiladi. Misol tariqasida test o'zgaruvchisi 0: ekanligini tekshiramiz` },
      { type: "code", value: `
        let test = 0;

if (test == 0) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Shart bajarilmasligi uchun o'zgaruvchining qiymatini o'zgartiring:` },
      { type: "code", value: `
        let test = 1;

if (test == 0) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `test o'zgaruvchisi 10 ekanligini tekshiring.` },
      { type: "header", value: `Javascript-da tengsizlikni tekshirish` },
      { type: "code", value: `
        let test = 1;

if (test != 0) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `O'zgaruvchining qiymatini o'zgartiring:` },
      { type: "code", value: `
        let test = 0;

if (test != 0) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `test o'zgaruvchisi 10 emasligini tekshiring.` },
      { type: "header", value: `Javascript-da o'zgaruvchilarni taqqoslash` },
      { type: "text", value: `Yuqoridagi misollarda biz o'zgaruvchini ma'lum bir raqam bilan taqqosladik. Ammo hech kim bizga ikkita o'zgaruvchini solishtirishni taqiqlamaydi. Misolga qarang:` },
      { type: "code", value: `
let test1 = 1;
let test2 = 2;

if (test2 > test1) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Test1 va test2 o'zgaruvchilari berilgan. Ushbu o'zgaruvchilardan qaysi biri kattaroq ekanligini tekshiring va tegishli xabarni chop eting.` },
      { type: "text", value: `2. Test1 va test2 o'zgaruvchilari berilgan. Ularning qiymatlari teng yoki yo'qligini tekshiring va tegishli xabarni chop eting.` },
      { type: "header", value: `Javascript-da satr tengligi` },
      { type: "text", value: `Agar siz if dizaynidan foydalansangiz, satrlarni solishtirishingiz mumkin. Misol uchun, test o'zgaruvchisi qandaydir qatorni saqlasin, masalan, "abc":` },
      { type: "code", value: `let test = 'abc';` },
      { type: "text", value: `Keling, o'zgaruvchining mazmuni "abc" test satriga teng yoki yo'qligini tekshiramiz:` },
      { type: "code", value: `
let test = 'abc';

if (test == 'abc') {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Satrlarni o'z ichiga olgan test1 va test2 o'zgaruvchilari berilgan. Ularning qiymatlari teng yoki yo'qligini tekshiring va tegishli xabarni chop eting.` },
      { type: "header", value: `Javascript-da qatorlar va raqamlar tengligi` },
      { type: "text", value: `Ma'lumki, tirnoqlardagi raqam qatordir. Masalan, "3" - bu qator. Biroq, bunday satrlarni haqiqiy raqamlar bilan solishtirganda, JavaScript tirnoqlardagi chiziq bir xil raqamga teng deb hisoblaydi.` },
      { type: "text", value: `Misol tariqasida "3" qatorini va 3 raqamini solishtiramiz:` },
      { type: "code", value: `
if ('3' == 3) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da qiymat va turdagi tenglik` },
      { type: "text", value: `Qo'shtirnoq ichidagi raqam qo'shtirnoqsiz bir xil raqamga teng bo'lmasligi uchun solishtirmoqchi bo'ling. Boshqacha qilib aytganda, taqqoslash nafaqat ma'no, balki ma'lumotlar turi bo'yicha ham bo'lishi uchun taqqoslashni xohlaysiz.` },
      { type: "text", value: `Buning uchun == operatori o'rniga === operatoridan foydalanish kerak. Keyingi misolda, "3" qatori va 3 raqamini solishtirganda, shart noto'g'ri bo'ladi, chunki o'zgaruvchilar qiymati teng bo'lsa-da, turi bo'yicha teng emas:` },
      { type: "code", value: `
if ('3' === 3) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "text", value: `Ammo "3" ikki qatorni solishtirganda, shart to'g'ri bo'ladi:` },
      { type: "code", value: `
if ('3' === '3') {
	console.log('+++'); // bu ishlaydi
}
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Xuddi raqamlarni solishtirganda:` },
      { type: "code", value: `
        if (3 === 3) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Operator == va operator === o'rtasidagi farq qiymatlar bir xil, ammo har xil turdagi ma'lumotlar bo'lganda aniq namoyon bo'ladi. Boshqa hollarda, bu operatorlar bir xil ishlaydi. Masalan, turli raqamlarni solishtirganda, albatta, '--': olinadi` },
      { type: "code", value: `
if (2 === 3) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Kodni ishga tushirmasdan, konsolda nima ko'rsatilishini aniqlang:` },
      { type: "code", value: `
let test1 = '3';
let test2 = '3';
		
if (test1 == test2) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `2. Kodni ishga tushirmasdan, konsolda nima ko'rsatilishini aniqlang:` },
      { type: "code", value: `
let test1 = '3';
let test2 = '3';
		
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da qiymat va turdagi tengsizlik` },
      { type: "text", value: `Operatordan tashqari!= ham operator bor!==, taqqoslashda turni hisobga oladi. Keling, misollar yordamida ular orasidagi farqlarni ko'rib chiqaylik.` },
      { type: "text", value: `Operator yordamida bo'lsin!= ikkita raqamni solishtiradi 3. Ushbu operator qiymatlarni teng emasligi bilan taqqoslaydi. Bizning qiymatlarimiz teng bo'lganligi sababli, shart noto'g'ri bo'ladi:` },
      { type: "code", value: `
if (3 != 3) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}` },
      { type: "text", value: `Endi bizning ma'nolarimizdan biri tirnoq ichida bo'lsin. Bunday holda, operator (!= hali ham ularni teng deb hisoblaydi (chunki qiymat mos keladi va bu operator uchun tur muhim emas) va yana shart noto'g'ri bo'ladi:` },
      { type: "code", value: `
if ('3' != 3) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "text", value: `Keling, ikkita 3 raqamni operator yordamida taqqoslaylik!==. U ham ularni teng deb hisoblaydi:` },
      { type: "code", value: `
if (3 !== 3) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
        ` },
      { type: "text", value: `Ammo endi uchlikdan birini qo'shtirnoq ichiga olsak, operator (!== bizning uchliklarimizni teng emas deb hisoblaydi, chunki ularning qiymatlari bir xil bo'lsa-da, ular turli xil turlarga ega:` },
      { type: "code", value: `
if ('3' !== 3) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mantiqiy '&& / va'` },
      { type: "text", value: `Mantiqiy I bo'lgan &&& operatori yordamida taqqoslash operatsiyalarini guruhlash mumkin. Keyingi misolda, agar num o'zgaruvchisi noldan katta bo'lsa va bir vaqtning o'zida 10 dan kam bo'lsa, shundan keyingina "+++'" olinadi:` },
      { type: "code", value: `
let num = 3;

if (num > 0 && num < 10) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Shartlar bitta o'zgaruvchiga emas, balki turli o'zgaruvchilarga qo'llanilishi mumkin. Keyingi misolda, agar num1 o'zgaruvchisi 2 ga teng bo'lsa va bir vaqtning o'zida num2 o'zgaruvchisi 3 ga teng bo'lsa, faqat shart to'g'ri bo'ladi:` },
      { type: "code", value: `
let num1 = 2;
let num2 = 3;

if (num1 == 2 && num2 == 3) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Num o'zgaruvchisi noldan katta va 5 dan kichik ekanligini tekshiring.` },
      { type: "text", value: `2. Num o'zgaruvchisi 10 dan katta yoki teng, 20 dan kichik yoki teng ekanligini tekshiring.` },
      { type: "text", value: `3. Num1 o'zgaruvchisi 1 ga teng yoki undan kichik, num2 o'zgaruvchisi esa 3 dan katta yoki teng ekanligini tekshiring.` },
      { type: "header", value: `Mantiqiy ' || / YOKI 'JavaScript-da` },
      { type: "text", value: `Operator || mantiqiy OR bo'lib, kamida bitta shart bajarilishini talab qiladi.Keyingi misolda, agar num1 o'zgaruvchisi 0 dan katta bo'lsa yoki num2 o'zgaruvchisi 0 dan katta bo'lsa, shart to'g'ri bo'ladi (shartlardan kamida bittasini bajarish kifoya):` },
      { type: "code", value: `
let num1 = 10;
let num2 = -5;

if (num1 > 0 || num2 > 0) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Kodni ishga tushirmasdan, konsolda nima ko'rsatilishini aniqlang:` },
      { type: "code", value: `
let num1 = -10;
let num2 = -10;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}

        ` },
      { type: "text", value: `Kodni ishga tushirmasdan, konsolda nima ko'rsatilishini aniqlang:` },
      { type: "code", value: `
let num1 = 0;
let num2 = 0;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da mantiqiy operatorlarning ustuvorligi` },
      { type: "text", value: `Operatsiya va va || dan ustun turadi. Quyidagi misolda, agar num o'zgaruvchisi 0 dan 5 OR gacha 10 dan 20 gacha bo'lsa, shart to'g'ri bo'ladi:` },
      { type: "code", value: `
let num = 3;

if (num > 0 && num < 5 || num > 10 && num < 20) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da shartlarni guruhlash` },
      { type: "text", value: `Operatsiya && || dan ustun bo'lsa-da, operatsiyalarning ustuvorligini aniq ko'rsatish uchun ko'pincha guruhlash qavslaridan foydalanish qulayroqdir:` },
      { type: "code", value: `
let num = 3;

if ( (num > 0 && num < 5) || (num > 10 && num < 20) ) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Albatta, guruhlash sukut bo'yicha emas, balki operatsiya ustuvorligingiz kerak bo'lganda ham ishlatilishi mumkin:` },
      { type: "code", value: `
let num1 = 3;
let num2 = 5;

if ( num1 > 0 && (num2 == 3 || num2 == 5) ) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mantiqiy ifodalarni JavaScript-ga aylantirish` },
      { type: "text", value: `Quyidagi kodni ko'rib chiqing:` },
      { type: "code", value: `
if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

        ` },
      { type: "text", value: `Endi bizning shartimiz shunday: raqam 0 dan 5 gacha bo'lishi kerak. Keling, bu shartni o'zgartiraylik, ya'ni uni teskarisiga aylantiraylik. Qarama-qarshi shart quyidagicha bo'ladi: num 0 dan kam yoki unga teng yoki 5 dan katta yoki teng bo'lishi kerak:` },
      { type: "code", value: `
if (num <= 0 || num >= 5) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Ko'rib turganingizdek, shartni o'zgartirish uchun siz biroz o'ylashingiz kerak. Mantiqiy EMAS bo'lgan ! operatoridan foydalanish ancha oson bo'ladi. Ushbu operator yordamida biz faqat 1-belgini qo'yishimiz kerak! dastlabki holatdan oldin - va u o'z-o'zidan teskari bo'ladi:` },
      { type: "code", value: `
if ( !(num > 0 && num < 5) ) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi kod berilgan:` },
      { type: "code", value: `
if (num1 >= 0 || num2 <= 10) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Operatordan foydalanish ! berilgan shartni teskari aylantiring.` },
      { type: "header", value: `Javascript-da mantiqiy qiymatlarga ega shartlar` },
      { type: "text", value: `Bizda true yoki false qiymatlarni qabul qila oladigan o'zgaruvchiga ega bo'lsin:` },
      { type: "code", value: `let test = true;` },
      { type: "text", value: `Keling, o'zgaruvchimizni true qiymatga tekshiradigan if yozaylik:` },
      { type: "code", value: `
let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. test o'zgaruvchisi true ekanligini tekshiring.` },
      { type: "text", value: `2. Sinov o'zgaruvchisi false ekanligini tekshiring.` },
      { type: "header", value: `Javascript-da qiymatlarni mantiqiy turi bilan taqqoslash` },
      { type: "text", value: `Oldingi misolda biz taqqoslash uchun === operatoridan foydalanganmiz. Bunday holda, bizning o'zgaruvchimiz ham qiymat, ham tur bo'yicha haqiqiy tenglik bilan taqqoslandi.` },
      { type: "text", value: `Bunday taqqoslash uchun siz == operatoridan ham foydalanishingiz mumkin. Agar test o'zgaruvchisi har doim haqiqiy yoki noto'g'ri qiymatlardan biriga ega bo'lsa, unda hech narsa o'zgarmaydi:` },
      { type: "code", value: `
let test = true; // bu yerda true yoki false yozamiz

if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Ammo agar test o'zgaruvchisi har qanday qiymatni o'z ichiga olishi mumkin bo'lsa, unda hamma narsa ancha murakkablashadi.` },
      { type: "text", value: `Bunday holda, agar o'zgaruvchan testda mantiqiy qiymat bo'lmasa, u holda bu qiymat birinchi navbatda mantiqiy qiymatga aylantiriladi va shundan keyingina taqqoslanadi.` },
      { type: "text", value: `Masalan, test o'zgaruvchisida 1 raqami bo'lsin. Bunday holda, u birinchi navbatda mantiqiy turga, ya'ni haqiqiy turga aylanadi. Va keyin taqqoslash amalga oshiriladi:` },
      { type: "code", value: `
let test = 1;

if (test == true) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Ammo, masalan, 0 raqami yolg'onga aylanadi. Va bizning shartimiz oxir-oqibat "noto'g'ri" degan xulosaga keladi:` },
      { type: "code", value: `
let test = 0;

if (test == true) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
        ` },
      { type: "text", value: `Aslida, bunday taqqoslashni quyidagi shaklda aniq qayta yozish mumkin:` },
      { type: "code", value: `
let test = 1;

if (Boolean(test) == true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Kodni ishga tushirmasdan, konsolda nima ko'rsatilishini aniqlang:` },
      { type: "code", value: `
let test = 1;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Kodni ishga tushirmasdan, konsolda nima ko'rsatilishini aniqlang:` },
      { type: "code", value: `
let test = 0;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da haqiqatni tekshirishning qisqartirilgan shakli` },
      { type: "text", value: `Sinov o'zgaruvchisi haqiqiy qiymatga teng yoki yo'qligini bilmoqchimiz. Bunday holda, if dizayni quyidagicha yozilishi mumkin:` },
      { type: "code", value: `
let test = true;

if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Dasturlashda bunday tekshiruvlar juda tez-tez talab qilinadi, shuning uchun ular uchun yanada oqlangan qisqartirilgan shakl mavjud: agar (test == true) o'rniga siz shunchaki agar (test) yozishingiz mumkin.` },
      { type: "text", value: `Keling, kodimizni qisqartirilgan shaklda qayta yozamiz:` },
      { type: "code", value: `
let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Qisqartirilgan shakl yordamida quyidagi kodni qayta yozing:` },
      { type: "code", value: `
let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da yolg'onni tekshirishning qisqartirilgan shakli` },
      { type: "text", value: `Endi biz o'zgaruvchining qiymatini yolg'on uchun tekshirmoqchimiz. Buni quyidagicha qilish mumkin:` },
      { type: "code", value: `
let test = true;

if (test === false) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Bundan tashqari, ekvivalent inkor kodini yozishingiz mumkin:` },
      { type: "code", value: `
let test = true;

if (test !== true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Berilgan kodni quyidagi qisqartirilgan shaklda qayta yozish mumkin:` },
      { type: "code", value: `
let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Qisqartirilgan shakl yordamida quyidagi kodni qayta yozing:` },
      { type: "code", value: `
let test = true;

if (test == false) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Qisqartirilgan shakl yordamida quyidagi kodni qayta yozing:` },
      { type: "code", value: `
let test = true;

if (test != true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da tekshirishning umumiy qisqartirilgan shakli` },
      { type: "text", value: `Qisqartirilgan tekshirish shakli boshqa ma'lumotlar turlari uchun ham ishlaydi. Bunday holda, bu ma'lumotlar birinchi navbatda mantiqiy turga aylantiriladi va keyin haqiqiy bilan taqqoslanadi. Misolga qarang:` },
      { type: "code", value: `
let test = 3;

if (test) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Aslida, berilgan kod quyidagilarga ekvivalentdir:` },
      { type: "code", value: `
let test = 3;

if (Boolean(test) === true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da qisqartirilgan shakldagi qiyin shartlar` },
      { type: "text", value: `Qisqartirilgan shaklda siz &&& va || operatorlaridan foydalanishingiz mumkin. Misolga qarang:` },
      { type: "code", value: `
let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}` },
      { type: "text", value: `Yana bir misol:` },
      { type: "code", value: `
        let test1 = true;
let test2 = true;

if (test1 || test2) {
	console.log('+++');
} else {
	console.log('---');

        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi kodni qisqartirilgan shaklda qayta yozing:` },
      { type: "code", value: `
        let test1 = true;
let test2 = true;

if (test1 === true && test2 === true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Quyidagi kodni qisqartirilgan shaklda qayta yozing:` },
      { type: "code", value: `
        let test1 = true;
let test2 = true;

if (test1 === true && test2 !== true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Quyidagi kodni qisqartirilgan shaklda qayta yozing:` },
      { type: "code", value: `
        let test1 = true;
let test2 = true;

if (test1 !== true && test2 !== true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Quyidagi kodni qisqartirilgan shaklda qayta yozing:` },
      { type: "code", value: `
        let test1 = true;
let test2 = true;

if (test1 !== false && test2 === true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript-da ixtiyoriy jingalak qavslar` },
      { type: "text", value: `Agar if yoki else qavslarida faqat bitta ifoda bo'lsa, bu jingalak qavslarni yozmaslik mumkin. Masalan, ushbu kod barcha qavslar bilan berilsin:` },
      { type: "code", value: `
if (test === 0) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Siz uni shunday qisqartirishingiz mumkin:` },
      { type: "code", value: `if (test === 0) console.log('+++'); else console.log('---');` },
      { type: "text", value: `Yoki bunday: ` },
      { type: "code", value: `
if (test === 0) {
	console.log('+++');
} else console.log('---');
        ` },
      { type: "text", value: `Bundan tashqari, barcha qavslarni olib tashlashingiz mumkin, lekin hamma narsani chiziqqa qo'ymang, lekin bu erda:` },
      { type: "code", value: `
if (test === 0)
	console.log('+++');
else
	console.log('--');
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi kodni qisqartirilgan shaklda qayta yozing:` },
      { type: "code", value: `
if (test > 0) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Quyidagi kodni qisqartirilgan shaklda qayta yozing:` },
      { type: "code", value: `
if (test > 0) {
	console.log('+++');
}
        ` },
      { type: "header", value: `If-else-da jingalak qavslarning ixtiyoriyligi muammosi` },
      { type: "text", value: `Javascript yuqorida ko'rsatilgan shaklli qavslarni qisqartirishga ruxsat berishiga qaramay, men buni umuman tavsiya etmayman, chunki bu qiyin xatolar uchun zamin. Masalan, quyidagi kod bo'lsin:` },
      { type: "code", value: `
let test = 3;

if (test > 0)
	console.log(test);` },
      { type: "text", value: `Endi shart bajarilsa, '+++' matni bilan ikkinchi xabarni ham ko'rsatishga qaror qilaylik:` },
      { type: "code", value: `
let test = 3;

if (test > 0)
	console.log(test);
	console.log('+++');
        ` },
      { type: "text", value: `Biroq, faqat birinchi xabar shart ichida jingalak qavslarsiz joylashgan. Birinchi qator to'g'ri shartda ishlaydi, ikkinchisi esa har doim ishlaydi.` },
      { type: "text", value: `Biroq, faqat birinchi xabar shart ichida jingalak qavslarsiz joylashgan. Birinchi qator to'g'ri shartda ishlaydi, ikkinchisi esa har doim ishlaydi.` },
      { type: "code", value: `
let test = 3;

if (test > 0) {
	console.log(test);
}

console.log('+++'); // bu chiziq shartdan tashqarida bo'lib chiqdi
        ` },
      { type: "text", value: `Va biz quyidagi kodni xohlaymiz:` },
      { type: "code", value: `
let test = 3;

if (test > 0) {
	console.log(test);
	console.log('+++'); // bu chiziq shart ichida=8
}
        ` },
      { type: "text", value: `Shuning uchun bunday xatoga yo'l qo'ymaslik uchun har doim jingalak qavslarni joylashtirish tavsiya etiladi.` },
      { type: "header", value: `Javascript-da else if Konstruksyasi` },
      { type: "text", value: `Else if dizayni else blokida shartlarni belgilash imkonini beradi. Keling, misolni ko'rib chiqaylik:` },
      { type: "code", value: `
let num = 1;

if (num == 1) {
	console.log('value1');
} else if (num == 2) {
	console.log('value2');
} else if (num == 3) {
	console.log('value3');
}
        ` },
      { type: "text", value: `Bir nechta iflar o'rniga else if dan foydalanishning afzalligi - num o'zgaruvchisining qiymati hech qanday shartga mos kelmaydigan vaziyatni ushlash qobiliyati:` },
      { type: "code", value: `
let num = 1;

if (num == 1) {
	console.log('value1');
} else if (num == 2) {
	console.log('value2');
} else if (num == 3) {
	console.log('value3');
} else {
	console.log('num o'zgaruvchisining qiymati noto'g'ri');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. O'zgaruvchan kun 1 dan 31 gacha bo'lgan oraliqning ma'lum sonini o'z ichiga oladi. Bu raqam oyning qaysi o'n kunligiga to'g'ri kelishini aniqlang (birinchi, ikkinchi yoki uchinchi).` },
      { type: "text", value: `2. Oldingi vazifani o'zgartiring, shunda o'zgaruvchan kunda 1 dan 31 gacha raqam bo'lmasa, xato xabari beriladi.` },
      { type: "header", value: `Javascript-ga o'rnatilgan if-else konstruksiyalari` },
      { type: "text", value: `Agar siz bir-biringizga o'zboshimchalik bilan sarmoya kiritishingiz mumkin. Misolga qarang:` },
      { type: "code", value: `
let num = 3;

if (num >= 0) {
	if (num <= 5) {
		console.log('katta yoki kichik 5');
	} else {
		console.log('katta 5');
	}
} else {
	console.log('no'ldan kichik');
}
        ` },
      { type: "header", value: `Javascript-da switch-case konstruksiyasi` },
      { type: "text", value: `Switch-case konstruksiyasi yordamida siz o'zgaruvchining qiymatiga qarab turli xil kodlarni bajarishingiz mumkin. Mana bu dizaynning sintaksisi:` },
      { type: "code", value: `
switch (o'zgaruvchi) {
	case 'qiymat1':
		/*
      bu erda bajariladigan kod
      agar o'zgaruvchi 1 qiymatiga ega bo'lsa
		*/
	break;
	case 'qiymat2':
		/*
      bu erda bajariladigan kod
      agar o'zgaruvchi 2 ga teng bo'lsa
		*/
	break;
	case 'qiymat3':
		/*
      bu erda bajariladigan kod
      agar o'zgaruvchi 3 ga teng bo'lsa
		*/
	break;
	default:
		/*
      bu erda bajariladigan kod
      agar biron bir ma'noga to'g'ri kelmasa
		*/
	break;
}
        ` },
      { type: "text", value: `Switch-case konstruksiyasi bilan misol kodini yozamiz:` },
      { type: "code", value: `
let num = 1;

switch (num) {
	case 1:
		console.log('value1');
	break;
	case 2:
		console.log('value2');
	break;
	case 3:
		console.log('value3');
	break;
	default:
		console.log('incorrect value');
	break;
}` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi kodni switch-case orqali qayta yozing:` },
      { type: "code", value: `
let lang = 'uz';

if (lang == 'uz') {
	console.log('uzb');
} else if (lang == 'en') {
	console.log('eng');
} else if (lang == 'de') {
	console.log('nem');
} else {
	console.log('bunday til mavjud emas');
}
        ` },
      { type: "header", value: `Javascript-da kalit taslim konstruksiyasi ixtiyoriy tanaffus` },
      { type: "text", value: `Switch-case konstruksiyasida break buyrug'i talab qilinmaydi. Agar rejalashtirilgan ishni bajarganingizdan so'ng tanaffus bo'lmasa, undan past bo'lgan barcha holatlar ham bajariladi.

Keling, misolni ko'rib chiqaylik:` },
      { type: "code", value: `
let num = 1; //bu erda 1 raqami bo'lsin

switch (num) {
1-savol:
console.log(1); //bu ishlaydi
2-savol:
console.log(2); //ishlaydi va bu
3-savol:
console.log(3); //ishlaydi va bu
}
        ` },
      { type: "text", value: `O'zgaruvchining qiymatini o'zgartiring:` },
      { type: "code", value: `
let num = 2;

switch (num) {
	case 1:
		console.log(1);
	case 2:
		console.log(2); // bu ishlaydi
	case 3:
		console.log(3); // bu ham ishlaydi
        ` },
      { type: "text", value: `O'zgaruvchining qiymatini o'zgartiring:` },
      { type: "code", value: `
let num = 3; 

switch (num) {
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3); // bu ishlaydi
        ` },
      { type: "text", value: `Ba'zida bu xususiyat muammolarni hal qilishda qo'llaniladi. Misolga qarang:` },
      { type: "code", value: `
let num = 1;
let res;

switch (num) {
	case 1:
	case 2:
		res = 'a';
	break;
	case 3:
		res = 'b';
	break;
}

console.log(res);` },
      { type: "text", value: `Biroq, bunday muammoni if orqali hal qilish aniqroq:` },
      { type: "code", value: `
let num = 1;
let res;

if (num == 1 || num == 2) {
	res = 'a';
}

if (num == 3) {
	res = 'b';
}

console.log(res);
        ` },
      { type: "header", value: `Javascript-da uchlik operator` },
      { type: "text", value: `Ushbu qo'llanmada biz if-else dizaynining qisqartirilgan versiyasi bo'lgan maxsus uchlik operatorni ko'rib chiqamiz. Uning sintaksisi quyidagicha:` },
      { type: "code", value: `let o'zgaruvchisi = sharti ? qiymat1 : qiymat2;` },
      { type: "text", value: `Operator shunday ishlaydi: agar shart to'g'ri bo'lsa, u holda qiymat1, aks holda qiymat2 qaytariladi. Keling, ushbu operator yordamida kod misolini keltiraylik:` },
      { type: "code", value: `
let age = 17;
let adult = age >= 18 ? true: false;
console.log(adult);
        ` },
      { type: "text", value: `Ushbu to'liq kodni quyidagicha qayta yozish mumkin:` },
      { type: "code", value: `
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);
        ` },
      { type: "text", value: `Uchlik operatordan faqat eng oddiy holatlarda foydalanish kerak, chunki undan foydalanish kodni tushunishni qiyinlashtiradi.` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi kodni uchlik operator orqali qayta yozing:` },
      { type: "code", value: `
let num = 1;
let res;

if (num >= 0) {
	res = '1';
} else {
	res = '2';
}

console.log(res);
        ` },
      { type: "header", value: `Javascript-da mantiqiy operatsiyalar` },
      { type: "text", value: `Taqqoslash operatorlari if konstruksiyalaridan tashqarida ishlatilishi mumkin. Misolga qarang:` },
      { type: "code", value: `
console.log(1 == 1); // true
console.log(1 == 2); // false
        ` },
      { type: "text", value: `O'zgaruvchilarni solishtirish mumkin:` },
      { type: "code", value: `
let a = 1;
let b = 2;

console.log(a == b);
        ` },
      { type: "text", value: `Natijani to'g'ridan-to'g'ri konsolga olib tashlashingiz shart emas, balki uni qandaydir o'zgaruvchiga tayinlang:` },
      { type: "text", value: `
let a = 1;
let b = 2;

let result = a == b;
console.log(result);
        ` },
      { type: "header", value: `Javascript-da confirm funktsiyasi` },
      { type: "text", value: `confirm funksiyasi foydalanuvchi javob berishi kerak bo'lgan savol va javob berish uchun ikkita tugma bilan oynani chaqiradi: "OK" tugmasi va "Bekor qilish" tugmasi bilan. Agar foydalanuvchi "OK" tugmasini bossa, funksiya haqiqatni qaytaradi, agar "Bekor qilish" bo'lsa, u noto'g'rilikni qaytaradi.` },
      { type: "text", value: `Quyidagi misolda confirm funksiyasi savol bilan dialog oynasini ko'rsatadi. Agar siz "Ok" tugmasini bossangiz, ok o'zgaruvchisiga rost yoziladi va agar siz "Bekor qilish" tugmasini bossangiz, noto'g'ri:` },
      { type: "code", value: `
let ok = confirm('Savol');
console.log(ok);
        ` },
      { type: "text", value: `Foydalanuvchi javobini qayta ishlash uchun if dizaynidan foydalanamiz:` },
      { type: "code", value: `
let ok = confirm('Savol texti');

if (ok) {
	console.log('siz xa jabini berdingiz');
} else {
	console.log('siz yo'q jabini berdingiz');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Foydalanuvchidan u allaqachon 18 yoshdami yoki yo'qligini so'rang. Agar mavjud bo'lsa, kattalar matni bilan ekranni ko'rsating va agar bo'lmasa, foydalanuvchiga kirish taqiqlanganligi haqida xabar qoldiring.` },
      { type: "header", value: `Javascript-da if-else orqali soat qismlarini tekshirish` },
      { type: "text", value: `Bizda min o'zgaruvchisi bo'lsin, unda 1 dan 60 gacha bo'lgan daqiqalar soni saqlanadi:` },
      { type: "code", value: `let min = 10;` },
      { type: "text", value: `Keling, belgilangan daqiqalar soni soat nechada ekanligini aniqlaylik:` },
      { type: "code", value: `
let min = 10;

if (min >= 0 && min <= 14) {
	console.log('1 chorak');
}

if (min >= 15 && min <= 29) {
	console.log('2 chorak');
}

if (min >= 30 && min <= 44) {
	console.log('3 chorak');
}

if (min >= 45 && min <= 59) {
	console.log('4 chorak');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Shunga o'xshash muammoni hal qiling, faqat belgilangan daqiqalar soni soatning uchdan biriga to'g'ri kelishini aniqlang.` },
      { type: "header", value: `Javascript-da qatorlar va massivlar uzunligini tekshiring` },
      { type: "text", value: `Bizda ba'zi ixtiyoriy qatorni saqlaydigan str o'zgaruvchisi bo'lsin:` },
      { type: "code", value: `let str = '12345';` },
      { type: "text", value: `Agar satr uzunligi uchta belgiga teng yoki undan ko'p bo'lsa, xabarni konsolga chiqaradigan shartni yozamiz:` },
      { type: "code", value: `
let str = '12345';

if (str.length >= 3) {
	console.log('!');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Arr o'zgaruvchisi raqamlar bilan ma'lum bir massivni o'z ichiga oladi. 3-massivdagi elementni tekshiradigan shartni yozing. Agar shunday bo'lsa, ekranda massiv elementlarining yig'indisini ko'rsating.` },
      { type: "header", value: `Javascript-da qator belgilarini tekshirish` },
      { type: "text", value: `Raqamlardan iborat qator berilsin:` },
      { type: "code", value: `let str = '12345';` },
      { type: "text", value: `Keling, ushbu qatorning birinchi belgisi 1 raqamiga teng yoki yo'qligini tekshiramiz:` },
      { type: "code", value: `
let str = '12345';

if (str[0] == 1) {
	console.log('!');
}
        ` },
      { type: "text", value: `Keling, oxirgi belgini 5 raqamiga teng deb tekshiramiz:` },
      { type: "code", value: `
let str = '12345';
let last = str[str.length - 1];

if (last == 5) {
	console.log('!');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Muayyan qatorni o'z ichiga olgan o'zgaruvchi berilgan. Ushbu satr "a" belgisi bilan boshlanishini tekshiring.` },
      { type: "text", value: `2. Muayyan qatorni o'z ichiga olgan o'zgaruvchi berilgan. Ushbu satr "x" belgisi bilan tugashini tekshiring.` },
      { type: "text", value: `3. Muayyan qatorni o'z ichiga olgan o'zgaruvchi berilgan. Ushbu satr "a" belgisi yoki "b" belgisi bilan boshlanishini tekshiring.` },
      { type: "header", value: `Javascript-da raqam raqamlarini tekshirish` },
      { type: "text", value: `Bizga raqam bersin:` },
      { type: "code", value: `let num = 12345;` },
      { type: "text", value: `Raqamning birinchi belgisiga murojaat qilishga urinish kutilmagan xatti-harakatlarga olib keladi:` },
      { type: "code", value: `
let num = 12345;

if (num[0] == 1) {
	console.log('+++');
} else {
	console.log('---'); // bu ishlaydi
}
        ` },
      { type: "text", value: `Siz allaqachon bilishingiz kerak bo'lganidek, muammo shundaki, siz satr belgilariga murojaat qilishingiz mumkin, lekin siz qila olmaysiz - raqam raqamlariga:` },
      { type: "code", value: `
let num = 12345;
console.log(num[0]); // undefined chiqadi
        ` },
      { type: "text", value: `Muammoni hal qilish uchun biz raqamimizni qatorga aylantiramiz:` },
      { type: "code", value: `
let num = 12345;
let str = String(num);

if (str[0] == 1) {
	console.log('+++'); // bu ishlaydi
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Yangi oʻzgaruvchini kiritish shart emas, [0] toʻgʻridan-toʻgʻri String: funksiyasi natijasiga qoʻllanilishi mumkin` },
      { type: "code", value: `
let num = 12345;

if (String(num)[0] == 1) {
	console.log('to'g'ri'); // bu ishlaydi
} else {
	console.log('no to'g'ri');
}
        ` },
      { type: "text", value: `Endi biz birinchi raqamni 1 yoki 2 ekanligini tekshirmoqchimiz. Tegishli kodni yozamiz:` },
      { type: "code", value: `
let num = 12345;

if (String(num)[0] == 1 || String(num)[0] == 2) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `Bunday holda, String(num)[0] dizayni ikki marta takrorlanadi. Bu, birinchidan, uzoq, ikkinchidan, optimal emas, chunki biz raqamni ikki marta qatorga aylantiramiz - ikkinchi marta ortiqcha bo'lib chiqadi va dastur resurslari bunga sarflanadi.` },
      { type: "text", value: `Muammoni tuzatamiz:` },
      { type: "code", value: `
let num = 12345;
let first = String(num)[0];

if (first == 1 || first == 2) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Javascript shartlari bilan koddagi xatolarni qidiring` },
      { type: "text", value: `Keyingi vazifalarda ba'zi dasturchi kod yozgan va unda xatolarga yo'l qo'ygan bo'lishi mumkin. Kod tavsiflangan narsani qiladimi yoki yo'qligini tekshirishingiz kerak. Agar kod to'g'ri ishlamasa, xatolarni tuzatishingiz kerak.` },
      { type: "text", value: `1. Kod raqamlar yig'indisini tekshirishi kerak:` },
      { type: "code", value: `
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}` },
      { type: "text", value: `2. Kod raqamlar yig'indisini tekshirishi kerak:` },
      { type: "code", value: `
let num1 = '1';
let num2 = '2';

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `3. Kod raqamlar yig'indisini tekshirishi kerak:` },
      { type: "code", value: `
let num1 = '1';
let num2 = '2';

if (Number(num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "text", value: `4. Kod raqamning birinchi raqamini tekshirishi kerak:` },
      { type: "code", value: `
let num = 123;

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },


    ],
  },
];
export const JsDocumentFifth = [
  {
    id: 5,
    path: "js5",
    content: [
      { type: "header", value: `Javascript-da Loop` },
      { type: "text", value: `Ushbu darsda biz loop o'rganishni boshlaymiz. Loop kodning ma'lum bir qismi ketma-ket bir necha marta bajarilishini ta'minlash uchun ishlatiladi.` },
      { type: "text", value: `Bu nima uchun kerak - 100 ta massiv elementini kvadratga o'rnatishingiz kerakligini tasavvur qiling. Agar siz har bir elementga o'z kaliti bilan alohida murojaat qilsangiz, bu 100 qator kodni oladi va bu kodni yozish uchun siz juda ko'p vaqt sarflashingiz kerak bo'ladi.` },
      { type: "text", value: `Lekin bu shart emas - bizda JavaScript biz uchun kerakli operatsiyani kerakli necha marta bajarishiga ishonch hosil qilish imkoniyati mavjud. Masalan, u massivning barcha elementlarini kvadratga ko'tardi. Bu tsikllar yordamida amalga oshiriladi.` },
      { type: "text", value: `Loop ma'lum bir kodni ma'lum bir necha marta takrorlashi mumkin. Loop har bir bunday o'tishi Loop-ning iteratsiyasi deb ataladi.` },
      { type: "text", value: `Loop ko'pincha har bir iteratsiya o'z qiymatini bittaga oshiradigan maxsus o'zgaruvchilar qo'llaniladi. Bunday o'zgaruvchilar loop hisoblagichlari deb ataladi. Hisoblagichlar tsikl necha marta bajarilganligini hisoblash uchun ishlatiladi. Hisoblagichlar uchun i, j va k harflaridan foydalanish odatiy holdir.` },
      { type: "text", value: `Keyingi darslarda biz JavaScript-da loop-ni o'rganishni boshlaymiz.` },
      { type: "header", value: `Javascript-da to'g'ridan-to'g'ri loop bilan massivni yengib o'tish` },
      { type: "text", value: `For-of loop-li massiv elementlarini ketma-ket saralash imkonini beradi. U quyidagi sintaksisga ega:` },
      { type: "code", value: `
for (let o'zgaruvchisi Massiv elementi) {
/*
Element o'zgaruvchisiga navbat bilan
o'tkazilgan massivning elementlari uriladi.
*/
}
        ` },
      { type: "text", value: `Keling, bir misolni ko'rib chiqaylik. Quyidagi massiv berilgan bo'lsin:` },
      { type: "code", value: `let arr = [1, 2, 3, 4, 5];` },
      { type: "text", value: `Keling, ushbu massivni tsikl bilan kesib o'tamiz va uning elementlarini konsolga joylashtiramiz:` },
      { type: "code", value: `
for (let elem of arr) {
	console.log(elem);
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Quyidagi massivning barcha elementlarini konsolga kiriting:` },
      { type: "code", value: `let arr = ['a', 'b', 'c', 'd', 'e'];` },
      { type: "header", value: `Javascript-da majburiy loop bilan ob'ektni haddan tashqari oshirib yuborish` },
      { type: "text", value: `Ob'ektlarni qidirish uchun for-in loop mo'ljallangan. U quyidagi sintaksisga ega:` },
      { type: "code", value: `
for (let o'zgaruvchanKalit in Obyekt) {
	
}
        ` },
      { type: "text", value: `Kalit o'zgaruvchisi navbatma-navbat ko'chirilayotgan ob'ektning kalitlarini o'z ichiga oladi. Keling, bir misol bilan harakat qilaylik. Bizda shunday ob'ekt bo'lsin:` },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3};` },
      { type: "text", value: `Keling, ushbu ob'ektning kalitlarini ko'rsatish uchun for-in loop-dan foydalanamiz:` },
      { type: "code", value: `
for (let key in obj) {
	console.log(key); // 'a', 'b', 'c' chiqadi
}
        ` },
      { type: "text", value: `Endi elementlarni ko'rsatamiz:` },
      { type: "code", value: `
for (let key in obj) {
	console.log(obj[key]); // 1, 2, 3 chiqadi
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Quyidagi ob'ektning barcha kalitlarini konsolga kiriting:` },
      { type: "code", value: `let obj = {x: 1, y: 2, z: 3};` },
      { type: "text", value: `2. Quyidagi ob'ektning barcha elementlarini konsolga kiriting:` },
      { type: "text", value: `let obj = {x: 1, y: 2, z: 3};` },
      { type: "header", value: `Javascript-da while loop` },
      { type: "text", value: `Parametr tomonidan unga etkazilgan ifoda to'g'ri bo'lsa, "while" loop bajariladi. Bu sizga ixtiyoriy miqdordagi iteratsiyalarni bajarishga imkon beradi. Mana uning sintaksisi:` },
      { type: "code", value: `
while (hozircha ifoda haqiqiy ) {
  biz ushbu kodni loop-li bajaramiz;
  har bir loop-ning boshida biz ifodani yumaloq shakldagi qavslar bilan tekchiramiz 
}
        ` },
      { type: "text", value: `Ifoda haqiqat bo'lishni to'xtatganda loop tugaydi. Agar dastlab yolg'on bo'lsa, u bir marta ham bajarilmaydi.` },
      { type: "text", value: `Misol tariqasida birdan beshgacha bo'lgan raqamlarni ketma-ket ko'rib chiqaylik:` },
      { type: "code", value: `
let i = 1;

while (i <= 5) {
	console.log(i);
	i++;
}
        ` },
      { type: "text", value: `Endi natija 10 dan kam bo'lgunga qadar berilgan raqamni 2 marta ajratamiz:` },
      { type: "code", value: `
let num = 500;

while (num > 10) {
	num = num / 2;
}

console.log(num); // Javobi
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Konsolga 1 dan 100 gacha raqamlarni kiriting.` },
      { type: "text", value: `2. Konsolga 11 dan 33 gacha raqamlarni kiriting.` },
      { type: "text", value: `3. Muayyan boshlang'ich qiymatga ega num raqami berilgan. Ko'paytirish natijasi 1000 dan oshguncha uni 3 marta ko'paytiring. Qaysi raqam olinadi? Buning uchun zarur bo'lgan iteratsiyalar sonini hisoblang.` },
      { type: "header", value: `Javascript-da for Loop` },
      { type: "text", value: `for Loop ma'lum bir kodni ma'lum bir necha marta takrorlash imkonini beradi. Mana uning sintaksisi:` },
      { type: "code", value: `
for (boshlang'ich buyruqlar; tugatish sharti; o'tishdan keyingi buyruqlar) {
  for loop tanasi
}
        ` },
      { type: "text", value: `Dastlabki buyruqlar loop boshlanishidan oldin bajariladigan narsadir. Ular faqat bir marta amalga oshiriladi. Odatda u erda boshlang'ich hisoblagich qiymatlari joylashtiriladi, masalan: i = 0.` },
      { type: "text", value: `loop-ning tugash sharti - bu loop to'g'ri bo'lganda aylanadigan shart, masalan: i <= 10.` },
      { type: "text", value: `loop-ni tugatgandan so'ng buyruqlar - bu loop oxirida har safar bajariladigan buyruqlar. Odatda u erda hisoblagichlar ko'paytiriladi, masalan: i++.` },
      { type: "text", value: `For loop-dan foydalanib, 1 dan 9 gacha raqamlarni ketma-ket chiqaramiz:` },
      { type: "code", value: `
for (let i = 1; i <= 9; i++) {
	console.log(i); // 1, 2... 9 chiqadi
}
        ` },
      { type: "text", value: `Endi hisoblagichni 1 ga emas, 2 ga oshiramiz` },
      { type: "code", value: `
for (let i = 1; i <= 9; i += 2) {
	console.log(i); // 1, 3, 5... chiqadi
}
        ` },
      { type: "text", value: `Ortga hisoblash mumkin:` },
      { type: "code", value: `
for (let i = 10; i > 0; i--) {
	console.log(i); // 10, 9, 8... chiqadi
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. For loop-dan foydalanib, konsolga 1 dan 100 gacha raqamlarni kiriting.` },
      { type: "text", value: `2. For loop-dan foydalanib, konsolga 11 dan 33 gacha raqamlarni kiriting.` },
      { type: "text", value: `3. For loop-dan foydalanib, konsolingizga 0 dan 100 gacha bo'lgan juft raqamlarni kiriting.` },
      { type: "text", value: `4. For loop-dan foydalanib, konsolga 1 dan 99 gacha bo'lgan toq raqamlarni kiriting.` },
      { type: "text", value: `5. For loop-dan foydalanib, konsolga 100 dan 0 gacha raqamlarni kiriting.` },
      { type: "header", value: `Javascript-da Array uchun loop` },
      { type: "text", value: `Array-larni for loop-da ham saralash mumkin. Keling, bu qanday amalga oshirilganini ko'rib chiqaylik. Bizga shunday array bersin` },
      { type: "code", value: `let arr = [1, 2, 3, 4, 5];` },
      { type: "text", value: `Keling, ushbu array-ning elementlarini loop-da ko'rsatamiz:` },
      { type: "code", value: `
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}
        ` },
      { type: "text", value: `Siz array uzunligidan birlikni olib tashlashingiz shart emas, lekin qat'iy taqqoslashdan foydalaning:` },
      { type: "code", value: `
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
        ` },
      { type: "text", value: `Array-ni loop bilan haddan tashqari oshirib yuborish nima sodir bo'layotganini ko'proq nazorat qilish imkonini beradi. Misol uchun, siz elementlarni noldan emas, balki birinchisidan olishingiz mumkin:` },
      { type: "code", value: `
for (let i = 1; i < arr.length; i++) {
	console.log(arr[i]);
}
        ` },
      { type: "text", value: `Elementlarni teskari tartibda ko'rsatish mumkin:` },
      { type: "code", value: `
for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Quyidagi array-ning barcha elementlarini konsolga chiqaring:` },
      { type: "code", value: `let arr = ['a', 'b', 'c', 'd', 'e'];` },
      { type: "text", value: `2. Nol va oxirgidan tashqari quyidagi array-ning barcha elementlarini konsolga chiqaring:` },
      { type: "code", value: `let arr = ['a', 'b', 'c', 'd', 'e'];` },
      { type: "text", value: `3. Konsoldagi quyidagi massivning elementlarini teskari tartibda chop eting:` },
      { type: "code", value: `let arr = ['a', 'b', 'c', 'd', 'e'];` },
      { type: "text", value: `4. Quyidagi kodda yo'l qo'yilgan xatoni tuzating:` },
      { type: "code", value: `
let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
}
        ` },
      { type: "header", value: `Javascript-dagi loop-dagi Condition (Shartlar)` },
      { type: "text", value: `Shartlar loop-da qo'llanilishi mumkin. Keling, misolni ko'rib chiqaylik. Bizda quyidagi array bo'lsin:` },
      { type: "code", value: `let arr = [1, 2, 3, 4, 5];` },
      { type: "text", value: `Keling, ushbu array-ning barcha elementlarini konsolga chiqaramiz:` },
      { type: "code", value: `
for (let elem of arr) {
	console.log(elem);
}
        ` },
      { type: "text", value: `Endi shart qo'yamiz va faqat juft sonlar bo'lgan elementlarni chiqaramiz:` },
      { type: "code", value: `
for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Array berilgan:` },
      { type: "code", value: `let arr = [2, 5, 9, 15, 1, 4];` },
      { type: "text", value: `Konsolga 3 dan katta, lekin 10 dan kam bo'lgan array elementlarini chiqaring.` },
      { type: "text", value: `2. ob'ekt berilgan:` },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};` },
      { type: "text", value: `Qiymatlari toq raqamlar bo'lgan ob'ektning elementlarini konsolga chiqaring.` },
      { type: "header", value: `Javascript loop-da raqamlarni to'plash` },
      { type: "text", value: `Keling, loop-dan foydalanib, 1 dan 100 gacha bo'lgan butun sonlar yig'indisini topamiz. Bunday muammoni hal qilish uchun raqamlar loop-da ko'chiriladi va ularning yig'indisi ketma-ket qandaydir o'zgaruvchiga yoziladi:` },
      { type: "code", value: `
let res = 0;

for (let i = 1; i <= 100; i++) {
	res = res + i;
}

console.log(res); // istalgan miqdor
        ` },
      { type: "text", value: `+=: operatori orqali yechimni soddalashtirishingiz mumkin` },
      { type: "code", value: `
let res = 0;

for (let i = 1; i <= 100; i++) {
	res += i;
}

console.log(res);
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. 2 dan 100 gacha bo'lgan juft sonlar yig'indisini toping.` },
      { type: "text", value: `2. 1 dan 99 gacha bo'lgan toq sonlar yig'indisini toping.` },
      { type: "text", value: `3. 1 dan 20 gacha bo'lgan butun sonlar mahsulotini toping.` },
      { type: "header", value: `Javascript loop-da array elementlarini to'plash` },
      { type: "text", value: `Keling, loop-dan foydalanib, array elementlarining yig'indisini topamiz.` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];
let res = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res); // istalgan miqdor
        ` },
      { type: "header", value: `Javascript-da loop-lar orqali string-larni shakllantirish` },
      { type: "text", value: `Loop-lar yordamida siz string-larni yaratishingiz mumkin. Misol tariqasida o'nta "x" harfi bilan to'ldirilgan qatorni olaylik:` },
      { type: "code", value: `
let str = '';

for (let i = 0; i < 10; i++) {
	str += 'x';
}

console.log(str); // 'xxxxxxxxxx' chiqadi
        ` },
      { type: "text", value: `Endi biz "12345" qatorini qilamiz. Buning uchun biz o'zgaruvchimizga loop hisoblagichini qo'shamiz:` },
      { type: "code", value: `
let str = '';

for (let i = 1; i <= 5; i++) {
	str += i;
}

console.log(str); // '12345' chiqadi
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Loop-dan foydalanib, 5 ta chiziq bilan to'ldirilgan qator hosil qiling.` },
      { type: "text", value: `2. Loop-dan foydalanib, "123456789" qatorini yarating.` },
      { type: "text", value: `3. Loop-dan foydalanib, "987654321" qatorini yarating.` },
      { type: "text", value: `4. Loop-dan foydalanib, "-1-2-3-4-5-6-7-8-9-" qatorini yarating.` },
      { type: "header", value: `Javascript-da break bo'yicha ko'rsatmalar` },
      { type: "text", value: `Break ko'rsatmalari loop-ni erta yakunlash imkonini beradi. Keling, bu qachon foydali bo'lishi mumkinligini ko'rib chiqaylik. Bizda array elementlarini konsolga chiqaradigan loop bo'lsin:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	console.log(elem);
}
        ` },
      { type: "text", value: `Bizning vazifamiz array-da 3 raqami bor yoki yo'qligini aniqlash bo'lsin. Agar mavjud bo'lsa, biz konsolga "bor" so'zini chiqaramiz (va agar bo'lmasa, biz hech narsa qilmaymiz).` },
      { type: "text", value: `Keling, muammomizni hal qilaylik:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem === 3) {
		console.log('есть');
	}
}
        ` },
      { type: "text", value: `Muammo hal qilindi, ammo muammo bor: 3 raqami allaqachon topilgandan so'ng, array hali ham ma'nosiz harakat qilishda davom etadi, qimmatli protsessor resurslarini sarflaydi va skriptimizni sekinlashtiradi.` },
      { type: "text", value: `Raqam topilgandan so'ng darhol loop-larimizni yakunlash maqbulroq bo'ladi. Buni loopni muddatidan oldin yakunlash imkonini beruvchi maxsus break ko'rsatmalari yordamida amalga oshirish mumkin.` },
      { type: "text", value: `Shunday qilib, keling, 3: raqamiga duch kelishimiz bilan loop-ni yakunlaylik` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('есть');
		break; // loop dan chiqamiz
	}
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Raqamlar bilan array berilgan. 0 qiymatiga ega element topilmaguncha, ushbu array-ni elementlarini konsolga navbatma-navbat chiqaradigan loop-ni ishga tushiring. Shundan so'ng, loop o'z ishini yakunlashi kerak.` },
      { type: "text", value: `2. Raqamlar bilan array berilgan. Array-ning boshidan birinchi manfiy songacha joylashgan elementlar yig'indisini toping.` },
      { type: "text", value: `3. Raqamlar bilan array berilgan. Ushbu array-dagi birinchi 3 raqamining o'rnini toping (biz bu raqam array-da bo'lishi kerak deb hisoblaymiz).` },
      { type: "header", value: `Javascript-da continue bo'yicha ko'rsatmalar` },
      { type: "text", value: `Bundan tashqari, loop-ning yangi iteratsiyasini ishga tushiradigan kontent ko'rsatmalari mavjud. Ushbu ko'rsatma ba'zan kodni soddalashtirish uchun foydali bo'lishi mumkin, garchi deyarli har doim muammoni usiz hal qilish mumkin. Keling, amaliy misolni ko'rib chiqaylik.` },
      { type: "text", value: `Bizga raqamlar bilan array bersin. Keling, uni loop bilan ko'rib chiqaylik va 2 ga bo'lingan raqamlarni kvadratga aylantiramiz va uni konsolga chiqaramiz va 3 ga bo'lingan raqamlarni kubga joylashtiramiz va ularni konsolga chiqaramiz. Bu erda tasvirlangan muammoning yechimi:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	let result;
	
	if (elem % 2 === 0) {
		result = elem * elem;
		console.log(result);
		
	} else if (elem % 3 === 0) {
		result = elem * elem * elem;
		console.log(result);
		
	}
}
        ` },
      { type: "text", value: `Ko'rib turganingizdek, console.log (natija) qatori ikki marta takrorlanadi. Keling, uni shunday deb qabul qilaylik:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	let result;
	
	if (elem % 2 === 0) {
		result = elem * elem;
	} else if (elem % 3 === 0) {
		result = elem * elem * elem;
	}
	
	console.log(result); // biz shart bo'yicha xulosa chiqardik
}
        ` },
      { type: "text", value: `Endi bizning skriptimiz biroz boshqacha ishlaydi: ma'lum bo'lishicha, bizning if orqali qayta ishlanmagan oddiy elementlar uchun result o'zgaruvchisi konsolga chiqariladi, bu bizning vazifamizga ko'ra kerak emas.` },
      { type: "text", value: `Keling, 2 va 3 ga bo'linmaydigan elementlar uchun ishlaydigan boshqa else shartini qo'shish orqali muammoni tuzatamiz va u erda bizni darhol loop-ning yangi iteratsiyasiga o'tkazadigan continue ko'rsatmasini chaqiramiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue;
	}
	
	console.log(result); // 2 yoki 3 ga bo'lingan bo'lsa amalga oshiriladi
}
        ` },
      { type: "header", value: `Javascript Nested Loop` },
      { type: "text", value: `Siz allaqachon bilgan loop-lar bir-biriga nesting qilinishi mumkin. Misol uchun, keling, quyidagi muammoni hal qilaylik: ekranda qatorni ko'rsatamiz:` },
      { type: "code", value: `1112223344555667788999` },
      { type: "text", value: `Bu erda bir loop bilan qilish mumkin emas - siz bir-biriga o'rnatilgan ikkita loop-ni ishga tushirishingiz kerak: birinchi loop raqamlarni saralaydi, ikkinchi loop esa bu raqamlarni uch marta takrorlaydi. Keling, buni amalga oshiraylik:` },
      { type: "code", value: `
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}
        ` },
      { type: "text", value: `E'tibor bering: birinchi loop-da i, ikkinchi j hisoblagich mavjud va agar uchinchi loop ham bo'lsa, u holda hisoblagich k o'zgaruvchiga ega bo'ladi. Bu standart umumiy qabul qilingan nomlar va ulardan foydalanish kerak.` },
      { type: "header", value: `Javascript-da array to'ldirish` },
      { type: "text", value: `Tsiklda siz array-larni ma'lumotlar bilan to'ldirishingiz mumkin. Buning uchun push method-dan foydalanish kerak:` },
      { type: "code", value: `
let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); // [1, 2, 3, 4, 5] chiqadi
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. loop va push usulidan foydalanib, array-ni 1 dan 10 gacha raqamlar bilan to'ldiring.` },
      { type: "text", value: `2. loop va push usulidan foydalanib, array-ni 10 ta "x" harfi bilan to'ldiring.` },
      { type: "text", value: `3. Raqamlar bilan array berilgan. Uni loop bilan qayta yozing va yangi array-ga faqat ijobiy raqamlarni yozing.` },
      { type: "header", value: `Javascript loop-da array-ni o'zgartirish` },
      { type: "text", value: `Array elementlari loop-larda o'zgartirilishi mumkin. Buning uchun siz array-larni oddiy for loop bilan saralashingiz kerak. Misol tariqasida massiv elementlarini 2 ga ko'paytiramiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * 2;
}

console.log(arr); // [2, 4, 6, 8, 10] chiqadi
        ` },
      { type: "text", value: `Endi array-ning har bir elementini bittaga oshiramiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i]++;
}

console.log(arr); // [2, 3, 4, 5, 6] chiqadi
        ` },
      { type: "text", value: `Endi array-ning har bir elementini 5 ga oshiramiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] += 5;
}

console.log(arr); // [6, 7, 8, 9, 10] chiqadi
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Raqamlar bilan array berilgan. Ushbu array-ni loop bilan aylantiring va ushbu array-ning har bir elementini kvadratga oshiring.` },
      { type: "text", value: `2. Raqamlar bilan array berilgan. Ushbu massivni loop bilan qayta joylashtiring va har bir elementdan bittasini olib tashlang.` },
      { type: "header", value: `Javascript-da ob'ektlarni loop orqali to'ldirish` },
      { type: "text", value: `Ob'ektlarni loop-dagi ma'lumotlar bilan ham to'ldirish mumkin. Keling, bir misolni ko'rib chiqaylik. Bizda ikkita array bo'lsin:` },
      { type: "code", value: `
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
        ` },
      { type: "text", value: `Keling, ulardan birinchi array-dan ushbu ob'ekt uchun kalitlarni, ikkinchi massivdan esa qiymatlarni olib, ob'ektni yaratish uchun foydalanamiz. Buning uchun biz loop-ni ishga tushiramiz va loop-da ob'ektimizni shakllantiramiz: ` },
      { type: "code", value: `
let obj = {};

for (let i = 0; i <= 4; i++) {
	let key = keys[i];
	let value = values[i];
	
	obj[key] = value;
}

console.log(obj);
        ` },
      { type: "text", value: `Kalit va qiymat uchun o'zgaruvchilarni kiritish shart emas, siz shunchaki shunday qilishingiz mumkin:` },
      { type: "code", value: `
let obj = {};

for (let i = 0; i <= 4; i++) {
	obj[keys[i]] = values[i];
}

console.log(obj);
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `1. Ikkita array berilgan: birinchisi hafta kunlarining nomlari bilan, ikkinchisi esa ularning seriya raqamlari bilan:` },
      { type: "code", value: `
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
        ` },
      { type: "text", value: `Loop-dan foydalanib, kalitlari kunlarning nomlari va qiymatlari ularning raqamlari bo'ladigan ob'ektni yarating.` },
      { type: "text", value: `2. Ob'ekt berilgan :` },
      { type: "code", value: `let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};` },
      { type: "text", value: `Ushbu ob'ektni loop bilan qayta tartiblang va juft raqamlar bo'lgan elementlarni yangi ob'ektga yozing.` },
      { type: "header", value: `Javascript-da bayroqlar bilan ishlash` },
      { type: "text", value: `Endi siz va men bayroqlar bilan ishlashni o'rganamiz. Bayroq - bu faqat ikkita qiymatni qabul qila oladigan maxsus o'zgaruvchi: true va false. Bayroqlardan foydalanib, siz biror narsa yo'qligini tekshiradigan muammolarni hal qilishingiz mumkin: masalan, arrayda ma'lum bir qiymatga ega element yo'qligini tekshirishingiz mumkin. Qani boshladik.` },
      { type: "text", value: `Keling, quyidagi muammoni hal qilaylik: raqamlar bilan massiv berilgan, unda 3 qiymatiga ega element bor yoki yo'qligini tekshirishimiz kerak. Agar mavjud bo'lsa, "+++" ni chiqaramiz, agar bo'lmasa, '--' ni chiqaramiz.` },
      { type: "text", value: `Birinchidan, "+++" ni chiqarishga harakat qilaylik. Buning uchun biz massivimizning barcha elementlarini ko'rib chiqamiz va joriy element 3 qiymatiga teng yoki yo'qligini so'raymiz. Agar teng bo'lsa, "+++" ni chiqaramiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++');
	}
}
        ` },
      { type: "text", value: `Ammo bizning qarorimiz unchalik yaxshi emas: axir, agar arrayda bitta emas, balki bir nechta qiymat bo'lsa, "+++" bir necha marta chiqariladi. Keling, array-mizni tuzatamiz (3 qiymatiga ega ikkita elementni bajaramiz) va bunga ishonch hosil qilaylik:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++'); // bir necha marta chiqadi
	}
}
        ` },
      { type: "text", value: `Muammoni to'g'rilaylik: agar element allaqachon topilgan bo'lsa, biz loop-ni tanaffus bilan yakunlaymiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++');
		break;  // loop-ni to'xtatamiz
	}
}
        ` },
      { type: "text", value: `Keling, array-da 3-qiymatli elementlar umuman bo'lmasa, '--' chiqishi uchun harakat qilaylik. Keng tarqalgan noto'g'ri tushuncha bizning ifuga else qo'shish bo'ladi - bu holda '--' 3 bo'lmagan barcha elementlarga chiqariladi:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++'); 
	} else {
		console.log('---'); 
	}
}
        ` },
      { type: "text", value: `Shunday qilib, else qo'shish g'oyasi ishlamaydigan yomon fikrdir. Ushbu turdagi muammolarni hal qilish uchun (bunday muammolar juda keng tarqalgan) va bayroqlar deb ataladigan narsalar qo'llaniladi.` },
      { type: "text", value: `Yuqorida aytib o'tilganidek, bayroq ikkita qiymatni olishi mumkin bo'lgan o'zgaruvchidir: haqiqiy yoki noto'g'ri.` },
      { type: "text", value: `Shunday qilib, keling, bayroq o'zgaruvchisini quyidagi qiymat bilan yarataylik: agar u rost bo'lsa, u holda arrayda 3-element mavjud va agar u noto'g'ri bo'lsa, unda bunday element yo'q.` },
      { type: "text", value: `Dastlab, bayroq o'zgaruvchisini noto'g'ri qiymatga qo'yamiz - ya'ni massivda 3-element yo'q deb faraz qilamiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];
let flag = false; ` },
      { type: "text", value: `Keyin biz ilgari qilganimizdek, if bilan loop-ni boshlaymiz. Agar loop massivda 3-element mavjudligini aniqlasa, biz bayroq o'zgaruvchisini haqiqiy qiymatga joylashtiramiz va break yordamida loop-dan chiqamiz:` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];
let flag = false; 

for (let elem of arr) {
	if (elem == 3) {
		flag = true; 
		break; // loop-dan chiqamiz
	}
}  
      ` },
      { type: "text", value: `Savolga javob, agar array 3 bo'lsa yoki yo'q bo'lsa, biz faqat loopdan keyin berishimiz mumkin. Va bizda bu javob allaqachon mavjud: loopdan keyin bayroq o'zgaruvchisi noto'g'ri bo'lib qolishi yoki loop 3: array-da topilgan bo'lsa, uning qiymatini haqiqiyga o'zgartirishi mumkin` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
	if (elem == 3) {
		flag = true;
		break;
	}
}
        ` },
      { type: "text", value: `Endi, loop-dan so'ng, biz bayroq o'zgaruvchisiga qaraydigan va "+++" yoki '--': ni ko'rsatadigan if qilishimiz mumkin` },
      { type: "code", value: `
let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
	if (elem == 3) {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}
        ` },
      { type: "header", value: `Mashq` },
      { type: "text", value: `Array berilgan :` },
      { type: "code", value: `let arr = ['a', 'b', 'c', 'd', 'e'];` },
      { type: "text", value: `Ushbu array-da "c" elementi borligini tekshiring. Agar mavjud bo'lsa, "+++'" ni chiqaring, agar bo'lmasa, "---'" ni chiqaring.` },
      { type: "header", value: `Loop ustida ishlash` },
      { type: "text", value: `1. Loop yordamida 1 dan 100 gacha raqamlar ustunini chiqaring.` },
      { type: "text", value: `2. Loop yordamida 100 dan 1 gacha raqamlar ustunini chiqaring.` },
      { type: "text", value: `3. Loop yordamida 1 dan 100 gacha juft sonlar ustunini chiqaring.` },
      { type: "text", value: `4. Loop yordamida array-ni 10 ta x bilan to'ldiring.` },
      { type: "text", value: `5. Loop yordamida array-ni 1 dan 10 gacha raqamlar bilan to'ldiring.` },
      { type: "text", value: `6. Raqamlar bilan array berilgan. Loop-dan foydalanib, faqat noldan katta va 10 dan kichik bo'lgan array elementlarini chop eting.` },
      { type: "text", value: `7. Raqamlar bilan array berilgan. Loop-dan foydalanib, uning qiymati 5 bo'lgan element borligini tekshiring.` },
      { type: "text", value: `8. Raqamlar bilan array berilgan. Loop-dan foydalanib, ushbu array elementlarining yig'indisini toping.` },
      { type: "text", value: `9. Raqamlar bilan array berilgan. Loop-dan foydalanib, ushbu array elementlarining kvadratlari yig'indisini toping.` },
      { type: "text", value: `10. Raqamlar bilan array berilgan. Uning elementlarining o'rtacha arifmetik qiymatini toping.` },
      { type: "text", value: `11. Xodimlar va ularning maoshlari bilan quyidagi ob'ekt berilgan:` },
      { type: "code", value: `
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
        ` },
      { type: "text", value: `Har bir xodimning ish haqini 10% ga oshiring.` },
      { type: "text", value: `12. Oldingi vazifani o'zgartiring, shunda ish haqi faqat 400 dan kam yoki unga teng bo'lgan ishchilar uchun oshiriladi.` },
      { type: "text", value: `13. Quyidagi array berilgan:` },
      { type: "code", value: `
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
        ` },
      { type: "text", value: `Ushbu array-lardan foydalanib, yangi ob'ektni yarating, uni kalitlarga birinchi array-ning elementlarini, qiymatlarga esa ikkinchisining elementlarini aylantiring.` },
    ],
  },
];
export const JsDocumentSixth = [
  {
    id: 6,
    path: "js6",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentSeventh = [
  {
    id: 7,
    path: "js7",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentEighth = [
  {
    id: 8,
    path: "js8",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentNinth = [
  {
    id: 9,
    path: "js9",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentTenth = [
  {
    id: 10,
    path: "js10",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentEleventh = [
  {
    id: 11,
    path: "js11",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentTwelfth = [
  {
    id: 12,
    path: "js12",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentThirteenth = [
  {
    id: 13,
    path: "js13",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentFourteenth = [
  {
    id: 14,
    path: "js14",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentFifteenth = [
  {
    id: 15,
    path: "js15",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentSixteenth = [
  {
    id: 16,
    path: "js16",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
export const JsDocumentSeventeenth = [
  {
    id: 17,
    path: "js17",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentEighteenth = [
  {
    id: 18,
    path: "js18",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentNineteenth = [
  {
    id: 19,
    path: "js19",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentieth= [
  {
    id: 20,
    path: "js20",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentyFirst= [
  {
    id: 21,
    path: "js21",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentySecond = [
  {
    id: 22,
    path: "js22",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentyThird = [
  {
    id: 23,
    path: "js23",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentyFourth = [
  {
    id: 24,
    path: "js24",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentyFifth = [
  {
    id: 25,
    path: "js25",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentySixth = [
  {
    id: 26,
    path: "js26",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentySeventh = [
  {
    id: 27,
    path: "js27",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentyEighth = [
  {
    id: 28,
    path: "js28",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentTwentyNinth = [
  {
    id: 29,
    path: "js29",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentThirtieth= [
  {
    id: 30,
    path: "js30",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];

export const JsDocumentThirtyFirst= [
  {
    id: 31,
    path: "js31",
    content: [
      { type: "header", value: "Что такое HTML ?" },
      { type: "text", value: "" },
    ],
  },
];
