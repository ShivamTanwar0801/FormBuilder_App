const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["categorize", "cloze", "comprehension"],
    required: true,
  },
  questionText: String,
  questionImage: String, // URL
  options: {
    type: [mongoose.Schema.Types.Mixed], // flexible array of objects or strings
    default: [],
  }, // For categorize or comprehension options (images)
  categories: [String],
  underlinedWords: [
    {
      key: String,
      word: String,
    },
  ], // For cloze questions to save blanks
  // **Add passageTitle and passage for comprehension questions:**
  passageTitle: String,
  passage: String,
  metadata: mongoose.Schema.Types.Mixed,
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: String,
  questions: [QuestionSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Form", FormSchema);
