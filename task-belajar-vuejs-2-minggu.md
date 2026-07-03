# Task: Belajar Vue.js dalam 2 Minggu

Target: setelah 14 hari, student mampu membangun aplikasi Vue 3 yang lengkap — CRUD terhubung REST API, autentikasi sederhana, form dengan validasi, reusable composables, unit test dasar, dan siap deploy.

Minggu pertama fokus fundamental, minggu kedua masuk ke topik lanjutan dan final project.

Referensi utama: https://vuejs.org/guide/ (dokumentasi resmi Vue 3).

Aturan:
- Semua latihan pakai **Vue 3 + Vite**, bukan Vue 2 / CDN.
- Pakai **Composition API** dengan `<script setup>`.
- Setiap hari commit ke repository GitHub pribadi dengan pesan commit yang jelas.
- Hari ke-7 dan ke-14 ada checkpoint review bersama mentor.
- Di akhir minggu kedua, student presentasi final project (20 menit demo + tanya jawab).

---

## Minggu 1 — Fundamental

### Hari 1 — Setup & Konsep Dasar

![[task-vuejs-2w-hari1-setup.svg]]

Materi:
- Node.js, npm, dan membuat project dengan `npm create vue@latest`
- Struktur project Vue (`src`, `main.js`, `App.vue`) dan peran Vite
- Single File Component (SFC): `template`, `script setup`, `style scoped`
- Text interpolation `{{ }}` dan konsep reactivity

Tugas:
1. Setup project baru, jalankan dev server, pelajari struktur foldernya.
2. Buat component `ProfileCard.vue` yang menampilkan data diri dari variabel.
3. Tulis catatan singkat (markdown) di repo: apa perbedaan Vue dengan manipulasi DOM manual / jQuery.

Deliverable: project berjalan di `localhost` + `ProfileCard` tampil.

### Hari 2 — Reactivity: ref, reactive, computed

![[task-vuejs-2w-hari2-reactivity.svg]]

Materi:
- `ref()` vs `reactive()` — kapan pakai yang mana
- `computed` vs method, dan kenapa computed di-cache
- `watch` dan `watchEffect`

Tugas:
1. Buat halaman **kalkulator diskon**: input harga dan persen diskon, harga akhir dihitung dengan `computed`.
2. Tambahkan `watch` yang menampilkan log/riwayat setiap kali harga berubah.
3. Eksperimen: buktikan bahwa mengubah property object `reactive` memicu update, tapi mengganti object-nya langsung tidak (tulis kesimpulan di catatan).

Deliverable: kalkulator diskon berfungsi + catatan hasil eksperimen reactivity.

### Hari 3 — Directives & Event Handling

![[task-vuejs-2w-hari3-todolist.svg]]

Materi:
- `v-bind` (`:`), `v-on` (`@`), modifier event (`.prevent`, `.stop`)
- `v-model` dan modifier-nya (`.trim`, `.number`)
- `v-if` / `v-else` / `v-show`, `v-for` dengan `:key`
- Class & style binding dinamis

Tugas:
1. Buat halaman **Todo List**: tambah, tandai selesai, hapus, filter All / Active / Done.
2. Todo yang selesai diberi style berbeda lewat class binding.
3. Tampilkan pesan "Belum ada todo" dengan `v-if` saat list kosong.

Deliverable: Todo List berfungsi penuh tanpa reload halaman.

### Hari 4 — Component: Props & Emit

![[task-vuejs-2w-hari4-props-emit.svg]]

Materi:
- Membagi UI menjadi component
- Props (parent → child) dengan validasi tipe dan default value
- Emit event (child → parent), `defineProps` / `defineEmits`
- One-way data flow: kenapa child dilarang mengubah props

Tugas:
1. Refactor Todo List menjadi `TodoInput.vue`, `TodoList.vue`, `TodoItem.vue` — data hanya di parent.
2. Buat component `BaseButton.vue` dengan props `variant` (primary/danger) dan dipakai di seluruh app.
3. Buat props validation yang menampilkan warning di console jika tipe salah, lalu buktikan.

Deliverable: Todo List versi component-based, minimal 4 component.

### Hari 5 — Slot, Lifecycle & Template Ref

![[task-vuejs-2w-hari5-slot-lifecycle.svg]]

Materi:
- Slot: default slot, named slot, slot props
- Lifecycle hooks: `onMounted`, `onUpdated`, `onUnmounted`
- Template ref untuk akses elemen DOM

Tugas:
1. Buat `BaseModal.vue` dengan named slot (header, body, footer) — dipakai untuk konfirmasi hapus todo.
2. Buat `BaseCard.vue` dengan slot dan pakai di minimal 2 tempat.
3. Saat modal terbuka, input di dalamnya langsung fokus (pakai template ref + `onMounted`).

Deliverable: modal konfirmasi dan card reusable berfungsi.

### Hari 6 — Vue Router

![[task-vuejs-2w-hari6-router.svg]]

Materi:
- Setup `vue-router`: routes, `<router-view>`, `<router-link>`
- Dynamic route (`/users/:id`), nested route, route dengan nama
- Programmatic navigation (`router.push`, `router.back`)
- Navigation guard (`beforeEach`) dan halaman 404

Tugas:
1. Buat aplikasi multi-halaman: Home, About, Users (list), User Detail (`/users/:id`), 404.
2. Data user hardcode dulu (array of object).
3. Buat guard yang memblokir halaman Users jika flag `isLoggedIn` bernilai false, redirect ke halaman Login dummy.

Deliverable: navigasi lengkap + guard berjalan.

### Hari 7 — Checkpoint & Mini Project Minggu 1

![[task-vuejs-2w-hari7-mini-project.svg]]

