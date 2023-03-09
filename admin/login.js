import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";


  var firebaseConfig = {
  apiKey: "AIzaSyCV3i_KliUAxYTI4RoC_VpFZxJ8-EjO2bA",
  authDomain: "jekyll-onlineshop.firebaseapp.com",
  databaseURL: "https://jekyll-onlineshop-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jekyll-onlineshop",
  storageBucket: "jekyll-onlineshop.appspot.com",
  messagingSenderId: "1080130094512",
  appId: "1:1080130094512:web:fda6d8485c8d0ed6a78275",
  measurementId: "G-75QG8P9ZSM"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
let signinButton = document.getElementById("signinButton");

//fungsi login
signinButton.addEventListener("click", (e) => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //verifikasi email dan password dengan Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            //jika login berhasil, ambil data user dari Realtime Database
            var userId = userCredential.user.uid;
            var userRef = database.ref('users/' + userId);
            userRef.on('value', (snapshot) => {
                var userData = snapshot.val();
                //cek apakah user merupakan admin
                if (userData.role === 'admin') {
                    //redirect ke halaman admin
                    window.location.href = './dashboard';
                } else {
                    alert('Anda tidak memiliki akses ke halaman admin!');
                }
            });
        })
        .catch((error) => {
            //jika login gagal, tampilkan pesan error
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
});

