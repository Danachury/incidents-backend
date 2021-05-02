import { AppConfig } from './app.config'
import mongoose from 'mongoose'
import { Logger } from '../util/logging/logger'

const logger = new Logger('mongo.config')

export class Mongo {

  private static USER = AppConfig.DB_USER
  private static PASS = AppConfig.DB_PASS
  private static HOST = AppConfig.DB_HOST
  private static DBNAME = AppConfig.DB_NAME

  static connect(): void {
    mongoose
      .connect(this.uri(), {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => logger.info(`Connected to Mongo, Url: ${this.HOST}`))
      .catch((err: any) => logger.error(err))
  }

  static close(force: boolean = true): void {
    mongoose.connection.close(force, err => {
      logger.error('Cannot close Mongo connection', err)
    })
  }

  private static uri(): string {
    const params = 'retryWrites=true&w=majority'
    return `mongodb+srv://${this.USER}:${this.PASS}@${this.HOST}/${this.DBNAME}?${params}`
  }
}
