const express = require("express");
const router = express.Router();
const Form = require("../models/Form");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 }); // newest first
    res.json(forms);
  } catch (err) {
    console.error("Error fetching forms:", err);
    res.status(500).json({ error: "Server error fetching forms" });
  }
});

// Create form (simple - accepts JSON; images should be uploaded separately in production)
router.post("/", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get form by ID
router.get("/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: "Form not found" });
    res.json(form);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update form
router.put("/:id", async (req, res) => {
  try {
    const updated = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
