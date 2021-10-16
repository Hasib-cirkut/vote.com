const UserModel = require('../Models/User')

async function checkExistingUser(req, res, next) {
    const {
        username,
        email,
        password,
        displayName,
        type
    } = req.body;

    let user = new UserModel({
        username,
        email,
        password,
        displayName,
        type
    });

    user.save(function (err) {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                return res.status(500).send({
                    succes: false,
                    message: 'User already exist!'
                });
            }

            // Some other error
            return res.status(500).send(err);
        } else {
            res.locals = user
            next()
        }

    });

}

module.exports = checkExistingUser