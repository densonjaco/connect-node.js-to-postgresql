const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "postgres2021",
    host: "database-1.cfskqn27qbtw.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "postgres"
})

client.connect()
.then(() => console.log("connected successfully"))
.catch(e => console.log(e))
.finally(() => client.end())