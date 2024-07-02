const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public')); // Serve static files

app.get('/templates/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'templates', `${req.params.filename}.md`);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('Template not found');
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
