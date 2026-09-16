import express from "express";
import "dotenv/config";

const app = express();

const notes = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Finish the deployment tutorial" },
  { id: 3, text: "Water the plants" },
  { id: 4, text: "Read a book" },
];

app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port ${port}`);
});