const express = require('express');
const { Pool } = require('pg'); // Import the Pool from the 'pg' library
const path = require('path');

const app = express();
const port = 3000;

// --- Middleware ---
app.use(express.json()); // To parse JSON request bodies
app.use(express.static(path.join(__dirname, '/'))); // Serve static files (like login.html)

// --- PostgreSQL Connection Configuration ---
// !!! IMPORTANT: Replace with your actual database credentials !!!
const pool = new Pool({
    user: 'postgres', // Your PostgreSQL username for the database
    host: 'localhost',
    database: 'test', // The database name you specified
    password: '1234', // Your database password
    port: 5432,
});

// --- Route for Login and DB Test ---
app.post('/login-test-db', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }

    let client; // Declare client outside try block to access in finally

    try {
        // 1. Establish a connection to the database
        client = await pool.connect();
        console.log('Connected to PostgreSQL database.');

        // 2. Check if the provided username exists in the test_table
        const userQuery = 'SELECT id, username, password FROM test_table WHERE username = $1';
        const userResult = await client.query(userQuery, [username]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid username or password.' });
        }

        const storedUser = userResult.rows[0];

        // 3. Compare the provided password with the stored hash
        // IMPORTANT: You MUST hash the incoming password before comparing it with the stored hash.
        // For this example, we'll assume the password stored is NOT a hash and compare directly,
        // but in a real application, you would do:
        // const match = await bcrypt.compare(password, storedUser.password_hash);
        // For demonstration, we'll simulate a direct comparison.
        // !!! Replace this with proper password hashing and comparison in production !!!
        const isPasswordMatch = password === storedUser.password; // THIS IS INSECURE FOR REAL APPLICATIONS!

        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, message: 'Invalid username or password.' });
        }

        // 4. If login is successful, test reading from the table
        const testTableQuery = 'SELECT id, username FROM test_table LIMIT 5';
        const tableResult = await client.query(testTableQuery);

        // 5. Send a success response with table data
        res.json({
            success: true,
            message: 'Login successful and database table tested.',
            tableName: 'test_table',
            rowCount: tableResult.rowCount,
            sampleData: tableResult.rows,
        });

    } catch (err) {
        console.error('Database operation error:', err);
        res.status(500).json({
            success: false,
            message: `Database error: ${err.message}`
        });
    } finally {
        // Always release the client back to the pool, whether success or error
        if (client) {
            client.release();
            console.log('PostgreSQL client released.');
        }
    }
});

// --- Start the server ---
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Open http://localhost:${port}/login.html in your browser to test.`);
});

// --- Optional: Handle graceful shutdown ---
process.on('SIGINT', async () => {
    console.log('Shutting down server...');
    await pool.end(); // Close all connections in the pool
    console.log('Database pool closed.');
    process.exit(0);
});