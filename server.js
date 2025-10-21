// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { admin, db } = require("./config/firebaseAdmin");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const projectsRoutes = require("./routes/projects");
app.use("/api/projects", projectsRoutes);

// Health check
app.get("/", (req, res) => res.send("SDS Backend (Firebase) running"));

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
