const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'Admin',
    host: 'localhost',
    database: 'empresa',
    password: 'Wertu1234',
    port: 5432,
});

app.get('/empleados', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM empleados');
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Error al obtener datos');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});