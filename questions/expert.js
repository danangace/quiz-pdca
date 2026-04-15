window.EXPERT_QUESTIONS = [
  {
    "type": "single",
    "q": "<strong>📊 Skenario PCE:</strong><br>Proses pengajuan kredit: Verifikasi dokumen 45 menit (VA), Analisis kelayakan 90 menit (VA), Menunggu approval atasan 480 menit (NVA), Pencatatan ke sistem 30 menit (VE), Menunggu dokumen dari nasabah 240 menit (NVA).<br><br>Berapa PCE dan statusnya vs World Class Business Processes (Transactional)?",
    "opts": [
      "PCE=15.3% — sudah di atas Typical (10%)",
      "PCE=21.7% — di atas Typical (10%) tapi belum World Class (50%)",
      "PCE=30.5% — sudah World Class",
      "PCE=46.2% — mendekati World Class"
    ],
    "a": "Qg==",
    "cat": "PCE Calculation"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Pareto:</strong><br>Data komplain Cabang Sejahtera 3 bulan:<br><div class='sbox'><table><tr><th>Kategori</th><th>Frekuensi</th></tr><tr><td>Antrean teller terlalu panjang</td><td>310</td></tr><tr><td>ATM sering offline</td><td>245</td></tr><tr><td>CS kurang responsif</td><td>48</td></tr><tr><td>Salah informasi produk</td><td>22</td></tr><tr><td>Lain-lain</td><td>15</td></tr></table></div>Berdasarkan prinsip Pareto 80/20, fokus improvement yang paling tepat adalah...",
    "opts": [
      "Menyelesaikan semua 5 kategori sekaligus",
      "Fokus pada 'CS kurang responsif' karena paling mudah",
      "Fokus pada 'Antrean teller' dan 'ATM offline' — keduanya ~86% total komplain",
      "Fokus pada 'Lain-lain' karena belum terdefinisi"
    ],
    "a": "Qw==",
    "cat": "Pareto Analysis"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Check Sheet & Pareto:</strong><br>Data error input nasabah selama 4 minggu:<br><div class='sbox'><table><tr><th>Tipe Error</th><th>W1</th><th>W2</th><th>W3</th><th>W4</th><th>Total</th></tr><tr><td>Salah nama</td><td>3</td><td>2</td><td>4</td><td>3</td><td>12</td></tr><tr><td>Salah nomor rekening</td><td>8</td><td>11</td><td>9</td><td>12</td><td>40</td></tr><tr><td>Salah tanggal lahir</td><td>1</td><td>2</td><td>1</td><td>1</td><td>5</td></tr><tr><td>Salah alamat</td><td>2</td><td>1</td><td>2</td><td>0</td><td>5</td></tr></table></div>Kategori paling dominan dalam Pareto Chart dari data ini adalah...",
    "opts": [
      "Salah nama (frekuensi 12)",
      "Salah nomor rekening (frekuensi 40)",
      "Salah tanggal lahir (frekuensi 5)",
      "Salah alamat (frekuensi 5)"
    ],
    "a": "Qg==",
    "cat": "Check Sheet & Pareto"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Histogram:</strong><br>Data waktu tunggu nasabah (menit) di loket CS selama 1 bulan:<br><div class='sbox mono'>1–5 menit&nbsp;&nbsp;: ██████████████ (14 nasabah)<br>6–10 menit : ████████████████████ (20 nasabah)<br>11–15 menit: ██████████████████████████ (26 nasabah)<br>16–20 menit: █████████████████████████████ (29 nasabah)<br>21–25 menit: ████████████████ (16 nasabah)<br>26–30 menit: ████████ (8 nasabah)<br>31+ menit&nbsp;&nbsp;: ████ (4 nasabah)</div>Bentuk distribusi histogram ini paling tepat digambarkan sebagai...",
    "opts": [
      "Distribusi Normal (simetris, lonceng)",
      "Distribusi Bimodal (dua puncak)",
      "Distribusi Condong Kiri (Skewed Left)",
      "Distribusi Condong Kanan (Skewed Right) — ekor lebih panjang ke kanan"
    ],
    "a": "RA==",
    "cat": "Histogram Interpretation"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario PLT & PCE:</strong><br>Proses pembukaan rekening di Cabang Nusa:<br><div class='sbox'>• Nasabah mengisi formulir: 15 menit (VA)<br>• CS verifikasi identitas: 10 menit (VA)<br>• Menunggu sistem online: 25 menit (NVA)<br>• Input data ke core banking: 8 menit (VE)<br>• Menunggu approval supervisor: 30 menit (NVA)<br>• Cetak kartu &amp; serahkan ke nasabah: 5 menit (VA)</div>Berapa PLT dan PCE proses ini?",
    "opts": [
      "PLT=93 menit, PCE=32.3%",
      "PLT=93 menit, PCE=16.1%",
      "PLT=68 menit, PCE=44.1%",
      "PLT=93 menit, PCE=8.6%"
    ],
    "a": "QQ==",
    "cat": "PCE Calculation"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Stratifikasi:</strong><br>Total komplain ATM Wilayah Barat = 1.200 kasus/bulan. Setelah stratifikasi:<br><div class='sbox'><table><tr><th>Tipe ATM</th><th>Komplain/bulan</th></tr><tr><td>ATM Dalam Gedung</td><td>180</td></tr><tr><td>ATM Drive-Thru</td><td>85</td></tr><tr><td>ATM Outdoor Stand-alone</td><td>935</td></tr></table></div>Insight utama dan tindakan yang tepat adalah...",
    "opts": [
      "Semua tipe ATM perlu perbaikan merata",
      "ATM Outdoor Stand-alone prioritas utama (~78% komplain) — investigasi faktor spesifik tipe ini",
      "ATM Drive-Thru paling aman, jadikan standar",
      "Data tidak cukup untuk menentukan prioritas"
    ],
    "a": "Qg==",
    "cat": "Stratifikasi"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Control Chart:</strong><br><div class='sbox mono'>UCL = 15 menit | CL = 8 menit | LCL = 1 menit<br>Data harian: 7, 9, 8, 6, 10, 8, 7, <span style='color:#C0392B;font-weight:bold'>18</span>, 9, 8, 7, 6, 9, 8</div>Kesimpulan yang paling tepat adalah...",
    "opts": [
      "Semua titik dalam kondisi terkendali, proses normal",
      "Ada 1 titik (hari ke-8 = 18 menit) di atas UCL — kondisi tidak terkendali, perlu investigasi penyebab khusus",
      "Proses tidak stabil karena nilai bervariasi setiap hari",
      "LCL terlalu rendah, perlu disesuaikan"
    ],
    "a": "Qg==",
    "cat": "Control Chart"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Before-After:</strong><br><div class='sbox'><table><tr><th>Metrik</th><th>Before</th><th>After</th></tr><tr><td>Waktu rata-rata proses</td><td>45 menit</td><td>28 menit</td></tr><tr><td>Tingkat error dokumen</td><td>12%</td><td>3%</td></tr><tr><td>Kepuasan nasabah</td><td>72%</td><td>89%</td></tr></table></div>Berapa persen peningkatan kecepatan proses?",
    "opts": [
      "17 menit lebih cepat (absolut)",
      "37.8% lebih cepat",
      "62.2% lebih cepat",
      "17% lebih cepat"
    ],
    "a": "Qg==",
    "cat": "Evaluasi Improvement"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Korelasi Pearson:</strong><br>Tim HR menganalisis hubungan jumlah hari absensi karyawan (X) dan error transaksi per bulan (Y). Hasil korelasi Pearson = <strong>+0.71</strong>. Pernyataan mana yang PALING TEPAT?",
    "opts": [
      "Tidak ada hubungan bermakna antara absensi dan error",
      "Ada korelasi negatif kuat — semakin banyak absensi semakin sedikit error",
      "Ada korelasi positif practically significant — absensi tinggi cenderung berkaitan dengan error lebih banyak, layak diinvestigasi",
      "Korelasi 0.71 terlalu lemah untuk dijadikan dasar analisis"
    ],
    "a": "Qw==",
    "cat": "Scatter Diagram"
  },
  {
    "type": "single",
    "q": "<strong>📊 Skenario Scatter Data:</strong><br><div class='sbox'><table><tr><th>Cabang</th><th>Jumlah Training (X)</th><th>Skor Kepuasan (Y)</th></tr><tr><td>A</td><td>2</td><td>62</td></tr><tr><td>B</td><td>4</td><td>70</td></tr><tr><td>C</td><td>6</td><td>78</td></tr><tr><td>D</td><td>8</td><td>85</td></tr><tr><td>E</td><td>10</td><td>91</td></tr><tr><td>F</td><td>3</td><td>65</td></tr></table></div>Kesimpulan paling tepat dari data ini adalah...",
    "opts": [
      "Tidak ada hubungan antara training dan kepuasan",
      "Ada korelasi negatif — semakin banyak training, skor turun",
      "Ada korelasi positif kuat practically significant — semakin banyak training, skor cenderung naik",
      "Data tidak cukup untuk membuat kesimpulan"
    ],
    "a": "Qw==",
    "cat": "Scatter Diagram"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario Identifikasi Waste:</strong><br>Seorang Teller di Cabang Indah harus berjalan ke lemari arsip di pojok ruangan (±5 langkah) untuk mengambil formulir setiap kali melayani nasabah, lalu kembali ke meja. Dilakukan rata-rata 30 kali per hari. Tipe waste apa yang paling dominan?",
    "opts": [
      "Defect — formulir sering salah diisi",
      "Inventory — terlalu banyak formulir tersimpan",
      "Motion — pergerakan Teller berulang yang tidak menambah nilai",
      "Transportation — perpindahan dokumen dari satu lokasi ke lain"
    ],
    "a": "Qw==",
    "cat": "Identifikasi Waste"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario Over-Production &amp; SCAMPER:</strong><br>Di Unit Kredit Cabang Merdeka, setiap pengajuan kredit melalui review: Analis → Team Leader → Section Head → Dept Head → Direktur. Dari data 3 bulan, 94% pengajuan disetujui tanpa perubahan oleh Dept Head dan Direktur. Waste apa yang terjadi dan solusi SCAMPER yang tepat?",
    "opts": [
      "Waste: Defect. Solusi: Substitute — ganti analis dengan sistem otomatis",
      "Waste: Over-Production. Solusi: Eliminate — hilangkan review Dept Head &amp; Direktur untuk 94% kasus standar",
      "Waste: Waiting. Solusi: Combine — gabungkan semua reviewer dalam satu rapat",
      "Waste: Motion. Solusi: Modify — ubah format formulir pengajuan"
    ],
    "a": "Qg==",
    "cat": "Waste & SCAMPER"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario Swimlane OFI:</strong><br>Proses pembayaran vendor: Staff Admin: Terima invoice (5 VA) → Input sistem (15 VE) → Tunggu batch harian (480 NVA). Supervisor: Review (20 VA) → Tunggu tumpukan 10 invoice (360 NVA). Finance: Proses pembayaran (30 VA) → Kirim konfirmasi (5 VE). OFI mana yang jika dihilangkan memberi dampak TERBESAR pada PLT?",
    "opts": [
      "Menghilangkan 'Input ke sistem' (15 menit VE)",
      "Menghilangkan 'Tunggu batch harian' (480 menit NVA)",
      "Mempercepat 'Review' Supervisor menjadi 10 menit",
      "Menggabungkan tugas Staff Admin dan Finance"
    ],
    "a": "Qg==",
    "cat": "Process Mapping OFI"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario VA/VE/NVA:</strong><br>Aktivitas dalam proses pengiriman kartu debit:<br><div class='sbox'>(1) Embossing nama di kartu debit<br>(2) Menunggu tumpukan 50 kartu sebelum dikemas<br>(3) Pencatatan nomor kartu ke database keamanan<br>(4) Pengiriman kartu ke alamat nasabah<br>(5) Pengecekan duplikat data karena system error sebelumnya</div>Klasifikasi paling tepat adalah...",
    "opts": [
      "(1)=VA, (2)=VE, (3)=NVA, (4)=VA, (5)=NVA",
      "(1)=VA, (2)=NVA, (3)=VE, (4)=VA, (5)=NVA",
      "(1)=VA, (2)=VE, (3)=VA, (4)=NVA, (5)=VE",
      "(1)=NVA, (2)=NVA, (3)=VA, (4)=VA, (5)=VE"
    ],
    "a": "Qg==",
    "cat": "VA/VE/NVA"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario Five Why:</strong><br>Nasabah mengeluhkan saldo berkurang tanpa sepengetahuannya. Five Why: Y → #1: Ada biaya admin terpotong otomatis → #2: Nasabah tidak tahu ketentuan biaya admin → #3: CS tidak menjelaskan ketentuan saat pembukaan rekening → #4: ?<br><br>Lanjutan #4 Why yang paling logis dan dalam scope tim adalah...",
    "opts": [
      "Karena nasabah tidak membaca buku panduan",
      "Karena tidak ada SOP atau checklist wajib yang memastikan CS menjelaskan seluruh ketentuan produk saat pembukaan rekening",
      "Karena regulasi OJK tidak mewajibkan penjelasan biaya",
      "Karena nasabah memilih produk yang salah"
    ],
    "a": "Qg==",
    "cat": "Five Why Analysis"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario Fishbone C/N/RC:</strong><br>Masalah: 'Tingginya error transaksi transfer antar bank.' Faktor yang muncul:<br><div class='sbox'>(A) Koneksi internet kadang tidak stabil<br>(B) Teller belum hafal kode bank tujuan<br>(C) Sistem core banking bank lain sering down<br>(D) Nasabah memberikan nomor rekening tujuan yang salah<br>(E) Tidak ada fitur auto-check validasi nomor rekening tujuan</div>Faktor mana yang paling tepat dikategorikan sebagai Noise (N)?",
    "opts": [
      "Faktor (B) — Teller belum hafal kode bank",
      "Faktor (E) — Tidak ada fitur auto-check",
      "Faktor (C) dan (D) — Sistem bank lain down dan nomor rekening salah dari nasabah",
      "Faktor (A) — Koneksi internet tidak stabil"
    ],
    "a": "Qw==",
    "cat": "Fishbone C/N/RC"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario Voice of X:</strong><br>Branch Manager menerima input: (P) Nasabah: 'Saya sering menunggu lama saat ganti PIN' — (Q) KPI dari Kanwil: 'CIN individu harus 100% di Q3' — (R) Survei karyawan: 'Kami butuh pelatihan produk lebih sering' — (S) Data sistem: 'PCE proses pembukaan rekening hanya 18%'. Identifikasi (P),(Q),(R),(S) secara berurutan...",
    "opts": [
      "VoC, VoB, VoE, VoP",
      "VoE, VoC, VoB, VoP",
      "VoC, VoP, VoE, VoB",
      "VoP, VoB, VoC, VoE"
    ],
    "a": "QQ==",
    "cat": "Voice of X"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario SMART Target:</strong><br>Tim menetapkan goal statement. Manakah yang paling memenuhi kriteria SMART?",
    "opts": [
      "Meningkatkan kualitas pelayanan nasabah di seluruh cabang",
      "Mengurangi waktu tunggu nasabah di loket teller Cabang Sejahtera dari rata-rata 23 menit menjadi maksimal 10 menit pada 31 Maret 2025",
      "Mempercepat proses dengan cara melatih lebih banyak teller",
      "Mencapai kepuasan nasabah yang lebih baik dalam waktu dekat"
    ],
    "a": "Qg==",
    "cat": "SMART Target"
  },
  {
    "type": "single",
    "q": "<strong>🏢 Skenario Metodologi:</strong><br>Cabang Kartika ingin merancang ulang pengalaman membuka rekening pertama kali. Fokus pada kebutuhan dan emosi nasabah (human-centered), bukan hanya efisiensi. Solusi belum diketahui. Proses sudah ada. Metodologi mana yang paling tepat?",
    "opts": [
      "Lean Six Sigma — karena proses sudah ada",
      "PDCA — karena solusi belum diketahui",
      "Design Thinking — fokus pada kebutuhan pengguna (human-centered)",
      "Agile/Scrum — karena butuh iterasi cepat"
    ],
    "a": "Qw==",
    "cat": "Metodologi"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Judul Project:</strong><br>4 pilihan judul project:<br><div class='sbox'>(A) 'Strategi dan Upaya Peningkatan Kepuasan Nasabah 2025'<br>(B) 'Mempercepat Proses Pembukaan Rekening Giro di Cabang Griya'<br>(C) 'Memasang Sistem Antrian Digital untuk Mengurangi Waktu Tunggu'<br>(D) 'Mengurangi Waktu Tunggu Nasabah di Loket CS Cabang Griya'</div>Judul mana yang PALING memenuhi 7 kriteria?",
    "opts": [
      "Judul (A) — mencakup semua aspek kepuasan",
      "Judul (B) — spesifik pada satu proses",
      "Judul (C) — langsung menyebutkan solusinya (tidak memenuhi)",
      "Judul (D) — spesifik, tunggal, kata kerja positif, bukan solusi, dapat dikendalikan tim"
    ],
    "a": "RA==",
    "cat": "Judul Project"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Benefit-Effort Matrix:</strong><br><div class='sbox'><table><tr><th>Solusi</th><th>Effort (10=mudah)</th><th>Benefit (10=besar)</th></tr><tr><td>Tambah 1 teller baru</td><td>3</td><td>6</td></tr><tr><td>Pasang antrian digital</td><td>5</td><td>8</td></tr><tr><td>Alihkan ke mobile banking</td><td>8</td><td>9</td></tr><tr><td>Optimalkan jam operasional</td><td>9</td><td>7</td></tr></table></div>Solusi mana yang berada di kuadran HIGH BENEFIT – HIGH EFFORT (perlu pertimbangan matang)?",
    "opts": [
      "Tambah 1 teller baru",
      "Pasang antrian digital",
      "Alihkan ke mobile banking",
      "Optimalkan jam operasional"
    ],
    "a": "Qw==",
    "cat": "Benefit-Effort Matrix"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Hard vs Soft Benefit:</strong><br>Tim berhasil mengurangi waktu proses KYC dari 45 menit menjadi 20 menit. Kapasitas melayani nasabah per hari meningkat dari 32 menjadi 50 nasabah. Rata-rata saldo pembukaan rekening = Rp 2 juta. Manakah yang paling tepat dikategorikan sebagai Hard Benefit?",
    "opts": [
      "Peningkatan kepuasan nasabah karena proses lebih cepat",
      "Potensi peningkatan brand awareness cabang",
      "Potensi tambahan CASA sebesar (50-32) × Rp 2 juta = Rp 36 juta/hari",
      "Karyawan merasa lebih puas dengan proses baru"
    ],
    "a": "Qw==",
    "cat": "Hard vs Soft Benefit"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Project Scope:</strong><br>Project Charter 'Mengurangi komplain transfer di Cabang Timur': Process Start: Nasabah serahkan slip ke teller. Process End: Nasabah terima bukti transfer. In Scope: Proses transfer di loket teller, Cabang Timur. Out Scope: Transfer via ATM, Mobile Banking, Cabang lain. Apakah scope ini sudah tepat?",
    "opts": [
      "Belum tepat — seharusnya mencakup seluruh cabang",
      "Sudah tepat — scope jelas mencegah scope creep dan menjaga fokus tim",
      "Tidak perlu out scope — cukup in scope",
      "Scope terlalu sempit — masukkan juga ATM dan Mobile Banking"
    ],
    "a": "Qg==",
    "cat": "Project Scope"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Baseline &amp; Target:</strong><br><div class='sbox'>• Rata-rata waktu respon email 3 bulan terakhir: 52 jam<br>• SLA yang ditetapkan: 24 jam<br>• Terbaik yang pernah dicapai: 18 jam<br>• Target Kanwil tahun ini: rata-rata ≤ 20 jam</div>Baseline dan Target yang paling tepat untuk Project Charter adalah...",
    "opts": [
      "Baseline: 24 jam (SLA), Target: 0 jam",
      "Baseline: 52 jam (kondisi aktual), Target: ≤20 jam (target Kanwil) dalam 3 bulan",
      "Baseline: 18 jam (terbaik pernah dicapai), Target: 10 jam",
      "Baseline: rata-rata industri, Target: 52 jam"
    ],
    "a": "Qg==",
    "cat": "Baseline & Target"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Translasi VoX:</strong><br>Voice of Employee: 'Kami kesulitan mencari arsip dokumen nasabah lama karena sistem pengarsipan tidak teratur.' Mana yang paling tepat sebagai Critical X's Requirement?",
    "opts": [
      "Karyawan harus lebih rajin mengarsipkan dokumen",
      "Sistem pengarsipan harus diperbaiki secepatnya",
      "Dokumen nasabah harus dapat ditemukan dalam waktu maksimal 2 menit menggunakan sistem indexing digital",
      "Perlu membeli lemari arsip baru untuk setiap unit"
    ],
    "a": "Qw==",
    "cat": "Translasi VoX"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario 5W2H Tidak Lengkap:</strong><br>Solution plan: 'Membuat SOP baru proses pembukaan rekening — untuk mempercepat proses — di Cabang Maju — mulai 1 Februari 2025 — oleh tim CS bersama Supervisor — dengan cara mereview proses saat ini lalu mendokumentasikan langkah optimal.' Komponen 5W2H yang BELUM disebutkan adalah...",
    "opts": [
      "WHAT dan WHY",
      "WHERE dan WHEN",
      "HOW MUCH (estimasi biaya/sumber daya)",
      "WHO dan HOW"
    ],
    "a": "Qw==",
    "cat": "5W2H"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Standardisasi Gagal:</strong><br>Setelah improvement berhasil menurunkan error dari 8% ke 1.5%, tim membuat SOP baru. 3 bulan kemudian error naik ke 6% karena 4 teller baru tidak tahu prosedur baru. Apa yang SEHARUSNYA dilakukan tim di Step 7?",
    "opts": [
      "Cukup simpan SOP di lemari arsip agar bisa dirujuk kapan saja",
      "Buat SOP, sosialisasikan ke semua staff termasuk karyawan baru, tetapkan mekanisme monitoring rutin dan onboarding wajib untuk teller baru",
      "Berikan sanksi kepada teller yang melakukan error",
      "Ulangi project improvement dari awal"
    ],
    "a": "Qg==",
    "cat": "Standardisasi"
  },
  {
    "type": "single",
    "q": "<strong>📋 Skenario Step 8 — Pareto Lanjutan:</strong><br>Pareto Before: A=45%, B=25%, C=15%, D=10%, E=5%. Setelah improvement fokus pada A: B=38%, C=28%, A=15%, D=12%, E=7%. Apa yang tepat dilakukan pada Step 8?",
    "opts": [
      "Lanjutkan perbaikan Kategori A karena masih ada 15%",
      "Fokus project selanjutnya pada Kategori B (38%) sebagai dominan baru, sambil monitor Kategori A",
      "Hentikan semua improvement karena Kategori A sudah berkurang",
      "Perbaiki semua kategori secara bersamaan"
    ],
    "a": "Qg==",
    "cat": "Step 8"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Analisis Integrasi — Flowchart Step 3:</strong><br>Tim melakukan Process Mapping (PCE=12%) DAN brainstorming Fishbone (6 faktor Controllable, 3 Noise). Berdasarkan Flowchart Step 3 PDCA, pendekatan apa yang digunakan?",
    "opts": [
      "Non-Process Approach — langsung Five Why pada 6 faktor Controllable",
      "Process-Centric Approach — hanya Five Why pada OFI dari process mapping",
      "Hybrid Approach — ada faktor dari aspek proses (PCE) DAN non-proses (Fishbone), lakukan Five Why pada semua faktor Controllable dari kedua sumber",
      "Tidak perlu Five Why karena sudah ada PCE"
    ],
    "a": "Qw==",
    "cat": "Step 3 Flowchart"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Analisis Urutan PDCA:</strong><br>Temukan urutan langkah yang SALAH:<br><div class='sbox'>Tim A: Menentukan Masalah → Menetapkan Baseline → Membuat Rencana Perbaikan → <strong>Analisis Akar Penyebab</strong> → Implementasi → Evaluasi → Standardisasi → Next Improvement</div>",
    "opts": [
      "Urutan sudah benar",
      "Analisis Akar Penyebab seharusnya SEBELUM Membuat Rencana Perbaikan, bukan sesudahnya",
      "Standardisasi seharusnya dilakukan sebelum Evaluasi",
      "Baseline seharusnya ditetapkan setelah Implementasi"
    ],
    "a": "Qg==",
    "cat": "Delapan Langkah PDCA"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Translasi VoX ke Requirement:</strong><br>VoC: 'Saya ingin proses kredit yang tidak berbelit.' Key Issue: 'Proses persetujuan kredit konsumtif butuh terlalu banyak dokumen.' Mana yang paling tepat sebagai Critical X's Requirement?",
    "opts": [
      "Proses kredit harus lebih sederhana dan tidak membingungkan nasabah",
      "Staff harus lebih ramah dalam menjelaskan persyaratan kredit",
      "Jumlah dokumen wajib untuk kredit konsumtif maksimal 5 jenis, dapat dikumpulkan dalam 1 kunjungan",
      "Proses kredit harus menggunakan sistem digital"
    ],
    "a": "Qw==",
    "cat": "Translasi VoX"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Multi-Waste Identification:</strong><br>Di Cabang Permata, nasabah komplain harus: (1) isi formulir fisik → (2) serahkan ke resepsionis → (3) resepsionis catat ke buku register manual → (4) teruskan ke CS → (5) CS masukkan data dari buku register ke sistem komputer. Identifikasi MINIMAL 2 tipe waste yang terjadi bersamaan:",
    "opts": [
      "Defect dan Waiting saja",
      "Transportation (formulir fisik berpindah-pindah) dan Extra-Processing (data dicatat dua kali: buku register + sistem)",
      "Inventory dan Non-utilized Talent saja",
      "Motion dan Over-Production saja"
    ],
    "a": "Qg==",
    "cat": "Multi-Waste"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Analisis Stratifikasi Shift:</strong><br>Error transaksi Wilayah Selatan = 800 kasus/bulan. Stratifikasi berdasarkan shift: Pagi=190, Siang=165, Malam=445 kasus. Insight terpenting dan tindakan yang tepat adalah...",
    "opts": [
      "Semua shift punya masalah, perbaikan merata",
      "Shift Malam menyumbang 55.6% error — fokus investigasi: faktor kelelahan, kurangnya supervisi, atau perbedaan SOP shift malam",
      "Shift Pagi paling aman, jadikan standar untuk semua shift",
      "Data ini tidak bisa dijadikan dasar keputusan"
    ],
    "a": "Qg==",
    "cat": "Stratifikasi"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Analisis VE vs NVA:</strong><br>'Supervisor melakukan review ulang semua transaksi teller di atas Rp 50 juta sebelum diproses — sesuai dengan regulasi Bank Indonesia.' Klasifikasi yang paling tepat adalah...",
    "opts": [
      "VA — nasabah mau membayar untuk keamanan transaksi",
      "NVA — harus segera dihilangkan untuk mempercepat proses",
      "VE — tidak mengubah nilai transaksi, tapi tidak bisa dihilangkan saat ini karena kewajiban regulasi",
      "VA — mengubah status transaksi dari belum disetujui menjadi disetujui"
    ],
    "a": "Qw==",
    "cat": "VA/VE/NVA"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Analisis Histogram Bimodal:</strong><br>Skor kepuasan nasabah setelah implementasi SOP baru menunjukkan histogram Bimodal: Puncak 1 di skor 40–50, Puncak 2 di skor 80–90. Interpretasi dan tindakan paling tepat adalah...",
    "opts": [
      "Proses sudah membaik — dua puncak berarti dua kelompok yang puas",
      "Data ini tidak valid karena seharusnya distribusi normal",
      "Kemungkinan ada dua kelompok nasabah dengan pengalaman berbeda (misal: staff terlatih vs belum). Lakukan stratifikasi untuk mengidentifikasi perbedaan",
      "Tingkatkan target kepuasan karena ada nasabah yang sangat puas"
    ],
    "a": "Qw==",
    "cat": "Histogram"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Validasi Five Why:</strong><br><div class='sbox'>Y: Error laporan harian teller meningkat<br>#1: Banyak kolom laporan diisi manual<br>#2: Belum ada template laporan otomatis<br>#3: Tim IT belum membuat template<br>#4 (RC): Tidak ada permintaan resmi dari manajemen cabang ke tim IT</div>Apakah Five Why ini sudah valid?",
    "opts": [
      "Tidak valid — harus sampai 5 level why",
      "Valid — RC dalam scope yang dapat dikendalikan (manajemen cabang bisa membuat permintaan), ada chain of events logis, dan jika RC diselesaikan maka masalah Y akan teratasi",
      "Tidak valid — RC menyebut tim IT yang berarti di luar kontrol cabang",
      "Valid, tapi perlu 1 why lagi untuk lebih detail"
    ],
    "a": "Qg==",
    "cat": "Five Why Validation"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Skenario Evaluasi Piloting:</strong><br><div class='sbox'><table><tr><th>Metrik</th><th>Target</th><th>Cabang A</th><th>Cabang B</th></tr><tr><td>Waktu proses</td><td>≤15 menit</td><td>13 menit ✓</td><td>22 menit ✗</td></tr><tr><td>Error rate</td><td>≤2%</td><td>1.5% ✓</td><td>1.8% ✓</td></tr></table></div>Tindakan yang paling tepat adalah...",
    "opts": [
      "Langsung rollout ke semua cabang karena Cabang A berhasil",
      "Hentikan project karena Cabang B gagal target waktu",
      "Investigasi mengapa Cabang B belum mencapai target waktu — identifikasi gap, revisi jika perlu, baru rollout ke seluruh cabang",
      "Ubah target menjadi ≤22 menit agar semua cabang memenuhi"
    ],
    "a": "Qw==",
    "cat": "Evaluasi Piloting"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Skenario Prioritas Solusi:</strong><br><div class='sbox'>RC-1: Tidak ada SOP peak hour (mudah dibuat, dampak langsung — quick win)<br>RC-2: Sistem core banking lambat saat jam sibuk (upgrade server, mahal, dampak besar)<br>RC-3: Teller belum terlatih cross-selling (perlu training, dampak menengah)</div>Menggunakan Benefit-Effort Matrix, urutan prioritas yang paling logis adalah...",
    "opts": [
      "RC-2 dulu karena dampaknya paling besar",
      "RC-1 dulu (high benefit, low effort = quick win), lalu RC-3, lalu RC-2 direncanakan jangka panjang",
      "RC-3 dulu karena paling mudah",
      "Ketiganya dikerjakan bersamaan"
    ],
    "a": "Qg==",
    "cat": "Solution Prioritization"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Swimlane PLT Lengkap:</strong><br>Proses penanganan komplain — Nasabah isi formulir (10 VA). CS: terima &amp; verifikasi (5 VA), catat ke buku register (8 NVA), tunggu batch 5 komplain (120 NVA), input sistem (10 VE). Supervisor: review semua komplain (20 VA), tunggu laporan harian (480 NVA). CS: hubungi nasabah (15 VA).<br><br>Berapa PLT total dan OFI mana yang memberikan pengurangan PLT TERBESAR?",
    "opts": [
      "PLT=668 menit; OFI terbesar: hapus 'Catat ke buku register' (8 menit)",
      "PLT=668 menit; OFI terbesar: hapus 'Tunggu laporan harian Supervisor' (480 menit NVA)",
      "PLT=668 menit; OFI terbesar: hapus 'Input ke sistem' (10 menit VE)",
      "PLT=548 menit; OFI terbesar: hapus 'Tunggu batch 5 komplain' (120 menit NVA)"
    ],
    "a": "Qg==",
    "cat": "Swimlane & PLT"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Langkah PDCA Lengkap:</strong><br>Setelah 3 bulan improvement, antrian teller turun dari 28 menit menjadi 9 menit. Tim kemudian: (1) Mendokumentasikan SOP jadwal shift baru, (2) Sosialisasi ke semua teller, (3) Menetapkan monitoring mingguan, (4) Mengidentifikasi masalah berikutnya: 'Tingginya complain salah informasi produk'. Langkah (1)(2)(3) = Step berapa, dan langkah (4) = Step berapa?",
    "opts": [
      "(1)(2)(3) = Step 5, (4) = Step 6",
      "(1)(2)(3) = Step 7, (4) = Step 8",
      "(1)(2)(3) = Step 6, (4) = Step 7",
      "(1)(2)(3) = Step 8, (4) = Step 1 project baru"
    ],
    "a": "Qg==",
    "cat": "Delapan Langkah PDCA"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Analisis SCAMPER:</strong><br>Root cause teridentifikasi: 'Tidak ada SOP tertulis untuk handling komplain nasabah VIP.' Dalam Solution Generation, anggota tim mengusulkan: 'Adaptasi SOP handling komplain dari cabang lain yang sudah terbukti efektif.' Huruf SCAMPER mana yang digunakan?",
    "opts": [
      "S — Substitute (mengganti SOP lama)",
      "C — Combine (menggabungkan dua SOP)",
      "A — Adapt (mengadaptasi praktik terbaik dari sumber lain)",
      "E — Eliminate (menghilangkan proses tidak perlu)"
    ],
    "a": "Qw==",
    "cat": "SCAMPER"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Skenario PCE After Improvement:</strong><br>Setelah improvement, proses baru memiliki: VA=200 menit, VE=50 menit, NVA=50 menit (sebelumnya NVA=800 menit). Berapa PCE setelah improvement dan apakah sudah memenuhi World Class untuk Business Processes (Transactional)?",
    "opts": [
      "PCE=66.7% — sudah melampaui World Class (50%)",
      "PCE=40% — belum mencapai World Class (50%)",
      "PCE=80% — jauh di atas World Class",
      "PCE=25% — masih di bawah Typical (10%)"
    ],
    "a": "QQ==",
    "cat": "PCE Calculation"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Analisis Problem Statement:</strong><br><div class='sbox'>(X) 'Banyak nasabah yang tidak puas dengan pelayanan teller.'<br>(Y) 'Sejak Q2 2024, rata-rata waktu antrean teller Cabang Bahari mencapai 31 menit — melebihi SLA 10 menit — menyebabkan 22% nasabah meninggalkan antrean dan potensi kehilangan transaksi Rp 28 juta/bulan.'</div>Apa perbedaan utama yang membuat (Y) lebih baik dari (X)?",
    "opts": [
      "(Y) lebih panjang sehingga lebih meyakinkan manajemen",
      "(Y) memiliki komponen WHEN, WHAT (terukur), SCOPE, dan IMPACT yang jelas — sesuai kriteria Problem Statement yang baik",
      "(X) terlalu jujur dan bisa mempermalukan tim",
      "(Y) sudah menyertakan solusi sehingga lebih actionable"
    ],
    "a": "Qg==",
    "cat": "Problem Statement"
  },
  {
    "type": "single",
    "q": "<strong>🔍 Skenario Evaluasi Tidak Memuaskan:</strong><br>Tim melakukan piloting solusi selama 1 bulan. Hasilnya: waktu proses turun dari 45 menit ke 38 menit (target: 15 menit). Hasil belum memuaskan. Berdasarkan Delapan Langkah PDCA, langkah yang paling tepat selanjutnya adalah...",
    "opts": [
      "Langsung menuju Step 7 Standardisasi karena ada perbaikan meskipun kecil",
      "Kembali ke Step 3 (Analisis Akar Penyebab) untuk menginvestigasi apakah ada root cause yang terlewat, lalu revisi Solution Plan",
      "Hentikan project dan mulai dari awal dengan tim baru",
      "Ubah target menjadi 38 menit agar dianggap berhasil"
    ],
    "a": "Qg==",
    "cat": "Evaluasi & Iterasi"
  }
];
