const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");
const { JWT_SECRET_KEY } = require("../config/serverConfig");

const register = async ({ username, password, email }) => {
  const existingUser = await userRepository.findByUsername(username);
  if (existingUser) throw new Error("Username already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepository.createUser({
    username,
    password: hashedPassword,
    email,
  });
};

const login = async ({ username, password }) => {
  const user = await userRepository.findByUsername(username);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");
  console.log(JWT_SECRET_KEY);
  const token = generateToken(user._id);
  return { user, token };
};

const getUserById = async (id) => userRepository.findById(id);

const generateToken = (userId) =>
  jwt.sign({ id: userId }, JWT_SECRET_KEY, { expiresIn: "24h" });

module.exports = { register, login, getUserById };
