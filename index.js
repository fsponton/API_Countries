//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const http = require('http')

const serverAPP = http.createServer(server)


const PORT = process.env.PORT || 3000

// Syncing all the models at once.
// conn.sync(/*{ force: true }*/).then(() => {
//   server.listen(3002, () => {
//     console.log('%s listening at 3002'); // eslint-disable-line no-console
//   });
// });


conn.sync(/*{ force: true }*/).then(() => {
  serverAPP.listen(PORT, () => {
    console.log(`Server listening on ${PORT} `); // eslint-disable-line no-console
  });
});
