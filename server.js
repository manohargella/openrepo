const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Use the port assigned by Hostinger or default to 3000

app.use(cors()); // Enable CORS middleware

app.get('/sum', (req, res) => {
    res.send("Sum server");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
