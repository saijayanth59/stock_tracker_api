const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    change: { type: Number, default: 0 },
    percentageChange: { type: Number, default: 0 },
    prevClose: { type: Number, required: true },
    quantity: { type: Number, required: true },
    exitPrice: { type: Number },
    type: { type: String, enum: ["buy", "sell"], required: true },
    target: { type: Number },
    stoploss: { type: Number },
    timeframe: { type: String, required: true },
    status: {
      type: String,
      enum: [
        "active",
        "exited",
        "target achieved",
        "stoploss hit",
        "validity over",
      ],
      default: "active",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
