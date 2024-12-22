const watchlistService = require("../services/watchlistService");

const getAllWatchlists = async (req, res) => {
  try {
    const watchlists = await watchlistService.getAllWatchlists();
    res.status(200).json(watchlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWatchlistsByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const watchlists = await watchlistService.getWatchlistsByUserId(userId);
    res.status(200).json(watchlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWatchlistById = async (req, res) => {
  try {
    const { watchlistId } = req.params;
    await watchlistService.deleteWatchlistById(watchlistId);
    res.status(200).json({ message: "Watchlist deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function createWatchlist(req, res) {
  try {
    const userId = req.user.id;
    const watchlistData = { ...req.body, user: userId };
    const watchlist = await watchlistService.createWatchlist(watchlistData);
    res.status(201).json(watchlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllWatchlists,
  getWatchlistsByUserId,
  deleteWatchlistById,
  createWatchlist,
};
