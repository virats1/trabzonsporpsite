// ============================================================
//  data.js — Trabzonspor Maç Merkezi Veri Dosyası
//  Bu dosyayı tüm kanallarda ortak kullanabilirsin.
//  Yeni maç eklemek için sadece ilgili diziye nesne ekle.
// ============================================================

// ----------------------------------------------------------------
// FİKSTÜR — Sıradaki maçlar (tarih sırasıyla en yakın önce)
// ----------------------------------------------------------------
const fikstur = [
    {
        hafta: "Hafta 33",
        tarih: "09 Mayıs 2026",
        saat: "20:00",
        turnuva: "Trendyol Süper Lig",
        turnuvaLogo: "assets/img/superlig.png",
        stadyum: "Tüpraş Stadyumu",
        evSahibi: {
            isim: "Beşiktaş",
            logo: "https://cdn.trabzonspor.org.tr/bd496891fc154216ac592a49056476b4.png"

        },
        misafir: {
            isim: "Trabzonspor",
            logo: "https://cdn.trabzonspor.org.tr/bd496891fc154216ac592a49056476b4.png"

        },
        geriSayim: true   // true ise sayaç gösterilir
    },
    {
        hafta: "Hafta 34",
        tarih: "17 Mayıs 2026",
        saat: null,        // null ise "Saat Açıklanmadı" yazar
        turnuva: "Trendyol Süper Lig",
        turnuvaLogo: "assets/img/superlig.png",
        stadyum: "Papara Park",
        evSahibi: {
            isim: "Trabzonspor",
            logo: "https://i.imgur.com/zJDF5Sp.png"
        },
        misafir: {
            isim: "Ankaragücü",
            logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/1e/MKE_Ankaragücü.png/800px-MKE_Ankaragücü.png"
        },
        geriSayim: false
    }
];

// ----------------------------------------------------------------
// GEÇMİŞ MAÇLAR — En son oynanan önce gelecek şekilde sırala
// ----------------------------------------------------------------
const gecmisMaclar = [
    {
        hafta: "Hafta 32",
        tarih: "27 Nisan 2026",
        turnuva: "Trendyol Süper Lig",
        turnuvaLogo: "assets/img/superlig.png",
        stadyum: "Papara Park",
        evSahibi: {
            isim: "Trabzonspor",
            logo: "https://i.imgur.com/zJDF5Sp.png",
            gol: 1
        },
        misafir: {
            isim: "Göztepe",
            logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/5/57/Göztepe_S.K.png/800px-Göztepe_S.K.png",
            gol: 1
        }
    },
    {
        hafta: "Hafta 31",
        tarih: "20 Nisan 2026",
        turnuva: "Trendyol Süper Lig",
        turnuvaLogo: "assets/img/superlig.png",
        stadyum: "Medaş Konya Büyükşehir Stadyumu",
        evSahibi: {
            isim: "Konyaspor",
            logo: "https://upload.wikimedia.org/wikipedia/tr/d/d6/Konyaspor.png",
            gol: 2
        },
        misafir: {
            isim: "Trabzonspor",
            logo: "https://i.imgur.com/zJDF5Sp.png",
            gol: 1
        }
    },
    {
        hafta: "Hafta 30",
        tarih: "13 Nisan 2026",
        turnuva: "Trendyol Süper Lig",
        turnuvaLogo: "assets/img/superlig.png",
        stadyum: "Papara Park",
        evSahibi: {
            isim: "Trabzonspor",
            logo: "https://i.imgur.com/zJDF5Sp.png",
            gol: 1
        },
        misafir: {
            isim: "Beşiktaş",
            logo: "https://upload.wikimedia.org/wikipedia/tr/5/57/Be%C5%9Fikta%C5%9F_JK_logosu.png",
            gol: 1
        }
    },
    {
        hafta: "Hafta 29",
        tarih: "06 Nisan 2026",
        turnuva: "Trendyol Süper Lig",
        turnuvaLogo: "assets/img/superlig.png",
        stadyum: "Rams Park",
        evSahibi: {
            isim: "Galatasaray",
            logo: "https://upload.wikimedia.org/wikipedia/tr/8/8e/Galatasaray_4_yıldız_logo.png",
            gol: 2
        },
        misafir: {
            isim: "Trabzonspor",
            logo: "https://i.imgur.com/zJDF5Sp.png",
            gol: 0
        }
    },
    {
        hafta: "Hafta 28",
        tarih: "30 Mart 2026",
        turnuva: "Trendyol Süper Lig",
        turnuvaLogo: "assets/img/superlig.png",
        stadyum: "Papara Park",
        evSahibi: {
            isim: "Trabzonspor",
            logo: "https://i.imgur.com/zJDF5Sp.png",
            gol: 3
        },
        misafir: {
            isim: "Samsunspor",
            logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/33/Samsunspor_logo.svg/800px-Samsunspor_logo.svg.png",
            gol: 1
        }
    }
];

