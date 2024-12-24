const watchlist = require("../models/watchlist");

const getAllWatchlists = () => {
  return watchlist.find();
};

const getWatchlistsByUserId = (userId) => {
  return watchlist.find({ user: userId });
};

const deleteWatchlistBySymbol = async (symbol) => {
  try {
    const result = await watchlist.findOneAndDelete({ symbol });
    return result;
  } catch (error) {
    console.error("Error deleting watchlist item:", error);
    throw error;
  }
};

async function createWatchlist(watchlistData) {
  return await watchlist.create(watchlistData);
}

module.exports = {
  getAllWatchlists,
  getWatchlistsByUserId,
  deleteWatchlistBySymbol,
  createWatchlist,
};
