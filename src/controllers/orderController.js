const orderService = require("../services/orderService");

class OrderController {
  async createOrder(req, res) {
    try {
      const order = await orderService.createOrder({
        ...req.body,
        userId: req.user.id,
      });
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await orderService.getOrders(req.query);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOrdersByUserId(req, res) {
    try {
      const filters = { ...req.query, userId: req.user.id };
      const orders = await orderService.getOrdersByUserId(filters);

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const updatedOrder = await orderService.updateOrder(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      await orderService.deleteOrder(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new OrderController();