// ----------------------------------------------------------------
// PUAN DURUMU — 2025/2026 Trendyol Süper Lig (32. Hafta sonu)
// Trabzonspor satırını "trabzonspor: true" ile işaretle
// ----------------------------------------------------------------
const puanDurumu = [
    { sira: 1,  takim: "Galatasaray",              logo: "https://upload.wikimedia.org/wikipedia/tr/8/8e/Galatasaray_4_yıldız_logo.png",  OM: 32, G: 23, B: 5,  M: 4,  Av: "+46", P: 74 },
    { sira: 2,  takim: "Fenerbahçe",               logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/a/a0/Fenerbahce_Logo.png/800px-Fenerbahce_Logo.png", OM: 32, G: 20, B: 10, M: 2,  Av: "+37", P: 70 },
    { sira: 3,  takim: "Trabzonspor",              logo: "https://i.imgur.com/zJDF5Sp.png",                                               OM: 32, G: 19, B: 9,  M: 4,  Av: "+24", P: 66, trabzonspor: true },
    { sira: 4,  takim: "Beşiktaş",                 logo: "https://upload.wikimedia.org/wikipedia/tr/5/57/Be%C5%9Fikta%C5%9F_JK_logosu.png", OM: 32, G: 17, B: 8,  M: 7,  Av: "+20", P: 59 },
    { sira: 5,  takim: "Göztepe",                  logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/5/57/Göztepe_S.K.png/800px-Göztepe_S.K.png", OM: 32, G: 13, B: 13, M: 6,  Av: "+12", P: 52 },
    { sira: 6,  takim: "Rams Başakşehir",          logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/6/6e/Istanbul_Basaksehir_FK.png/800px-Istanbul_Basaksehir_FK.png", OM: 32, G: 14, B: 9,  M: 9,  Av: "+19", P: 51 },
    { sira: 7,  takim: "Samsunspor",               logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/33/Samsunspor_logo.svg/800px-Samsunspor_logo.svg.png", OM: 32, G: 12, B: 12, M: 8,  Av: "+1",  P: 48 },
    { sira: 8,  takim: "Çaykur Rizespor",          logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/32/Çaykur_Rizespor_logo.png/800px-Çaykur_Rizespor_logo.png", OM: 32, G: 10, B: 10, M: 12, Av: "-2",  P: 40 },
    { sira: 9,  takim: "Konyaspor",                logo: "https://cdn.trabzonspor.org.tr/bd496891fc154216ac592a49056476b4.png",                  OM: 32, G: 10, B: 10, M: 12, Av: "-3",  P: 40 },
    { sira: 10, takim: "Kocaelispor",              logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/8/88/Kocaelispor_logo.png/800px-Kocaelispor_logo.png", OM: 32, G: 9,  B: 10, M: 13, Av: "-10", P: 37 },
    { sira: 11, takim: "Gaziantep FK",             logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/e/e6/Gaziantep_FK_logo.png/800px-Gaziantep_FK_logo.png", OM: 32, G: 8,  B: 12, M: 12, Av: "-8",  P: 36 },
    { sira: 12, takim: "Kasımpaşa",                logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/5/58/Kasimpasa_SK.png/800px-Kasimpasa_SK.png", OM: 32, G: 8,  B: 10, M: 14, Av: "-11", P: 34 },
    { sira: 13, takim: "Alanyaspor",               logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/5/59/Alanyaspor.png/800px-Alanyaspor.png", OM: 32, G: 8,  B: 9,  M: 15, Av: "-14", P: 33 },
    { sira: 14, takim: "Sivasspor",                logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/4/47/Sivasspor-logo.png/800px-Sivasspor-logo.png", OM: 32, G: 7,  B: 10, M: 15, Av: "-16", P: 31 },
    { sira: 15, takim: "Antalyaspor",              logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/6/66/Antalyaspor_logo.png/800px-Antalyaspor_logo.png", OM: 32, G: 7,  B: 9,  M: 16, Av: "-18", P: 30 },
    { sira: 16, takim: "Hatayspor",                logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/4/41/Hatayspor.png/800px-Hatayspor.png", OM: 32, G: 7,  B: 8,  M: 17, Av: "-19", P: 29 },
    { sira: 17, takim: "Ankaragücü",               logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/1e/MKE_Ankaragücü.png/800px-MKE_Ankaragücü.png", OM: 32, G: 6,  B: 9,  M: 17, Av: "-22", P: 27 },
    { sira: 18, takim: "Eyüpspor",                 logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0a/Eyüpspor_logo.png/800px-Eyüpspor_logo.png", OM: 32, G: 5,  B: 7,  M: 20, Av: "-28", P: 22 }
];

// ================================================================
//  RENDER FONKSİYONLARI
//  Bunlar hem mac-merkezi.html hem de fikstür/sonuç alt sayfalarında
//  çalışır. Sayfaya <script src="data.js"></script> eklersen yeterli.
// ================================================================

// ---- GERİ SAYIM YARDIMCISI ----
function buildCountdown(targetDateStr, targetTimeStr) {
    // targetDateStr: "09 Mayıs 2026", targetTimeStr: "19:00"
    const aylar = { "Ocak":0,"Şubat":1,"Mart":2,"Nisan":3,"Mayıs":4,"Haziran":5,"Temmuz":6,"Ağustos":7,"Eylül":8,"Ekim":9,"Kasım":10,"Aralık":11 };
    const parts = targetDateStr.split(" ");
    const gun = parseInt(parts[0]);
    const ay = aylar[parts[1]];
    const yil = parseInt(parts[2]);
    const [saat, dakika] = (targetTimeStr || "00:00").split(":").map(Number);
    return new Date(yil, ay, gun, saat, dakika, 0);
}

function startCountdown(targetDate, el) {
    function tick() {
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) { el.textContent = "MAÇ BAŞLADI"; clearInterval(iv); return; }
        const g = Math.floor(diff / 86400000);
        const s = Math.floor((diff % 86400000) / 3600000);
        const d = Math.floor((diff % 3600000) / 60000);
        const sn = Math.floor((diff % 60000) / 1000);
        el.innerHTML = `
            <span class="cd-num">${String(g).padStart(2,"0")}</span><span class="cd-lbl">Gün</span>
            <span class="cd-sep">:</span>
            <span class="cd-num">${String(s).padStart(2,"0")}</span><span class="cd-lbl">Sa</span>
            <span class="cd-sep">:</span>
            <span class="cd-num">${String(d).padStart(2,"0")}</span><span class="cd-lbl">Dk</span>
            <span class="cd-sep">:</span>
            <span class="cd-num">${String(sn).padStart(2,"0")}</span><span class="cd-lbl">Sn</span>`;
    }
    tick();
    const iv = setInterval(tick, 1000);
}

// ---- ORTAK MAÇ SATIRI HTML ----
function macSatiriHTML(mac, tipGecmis) {
    const detayLink = tipGecmis ? "gecmis-maclar.html" : "fikstur.html";
    let ortaHTML = "";

    if (tipGecmis) {
        const evRenk = mac.evSahibi.gol > mac.misafir.gol ? "font-weight:700;" : (mac.evSahibi.gol === mac.misafir.gol ? "font-weight:600;" : "");
        const misRenk = mac.misafir.gol > mac.evSahibi.gol ? "font-weight:700;" : (mac.misafir.gol === mac.evSahibi.gol ? "font-weight:600;" : "");
        ortaHTML = `
            <img class="mac-logo" src="${mac.evSahibi.logo}" alt="${mac.evSahibi.isim}" onerror="this.style.display='none'">
            <span class="mac-skor" style="${evRenk}">${mac.evSahibi.gol}</span>
            <span class="mac-skor-sep"> - </span>
            <span class="mac-skor" style="${misRenk}">${mac.misafir.gol}</span>
            <img class="mac-logo" src="${mac.misafir.logo}" alt="${mac.misafir.isim}" onerror="this.style.display='none'">`;
    } else {
        const saatHTML = mac.saat
            ? `<div class="cd-wrap" data-tarih="${mac.tarih}" data-saat="${mac.saat}"><span class="cd-loading">...</span></div>`
            : `<div class="mac-saat-yok">${mac.tarih}<br><small>Saat Açıklanmadı</small></div>`;
        ortaHTML = `
            <img class="mac-logo" src="${mac.evSahibi.logo}" alt="${mac.evSahibi.isim}" onerror="this.style.display='none'">
            ${saatHTML}
            <img class="mac-logo" src="${mac.misafir.logo}" alt="${mac.misafir.isim}" onerror="this.style.display='none'">`;
    }

    return `
    <a href="${detayLink}" class="mac-satiri">
        <div class="mac-sol">
            <img class="mac-turnuva-logo" src="${mac.turnuvaLogo}" alt="" onerror="this.style.display='none'">
            <div class="mac-sol-detay">
                <span class="mac-hafta">${mac.hafta}${mac.tarih && tipGecmis ? " • " + mac.tarih : ""}</span>
                <span class="mac-stadyum"><i class="fa-solid fa-location-dot"></i> ${mac.stadyum}</span>
            </div>
        </div>
        <div class="mac-orta">${ortaHTML}</div>
        <div class="mac-sag"><i class="fa-solid fa-chevron-right"></i></div>
    </a>`;
}

// ---- ÖZETSAYFASINDAKİ RENDER (İlk 2 Fikstür, İlk 5 Sonuç) ----
function renderMacMerkeziOzet() {
    // FİKSTÜR
    const fiksturBox = document.getElementById("fikstur-ozet");
    if (fiksturBox) {
        fiksturBox.innerHTML = fikstur.slice(0, 2).map(m => macSatiriHTML(m, false)).join("");
        initCountdowns(fiksturBox);
    }

    // SONUÇLAR
    const sonucBox = document.getElementById("sonuclar-ozet");
    if (sonucBox) {
        sonucBox.innerHTML = gecmisMaclar.slice(0, 5).map(m => macSatiriHTML(m, true)).join("");
    }

    // PUAN DURUMU
    const puanBox = document.getElementById("puan-durumu-ozet");
    if (puanBox) {
        renderPuanDurumu(puanBox);
    }
}

// ---- FİKSTÜR SAYFASI TAM LİSTE ----
function renderFiksturSayfasi() {
    const wrap = document.getElementById("fikstur-tam-liste");
    if (!wrap) return;
    wrap.innerHTML = fikstur.map(m => macSatiriHTML(m, false)).join("");
    initCountdowns(wrap);
}

// ---- GEÇMİŞ MAÇLAR SAYFASI TAM LİSTE ----
function renderGecmisMaclarSayfasi() {
    const wrap = document.getElementById("gecmis-maclar-tam-liste");
    if (!wrap) return;
    wrap.innerHTML = gecmisMaclar.map(m => macSatiriHTML(m, true)).join("");
}

// ---- PUAN DURUMU TABLOSU ----
function renderPuanDurumu(container) {
    if (!container) return;
    const satirlar = puanDurumu.map(t => `
        <tr class="${t.trabzonspor ? 'ts-satir' : ''}">
            <td class="pd-sira">${t.sira}</td>
            <td class="pd-takim">
                <img src="${t.logo}" alt="${t.takim}" onerror="this.style.display='none'">
                <span>${t.takim}</span>
            </td>
            <td>${t.OM}</td>
            <td>${t.G}</td>
            <td>${t.B}</td>
            <td>${t.M}</td>
            <td>${t.Av}</td>
            <td class="pd-puan">${t.P}</td>
        </tr>`).join("");

    container.innerHTML = `
        <table class="puan-tablo">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Takım</th>
                    <th>OM</th>
                    <th>G</th>
                    <th>B</th>
                    <th>M</th>
                    <th>Av</th>
                    <th>P</th>
                </tr>
            </thead>
            <tbody>${satirlar}</tbody>
        </table>`;
}

// ---- GERİ SAYIM BAŞLATICI ----
function initCountdowns(scope) {
    scope.querySelectorAll(".cd-wrap").forEach(el => {
        const tarih = el.getAttribute("data-tarih");
        const saat = el.getAttribute("data-saat");
        if (tarih && saat) {
            const target = buildCountdown(tarih, saat);
            const span = el.querySelector(".cd-loading");
            startCountdown(target, span || el);
        }
    });
}

// ---- OTOMATİK ÇALIŞTIRICI ----
// Sayfa hangisi olursa olsun doğru render çağrılır.
document.addEventListener("DOMContentLoaded", function () {
    renderMacMerkeziOzet();    // mac-merkezi.html (özet)
    renderFiksturSayfasi();    // fikstur.html
    renderGecmisMaclarSayfasi(); // gecmis-maclar.html
});
