const express = require('express');
const router = express.Router();
const ResponseModel = require('../models/Response');

router.post('/', async (req, res) => {
  try {
    const resp = new ResponseModel(req.body);
    await resp.save();
    res.status(201).json(resp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:formId', async (req, res) => {
  try {
    const list = await ResponseModel.find({ formId: req.params.formId }).sort({ submittedAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
