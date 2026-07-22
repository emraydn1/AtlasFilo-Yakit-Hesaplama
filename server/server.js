const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());

app.get("/fuel-prices", (req, res) => {
  try {
    const fuel = JSON.parse(
      fs.readFileSync(path.join(__dirname, "fuel.json"), "utf8")
    );

    res.json({
      success: true,
      updatedAt: fuel.updatedAt,
      prices: {
        motorin: fuel.diesel,
        benzin: fuel.gasoline,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    server: "AtlasFilo API",
    version: "3.0.0",
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("🚀 AtlasFilo API çalışıyor");
});

