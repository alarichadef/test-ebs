var express = require('express');
const models = require("./models");

const app = express();

const { PORT = 1234 } = process.env;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        // Sentry.captureException(err);
        process.exit(1);
    }

    return console.log(`Server listening on ${PORT}`);
});

app.get("/s", function(req, res) {
    console.warn('db =>', models.MyUser);
    models.MyUser.findAll()
        .then( persons => {
            res.status(200).send(JSON.stringify(persons));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});
