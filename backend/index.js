require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rlss', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String, // hashed
  isAdmin: { type: Boolean, default: false },
});
const User = mongoose.model('User', userSchema);

// Service schema
const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  details: [String],
});
const Service = mongoose.model('Service', serviceSchema);

// Contact message schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model('Contact', contactSchema);

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Auth middleware
function auth(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Register (for setup only)
app.post('/api/register', async (req, res) => {
  const { username, password, isAdmin } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash, isAdmin });
  await user.save();
  res.json({ message: 'User registered' });
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, username: user.username, isAdmin: user.isAdmin }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.json({ token, user: { username: user.username, isAdmin: user.isAdmin } });
});

// Get all services
app.get('/api/services', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// Add a service (admin only)
app.post('/api/services', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const service = new Service(req.body);
  await service.save();
  res.json(service);
});

// Get contact messages (admin only)
app.get('/api/contacts', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
});

// Delete contact message (admin only)
app.delete('/api/contacts/:id', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Forbidden' });
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Message deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete message' });
  }
});

// Get all users (admin only)
app.get('/api/users', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const users = await User.find().select('-password');
  res.json(users);
});

// Submit contact message
app.post('/api/contact', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ message: 'Message sent' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`)); 