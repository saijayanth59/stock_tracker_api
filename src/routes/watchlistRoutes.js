const express = require("express");
const watchlistController = require("../controllers/watchlistController");
const { authenticate } = require("../middlewares/authenticate");

const router = express.Router();

router.get("/", authenticate, watchlistController.getAllWatchlists);
router.post("/", authenticate, watchlistController.createWatchlist);

router.get("/user", authenticate, watchlistController.getWatchlistsByUserId);

router.delete(
  "/:watchlistId",
  authenticate,
  watchlistController.deleteWatchlistById
);

module.exports = router;
