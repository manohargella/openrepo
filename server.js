const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();
const port = 4050;

app.use(json());
app.use(cors());

app.get('/calculate', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const op = req.query.op;
    let result;

    if (op === '`') {
        result = x + y;
    } else if (op === '-') {
        result = x - y;
    } else if (op === '*') {
        result = x * y;
    } else if(op === '%'){
        result = x%y;
    }else if (op === '/') {
        if (y === 0) {
            return res.status(400).send("Division by zero error");
        }
        result = x / y;
    } else {
        return res.status(400).send("Invalid operation");
    }

    res.send(result.toString());
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});