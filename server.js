const epxress = require('epxress');
const app = epxress();
const cors = require('cors')

app.get('/sum', (req, res) => {
    res.send("Sum server");
} )