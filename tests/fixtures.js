const db = require('../models');

const fixtures = {
    db: {
        clear: () => {
            beforeEach((done) => {
                db.sequelize
                    .truncate({ cascade: true })
                    .then(() => done())
                    .catch((e) => done(e));
            });
        }
    }
};

module.exports = fixtures;
