// --- existing imports ---
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// --- initialize express app ---
const app = express();

// --- middleware ---
app.use(cors());
app.use(express.json());

// --- database connection ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// --- routes ---
app.get('/', (req, res) => {
  res.send('API is running');
});

// ✅ Import and use contactRoutes here
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// --- start the server ---
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
