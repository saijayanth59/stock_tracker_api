const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/serverConfig");
const connectDB = require("./config/database");
const apiRoutes = require("./routes/index");

const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Stock Tracker API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f4f4f9;
          color: #333;
        }
        .container {
          text-align: center;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        a {
          text-decoration: none;
          color: #007BFF;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to the Stock Tracker API</h1>
        <p>Explore the API for tracking your stock portfolio and manage your investments efficiently.</p>
        <p>Check out our frontend application: <a href="https://stockmarket-portfolio-tracker-7zmr.vercel.app/" target="_blank">Stock Tracker Frontend</a></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, async () => {
  console.log(`Server started at ${PORT}`);
  connectDB();
});
