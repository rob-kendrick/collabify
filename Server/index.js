'use strict';
const Express = require('express');
const morgan = require('morgan');
const router = require('./router');
const cors = require('cors');
const PORT = 4000;

const app = Express();

//MIDDLEWARE
app.use(cors());
app.use(morgan('short')); //Logger with short msgs
app.use(Express.urlencoded({ limit: '50mb', extended: true }));
app.use(Express.json({ limit: '50mb' })); //parse the req into json
app.use(router);

app.listen(PORT, () => {
  console.log(
    `🚀🚀🚀 => Server up and listening on http://localhost:${PORT} <= 🚀🚀🚀`
  );
});
