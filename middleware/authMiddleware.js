// middleware/authMiddleware.js
const { admin } = require("../config/firebaseAdmin");

async function verifyFirebaseToken(req, res, next) {
  const authHeader = req.header("Authorization") || "";
  const match = authHeader.match(/^Bearer (.*)$/);
  if (!match) return res.status(401).json({ error: "No token provided" });

  const idToken = match[1];
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    // decoded.uid, decoded.email, decoded.firebase.sign_in_provider, decoded.role if set via custom claims
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification error:", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

module.exports = { verifyFirebaseToken };

async function setAdmin(uid) {
  await admin.auth().setCustomUserClaims(uid, { role: "admin" });
  console.log("Claim set for", uid);
}