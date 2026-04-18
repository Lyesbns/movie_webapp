import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;
const API_KEY = process.env.TMDB_KEY;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Movies route
app.get("/movies", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

//tv shows route
app.get("/movies", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.get("/search", async (req, res) => {
  const query = req.query.q;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
