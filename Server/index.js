'use strict';
const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const SECRET = process.env.SECRET || 'open sesame';
const PORT = 4000;
const router = require('./router');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const app = Express();

//MIDDLEWARE
app.use(cors(corsConfig));
app.use(morgan('short')); //Logger with short msgs
app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1day
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);
app.use(Express.urlencoded({ limit: '50mb', extended: true }));
app.use(Express.json({ limit: '50mb' })); //parse the req into json
app.use(router);

app.listen(PORT, () => {
  console.log(
    `🚀🚀🚀 => Server up and listening on http://localhost:${PORT} <= 🚀🚀🚀`
  );
});
