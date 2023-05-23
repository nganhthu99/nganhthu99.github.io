const express = require('express');
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
const cors = require('cors');
app.use(cors());
const word = require('./word');

app.get('/dictionary', async function(req, res, next) {
    try {
        res.json(await word.getDefinition(req.query.term));
    } catch (err) {
        console.error(`Error while getting definition `, err.message);
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Internal Server Error!');
})

app.listen(3000, () => {
    console.log(`Listen on port 3000...`);
})
