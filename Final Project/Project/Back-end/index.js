let express = require('express');

let middlewares = require('./Middleware/middleware-one');

let login = require('./Apps/login-back-end');
let register = require('./Apps/register-back-end');
let app = express();



middlewares(app);

login(app);
register(app);

app.listen(3000, () => {
  console.log('Server is running on port: 3000');
});
