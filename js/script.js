document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil nilai input
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    // Validasi dasar
    if (!nama || !email || !phone || !pesan) {
        alert("Semua field harus diisi!");
        return;
    }

    // Validasi email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Format email tidak valid!");
        return;
    }

    // Validasi nomor HP
    const phonePattern = /^[0-9]{10,13}$/;
    if (!phone.match(phonePattern)) {
        alert("Nomor HP harus berupa angka 10-13 digit!");
        return;
    }

    // Validasi sederhana
  if (!nama || !tanggalLahir || !gender || !pesan) {
    alert("Semua field harus diisi!");
    return;
  }

  // Waktu saat ini
  const now = new Date();
  const currentTime = now.toString();

  // Tampilkan hasil di outputBox
  document.getElementById("currentTime").textContent = currentTime;
  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTanggal").textContent = tanggalLahir;
  document.getElementById("outGender").textContent = gender;
  document.getElementById("outPesan").textContent = pesan;

    // Reset form
    document.getElementById('messageForm').reset();