
// Ambil referensi ke Firestore database
var firestore = firebase.firestore();

// Tambahkan event listener ke tombol
document.getElementById("likeButton").addEventListener("click", function() {
  // Ambil UID pengguna yang sedang masuk
  var user = firebase.auth().currentUser;
  var uid = user.uid;

  // Tentukan halaman yang akan diberi like
  var halaman = '{{page.ID}}';

  // Periksa apakah pengguna sudah memberikan like sebelumnya
  firestore.collection('likes').doc(uid).get().then(function(doc) {
    if (doc.exists) {
      var data = doc.data();
      if (data[halaman]) {
        // Jika pengguna sudah memberikan like sebelumnya, tampilkan pesan
        alert("Kamu sudah memberikan like untuk produk ini.");
        return;
        }
    }

    // Tambahkan "like" ke Firestore database
    var likeData = {};
    likeData[halaman] = true;
    firestore.collection('likes').doc(uid).set(likeData, { merge: true }).then(function() {
      // Jika berhasil menambahkan "like", tampilkan pesan sukses
      alert("Kamu menyukai produk ini..!");
      // Perbarui jumlah like
      updateLikeCount(halaman);
    }).catch(function(error) {
      // Jika gagal menambahkan "like", tampilkan pesan kesalahan
      alert(error.message);
    });
  });
});

// Tambahkan event listener ke tombol unlike
document.getElementById("unlikeButton").addEventListener("click", function() {
  // Ambil UID pengguna yang sedang masuk
  var user = firebase.auth().currentUser;
  var uid = user.uid;

  // Tentukan halaman yang akan dihapus like-nya
  var halaman = '{{page.ID}}';

  // Hapus "like" dari Firestore database
  var likeData = {};
  likeData[halaman] = false;
  firestore.collection('likes').doc(uid).set(likeData, { merge: true }).then(function() {
    // Jika berhasil menghapus "like", tampilkan pesan sukses
    alert("Berhasil menghapus like!");
    // Perbarui tombol like dan jumlah like
    updateLikeCount(halaman);
  }).catch(function(error) {
    // Jika gagal menghapus "like", tampilkan pesan kesalahan
    alert(error.message);
  });
});

// Fungsi untuk mengambil jumlah like dari Firestore
function getLikeCount(halaman) {
  return firestore.collection('likes').where(halaman, '==', true).get().then(function(querySnapshot) {
    return querySnapshot.size;
  });
}

// Fungsi untuk memperbarui jumlah like di halaman HTML
function updateLikeCount(halaman) {
  getLikeCount(halaman).then(function(count) {
    document.getElementById("likeCount").textContent = count;
  });
}

// Ambil elemen tombol "like" dan "unlike"
var likeButton = document.getElementById("likeButton");
var unlikeButton = document.getElementById("unlikeButton");

// Tambahkan event listener ke tombol "like"
likeButton.addEventListener("click", function() {
  // Toggle tampilan tombol "like" dan "unlike"
  likeButton.style.display = "none";
  unlikeButton.style.display = "block";
});

// Tambahkan event listener ke tombol "unlike"
unlikeButton.addEventListener("click", function() {
  // Toggle tampilan tombol "like" dan "unlike"
  unlikeButton.style.display = "none";
  likeButton.style.display = "block";
});

// Panggil fungsi updateLikeCount saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function(event) { 
  var halaman = '{{page.ID}}';
  updateLikeCount(halaman);
});
