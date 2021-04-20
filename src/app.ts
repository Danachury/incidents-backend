import express from 'express'
import { AppConfig } from './config/app.config'
import Routes from './routes/routes'

const logger = require('morgan')
const cookieParser = require('cookie-parser')
require('./config/mongo.config')

const App = express()

App.use(logger(AppConfig.APP_LOG_FORMAT))
App.use(express.json())
App.use(express.urlencoded({ extended: false }))
App.use(cookieParser())

App.use(Routes)

export default App
