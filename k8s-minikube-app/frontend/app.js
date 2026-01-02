const express = require("express");
const axios = require("axios");
const app = express();

const BACKEND_URL = "http://backend-service:5000/api";

app.get("/", async (req, res) => {
  const response = await axios.get(BACKEND_URL);
  res.send(`<h1>Frontend Running</h1><pre>${JSON.stringify(response.data)}</pre>`);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Frontend running on port 3000");
});
