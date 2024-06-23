const dotenv = require('dotenv');
const path = require('path');

// Determine which environment file to load
const env = process.env.NODE_ENV || 'dev'; // default to 'development' if NODE_ENV is not set
const configFile = path.resolve(__dirname, `../../.env.${env}`); // Corrected the path

console.log(`Loading environment variables from ${configFile}`);

// Load the environment variables from the specified file
dotenv.config({ path: configFile });

// Log the loaded environment variables for debugging purposes
console.log('Loaded Environment Variables:', {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
});

// Export the loaded environment variables
module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
};
