const User = require("../models/user");

const findById = async (id) => User.findById(id);

const findByUsername = async (username) => User.findOne({ username });

const createUser = async (data) => User.create(data);

module.exports = {
  findById,
  findByUsername,
  createUser,
};
