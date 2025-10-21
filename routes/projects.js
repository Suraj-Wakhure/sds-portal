// routes/projects.js
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/projectsController");
const { verifyFirebaseToken } = require("../middleware/authMiddleware");

// Public read
router.get("/", ctrl.getAllProjects);
router.get("/:id", ctrl.getProject);

// Protected (admins) - create/update/delete
router.post("/", verifyFirebaseToken, ctrl.createProject);
router.put("/:id", verifyFirebaseToken, ctrl.updateProject);
router.delete("/:id", verifyFirebaseToken, ctrl.deleteProject);

module.exports = router;
