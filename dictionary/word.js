const db = require('./db');

async function getDefinition(term) {
    return await db.query(`SELECT * FROM ENTRIES WHERE ENTRIES.word = '${term}'`);
}

module.exports = {
    getDefinition
}