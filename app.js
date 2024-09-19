const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PatientPortal = require('./patientPortal');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/start', (req, res) => {
    const portal = new PatientPortal();
    portal.isNewPatient = req.body.isNewPatient;
    portal.appointmentAvailable = req.body.appointmentAvailable;
    portal.start();
    res.send('Process started');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
