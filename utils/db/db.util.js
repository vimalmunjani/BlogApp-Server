const mongoose =  require('mongoose');
const config =  require('../../config/config');

const connection = mongoose.connect(
    config.database.uri,
    {
        autoIndex: true,
		reconnectTries: Number.MAX_VALUE,
		reconnectInterval: 500,
		poolSize: 50,
		bufferMaxEntries: 0,
        keepAlive: 120,
        useNewUrlParser: true
    }
);

connection.then(db => {
    console.log('connected successfully');
    return db;
})
.catch(err => {
    if (err.message.code === 'ETIMEDOUT') {
        console.log('Attempting to re-establish database connection.');
        mongoose.connect(config.database.uri);
    } else {
        console.log('Error while attempting to connect to database:', { err });
    }
});

module.exports = connection;