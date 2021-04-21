import { AppConfig } from './app.config'

const mongoose = require('mongoose')

mongoose
  .connect(`mongodb+srv://${AppConfig.DB_USER}:${AppConfig.DB_PASS}@${AppConfig.DB_HOST}/${AppConfig.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to database...'))
  .catch((err: any) => console.error(err))

export const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connection opened...')
})
