const express = require('express');
const conn = require('./db/conn');

// const router  = express.Router();


// Testing conn
conn.authenticate().then(() => {
    console.log('Connection successful!');
}).catch((err) => {
    console.error('Unable to connect!', err);
});

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("client/build"));


app.get('/', (req, res) => {
    res.sendFile(__dirname, "/client/build/index");
});


app.get('/api/bmiScale', (req, res) => {
    conn.query('SELECT * FROM bmi_scale', { type: conn.QueryTypes.SELECT}).then((resp) => {
        res.send(resp);
        // res.json(resp);
    });
});

app.get('/api/bmiRiskFactors', (req, res) => {
    const scaleId = req.query && req.query.scaleId;
    if (scaleId) {
        conn.query('SELECT * FROM risk_factors JOIN scale_risks ON risk_factors.id = scale_risks.riskId WHERE scale_risks.scaleId = ' + scaleId, { type: conn.QueryTypes.SELECT}).then((resp) => {
            res.send(resp);
        });
    }
});


app.listen(port, () => console.log(`Listening on port ${port}`));
