// packages that need to be required beforehand
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport') // middleware for authentication
const session = require('express-session') // sessions to stay logged in
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos') // requires todos file from the routes folder

require('dotenv').config({path: './config/.env'}) // connect to env file in the config folder

// Passport config
require('./config/passport')(passport) // connect to passport file in the config folder

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions - keep us logged in between pages
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes) // request from main route
app.use('/todos', todoRoutes) // hear request from todos route (after logging in)? use the todoRoutes
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    