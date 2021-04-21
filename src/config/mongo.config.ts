import { AppConfig } from './app.config'
import mongoose from 'mongoose'
import { Logger } from '../util/logging/logger'

const logger = new Logger('mongo.config')

mongoose
  .connect(`mongodb+srv://${AppConfig.DB_USER}:${AppConfig.DB_PASS}@${AppConfig.DB_HOST}/${AppConfig.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => logger.info('Connection to Mongo opened...'))
  .catch((err: any) => logger.error(err))

export const db = mongoose.connection
