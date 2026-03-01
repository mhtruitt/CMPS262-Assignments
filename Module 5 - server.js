consrequire('dotenv').config();

const express = require('express');

const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Test Connection
pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL database');
        client.release();
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL database:', err);
    });

// Route to retrieve all records from "videogames" table
app.get('/videogames', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM videogames');
        res.json(result.rows);
    } catch (err) {
        console.error('Error retrieving videogames:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.json({message:'API is running!'});
});


get PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
