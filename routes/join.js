import express from "express";
import Join from "../models/Join.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const submission = new Join(req.body);
    await submission.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

export default router;
