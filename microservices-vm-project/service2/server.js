const express = require('express');

const app = express();

app.get('/data', (req, res) => {
    res.json({
        service: "B",
        message: "Hello from Service 2",
        time: new Date()
    });
});

app.listen(4000, '0.0.0.0', () =>
    console.log('Service <2> running on port 4000')
);
