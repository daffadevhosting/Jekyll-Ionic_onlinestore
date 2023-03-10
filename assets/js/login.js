import { initializeApp } from "../vendor/firebase/firebase-app.js";
import { getAnalytics } from "../vendor/firebase/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "../vendor/firebase/firebase-auth.js";

//inisialisasi Firebase Realtime Database
  const firebaseConfig = {
      apiKey: "{{ site.env.API_KEY }}",
      authDomain: "{{ site.env.AUTH_DOMAIN }}",
      databaseURL: "{{ site.env.DATABASE_URL }}",
      projectId: "{{ site.env.PROJECT_ID }}",
      storageBucket: "{{ site.env.STORAGE_BUCKET }}",
      messagingSenderId: "{{ site.env.SENDER_ID }}",
      appId: "{{ site.env.APP_ID }}",
      measurementId: "{{ site.env.MEASUREMENT_ID }}"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//fungsi login
$('#loginButton').click(() => {
  const email = $('#email').val();
  const password = $('#password').val();
  
  // Autentikasi dengan email dan password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Verifikasi peran admin
      const uid = userCredential.user.uid;
      const userRef = firebase.database().ref(`users/${uid}`);
      userRef.once('value')
        .then((snapshot) => {
          const userData = snapshot.val();
          if (userData.role === 'admin') {
            // Alihkan ke halaman admin
            window.location.href = './dashboard';
          } else {
            // Tampilkan pesan kesalahan
            Alert();
          }
        })
        .catch((error) => {
          console.error(error);
            Alert();
        });
    })
    .catch((error) => {
      console.error(error);
            Alert();
    });

  
  async function Alert() {
    const alert = document.createElement('ion-alert');
    alert.message = 'E-mail atau password, SALAH!';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    await alert.present();
  }
});
