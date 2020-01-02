require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      authCtrl = require('./controllers/authController'),
    //   eventCtrl = require('./eventController'),
    //   journalCtrl = require('./journalController'),
      userCtrl = require('./controllers/userController'),
      session = require('express-session'),
      {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge:1000*60*60*24}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('db connected')
})

//endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)

app.get('/api/user', userCtrl.getUser)
app.put('/api/user/:id', userCtrl.update)


const port = SERVER_PORT
app.listen(port,()=> console.log(`server on ${port}`))
