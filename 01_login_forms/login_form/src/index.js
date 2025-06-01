const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'react',
  password: '',
  port: 5432,
});

app.post('/api/auth', async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists (for login)
  try {
    const result = await pool.query(
      'SELECT * FROM login_users WHERE username = $1',
      [username]
    );

    if (result.rows.length > 0) {
      // For login: compare password (hashing recommended for production)
      if (result.rows[0].password === password) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Incorrect password' });
      }
    } else {
      // For register: insert new user
      await pool.query(
        'INSERT INTO login_users (username, password) VALUES ($1, $2)',
        [username, password]
      );
      res.json({ message: 'Registration successful' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});