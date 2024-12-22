const express = require("express");
const orderController = require("../controllers/orderController");
const { authenticate } = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, orderController.createOrder);
router.get("/", authenticate, orderController.getOrders);
router.get("/user", authenticate, orderController.getOrdersByUserId);
router.get("/:id", authenticate, orderController.getOrderById);
router.put("/:id", authenticate, orderController.updateOrder);
router.delete("/:id", authenticate, orderController.deleteOrder);

module.exports = router;
