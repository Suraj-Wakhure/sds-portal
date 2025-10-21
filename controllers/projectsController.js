// controllers/projectsController.js
const { db } = require("../config/firebaseAdmin");
const FieldValue = require("firebase-admin").firestore.FieldValue;

const collectionName = "projects";

// CREATE
async function createProject(req, res) {
  try {
    const { title, description, visibility = true, members = [] } = req.body;
    const docRef = await db.collection(collectionName).add({
      title,
      description,
      visibility,
      members,
      createdAt: FieldValue.serverTimestamp(),
      createdBy: req.user ? req.user.uid : null
    });
    return res.status(201).json({ id: docRef.id, message: "Project created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}

// READ ALL (public)
async function getAllProjects(req, res) {
  try {
    const snapshot = await db.collection(collectionName)
      .orderBy("createdAt", "desc")
      .get();
    const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    return res.json(list);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}

// READ ONE
async function getProject(req, res) {
  try {
    const id = req.params.id;
    const doc = await db.collection(collectionName).doc(id).get();
    if (!doc.exists) return res.status(404).json({ error: "Not found" });
    return res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}

// UPDATE (requires auth)
async function updateProject(req, res) {
  try {
    const id = req.params.id;
    const updates = req.body;
    await db.collection(collectionName).doc(id).update({
      ...updates,
      updatedAt: FieldValue.serverTimestamp()
    });
    return res.json({ message: "Updated" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}

// DELETE (requires auth)
async function deleteProject(req, res) {
  try {
    const id = req.params.id;
    await db.collection(collectionName).doc(id).delete();
    return res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject
};