Review bersama mentor: reactivity, component communication, router.

Tugas (mini project, selesai dalam sehari):
1. Buat **aplikasi katalog buku** sederhana (data hardcode): halaman list dengan search & filter kategori, halaman detail, form tambah buku (simpan di memori saja).
2. Wajib memakai: component terpisah, props/emit, slot (modal/card), router, computed.

Deliverable: mini project selesai + demo singkat ke mentor (checkpoint 1).

---

## Minggu 2 — Lanjutan & Final Project

### Hari 8 — HTTP Request & Async State

![[task-vuejs-2w-hari8-http.svg]]

Materi:
- Fetch data dari REST API dengan **Fetch API** bawaan browser (`fetch`)
- `response.ok`, `response.json()`, dan jebakan fetch: status 4xx/5xx **tidak** otomatis throw
- `async/await` di component dan lifecycle
- Pola loading / error / empty state
- AbortController / pembatalan request saat component unmount

Tugas:
1. Ganti data hardcode Users (hari 6) dengan data dari https://jsonplaceholder.typicode.com/users.
2. Terapkan loading state, error state (dengan tombol retry), dan empty state.
3. Buat satu fungsi wrapper `fetch` terpusat di `src/api/` (menyimpan baseURL, cek `response.ok`, parse JSON, lempar error jika gagal) dan semua request lewat situ.

Deliverable: halaman Users full dari API dengan 3 state UI tertangani.

### Hari 9 — Pinia State Management

![[task-vuejs-2w-hari9-pinia.svg]]

Materi:
- Kenapa butuh state management, kapan cukup props/emit saja
- `defineStore`: state, getters, actions
- `storeToRefs` dan pitfall destructuring store
- Store yang memanggil API di dalam action

Tugas:
1. Buat `useUserStore`: state users, action `fetchUsers()`, getter jumlah user.
2. Refactor halaman Users & User Detail agar membaca dari store.
3. Buat `useAuthStore` (login/logout dummy, simpan token di `localStorage`) dan hubungkan ke navigation guard.

Deliverable: seluruh data mengalir lewat Pinia, login state bertahan setelah refresh.

### Hari 10 — Composables & Reusable Logic

![[task-vuejs-2w-hari10-composables.svg]]

Materi:
- Apa itu composable dan konvensi `useXxx`
- Mengekstrak logic dari component ke composable
- Composable populer di VueUse (sebagai referensi, bukan wajib pakai)

Tugas:
1. Buat `useFetch(url)` composable yang mengembalikan `{ data, loading, error, refetch }`.
2. Buat `useLocalStorage(key, defaultValue)` dan pakai untuk menyimpan preferensi filter user.
3. Refactor minimal 2 component agar memakai composable buatan sendiri.

Deliverable: 2 composable berfungsi dan dipakai lintas component.

### Hari 11 — Form & Validasi

![[task-vuejs-2w-hari11-form.svg]]

Materi:
- Form multi-field dengan `v-model`
- Validasi manual (computed) vs library (VeeValidate / Zod — pilih salah satu)
- Menampilkan pesan error per field, disable tombol submit saat invalid
- Submit ke API (POST/PUT) dan menangani respons error dari server

Tugas:
1. Buat form **registrasi user**: nama (wajib), email (format valid), password (min 8 karakter), konfirmasi password (harus sama).
2. Pesan error muncul per field setelah field disentuh (touched), bukan sejak awal.
3. Submit POST ke `jsonplaceholder` dan tampilkan notifikasi sukses/gagal.

Deliverable: form registrasi dengan validasi lengkap.

### Hari 12 — Testing & Kualitas Kode

![[task-vuejs-2w-hari12-testing.svg]]

Materi:
- Unit test dengan **Vitest** + **Vue Test Utils**: mount, find, trigger, expect
- Menguji props, emit, dan render kondisional
- ESLint + Prettier di project Vue

Tugas:
1. Setup Vitest, tulis minimal 5 unit test: `BaseButton` (render variant), `TodoItem` (emit saat checkbox diklik), composable `useFetch` (mock global `fetch`), form validasi (2 kasus).
2. Setup ESLint + Prettier, rapikan seluruh codebase sampai lint bersih.

Deliverable: `npm run test` hijau semua + lint tanpa error.

### Hari 13–14 — Final Project

![[task-vuejs-2w-hari13-14-final.svg]]

Buat aplikasi **manajemen data** yang menggabungkan semua materi. Tema bebas (contoh: inventaris barang, manajemen kontak, perpustakaan), atau gunakan API internal yang diberikan mentor. Boleh pakai `json-server` lokal agar CRUD benar-benar tersimpan.

Requirement wajib:
1. Vue 3 + Vite + Composition API (`<script setup>`)
2. Minimal 5 halaman dengan Vue Router: Login, List, Detail, Create, Edit (+404)
3. Autentikasi sederhana: guard + token di `localStorage` (dari hari 9)
4. Pinia untuk seluruh state global
5. CRUD penuh ke REST API lewat fetch wrapper terpusat
6. Minimal 2 composable buatan sendiri dipakai di project
7. Form create/edit dengan validasi per field
8. Loading / error / empty state di semua halaman yang fetch data
9. Konfirmasi modal sebelum delete
10. Minimal 5 unit test lulus
11. README: deskripsi, cara install & menjalankan, struktur folder
12. Bonus: deploy ke Netlify/Vercel, styling dengan Tailwind CSS atau PrimeVue, search + pagination di halaman list

Deliverable: link repository GitHub (+ link deploy jika ada) + presentasi 20 menit (checkpoint 2).

---

## Catatan :
- Lakukan commit setiap hari.
