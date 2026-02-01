const express = require('express');
const axios = require('axios');

const app = express();

const SERVICE_B_URL = "http://192.168.56.102:4000/data";

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(SERVICE_B_URL);

        res.json({
            service: "A",
            message: "Hello from Service A",
            responseFromServiceB: response.data
        });

    } catch (error) {
        res.status(500).json({
            error: "Cannot connect to Service <2>",
            details: error.message
        });
    }
});

app.listen(3000, '0.0.0.0', () =>
    console.log('Service <1> running on port 3000')
);
