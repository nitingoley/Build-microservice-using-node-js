const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async () => {
    if (!DB_URL) {
        console.error("DB_URL is not defined. Please check your configuration.");
        process.exit(1);
    }

    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Connected');
    } catch (error) {
        console.log('Error ============');
        console.log(error);
        process.exit(1);
    }
};
