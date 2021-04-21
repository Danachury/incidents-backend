import { AppConfig } from './config/app.config'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import Routes from './routes/routes'

import('./config/mongo.config')

const App = express()

App.use(morgan(AppConfig.LOGGER_FORMAT))
App.use(express.json())
App.use(express.urlencoded({ extended: false }))
App.use(cookieParser())

App.use(Routes)

export default App
