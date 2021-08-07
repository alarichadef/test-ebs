const { expect } = require('chai');
const fixtures = require('../fixtures');
const models = require('../../models');

describe('Models - User', () => {
    fixtures.db.clear();
    const User = models.MyUser;
    let user = null;

    beforeEach((done) => {
        const u = new User({
            first_name: 'Alaric',
            createdAt: new Date(),
            updatedAt: new Date()
        });

        u.save()
            .then((u) => {
                user = u;
                done();
            })
            .catch((e) => done(e));
    });

    it('Should create a user', (done) => {
        User.findByPk(user.id)
            .then((u) => {
                expect(u.first_name).to.be.eql('Alaric');
                done();
            })
            .catch((e) => {
                done(e);
            });
    });
});
