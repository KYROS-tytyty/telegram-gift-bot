const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/process-gift', (req, res) => {
    console.log('🎁 Получен подарок:', req.body);
    res.json({status: 'success'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});
