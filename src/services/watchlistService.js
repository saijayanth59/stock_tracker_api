const watchlistRepository = require("../repositories/watchlistRepository");

const getAllWatchlists = async () => {
  try {
    return await watchlistRepository.getAllWatchlists();
  } catch (error) {
    throw new Error("Error fetching watchlists: " + error.message);
  }
};

const getWatchlistsByUserId = async (userId) => {
  try {
    return await watchlistRepository.getWatchlistsByUserId(userId);
  } catch (error) {
    throw new Error("Error fetching watchlists for user: " + error.message);
  }
};

const deleteWatchlistById = async (watchlistId) => {
  try {
    return await watchlistRepository.deleteWatchlistById(watchlistId);
  } catch (error) {
    throw new Error("Error deleting watchlist: " + error.message);
  }
};

async function createWatchlist(watchlistData) {
  return await watchlistRepository.createWatchlist(watchlistData);
}

module.exports = {
  getAllWatchlists,
  getWatchlistsByUserId,
  deleteWatchlistById,
  createWatchlist,
};
