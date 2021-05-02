import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import Routes from './routes/routes'

import { Mongo } from './config/mongo.config'

Mongo.connect()
const App = express()

App.use(morgan('dev'))
App.use(express.json())
App.use(express.urlencoded({ extended: false }))
App.use(cookieParser())

App.use(Routes)

export default App
