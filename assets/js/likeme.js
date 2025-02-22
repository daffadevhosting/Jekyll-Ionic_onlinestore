// Initialize Firebase (ensure this is done before using Firebase services)
if (!firebase.apps.length) {
    firebase.initializeApp({
        // Your Firebase config here
    });
}

// Get a reference to the Firestore database
const firestore = firebase.firestore();

// Add event listener to the like button
document.getElementById("likeButton").addEventListener("click", function() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("You need to be logged in to like this.");
        return;
    }
    const uid = user.uid;
    const halaman = '{{page.ID}}';

    firestore.collection('likes').doc(uid).get().then(function(doc) {
        if (doc.exists && doc.data()[halaman]) {
            alert("You have already liked this product.");
            return;
        }

        const likeData = {};
        likeData[halaman] = true;
        firestore.collection('likes').doc(uid).set(likeData, { merge: true }).then(function() {
            alert("You liked this product!");
            updateLikeCount(halaman);
        }).catch(function(error) {
            alert(error.message);
        });
    });
});

// Add event listener to the unlike button
document.getElementById("unlikeButton").addEventListener("click", function() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("You need to be logged in to unlike this.");
        return;
    }
    const uid = user.uid;
    const halaman = '{{page.ID}}';

    const likeData = {};
    likeData[halaman] = false;
    firestore.collection('likes').doc(uid).set(likeData, { merge: true }).then(function() {
        alert("Like removed!");
        updateLikeCount(halaman);
    }).catch(function(error) {
        alert(error.message);
    });
});

// Function to get the like count from Firestore
function getLikeCount(halaman) {
    return firestore.collection('likes').where(halaman, '==', true).get().then(function(querySnapshot) {
        return querySnapshot.size;
    });
}

// Function to update the like count on the HTML page
function updateLikeCount(halaman) {
    getLikeCount(halaman).then(function(count) {
        document.getElementById("likeCount").textContent = count;
    });
}

// Get the like and unlike button elements
const likeButton = document.getElementById("likeButton");
const unlikeButton = document.getElementById("unlikeButton");

// Add event listener to the like button
likeButton.addEventListener("click", function() {
    likeButton.style.display = "none";
    unlikeButton.style.display = "block";
});

// Add event listener to the unlike button
unlikeButton.addEventListener("click", function() {
    unlikeButton.style.display = "none";
    likeButton.style.display = "block";
});

// Call updateLikeCount when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const halaman = '{{page.ID}}';
    updateLikeCount(halaman);
});