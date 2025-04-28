// server/controllers/bookingController.js
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { customerId, workerId, serviceDate } = req.body;
  try {
    const booking = new Booking({ customerId, workerId, serviceDate });
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBookingsByCustomer = async (req, res) => {
  try {
    const bookings = await Booking.find({ customerId: req.params.customerId }).populate('workerId');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};