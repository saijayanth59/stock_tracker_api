const { default: mongoose } = require("mongoose");
const order = require("../models/order");

class OrderRepository {
  async createOrder(orderData) {
    return await order.create(orderData);
  }

  async getOrders(filter = {}) {
    return await order.find(filter);
  }

  async getOrderById(orderId) {
    return await order.findById(orderId).sort({ createdAt: -1 });
  }

  async updateOrder(orderId, updateData) {
    return await order.findByIdAndUpdate(orderId, updateData, { new: true });
  }

  async deleteOrder(orderId) {
    return await order.findByIdAndDelete(orderId);
  }
}

module.exports = new OrderRepository();
