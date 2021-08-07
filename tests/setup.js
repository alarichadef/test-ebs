const db = require('../models');

// Connect to DB and clear everything
before((done) => {
    db.sequelize
        .truncate({ cascade: true })
        .then(() => done())
        .catch((e) => done(e));
});

// Clear DB after running tests
after((done) => {
    db.sequelize
        .close()
        .then(() => done())
        .catch((e) => done(e));
});
