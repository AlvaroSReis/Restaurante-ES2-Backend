/*const express = require('express');
const app = express();
const PORT = 8080



app.listen(
    PORT,
    () => console.log(`it´s alive on http://localhost:${PORT}`)

)
*/
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres"
})

module.exports = client