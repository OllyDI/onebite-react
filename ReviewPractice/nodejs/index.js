const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/test', (req, res) => {
    res.send('test');
})

app.post('/api/login', (req, res) => {
    const id = req.body.id;
    const pw = req.body.password;

    console.log(id, pw);
    
    res.send('test');
})

const PORT = 15001;
app.listen(PORT, () => {
    console.log('server listening on port 15001');
})