# TukangPLC Website

Situs edukasi tentang PLC, TwinCAT, dan PC-Based Control.

## Menambahkan posting

Simpan posting Markdown di `_posts/` dengan nama `YYYY-MM-DD-judul-singkat.md`. Gunakan front matter Jekyll untuk metadata:

```yaml
---
title: "Judul posting"
date: 2026-10-27 09:00:00 +0700
categories: [tutorial]
tags: [PLC, "Structured Text"]
description: "Ringkasan singkat untuk daftar posting dan mesin pencari."
---
```

Gunakan kategori `tutorial` atau `artikel`. Beranda, halaman Tutorial, Artikel, dan hasil Tags menampilkan paling banyak 10 posting per halaman dengan pagination. Halaman Tags menyediakan satu daftar hasil: setiap tag yang dipilih menambahkan hasil yang cocok (logika OR), dan tanpa pilihan semua konten tampil. Tentang dan Kontak adalah halaman tersendiri. Urutan, tautan, tanggal, ringkasan, dan perkiraan waktu baca dihasilkan dari posting Markdown saat Jekyll membangun situs.

Setiap kategori mendapat jalur URL tersendiri, misalnya `/tutorial/2026/10/27/judul/` atau `/artikel/2026/10/27/judul/`.

## Alur lokal

1. Buat file Markdown baru di `_posts/`.
2. Isi front matter dan naskah artikel.
3. Periksa kategori, tags, tanggal, ringkasan, dan sumber.
4. Jekyll membangun feed konten saat situs diterbitkan.

Jika beranda dibuka langsung sebagai file lokal, `assets/local-preview-posts.js` menyediakan metadata untuk contoh posting. Saat situs di-build oleh Jekyll, feed berasal dari `content.json` dan mengikuti seluruh posting di `_posts/`.

Jangan menerbitkan hasil pengujian, klaim performa, atau perbandingan sebelum setup dan metodenya dicatat. Lihat `content/EDITORIAL_GUIDE.md` dan `content/templates/ARTICLE.md` pada brain konten TukangPLC.

## Tautan

- Situs: https://tukangplc.github.io
- YouTube: https://www.youtube.com/@TukangPLC
- GitHub: https://github.com/tukangPLC
