# Product Requirements Document (PRD)

## Project

Healthy Diet Website

## Version

1.0

## Overview

Healthy Diet Website merupakan website statis yang memberikan rekomendasi menu makanan dan aktivitas harian untuk membantu pengguna menjalani pola hidup sehat.

Website ini bersifat informatif dan tidak memerlukan login, database, maupun backend. Seluruh konten disimpan dalam file lokal sehingga website dapat di-host sebagai static site menggunakan Astro.

---

# Goals

* Menyediakan rekomendasi menu makanan harian.
* Menampilkan estimasi kalori setiap menu.
* Memberikan aktivitas harian sederhana.
* Memberikan tips kesehatan singkat.
* Responsive untuk desktop dan mobile.
* SEO Friendly.

---

# Non Goals

Versi pertama tidak mencakup:

* Authentication
* Database
* User Profile
* Weight Tracking
* BMI Calculator
* AI Recommendation
* Food Search
* Calories Calculator
* Payment
* API

---

# Target User

* Orang yang ingin mulai diet.
* Orang yang ingin hidup lebih sehat.
* Pemula yang membutuhkan contoh menu harian.

---

# Pages

## Home

Menampilkan seluruh informasi dalam satu halaman.

Section:

* Hero
* Today's Meal
* Today's Activity
* Healthy Tips
* FAQ
* Footer

---

# Hero

Berisi:

Title

Healthy Diet Guide

Subtitle

Simple daily meal recommendations and healthy activities.

Button

View Today's Menu

---

# Today's Meal

Menampilkan empat kategori.

Breakfast

* Food List
* Total Calories

Lunch

* Food List
* Total Calories

Dinner

* Food List
* Total Calories

Snack

* Food List
* Total Calories

---

# Daily Activity

Contoh aktivitas:

* Jalan minimal 1000 langkah
* Minum 2L air
* Tidur 7 Jam
* Stretching minimal 10 menit
* Makan Buah
* Makan Sayuran

---

# Healthy Tips

Menampilkan tips singkat.

Contoh:

* Makan secara perlahan.
* Minum air yang cukup.
* Kurangi gula.
* Utamakan protein.

---

# FAQ

Contoh:

Bisa kah saya ganti nasi?

Bolehkah saya meminum teh?

Bolehkah saya memakan dimalam hari?

---

# Data Source

Semua data berasal dari file lokal.

Example:

src/data/

* meals.ts
* activities.ts
* tips.ts
* faq.ts

---

# Responsive

Desktop

* 4 column meal cards

Tablet

* 2 column

Mobile

* 1 column

---

# Theme

Primary Color

Pink

Accent

Pink

Background

Light Pink

Border Radius

Large

Shadow

Soft

---

# Tech Stack

Framework

Astro

Styling

---

# Performance Goal

Lighthouse

Performance >95

Accessibility >95

SEO >95

Best Practices >95

---

# Future Enhancement

* Dark Mode
* Weekly Meal Plan
* BMI Calculator
* Calories Calculator
* Search Food
* Filter by Goal
* Weight Loss
* Weight Gain
* Maintenance
* CMS Integration
