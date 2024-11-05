const navbar = document.getElementById("navbar-id");
const splash = document.getElementById("splash");

window.addEventListener("scroll", scrollAnim);

window.onload = () => {
  if (window.scrollY == 0) {
    splash.classList.remove("hidden");
    setTimeout(() => {
      splash.classList.add("hidden");
    }, 2950);
  }
};

function scrollAnim() {
  navbar.classList.remove("navbar-pc");
  navbar.classList.add("navbar-animate");
  setTimeout(() => {
    navbar.classList.remove("navbar-animate");
  }, 150);
  window.removeEventListener("scroll", scrollAnim);
}

if (screen.width < 1000 || window.scrollY > 0) {
  navbar.classList.remove("navbar-pc");
  window.removeEventListener("scroll", scrollAnim);
}

// Translate button

const translateButton = document.getElementsByClassName("translate");

let translate = false;

const html = {
  about1: document.getElementById("about-1"),
  about2: document.getElementById("about-2"),
  potensi: document.getElementById("p-potensi"),
  h2about: document.getElementById("h2-about"),
  h2potensi: document.getElementById("h2-potensi"),
  h2lokasi: document.getElementById("h2-lokasi"),
};

const content = {
  about1ID:
    "Desa Demakan adalah sebuah desa yang terletak di Kecamatan Mojolaban, Kabupaten Sukoharjo, Jawa Tengah. Secara administratif Desa Demakan berbatasan dengan 7 desa. Di sisi utara, Demakan berbatasan dengan Desa Palur dan Dukuh. Di sisi selatan, Demakan berbatasan dengan Desa Bekonang, Cangkol, dan Klumprit.",
  about1EN:
    "Demakan Village is a village located in Mojolaban Subdistrict, Sukoharjo Regency, Middle Java. Administratively Demakan Village borders 7 other villages. On the north side, Demakan borders Palur and Dukuh Village. On the south side, Demakan borders Bekonang, Cangkol, and Klumprit Village.",
  about2ID:
    "Sedangkan di sisi timur, Desa Demakan berbatasan dengan Desa Joho dan di sisi barat dengan Desa Wirun. Desa Demakan memiliki luas 236,151 hektar dengan jumlah penduduk mencapai 5431 jiwa dan 1460 Kartu Keluarga. Desa Demakan sendiri terdiri dari 10 Rukun Warga atau RW dan 34 Rukun Tetangga atau RT.",
  about2EN:
    "Meanwhile on the east side, Demakan borders Joho Village and on the west side Demakan borders Wirun Village. Demakan is 236,151 hectares in size with 5431 people living in it, or 1460 families. Demakan consists of 10 citizen associations and 34 neighborhoods.",
  potensiID:
    "Desa Demakan memiliki wisata religi yang cukup terkenal dan sering dikunjungi wisatawan dari luar Sukoharjo, yakni 7 sendang pancuran. Sendang Pancuran konon dulunya adalah rawa-rawa yang kemudian ditemukan 7 mata air. Mata air tersebut yang kemudian menjadi Sendang Dewi Kunti, Sendang Kamulyanan, Sendang Tolakbala, Sendang Segerwaras, Sendang Putriayu, Sendang Pengantin Kakung, dan Sendang Putri. Sendang-sendang tersebut berdasarkan kepercayaan setempat memiliki khasiatnya masing-masing, misalnya Sendang Pengantin yang dipercaya bisa mempermudah mendapat jodoh.",
  potensiEN:
    "Demakan has a popular religious destination which is the 7 water springs Pancuran. Pancuran is believed to be a swamp at some point in which was found 7 water springs, which are Dewi Kunti Spring, Kamulyanan Spring, Tolakbala Spring, Segerwaras Spring, Putriayu Spring, Pengantin Kakung Spring, and Putri Spring. These water springs according to the local belief has different befenits. Each spring differs in benefit to the other springs. For example, Pengantin Spring is believed to ease you up in finding the love of your life (Pengantin in Indonesian means Bride and Groom).",
  h2aboutID: "Sedikit tentang Demakan",
  h2aboutEN: "A little bit about Demakan",
  h2potensiID: "Potensi Demakan",
  h2potensiEN: "Demakan's Potential",
  h2lokasiID: "Lokasi",
  h2lokasiEN: "Location",
};

function translateWeb() {
  if (!translate) {
    for (const item of Object.keys(html)) {
      html[item].textContent = content[`${item}` + "EN"];
    }
    translate = true;
  } else {
    for (const item of Object.keys(html)) {
      html[item].textContent = content[`${item}` + "ID"];
    }
    translate = false;
  }
}

translateButton[0].addEventListener("click", translateWeb);
