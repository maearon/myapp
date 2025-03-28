const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Server 1 (Port 5001)');
});

app.listen(5001, () => {
    console.log('Server 1 is running on port 5001');
});
