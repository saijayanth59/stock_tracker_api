const watchlist = require("../models/watchlist");

const getAllWatchlists = () => {
  return watchlist.find();
};

const getWatchlistsByUserId = (userId) => {
  return watchlist.find({ user: userId });
};

const deleteWatchlistById = (watchlistId) => {
  return watchlist.findByIdAndDelete(watchlistId);
};

async function createWatchlist(watchlistData) {
  return await watchlist.create(watchlistData);
}

module.exports = {
  getAllWatchlists,
  getWatchlistsByUserId,
  deleteWatchlistById,
  createWatchlist,
};
