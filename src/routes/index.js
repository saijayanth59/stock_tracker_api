const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const watchlistRoutes = require("./watchlistRoutes");

router.use("/user", userRoutes);
router.use("/order", orderRoutes);
router.use("/watchlist", watchlistRoutes);

module.exports = router;
