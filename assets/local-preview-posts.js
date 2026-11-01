/* Small local-only feed so Markdown examples can be previewed from file://.
   GitHub Pages uses the Jekyll-generated content.json instead. */
if (window.location.protocol === "file:") {
  window.TUKANGPLC_LOCAL_POSTS = [{"title":"Memeriksa batas nilai input analog","url":"_posts/2026-10-27-validasi-input-analog.md","description":"Tambahkan pemeriksaan rentang sebelum nilai analog dipakai untuk perhitungan berikutnya.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","analog","I/O"]},{"title":"Memilih cabang logika dengan CASE","url":"_posts/2026-10-27-structured-text-case-selector.md","description":"Gunakan CASE untuk memilih satu dari beberapa mode logika yang eksplisit.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","Structured Text","CASE"]},{"title":"Memisahkan runtime, lisensi, dan target kontrol","url":"_posts/2026-10-27-runtime-lisensi-dan-target.md","description":"Sebelum demo atau deployment, pastikan software runtime, status lisensi, dan targetnya dipahami terpisah.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","runtime","lisensi"]},{"title":"Retain dan persistent data pada PLC","url":"_posts/2026-10-27-retain-persistent-variabel.md","description":"Bandingkan data siklik biasa dengan nilai yang diharapkan bertahan setelah restart.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","data","runtime"]},{"title":"Fieldbus menghubungkan controller dan perangkat I/O","url":"_posts/2026-10-27-protokol-fieldbus-dan-io.md","description":"Pahami peran protokol komunikasi dan hal yang perlu diperiksa sebelum memilih perangkat I/O.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","fieldbus","I/O"]},{"title":"LLM di antarmuka mesin: batas dan pengawasan","url":"_posts/2026-10-27-penggunaan-llm-di-mesin-batas.md","description":"Tempatkan LLM sebagai antarmuka bantu dengan batas tindakan, bukan sebagai pengendali langsung mesin.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["HMI","AI","LLM"]},{"title":"PC engineering dan PC controller punya peran berbeda","url":"_posts/2026-10-27-pc-industri-vs-pc-engineer.md","description":"Bedakan komputer untuk engineering dari perangkat yang benar-benar menjalankan runtime kontrol.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PC-Based Control","PLC","arsitektur"]},{"title":"Mendeteksi tepi naik input digital","url":"_posts/2026-10-27-mendeteksi-tepi-naik-input.md","description":"Gunakan deteksi tepi naik agar satu perubahan tombol menghasilkan satu kejadian logika.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","Structured Text","input"]},{"title":"Apa yang perlu dicatat saat menguji program PLC?","url":"_posts/2026-10-27-mencatat-hasil-uji-plc.md","description":"Catat versi, setup, langkah, hasil yang diharapkan, dan hasil aktual agar uji mudah diulang.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","testing","dokumentasi"]},{"title":"Menguji timer TON dalam simulasi","url":"_posts/2026-10-27-membuat-timer-delay-simulasi.md","description":"Amati perubahan output timer TON setelah input aktif selama waktu preset.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","timer","simulasi"]},{"title":"Membuat rangkaian start-stop dengan seal-in","url":"_posts/2026-10-27-membuat-start-stop-dengan-seal-in.md","description":"Buat logika start-stop sederhana, lalu amati bagaimana perintah tetap aktif setelah tombol Start dilepas.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","Structured Text","dasar"]},{"title":"Membuat ramp nilai untuk simulasi analog","url":"_posts/2026-10-27-membuat-ramp-nilai-simulasi.md","description":"Naikkan nilai simulasi secara bertahap dengan batas target dan langkah yang dapat diatur.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","analog","simulasi"]},{"title":"Membuat alarm latch dan reset manual","url":"_posts/2026-10-27-membuat-alarm-latch.md","description":"Simpan kondisi alarm sampai operator simulasi memberi perintah reset setelah penyebab hilang.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","alarm","Structured Text"]},{"title":"Apa itu task dalam runtime PLC?","url":"_posts/2026-10-27-memahami-task-plc.md","description":"Task mengatur kapan dan dengan prioritas apa bagian program dipanggil oleh runtime.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","task","runtime"]},{"title":"Memetakan variabel input dan output","url":"_posts/2026-10-27-mapping-input-output-simulasi.md","description":"Pisahkan variabel logika dari alamat I/O dan uji pemetaan menggunakan input simulasi.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","I/O","simulasi"]},{"title":"Simulasi PLC bukan benchmark performa","url":"_posts/2026-10-27-kenapa-simulasi-bukan-benchmark.md","description":"Simulator berguna menguji logika, tetapi hasil waktunya belum tentu mewakili target dan I/O fisik.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","simulasi","testing"]},{"title":"Membuat interlock untuk dua perintah simulasi","url":"_posts/2026-10-27-interlock-dua-perintah.md","description":"Pastikan dua perintah yang saling bertentangan tidak aktif bersamaan dalam contoh logika.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","interlock","Structured Text"]},{"title":"Memisahkan tampilan HMI dari logika kontrol","url":"_posts/2026-10-27-hmi-vs-logic-plc.md","description":"Bedakan fungsi antarmuka operator dari keputusan kontrol yang harus tetap jelas di program PLC.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","HMI","arsitektur"]},{"title":"Membuat counter naik dengan reset","url":"_posts/2026-10-27-counter-naik-dan-reset.md","description":"Hitung kejadian dari pulsa simulasi dan reset nilainya dengan kondisi terpisah.","date":"2026-10-27","readingTime":2,"categories":["tutorial"],"tags":["PLC","Structured Text","counter"]},{"title":"Watchdog PLC: fungsi dan batas interpretasinya","url":"_posts/2026-10-27-apa-itu-watchdog-plc.md","description":"Pahami watchdog sebagai mekanisme deteksi batas waktu, bukan ukuran tunggal kesehatan mesin.","date":"2026-10-27","readingTime":2,"categories":["artikel"],"tags":["PLC","watchdog","real-time"]}].concat([
    {
      title: "Memahami cycle time dan waktu respons PLC",
      url: "_posts/2026-10-27-memahami-cycle-time-dan-waktu-respons-plc.md",
      description: "Pahami apa yang diukur oleh cycle time task dan faktor lain yang memengaruhi pengamatan respons sistem.",
      date: "2026-10-27",
      readingTime: 2,
      categories: ["artikel"],
      tags: ["PLC", "task", "real-time", "I/O"]
    },
    {
      title: "PC-Based Control: peran engineering system dan runtime",
      url: "_posts/2026-10-27-pc-based-control-peran-runtime.md",
      description: "Kenali perbedaan komputer untuk membuat program dan target yang menjalankan runtime kontrol.",
      date: "2026-10-27",
      readingTime: 2,
      categories: ["artikel"],
      tags: ["PC-Based Control", "PLC", "runtime", "arsitektur"]
    },
    {
      title: "Sequence dua langkah dengan state sederhana",
      url: "_posts/2026-10-27-sequence-dua-langkah-dengan-state.md",
      description: "Susun logika urutan kecil memakai state agar kondisi mulai, proses, dan selesai mudah ditelusuri.",
      date: "2026-10-27",
      readingTime: 2,
      categories: ["tutorial"],
      tags: ["PLC", "Structured Text", "sequence"]
    },
    {
      title: "Menelusuri satu siklus PLC: input, logika, output",
      url: "_posts/2026-10-27-menelusuri-satu-siklus-plc.md",
      description: "Ikuti satu nilai input dari pembacaan, pemrosesan program, sampai perintah output—lalu coba menelusurinya sendiri.",
      date: "2026-10-27",
      readingTime: 2,
      categories: ["tutorial"],
      tags: ["PLC", "Structured Text", "dasar"]
    }
  ]);
}
