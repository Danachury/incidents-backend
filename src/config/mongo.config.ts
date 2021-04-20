const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://incuser:5MLlFPmeP5zoZ3VK@incidents.oek60.mongodb.net/poc?retryWrites=true&w=majority', {
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