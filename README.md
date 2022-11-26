Project ini dibuat menggunakan framework react js dan react-bootstrap.

Alasan memilih react js karena seo friendly, terbukti dengan pengetesan lighthouse, nilai dari seo nya mencapai 90 untuk dekstop.
react js juga menggunakan pemrograman berbasis komponen, sehingga memudahkan proses maintenance jika terjadi bug.

Pembuatan component menggunakan functional component, karena fitur useStatenya membuat code menjadi lebih simple.

Alasan memilih react-bootstrap karena saya terbiasa menggunakan bootstrap ketika belajar pemrograman javascript vanilla.
Untuk penggunaan icon-icon digunakan material ui karena source code nya yang ringkas.

Untuk data-data makanan, saya menggunakan fitur fetch API karena sudah bawaan javascript, sehingga tidak perlu install.
API nya didapat dari website mockapi.com, yang memanfaatkan fitur fake json sehingga dapat mengenerate data-data yang diperlukan tanpa waktu yang lama.

Untuk styling, beberapa component menggunakan sass, dikarenakan banyak style yang diulang oleh satu element dengan element lainnya dengan memanfaatkan fitur extend, sehingga cukup menuliskan code templatenya sekali.

