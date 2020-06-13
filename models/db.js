const c = console.log,
  mongoose = require('mongoose'),
  config = require('../config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .set('useFindAndModify', false)

      .connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() =>
        c(`Conexión exitosa al servidor de MongoDB: ${process.env.URL_DB}`)
      )
      .catch((err) => c(`Error de conexión al servidor de DB: ${err.message}`));
  }
}

module.exports = new Database();
