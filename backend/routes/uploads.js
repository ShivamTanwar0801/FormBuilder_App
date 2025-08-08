const express = require("express");
const upload = require("../middleware/upload.js");

const router = express.Router();

// POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  if (!req.file || !req.file.path) {
    return res.status(400).json({ error: "No image uploaded" });
  }
  res.json({ url: req.file.path });
});

module.exports = router;
