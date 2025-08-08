require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const formsRouter = require("./routes/forms");
const responsesRouter = require("./routes/responses");
const uploadRouter = require("./routes/uploads.js");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

app.use("/api/forms", formsRouter);
app.use("/api/responses", responsesRouter);
app.use("/api/upload", uploadRouter);

app.get("/", (req, res) => res.send("Form Builder API is running"));

app.listen(PORT, () => console.log("Server running on port", PORT));
