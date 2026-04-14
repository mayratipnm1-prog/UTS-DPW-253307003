# UTS Desain & Pemrograman Web

## Identitas Mahasiswa

| Keterangan | Detail |
|------------|--------|
| **NIM**    | 253307003 |
| **Nama**   | Mayra Ruhandini |
| **Kelas**  | TI-2A |

---

## Deskripsi Project

Project ini merupakan **Portal Pendaftaran Siswa Baru (PPDB)** untuk instansi pendidikan **Sekolah Global Nusantara**, dibangun sebagai jawaban UTS mata kuliah **Desain & Pemrograman Web (TI24206)**.

Portal terdiri dari **3 halaman HTML** terpisah yang terstruktur secara modular, dilengkapi dengan styling CSS3 modern dan validasi JavaScript.

---

## Struktur Folder

```
uts-dpw-NIM/
├── asset/
│   ├── css/
│   │   └── style.css         
│   ├── img/
│   │   └── alur_pendaftaran.jpeg  
│   └── javascript/
│       └── script.js         
├── index.html                 
├── alur.html                  
├── form.html                  
└── README.md                  
```

---

## Fitur yang Diimplementasikan

### A. Struktur & HTML5 Semantik
- Tiga halaman HTML terpisah: `index.html`, `alur.html`, `form.html`
- Elemen semantik HTML5: `<header>`, `<nav>`, `<main>`, `<footer>`
- Aset dikelompokkan dalam folder `asset/`

### B. Konten Halaman
- **Beranda (index.html):** Sambutan + Tabel Jadwal PPDB dengan `<table>`, `<thead>`, `<tbody>`
- **Alur Pendaftaran (alur.html):** Gambar ilustrasi dari `asset/img/` + daftar bernomor `<ol>`
- **Formulir (form.html):** Input Nama, NIK (number), Jalur (`<select>`), tombol `type="button"`

### C. CSS3 Modern
- `linear-gradient` dua warna pada `<header>`
- **Hover Effect** `translateY` pada tombol dan link navigasi
- **Zebra striping** pada tabel
- **Glow / Box-Shadow focus state** pada input form

### D. JavaScript
- **Custom Toast Notification** akan muncul di bawah bagian tengah layar selama 3 detik kemudian fade-out
- **Validasi:** Cek field kosong dan NIK tepat 16 digit
- **Reset form** otomatis setelah pendaftaran berhasil
