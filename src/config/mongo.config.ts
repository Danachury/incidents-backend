const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://incuser:incuser-2020!*@incidents.oek60.mongodb.net/poc?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to DB'))
  .catch((err: any) => console.error(err))

export const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected!!!')
})
