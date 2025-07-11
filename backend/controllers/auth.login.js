const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/UserModel");
require('dotenv').config();


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).json({ accessToken: null, message: "Invalid Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      algorithm: "HS256",
      expiresIn: 86400, // 24 hours
    });

    const userData = { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role, automata: user.automata, createdAt: user.createdAt, accessToken: token, };
    return res.status(200).json({
      message: "User Successfully Logged in...",
      userData
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An error occurred during login" });
  }
};
