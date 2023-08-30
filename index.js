
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const http = require('http')

const serverAPP = http.createServer(server)

const PORT = process.env.PORT || 3000

conn.sync(/*{ force: true }*/).then(() => {
  serverAPP.listen(PORT, () => {
    console.log(`Server listening on ${PORT} `); 
  });
});
