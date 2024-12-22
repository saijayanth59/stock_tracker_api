const orderRepository = require("../repositories/orderRepository");

class OrderService {
  async createOrder(orderData) {
    return await orderRepository.createOrder(orderData);
  }

  async getOrders(filter) {
    return await orderRepository.getOrders(filter);
  }

  async getOrderById(orderId) {
    const order = await orderRepository.getOrderById(orderId);
    if (!order) throw new Error("Order not found");
    return order;
  }

  async getOrdersByUserId(filters) {
    return await orderRepository.getOrders(filters);
  }

  async updateOrder(orderId, updateData) {
    return await orderRepository.updateOrder(orderId, updateData);
  }

  async deleteOrder(orderId) {
    return await orderRepository.deleteOrder(orderId);
  }
}

module.exports = new OrderService();
