import express from "express";
import "dotenv/config";

const port = process.env.PORT || 8080;
const app = express();

const notes = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Finish the deployment tutorial" },
  { id: 3, text: "Water the plants" },
  { id: 4, text: "Read a book" },
];

//app.get("/", (req, res) => {
//  res.send("Hello from Express!");
//});

app.use(express.static("public"));

app.get("/api/notes", (_req, res) => {
  res.json(notes);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

//app.listen(8000, () => {
  //console.log("Listening on http://localhost:8000");
//});