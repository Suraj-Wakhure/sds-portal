// config/firebaseAdmin.js
const admin = require("firebase-admin");
const path = require("path");

// Load service account JSON placed at backend/serviceAccountKey.json
const serviceAccountPath = path.join(__dirname, "..", "serviceAccountKey.json");
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // optional: storageBucket: "your-bucket.appspot.com"
});

const db = admin.firestore();
module.exports = { admin, db };
