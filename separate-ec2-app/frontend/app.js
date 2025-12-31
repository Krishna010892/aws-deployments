const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Use BACKEND ALB DNS (later update)
const BACKEND_API = "http://BACKEND-ALB-DNS/api";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(BACKEND_API);
    res.json({
      frontend: "Frontend ECS working",
      backend: response.data
    });
  } catch (err) {
    res.status(500).json({ error: "Backend not reachable" });
  }
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Frontend running on port ${PORT}`)
);

