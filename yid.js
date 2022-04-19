// Tarih Türkçeleştirme
let aylar = new Array ("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
let gunler = new Array ("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
let ay_gun_sayisi = new Array (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

// Günün tarihi
let tarih = new Date();
let yil = tarih.getFullYear();
let ay = tarih.getMonth();
let gun = tarih.getDate();
let ayin_adi = aylar[ay];
let bugun = gun + " " + ayin_adi + " " + yil; // Bugünün tarihi

// Yılın günü ön tanımlamalar
let baslangic = new Date(tarih.getFullYear(), 0, 0);
let fark = tarih - baslangic;
let birGun = 1000 * 60 * 60 * 24;
let yilin_gunu = Math.floor(fark / birGun);

// Zaman, ilerleme ve şekil hesaplamaları
let ilerleme_yuzdesi = Math.floor((yilin_gunu / 365) * 100);
let kalan_gun = 365 - yilin_gunu;

// Yılın günü için ekran çıktısı
function ilerleme() {
    document.getElementById("tarihi_goster").innerHTML = "📅 " + bugun + "<br>";
    document.getElementById("tarihi_goster").innerHTML += "Yılın " + yilin_gunu + "." + " günü:" + " | " + "Kalan gün: " + kalan_gun + "<br>";
    w_yeni = ilerleme_yuzdesi + "%";
    document.getElementById("ilerleme").style.width = w_yeni;
    document.getElementById("ilerleme_yuzde").innerHTML = "%" + ilerleme_yuzdesi;
}

// Ayın günü ön tanımlamalar
let ayin_kalan_gunu = ay_gun_sayisi[ay] - gun;
let aygun_ilerleme_yuzdesi = Math.round((gun / ay_gun_sayisi[ay]) * 100);

// Ayın günü için ekran çıktısı
function aygun() {
    document.getElementById("aygun_goster").innerHTML = "📅 " + ayin_adi + " | " + "Kalan gün: " + ayin_kalan_gunu + "<br>";
    w_aygun_yeni = aygun_ilerleme_yuzdesi + "%";
    document.getElementById("aygun_ilerleme").style.width = w_aygun_yeni;
    document.getElementById("aygun_yuzde").innerHTML = gun;
}