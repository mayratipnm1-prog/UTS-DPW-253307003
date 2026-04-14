function validasiForm() {
    let nama = document.getElementById("nama").value;
    let nik = document.getElementById("nik").value;
    let jalur = document.getElementById("jalur").value;

    if (nama.trim() === "" || nik.trim() === "" || jalur === "") {
        tampilkanToast("Semua kolom formulir wajib diisi!", "error");
    } 
    else if (nik.length !== 16) {
        tampilkanToast("NIK gagal disimpan. Wajib diisi tepat 16 digit angka!", "error");
    } 
    else {
        tampilkanToast("Pendaftaran berhasil dikirim!", "success");
        document.getElementById("ppdbForm").reset();
    }
}

function tampilkanToast(pesan, tipe) {
    let toastElement = document.getElementById("toast");
    
    toastElement.textContent = pesan;
    
    toastElement.className = "toast show " + tipe;

    setTimeout(function() {
        toastElement.className = toastElement.className.replace("show", "");
    }, 3000);
}