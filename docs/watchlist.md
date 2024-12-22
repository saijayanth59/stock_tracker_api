# Order API Documentation

This document outlines the structure and functionality of the Order API implemented using Express, MongoDB, and Mongoose. Below are the details for the Watchlist feature implementation.

## Watchlist API Documentation

### Overview

The Watchlist API allows users to manage their watchlists, including creating, fetching, and deleting watchlist items. Each watchlist item is associated with a user and contains stock-related data such as current price, price change, and percentage change.

### Models

#### Watchlist Model

```javascript
const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      default: 0,
    },
    priceChange: {
      type: Number,
      default: 0,
    },
    percentChange: {
      type: Number,
      default: 0,
    },
    open: {
      type: Number,
      default: 0,
    },
    high: {
      type: Number,
      default: 0,
    },
    low: {
      type: Number,
      default: 0,
    },
    previousClosePrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Watchlist = mongoose.model("Watchlist", watchlistSchema);

module.exports = Watchlist;
```

### Endpoints

#### Base URL

```
/api/watchlists
```

#### Routes

##### Get All Watchlists

- **URL**: `/`
- **Method**: `GET`
- **Middleware**: `authenticate`
- **Description**: Fetches all watchlists.
- **Response**: Array of watchlists.

##### Create Watchlist

- **URL**: `/`
- **Method**: `POST`
- **Middleware**: `authenticate`
- **Description**: Creates a new watchlist for the authenticated user.
- **Request Body**:
  ```json
  {
    "name": "Stock Watchlist",
    "symbol": "AAPL",
    "currentPrice": 150.25,
    "priceChange": 1.75,
    "percentChange": 1.18,
    "open": 149.5,
    "high": 151.0,
    "low": 148.75,
    "previousClosePrice": 148.5
  }
  ```
- **Response**: Created watchlist object.

##### Get Watchlists By User

- **URL**: `/user`
- **Method**: `GET`
- **Middleware**: `authenticate`
- **Description**: Fetches all watchlists associated with the authenticated user.
- **Response**: Array of watchlists.

##### Delete Watchlist By ID

- **URL**: `/:watchlistId`
- **Method**: `DELETE`
- **Middleware**: `authenticate`
- **Description**: Deletes a watchlist by its ID.
- **Response**: Success message.

### Watchlist Repository

The repository handles interactions with the database.

```javascript
const Watchlist = require("../models/watchlist");

class WatchlistRepository {
  async getAllWatchlists() {
    return await Watchlist.find();
  }

  async getWatchlistsByUserId(userId) {
    return await Watchlist.find({ user: userId });
  }

  async deleteWatchlistById(watchlistId) {
    return await Watchlist.findByIdAndDelete(watchlistId);
  }

  async createWatchlist(watchlistData) {
    return await Watchlist.create(watchlistData);
  }
}

module.exports = new WatchlistRepository();
```

### Watchlist Service

The service handles business logic for watchlists.

```javascript
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
```

### Watchlist Controller

The controller handles HTTP requests for watchlists.

```javascript
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
```
