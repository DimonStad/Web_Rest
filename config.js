require('dotenv').config({ path: '.env' });
module.exports = {
    port: process.env.PORT || 27665,
    url: process.env.DBURL
}
