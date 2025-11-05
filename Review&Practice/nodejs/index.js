const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('test');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log('server listening on port 3000');
})