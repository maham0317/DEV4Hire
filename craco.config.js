const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};
