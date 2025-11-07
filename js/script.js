document.getElementById("messageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil nilai dari form
  const nama = document.getElementById("nama").value.trim();
  const tanggalLahir = document.getElementById("tanggalLahir").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const pesan = document.getElementById("pesan").value.trim();

  // Validasi sederhana
  if (!nama || !tanggalLahir || !gender || !pesan) {
    alert("Semua field harus diisi!");
    return;
  }

  // Ambil waktu saat ini
  const now = new Date();
  const currentTime = now.toString();

  // Tampilkan hasil
  document.getElementById("currentTime").textContent = currentTime;
  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTanggal").textContent = tanggalLahir;
  document.getElementById("outGender").textContent = gender;
  document.getElementById("outPesan").textContent = pesan;

  // Ubah teks selamat datang di home
  document.getElementById("welcomeText").textContent = `Hi ${nama}, Welcome To Our Company Website`;

  // Reset form setelah submit
  document.getElementById("messageForm").reset();
});
