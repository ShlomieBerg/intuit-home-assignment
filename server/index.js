const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(function (req, res, next) { setTimeout(next, 1000) });

// Simple get request to return tax refund data
app.get("/tax-refund-machine", (request, response) =>
{
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify({
        "id": "taxMachine",
        "initialState": "1",
        "transitions": { "1": { "next": "2" }, "2": { "next": "3", "prev": "1" }, "3": { "prev": "2" } },
    }));
});


app.get("/dark-mode-machine", (request, response) =>
{
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify({
        "id": "darkModeMachine",
        "initialState": "light",
        "transitions": { "light": { "toggle": "dark" }, "dark": { "toggle": "light" } },
    }));
});


app.listen(PORT, () =>
{
    console.log(`Listening on port ${ PORT }...`);
});