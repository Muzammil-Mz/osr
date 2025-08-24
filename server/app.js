import express from "express";
import path from "path"; // new line
import { fileURLToPath } from "url"; // new line

const __filename = fileURLToPath(import.meta.url); // new line
const __dirname = path.dirname(__filename); // new line

const app = express();
const port = 5020;

app.use(express.static(path.join(__dirname, "build"))); // new line

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.use((req, res) => {
  res.status(404).json({ msg: "Invalid route" });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
