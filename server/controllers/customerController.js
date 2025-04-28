// server/controllers/customerController.js
const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');

exports.registerCustomer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = new Customer({ name, email, password: hashedPassword });
    const savedCustomer = await customer.save();
    res.status(201).json({ message: 'Customer registered', customer: savedCustomer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });
    if (!customer || !(await bcrypt.compare(password, customer.password)))
      return res.status(401).json({ message: 'Invalid credentials' });

    // In a real app, generate a JWT token here
    res.status(200).json({ message: 'Login successful', customer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};