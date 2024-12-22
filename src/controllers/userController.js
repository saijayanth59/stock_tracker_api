const userService = require("../services/userService");
const sendResponse = require("../utils/responseHandler");

const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    sendResponse(res, 201, "User registered successfully", { user });
  } catch (err) {
    sendResponse(res, 400, "Registration failed", null, err.message);
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await userService.login(req.body);
    sendResponse(res, 200, "Login successful", { user, token });
  } catch (err) {
    sendResponse(res, 400, "Login failed", null, err.message);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return sendResponse(res, 404, "User not found");
    }
    sendResponse(res, 200, "User retrieved successfully", { user });
  } catch (err) {
    sendResponse(res, 400, "Error retrieving user", null, err.message);
  }
};

module.exports = { register, login, getUser };
